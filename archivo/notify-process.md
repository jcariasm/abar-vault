# Proceso de avisos - Abar Vault

Este proceso evita que las publicaciones del Vault se queden como archivos sueltos sin contexto operativo.

## Cuando usarlo

Crear un `notify.md` dentro del folder del lead o cliente cuando se publique:

- material nuevo para ventas
- un reporte actualizado para cliente
- un presupuesto o propuesta
- un documento que cambia el enfoque comercial
- una version final que reemplaza archivos anteriores

## Donde guardarlo

```txt
/leads/[lead-slug]/notify.md
/clientes/[cliente-slug]/notify.md
```

## Estados

- `draft`: el aviso esta preparado pero todavia no se ha enviado.
- `sent`: el aviso ya fue enviado.
- `no-notify`: se publico material, pero se decidio no avisar.

## Reglas

1. El aviso debe apuntar a la URL principal del lead o cliente, no a un archivo aislado, salvo que el equipo necesite abrir un PDF o PPTX directamente.
2. El cuerpo debe explicar que cambio y cual version es la vigente.
3. Si hay documentos sensibles, confirmar destinatarios antes de enviar.
4. Si se envia manualmente por email, actualizar el `Send Log`.
5. No automatizar envios a cliente final hasta que exista auth o una regla explicita de aprobacion.

## Template

Usar como base:

```txt
/archivo/notify-template.md
```

