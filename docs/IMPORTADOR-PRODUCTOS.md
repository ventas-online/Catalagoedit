# Importador de productos

## Formato recomendado
CSV UTF-8 con columnas: nombre,categoria,precio,descripcion,imagen,marca,sku,disponible.

## Reglas
- nombre, categoria y precio son obligatorios.
- precio debe ser numérico y positivo.
- imagen debe ser una ruta/URL válida.
- sku es opcional.
- disponible acepta true/false.
- rechazar filas inválidas sin perder las válidas.
- mostrar vista previa antes de importar.
- permitir corregir errores y volver a validar.

## Seguridad
No importar HTML/JavaScript ejecutable desde campos de productos. Escapar texto al renderizarlo.
