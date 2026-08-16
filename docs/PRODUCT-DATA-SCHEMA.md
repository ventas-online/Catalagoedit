# Esquema de productos

Campos mínimos: `id`, `name`, `category`, `price`, `image`.

Campos opcionales: `brand`, `description`, `sku`, `stock`, `featured`, `compareAtPrice`.

Reglas: precio numérico no negativo; nombre obligatorio; categoría válida; imagen accesible; IDs únicos. Mantener moneda configurable y no asumir USD para todos los clientes.

Importación futura: CSV/JSON con validación previa y reporte de errores antes de modificar el catálogo.
