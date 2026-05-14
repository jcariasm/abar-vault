# Simuladores interactivos

Biblioteca web para publicar documentos, prototipos y simuladores interactivos creados en conjunto.

## Estructura

- `library/documents`: PDFs, presentaciones exportadas, documentos y material descargable.
- `library/simulators`: simuladores HTML, apps estáticas o carpetas con recursos interactivos.
- `library/manifest.json`: índice editable de todo lo que aparece en la página.
- `src`: interfaz del catálogo.

## Uso local

```bash
python -m http.server 5173
```

Luego abre `http://127.0.0.1:5173`.

## Publicación

El proyecto está preparado como sitio estático para Vercel. Al conectarlo con GitHub, Vercel puede publicar cada cambio enviado a `main`.
