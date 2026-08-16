# PWA y calidad móvil

## Objetivo
Instalable desde Android/iOS compatible, con experiencia similar a una app y recursos esenciales disponibles de forma resiliente.

## Checklist
- manifest válido
- iconos correctos
- nombre y descripción coherentes
- display standalone
- viewport móvil
- service worker sin errores
- rutas de assets correctas
- estados offline claros
- navegación sin scroll horizontal
- botones táctiles cómodos
- carrito persistente cuando sea posible
- actualización controlada de caché

## Regla
Una PWA no debe aparentar tener funciones offline que realmente dependan de red. Mostrar estados claros cuando una operación requiera conexión.
