# VPS deployment

Live: https://shafwan.digital

- Checkout: `/var/www/personal-web`
- Compose project: `personal-web`
- Container port: `127.0.0.1:8082` (not publicly exposed)
- Host Nginx: `/etc/nginx/sites-available/shafwan.digital`
- TLS: existing Let's Encrypt certificate, managed on the host.
- Build runs `npm ci`, all tests, and production build. Runtime contains only Nginx and static output.

## Update

```powershell
ssh -i "$env:USERPROFILE\.ssh\bonjermgu-prod" -o IdentitiesOnly=yes deploy@103.89.4.104
```

On the VPS:

```sh
cd /var/www/personal-web
git pull --ff-only origin main
docker compose build
docker compose up -d --wait
docker compose ps
curl -f https://shafwan.digital/health
curl -I https://shafwan.digital/
```

No host Nginx reload is needed for content updates. Other Compose projects remain running.

## Host routing

Only the existing placeholder `location /` was replaced with:

```nginx
location / {
    proxy_pass http://127.0.0.1:8082;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

Existing `/rag-campus` and `/rag-campus/` locations remain unchanged.

## Restore the previous placeholder

The original host configuration is backed up. Restore it before stopping the portfolio container:

```sh
sudo cp /etc/nginx/sites-available/shafwan.digital.before-personal-web /etc/nginx/sites-available/shafwan.digital
sudo nginx -t && sudo systemctl reload nginx
cd /var/www/personal-web
docker compose stop web
```

## Verification (2026-10-20)

- Docker image build: 37 tests passed; Vite build passed.
- Container health: healthy; HTTPS `/health`: 200.
- Playwright: homepage, projects, case study, certifications at 1440px and 390px; images decoded; no horizontal overflow or page errors.
- Existing ragcampus, waspadai, bonjermgu domains: HTTP 200; existing containers were not restarted.
- Pre-existing `/rag-campus/api/health`: 404; `/rag-campus/`: 307. Both responses remained unchanged after deployment.
