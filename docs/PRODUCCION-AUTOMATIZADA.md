# Producción automatizada de catálogos

## Flujo objetivo
Cliente -> formulario -> validación -> productos -> fotos -> optimización -> configuración -> revisión -> publicación.

## Etapas
1. Recibir información comercial.
2. Validar campos y detectar faltantes.
3. Importar productos.
4. Asociar imágenes.
5. Procesar imágenes localmente cuando sea posible.
6. Aplicar configuración visual del cliente.
7. Ejecutar QA automático.
8. Mostrar vista previa.
9. Aprobación del cliente.
10. Publicar versión final.

## Reglas
- No publicar automáticamente sin aprobación cuando haya datos del cliente.
- Conservar una versión anterior para poder revertir cambios.
- Registrar versión y fecha de publicación.
- Separar plantilla maestra de configuraciones de clientes.
- Nunca incluir credenciales o secretos en los datos importados.
