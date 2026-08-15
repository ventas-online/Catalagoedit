# Pagos online — plan Premium

La plantilla está preparada para evolucionar de pedidos por WhatsApp a pagos online.

## Recomendación

Para cada cliente se debe crear su propia cuenta de proveedor de pagos y sus propias credenciales. Nunca guardes claves secretas en `app.js`, HTML, CSS ni en un repositorio público.

## Arquitectura recomendada

`Catálogo → Checkout seguro del proveedor → Pago → Confirmación → Pedido`

El catálogo estático puede seguir en GitHub Pages. La creación de sesiones de pago y cualquier secreto debe ejecutarse en un backend/serverless protegido.

## Antes de activar pagos

- Crear cuenta del cliente con el proveedor elegido.
- Verificar identidad y datos comerciales del cliente.
- Configurar moneda, impuestos y métodos de entrega.
- Crear endpoint backend/serverless para iniciar el checkout.
- Guardar secretos únicamente como variables de entorno del backend.
- Configurar una URL de retorno y, cuando aplique, webhooks.
- Probar pagos en modo sandbox antes de producción.

## Stripe

Stripe es una opción recomendada para el paquete Premium. La integración real requiere credenciales del cliente y un endpoint servidor; por seguridad no se incluye una clave secreta en esta plantilla.

## Regla comercial

El cliente debe ser propietario de su cuenta de pagos. Tú implementas la integración y puedes cobrar instalación y mantenimiento, pero no debes guardar las credenciales del cliente en tu cuenta personal ni en el repositorio.
