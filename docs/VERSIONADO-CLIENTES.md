# Versionado de catálogos de clientes

## Objetivo
Evitar que una modificación de la plantilla maestra rompa un catálogo ya entregado.

## Estrategia
- Plantilla maestra separada.
- Cada cliente tiene configuración propia.
- Registrar versión de plantilla usada.
- Cambios mayores se prueban antes de migrar.
- Mantener copia/commit anterior para rollback.
- No modificar directamente una entrega del cliente sin registrar el cambio.

## Resultado
Las actualizaciones futuras pueden mejorar la plantilla sin perder control sobre las tiendas ya publicadas.
