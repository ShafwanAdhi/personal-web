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

## Content release checks and rollback

Before updating, record `git rev-parse HEAD` and the running container's image ID. Keep that image until the release is verified. After the existing update commands, check:

```sh
curl -f https://shafwan.digital/projects/waspadai/
curl -f https://shafwan.digital/reports/projects/waspadai.md
curl -I https://ragcampus.shafwan.digital/
curl -I https://waspadai.shafwan.digital/
curl -I https://bonjermgu.com/
curl -I https://siparih.shafwan.digital/
```

Compare shared-service responses with their pre-release status; do not restart their containers to update this static site. For a content rollback, use a temporary Compose override setting `services.web.image` to the saved image ID, then run this project's `docker compose -f compose.yaml -f <rollback-override> up -d --no-build --wait`. Verify `/health`, homepage, a direct case study and its report again. This restores the previous runtime image without editing source history or host Nginx. Keep any uncommitted VPS work intact.

The project content audit is documented in `docs/superpowers/verification/2026-10-21-project-content-audit.md`. Use the release checks above for both content and interface updates.

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
