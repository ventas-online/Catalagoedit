# Integración editor → catálogo

## Flujo
1. El usuario selecciona una imagen.
2. El editor genera una copia optimizada.
3. Se conserva el original.
4. El producto referencia la versión optimizada.
5. Se valida formato, tamaño y carga.
6. La vista previa muestra el resultado antes de publicar.

## Convención
Usar nombres estables y descriptivos, evitando caracteres problemáticos. Ejemplo: `belleza/base-liquida-001.webp`.

## Estado
- original
- procesando
- listo
- error
- revisión manual

## Privacidad
El modo local no debe enviar la imagen a terceros. Si posteriormente se añade un proveedor externo, debe existir un modo explícito y las claves deben vivir fuera del frontend público.
