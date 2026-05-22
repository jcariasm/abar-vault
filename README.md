# Abar Vault

Vault web para organizar archivo, leads, clientes y tools en un solo espacio.

## Estructura

- `vault`: estructura principal del sitio.
- `vault/leads`: prospectos, propuestas, presupuestos y acuerdos previos al cierre.
- `vault/tools`: tools HTML, simuladores, apps estaticas o carpetas con recursos interactivos.
- `vault/clientes`: espacios por cliente con reportes, saldos, builds, entregables y autorizaciones.
- `vault/archivo`: templates, guias, documentos y formatos maestros.
- `library`: biblioteca historica y recursos compartidos que se conservan por compatibilidad.

## Uso local

```bash
python -m http.server 5173
```

Luego abre `http://127.0.0.1:5173`.

## Publicacion

El proyecto esta preparado como sitio estatico para Vercel. Al conectarlo con GitHub, Vercel puede publicar cada cambio enviado a `main`.
