# PRIVACYOS — Checklist de validación manual

## Objetivo

Registrar las comprobaciones que deben realizarse en el navegador antes de presentar el Hito 1. Este checklist no reemplaza las pruebas automáticas de CI.

## Entorno

- URL desplegada: https://privacyos-59ot.vercel.app/
- Rama de referencia: `main`
- Fase: Foundation / Demo

## Recorrido principal

- [ ] La landing carga sin errores visibles.
- [ ] El enlace de inicio de sesión funciona.
- [ ] El enlace de registro funciona.
- [ ] El acceso visual dirige al dashboard esperado.
- [ ] El dashboard muestra claramente que usa datos demo.
- [ ] El botón de acceso al scanner funciona.
- [ ] El scanner muestra `DEMO MODE`.
- [ ] El formulario permite seleccionar jurisdicción y modo.
- [ ] El botón inicia el flujo de demostración.
- [ ] La pantalla de progreso carga correctamente.
- [ ] El resultado demo se puede abrir.
- [ ] La navegación lateral funciona en escritorio.
- [ ] La navegación móvil funciona en pantalla reducida.

## Responsive y accesibilidad básica

- [ ] Revisar ancho móvil de aproximadamente 360–390 px.
- [ ] Revisar tablet y escritorio.
- [ ] No existen textos cortados ni desbordamientos horizontales.
- [ ] Los botones tienen textos comprensibles.
- [ ] Los campos tienen etiquetas visibles o asociadas.
- [ ] El contraste permite leer textos y estados.
- [ ] El foco de teclado es visible.

## Evidencia que debe guardar el equipo

- Captura de landing.
- Captura de dashboard demo.
- Captura del scanner demo.
- Captura del resultado de análisis.
- Captura de la ejecución exitosa de GitHub Actions.
- Registro de cualquier error encontrado y su corrección.

## Criterio de cierre

El checklist solo debe marcarse como completado después de realizar la comprobación en el navegador y guardar evidencia. No se deben marcar casillas por inferencia a partir del código.
