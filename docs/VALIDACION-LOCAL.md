# Validación local de catálogo

## Uso

```bash
node tools/catalog-validator.js tools/catalog-template.json
```

El comando devuelve JSON con `ok`, cantidad de productos, errores y advertencias.

## Errores bloqueantes
- nombre ausente
- precio ausente, no numérico o negativo
- registro inválido

## Advertencias
- categoría ausente
- imagen ausente

La validación es independiente de servicios externos y no requiere API ni credenciales.
