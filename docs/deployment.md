# PRIVACYOS — Despliegue

## Entorno publicado

- **Proveedor:** Vercel
- **URL principal documentada:** https://privacyos-59ot.vercel.app/
- **Repositorio:** https://github.com/catalinica1234-tech/privacyos
- **Rama principal:** `main`
- **Alcance de la aplicación:** Foundation / Demo

## Validación técnica de GitHub Actions

En la revisión del **8 de octubre de 2026 (hora de Chile)**, el commit `11c3118bdfff28f9bccfd71108c9d92e7f5bb775` terminó correctamente el workflow de calidad.

El flujo ejecutó:
- Instalación de dependencias con `npm install`.
- ESLint mediante `npm run lint`.
- Verificación de tipos mediante `npm run typecheck`.
- Compilación de producción mediante `npm run build`.

Evidencia: [ejecución exitosa de GitHub Actions](https://github.com/catalinica1234-tech/privacyos/actions/runs/37867018705).

Este resultado confirma la validación automatizada de ese commit en el entorno de GitHub Actions; no confirma por sí solo que todos los despliegues de Vercel estén correctos ni sustituye la revisión manual de la interfaz publicada.

## Estado de Vercel observado

En la última consulta del estado de GitHub para el mismo commit:

- **Proyecto `privacyos`:** despliegue fallido. GitHub informó que el diagnóstico detallado se debe obtener con el comando de Vercel CLI indicado en el estado del commit.
- **Proyecto `privacyos-59ot`:** estado pendiente de finalización en la última consulta.

Enlace al estado del commit: [comprobaciones de despliegue en GitHub](https://github.com/catalinica1234-tech/privacyos/commit/11c3118bdfff28f9bccfd71108c9d92e7f5bb775).

### Obtener el error detallado de Vercel

La comprobación de GitHub indicó este comando para inspeccionar los registros del despliegue fallido:

```bash
npx vercel inspect dpl_7x1h6ZR6pCp3SoZ6yFkxFmTMbfow --logs
```

Debe ejecutarse en un entorno con Vercel CLI y sesión autenticada en la cuenta que tiene acceso al proyecto. Los registros completos no están disponibles desde la integración de GitHub utilizada en esta revisión, por lo que **no se atribuye el fallo a una causa específica todavía**.

Una vez obtenidos los registros, revisar el primer error de build o configuración y aplicar una corrección específica. No modificar el diseño ni introducir cambios de código especulativos antes de identificar la causa.

## Alcance funcional publicado

La versión corresponde al prototipo demostrativo Foundation. Las pantallas de análisis y escaneo utilizan datos controlados y no representan una inspección real de sitios externos.

La existencia de una URL publicada no demuestra por sí sola que estén implementadas la autenticación real, la persistencia, el escaneo de sitios externos o los motores productivos de análisis.

## Evidencias pendientes para la entrega

- [ ] Obtener y resolver el error detallado del proyecto Vercel `privacyos`.
- [ ] Confirmar el resultado final del proyecto Vercel `privacyos-59ot`.
- [ ] Abrir la URL pública en una sesión normal y verificar que no redirija a una pantalla de acceso o protección del despliegue.
- [ ] Captura de la landing publicada.
- [ ] Captura del dashboard.
- [ ] Captura del scanner en modo demo.
- [ ] Captura del flujo de progreso y resultado.
- [x] Ejecución exitosa de GitHub Actions para el commit indicado.
- [ ] Confirmación manual de navegación en móvil y escritorio.
