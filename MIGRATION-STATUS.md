# Abar Vault - Migration Status

> Updated: 2026-05-21
> Status: Migration complete; canonical domain live.

## Completed Steps

### Step 1: Backup - completed by Codex

- `backup/pre-vault-20260521-200812` exists on remote.
- `backup/pre-migration-20260521` exists on remote.

### Step 2: File restructure - completed by Codex

- Moved `/vault/*` to root-level paths.
- No `/vault/` references remain in HTML/JS files.
- Main migration commits:
  - `2f54cd8 Migrate vault to clean URL structure for vault.abargonai.com`
  - `a2350a9 Cover legacy trailing slash redirects`

### Step 3: vercel.json redirects - completed by Codex

- Legacy `/vault/*` paths redirect to clean equivalents with 301.
- `/arva` redirects to `/clientes/arva` with 301.
- `/simuladores/*` redirects to `/tools/*` with 301.
- `/vault/documentos/*` redirects to `/archivo/*` with 301.

### Step 4: Commit and deploy - completed by Codex

- Migration was pushed to `main`.
- Vercel deploy is live.
- Lead materials for Juan Carlos Bautista Jacobo were added after the migration:
  - `2e87628 Add ATDT lead materials for Bautista Jacobo`

### Step 5: Rename - completed manually / confirmed by Codex

- GitHub repo was renamed:
  - from `jcariasm/simuladores-interactivos`
  - to `jcariasm/abar-vault`
- Local remote was updated by Codex:
  - `origin` now points to `https://github.com/jcariasm/abar-vault.git`
- Vercel project is expected to be `abar-vault`.

### Step 6: Connect domain - completed manually / verified by Codex

- Canonical domain:
  - `https://vault.abargonai.com`
- `https://vault.abargonai.com/` returns 200.
- DNS/SSL appear active from public request verification.

### Step 7: Redirect verification - completed by Codex

Verified on the current public deployment:

- `/vault/clientes/axelera/` -> `/clientes/axelera` -> 200
- `/vault/leads/` -> `/leads` -> 200
- `/vault/tools/` -> `/tools` -> 200
- `/vault/archivo/` -> `/archivo` -> 200
- `/vault/simuladores/` -> `/tools` -> 200
- `/vault/documentos/` -> `/archivo` -> 200
- `/arva` -> `/clientes/arva` -> 200

## Current State

| Item | Value |
|---|---|
| Canonical URL | `https://vault.abargonai.com` |
| Expected Vercel fallback URL | `https://abar-vault.vercel.app` |
| Fallback verification note | Returned 404 during Codex check; confirm in Vercel project aliases. |
| Legacy URL | `https://simuladores-interactivos.vercel.app` still returns 200 |
| GitHub repo | `https://github.com/jcariasm/abar-vault` |
| Local git remote | `https://github.com/jcariasm/abar-vault.git` |
| Branch | `main` |
| Latest functional content commit before this status file | `2e87628 Add ATDT lead materials for Bautista Jacobo` |

## Live Routes

```txt
https://vault.abargonai.com/
https://vault.abargonai.com/leads/
https://vault.abargonai.com/leads/juan-carlos-bautista-jacobo/
https://vault.abargonai.com/clientes/
https://vault.abargonai.com/clientes/axelera/
https://vault.abargonai.com/clientes/arva/
https://vault.abargonai.com/clientes/saldo/
https://vault.abargonai.com/tools/
https://vault.abargonai.com/tools/sales-pipeline/
https://vault.abargonai.com/tools/roi-marketing/
https://vault.abargonai.com/tools/sail-away/
https://vault.abargonai.com/archivo/
```

## Next Steps

1. Confirm `https://abar-vault.vercel.app` fallback alias in Vercel, because it returned 404 during Codex verification.
2. Optionally remove or keep the legacy `simuladores-interactivos.vercel.app` alias depending on whether old links should continue resolving.
3. Build new sections from `PROMPT-VAULT-BUILD.md`:
   - `/academy/`
   - `/ecosystem/`
   - `/facturacion/`
   - `/brand/`
4. Add auth in Phase 2:
   - NextAuth.js
   - three-tier access: admin, client, lead
5. Add new tools:
   - `/tools/diagnostico/`
   - `/tools/warebox-roi/`
6. Add standard client sub-pages:
   - `/clientes/{slug}/entregables/`
   - `/clientes/{slug}/horas/`
   - `/clientes/{slug}/presupuestos/`
   - `/clientes/{slug}/autorizaciones/`
