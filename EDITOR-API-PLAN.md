# Plan de integración de API de imágenes

## Estado
Arquitectura preparada, sin API key todavía.

## Recomendación inicial
Probar primero una opción con cuota gratuita y uso comercial explícito. Una alternativa actual es BackgroundErase, cuya documentación pública indica que permite uso comercial incluso en el nivel gratuito, sujeto a límites diarios. Verificar siempre sus términos vigentes antes de producción.

Otra opción para evaluación es Cloudinary: tiene plan gratuito sin tarjeta y APIs de transformación, con créditos mensuales; algunas funciones avanzadas pueden requerir add-ons o planes adicionales.

remove.bg ofrece una API conocida, pero su uso gratuito está restringido a uso no comercial; para trabajo comercial se requiere un plan de suscripción o pago por imágenes a resolución completa. No usar su cuota gratuita para entregar trabajos comerciales.

## Arquitectura segura
Frontend GitHub Pages -> función serverless/backend -> proveedor de imágenes.

La API key debe existir únicamente como secreto del backend. Nunca colocarla en app.js, HTML, CSS, JSON público ni repositorio.

## Flujo del editor
- Seleccionar una o varias imágenes.
- Vista previa.
- Enviar al backend.
- Procesar fondo.
- Aplicar transformaciones locales/seguras de iluminación, contraste, recorte y tamaño cuando sea posible.
- Mostrar comparación antes/después.
- Descargar una imagen o paquete ZIP.
- Mantener originales separados.

## Criterios antes de activar una API
- Uso comercial permitido.
- Cuota gratuita suficiente para pruebas.
- Límite de tamaño.
- Retención y privacidad de imágenes.
- Términos de reventa/wrapping del servicio.
- Rate limits.
- Precio de producción.
- Posibilidad de eliminar la cuenta/archivos.

## Regla
No solicitar al usuario que publique una clave en GitHub. Cuando sea necesario configurar el secreto, guiarlo para añadirlo al proveedor backend como variable de entorno.
