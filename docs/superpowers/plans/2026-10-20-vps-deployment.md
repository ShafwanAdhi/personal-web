# VPS Deployment Implementation Plan

**Goal:** Serve the portfolio at https://shafwan.digital using Docker without interrupting other projects.
**Architecture:** Multi-stage Node build, static Nginx runtime, Compose project personal-web on loopback port 8082. Existing host Nginx proxies only the root location to this container; /rag-campus/ remains intact.
**Tech Stack:** Docker Compose, Node 24, Nginx, existing TLS certificates.

- [x] Add Dockerfile, .dockerignore, compose.yaml, deploy/nginx.conf.
- [x] Build on VPS; run existing tests during image build; verify container health and static routes.
- [x] Back up host Nginx configuration; replace placeholder location only; nginx -t before reload.
- [x] Verify HTTPS homepage, nested routes, assets, certificates, existing applications; document update and rollback commands.
- [x] Commit and push deployment configuration; ensure VPS checkout matches origin/main.
