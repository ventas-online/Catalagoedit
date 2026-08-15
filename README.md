# Catálogo Online — Plantilla Comercial

Plantilla reutilizable para vender catálogos digitales profesionales a negocios.

## Qué incluye

- Catálogo responsive para móvil, tablet y escritorio
- Productos con foto, marca, categoría, descripción y precio
- Búsqueda, filtros y ordenamiento
- Favoritos persistentes
- Carrito independiente con sumar, restar, eliminar y vaciar
- Resumen de unidades y total a pagar
- Formulario de pedido con datos del cliente
- Pedido estructurado por WhatsApp
- QR y botón de compartir
- PWA / instalación como app cuando el navegador lo permita
- Página de privacidad y guía de compra
- Modo DEMO para enseñar la plantilla sin enviar pedidos reales

## Cómo venderla

1. Duplica este repositorio para cada cliente.
2. Mantén este repositorio como plantilla maestra; no mezcles datos de clientes.
3. Personaliza `app.js`: nombre, WhatsApp, moneda, URL y productos.
4. Sustituye logo, colores, textos e imágenes.
5. Prueba carrito, favoritos, filtros, QR, móvil y pedido.
6. Publica el repositorio del cliente con GitHub Pages.
7. Entrega al cliente su repositorio, URL y dominio si lo contrató.

## Configuración rápida

En `app.js`, el objeto `config` controla:

```js
const config = {
  businessName: 'NOMBRE DEL NEGOCIO',
  whatsapp: 'NUMERO_CON_CODIGO_PAIS',
  catalogUrl: 'https://CLIENTE.github.io/REPOSITORIO/',
  currency: 'USD',
  demoMode: false
};
```

`demoMode: true` es para la demo comercial. Para un cliente real se cambia a `false` y se coloca su WhatsApp comercial.

## Seguridad y privacidad

Nunca pongas en este repositorio:

- Contraseñas
- Tokens o API keys
- Credenciales
- Documentos de identidad
- Información bancaria
- Datos personales que no sean necesarios para operar el catálogo

El WhatsApp comercial de una página estática no puede considerarse secreto: el navegador necesita conocer el destino para abrir WhatsApp. Si un cliente necesita ocultarlo realmente, hay que añadir un backend/proxy.

## Entrega profesional

Cada cliente debe tener su propio repositorio y sus propios datos. No reutilices fotos privadas, datos personales, credenciales ni configuraciones de otro cliente.

## Checklist antes de entregar

- [ ] Nombre comercial
- [ ] Logo
- [ ] Colores y textos de marca
- [ ] WhatsApp comercial
- [ ] Moneda
- [ ] Productos y precios
- [ ] Categorías y marcas
- [ ] Fotos optimizadas
- [ ] Carrito probado
- [ ] Total calculado correctamente
- [ ] Formulario de pedido probado
- [ ] WhatsApp probado
- [ ] QR probado
- [ ] Vista móvil probada
- [ ] GitHub Pages publicado
- [ ] Sin secretos ni documentos sensibles
- [ ] Repositorio independiente del cliente
- [ ] URL final entregada

## Modelo comercial sugerido

**Básico:** catálogo + productos + WhatsApp.

**Profesional:** catálogo + carrito + favoritos + filtros + QR + personalización.

**Premium:** todo lo anterior + dominio, pagos/backend y funciones avanzadas.

Los precios los define el vendedor según mercado, cantidad de productos, personalización y mantenimiento.
