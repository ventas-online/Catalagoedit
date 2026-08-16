# Editor de fotos para catálogo

## Objetivo
Preparar fotografías de productos para que tengan una presentación uniforme y profesional antes de incorporarlas al catálogo.

## Flujo
1. Subir foto original.
2. Validar formato y resolución.
3. Eliminar fondo cuando sea apropiado.
4. Recortar y centrar el producto.
5. Corregir iluminación y balance de blancos.
6. Ajustar contraste y nitidez de forma moderada.
7. Aplicar fondo uniforme opcional.
8. Redimensionar a un formato estándar.
9. Comprimir para web manteniendo calidad.
10. Guardar original y versión final por separado.

## Procesamiento por lotes
El sistema debe permitir procesar múltiples imágenes y devolver archivos con nombres consistentes. Nunca sobrescribir los originales del cliente.

## Arquitectura segura
El editor público no debe contener claves de API. Si se usa un proveedor externo, la llamada debe pasar por un backend o función serverless con la clave almacenada como secreto/variable de entorno.

## Proveedores
Evaluar únicamente servicios que permitan el uso comercial requerido y revisar precio, límites, licencia, retención de imágenes y política de privacidad antes de integrar. La opción gratuita debe verificarse en el momento de integración; no asumir que un plan gratuito es comercialmente utilizable.

## Reglas de calidad
- No alterar logotipos ni texto del producto.
- No inventar detalles del producto.
- No exagerar iluminación o saturación.
- Mantener colores razonablemente fieles al original.
- Para productos con transparencia/reflejos, revisar manualmente el resultado.
- Mantener una copia original para poder revertir cambios.

## Resultado
Cada producto debe poder terminar con: imagen original, imagen optimizada, nombre de archivo, dimensiones, formato y estado de procesamiento.
