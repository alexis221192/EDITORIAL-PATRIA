# Seguridad del Sistema

## Autenticación
- Implementado NextAuth.js para sesiones seguras del lado del servidor.
- Contraseñas hasheadas usando scrypt con sal aleatoria.
- Validación de roles y permisos.
- Protección de rutas con middleware de sesión.

## Base de Datos
- Conexión a PostgreSQL con pool de conexiones.
- Uso de prepared statements para prevenir inyección SQL.
- Validación de inputs: números positivos, strings sanitizados (remoción de caracteres peligrosos < > " ' &).
- Verificación de permisos de usuario antes de operaciones.

## Variables de Entorno
- Configurar NEXTAUTH_SECRET y NEXTAUTH_URL en .env.local.
- Usar DATABASE_URL para conexión segura a BD.

## Mejores Prácticas Implementadas
- Sanitización de inputs en funciones de BD.
- Validación de datos financieros (subtotal, descuento, IVA no negativos).
- Validación de items (cantidades positivas, precios no negativos).
- Manejo de errores seguro sin exponer información interna.

## CI/CD
- Workflow de GitHub Actions para lint, tests y build automáticos.
- Tests unitarios para funciones críticas (hashing, BD).

## Recomendaciones Adicionales
- Implementar rate limiting en APIs de login.
- Usar HTTPS en producción.
- Logs de auditoría para acciones sensibles.
- Revisiones periódicas de dependencias.