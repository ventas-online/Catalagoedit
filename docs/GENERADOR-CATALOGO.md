# Generador de catálogo

## Objetivo
Permitir preparar una tienda a partir de una configuración y un conjunto de productos sin editar manualmente múltiples archivos.

## Entrada
- identidad del negocio
- logo
- colores
- moneda
- WhatsApp
- redes opcionales
- categorías
- productos
- preferencias de diseño

## Salida
- configuración validada
- catálogo listo para vista previa
- datos de productos normalizados
- lista de imágenes requeridas/faltantes
- checklist QA

## Principios
- La plantilla maestra no contiene datos de clientes.
- Validar antes de publicar.
- Escapar texto del cliente al renderizar.
- No publicar secretos.
- Mantener versión anterior para rollback.
