# Procesamiento por lotes

## Objetivo
Procesar fotografías en grupos pequeños para evitar agotar la memoria del teléfono o navegador.

## Flujo recomendado
1. Seleccionar hasta 50 imágenes.
2. Crear una cola local.
3. Procesar 3–5 imágenes simultáneamente según capacidad del dispositivo.
4. Liberar objetos temporales después de cada imagen.
5. Guardar resultados como copias nuevas.
6. Mostrar progreso y errores individuales.
7. Permitir reintentar solo las imágenes fallidas.
8. Generar un ZIP al finalizar.

## Reglas
- Nunca sobrescribir originales.
- Mantener nombres consistentes: `categoria_producto_001.webp`.
- Permitir cancelar el procesamiento.
- Persistir la cola localmente cuando sea posible.
- No enviar imágenes a terceros en el modo local.

## Capacidad
No establecer una cuota mensual artificial. La capacidad práctica depende de RAM, CPU, almacenamiento y navegador. El procesamiento por lotes pequeños permite trabajar con catálogos grandes sin cargar todas las imágenes en memoria simultáneamente.
