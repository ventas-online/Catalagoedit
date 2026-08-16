# QA automático

Antes de publicar un catálogo, comprobar:

- Todos los productos tienen nombre, categoría y precio válido.
- No existen precios negativos o NaN.
- Las imágenes cargan correctamente.
- No hay enlaces internos rotos.
- WhatsApp está configurado cuando corresponde.
- El carrito suma/resta/elimina correctamente.
- El total coincide con las cantidades.
- El pedido conserva el orden y cantidades.
- El catálogo funciona en pantallas pequeñas.
- No hay secretos en archivos públicos.
- Manifest y Service Worker no tienen rutas inválidas.
- Los textos de productos se renderizan como texto, no como HTML ejecutable.

El resultado debe mostrar errores bloqueantes y advertencias separadamente.
