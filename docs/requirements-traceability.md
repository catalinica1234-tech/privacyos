# Matriz de trazabilidad inicial — Hito 1

> Documento de trabajo. Solo se marcan como verificadas las evidencias observables en el repositorio. Los entregables académicos que se están preparando por separado quedan fuera de esta revisión hasta que sean compartidos.

| Requisito / aspecto | Evidencia en el repositorio | Estado actual | Pendiente | Prioridad |
|---|---|---|---|---|
| Prototipo web navegable | Rutas en `app/` y navegación compartida mediante `AppShell` | Parcialmente verificable por código | Prueba manual de recorrido y capturas | Alta |
| Pantallas encadenadas | Dashboard, scanner, progress y análisis | Implementado a nivel de rutas | Confirmar recorrido completo en navegador | Alta |
| Arquitectura | `docs/architecture-foundation.md` | Documentada | Exportar a imagen si la pauta lo exige | Alta |
| README | `README.md` | Presente y actualizado | Completar integrantes y usuarios GitHub cuando se confirmen | Alta |
| Alcance funcional | README y avisos de demo en dashboard/scanner | Verificado | Mantener la distinción entre demo y funcionalidad real | Alta |
| Variables de entorno | `.env.example` y `.gitignore` | Archivos revisados; `.env.example` contiene nombres comentados y no valores | Revisar que no existan secretos en el historial; la inspección de estos archivos no certifica todo el historial | Alta |
| Calidad técnica | `package.json`, `tsconfig.json`, `eslint.config.mjs`, `next.config.ts` | Configuración presente; resultados no certificados | Ejecutar lint, build y TypeScript en CI y revisar los resultados | Alta |
| Persistencia | README declara que base de datos y Prisma no están activos; no se localizaron `prisma/schema.prisma` ni `lib/prisma.ts` en las rutas consultadas de `main` | No verificada como integrada en la rama actual | No presentarla como funcionalidad existente; confirmar la estructura antes de iniciar Fase 2 | Alta |
| Escaneo real | `app/dashboard/scanner/page.tsx` declara modo demo | No implementado en Foundation | Mantener aviso visible y documentar fase futura | Media |
| Evidencia de despliegue | URL de Vercel proporcionada por el equipo | No certificada desde este documento | Adjuntar captura o enlace revisado durante la entrega | Media |

## Criterio de actualización

Actualizar esta matriz solo cuando exista una evidencia concreta: archivo, ruta, captura, ejecución de comando, enlace verificable o documento académico recibido. No se deben inventar fechas, reuniones, horas, avances o resultados de pruebas.

## Fuera del alcance de esta revisión

El informe y la presentación se mantienen fuera de esta fase de trabajo, ya que el equipo los está preparando por separado. Se revisarán e integrarán cuando sean enviados posteriormente.
