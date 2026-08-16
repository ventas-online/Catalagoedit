# Generador de demos — arquitectura

## Propósito
Crear demostraciones para ventas sin modificar la tienda real ni la plantilla maestra.

## Showcase actual
`/showcase/` es una zona separada de la tienda principal. Sirve para presentar la variedad de nichos y capacidades.

## Generador futuro
El generador completo debe permitir:
1. Elegir nicho.
2. Elegir estilo visual.
3. Generar/importar datos de demostración.
4. Validar licencia/fuente de imágenes y datos.
5. Preparar imágenes para catálogo.
6. Exportar un paquete de productos.
7. Copiar configuración a un repositorio de cliente.

## Demos prioritarias
Belleza, moda, accesorios para celulares, gadgets/tecnología y ferretería.

## Biblioteca ampliada
También se contemplan hogar, alimentos/repostería, regalos, joyería, perfumería, mascotas, papelería, deportes, automotriz, bebé, artesanía, librería, jardinería, salones/barberías y motos/bicicletas.

## Separación de responsabilidades
- `index.html`, `app.js`, etc.: plantilla de tienda para personalizar y entregar.
- `showcase/`: portafolio interactivo del vendedor.
- `datasets/`: datos de demostración con fuente/licencia.
- `tools/`: herramientas internas de preparación y validación.

## Regla de seguridad
Nunca incluir claves de APIs en el frontend. El futuro editor de imágenes deberá usar un backend o función serverless con secretos protegidos.

## Regla de derechos
No copiar datos o imágenes de repositorios públicos solo por estar disponibles. Verificar licencia y conservar atribución cuando corresponda. Para demos comerciales, preferir contenido propio, ficticio o claramente licenciado para uso comercial.
