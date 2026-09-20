# PRIVACYOS

> **La capa de inteligencia para la privacidad digital.**

PRIVACYOS es una plataforma conceptual de inteligencia de privacidad que busca ayudar a las personas y organizaciones a comprender qué datos pueden ser tratados por un servicio digital, para qué se utilizan, qué terceros intervienen y qué riesgos deben revisarse.

Este repositorio contiene la **Fase 1 — Foundation**, centrada en la experiencia de usuario, la navegación, la arquitectura inicial y los flujos demostrativos con datos controlados.

---

## 🚀 Aplicación publicada

- **Aplicación:** https://privacyos-59ot.vercel.app/
- **Repositorio:** https://github.com/catalinica1234-tech/privacyos
- **Rama principal:** `main`
- **Estado actual:** Foundation / Demo

> **Importante:** la versión publicada es un prototipo demostrativo. Las pantallas de análisis y escaneo no representan todavía una inspección real de sitios web ni un motor productivo de inteligencia artificial.

---

## 👥 Equipo de trabajo

| Integrante | Responsabilidad principal |
|---|---|
| **Catalina Romero** | Desarrollo frontend, integración y revisión general |
| **Melisa Ibáñez** | Documentación, investigación y propuesta de solución |
| **Simón Salgado** | Presentación, arquitectura y planificación mediante carta Gantt |

Los nombres de usuario de GitHub se incorporarán cuando sean confirmados por cada integrante. No se incluyen identificadores inventados.

---

## 🎯 Propósito del proyecto

PRIVACYOS propone una capa de inteligencia para analizar la privacidad de servicios digitales mediante la comparación entre:

1. **Lo que declara un servicio**, por ejemplo, su política de privacidad.
2. **La evidencia técnica observable**, como cookies, rastreadores y tecnologías de terceros.
3. **Los riesgos y aspectos regulatorios** que deberían ser revisados por el usuario.

La solución se proyecta como una plataforma modular que puede incorporar, en fases posteriores, autenticación real, persistencia de datos, análisis técnico automatizado, inteligencia artificial y motores de riesgo y regulación.

---

## ✅ Alcance implementado en Foundation

- Landing page responsiva con identidad visual de PRIVACYOS.
- Pantallas de inicio de sesión y registro con navegación demostrativa.
- Estructura principal de la aplicación y navegación responsiva.
- Dashboard con información de demostración centralizada.
- Configuración visual del escáner.
- Flujo de escaneo demostrativo.
- Vista de resultado de análisis de ejemplo.
- Secciones de riesgos, regulación, derechos de privacidad, perfil y configuración.
- Tema claro y oscuro.
- Componentes reutilizables de interfaz y dominio.
- Estados visuales de carga, vacío y error.

---

## ⚠️ Limitaciones actuales

Las siguientes capacidades **no están activas en esta fase**:

- Autenticación real y administración de sesiones.
- Persistencia en base de datos.
- Integración operativa con Prisma, Supabase o PostgreSQL.
- Escaneo real de sitios web.
- Recolección de evidencia técnica en tiempo real.
- Motor de análisis mediante inteligencia artificial.
- Motor productivo de riesgos.
- Motor productivo de regulación.
- Cálculo productivo del Privacy Score.

Los valores mostrados en el dashboard, el escáner y el análisis provienen de datos controlados para demostración. **Ingresar una URL no provoca una solicitud ni una inspección real del sitio externo.**

---

## 🧩 Tecnologías utilizadas

- **Next.js 15**
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Recharts**
- **Lucide React**
- **Zod**

La configuración actual está orientada a la interfaz y a los flujos de demostración de Foundation. Las tecnologías previstas para etapas futuras no deben interpretarse como integraciones productivas ya finalizadas.

---

## 💻 Ejecución local

Requisitos recomendados:

- Node.js 20 o superior.
- npm.

Instalar dependencias:

```bash
npm install
```

Iniciar el entorno de desarrollo:

```bash
npm run dev
```

Abrir en el navegador:

```text
http://localhost:3000
```

### Comandos de validación

```bash
npm run lint
npm run typecheck
npm run build
```

El resultado de cada comando debe verificarse en el entorno donde se ejecute. No se considera aprobado únicamente por estar declarado en este documento.

---

## 🧭 Rutas principales

### Sitio público

- `/`
- `/login`
- `/register`

### Aplicación

- `/dashboard`
- `/dashboard/scanner`
- `/dashboard/scanner/progress`
- `/dashboard/analyses`
- `/dashboard/analyses/demo-001`
- `/dashboard/risks`
- `/dashboard/regulations`
- `/dashboard/rights`
- `/dashboard/profile`
- `/dashboard/settings`

---

## 🧪 Funcionamiento de la demostración

- El inicio de sesión y el registro permiten recorrer un flujo de navegación simulada.
- El escáner presenta un proceso controlado de demostración.
- La vista de análisis utiliza información centralizada de ejemplo.
- No se consulta ni inspecciona realmente el sitio web introducido por el usuario.
- Las capacidades de autenticación, base de datos, escaneo, IA y motores de riesgo/regulación quedan planificadas para etapas posteriores.

---

## 🏗️ Orientación arquitectónica

La interfaz se organiza para separar la experiencia visual de los módulos que se incorporarán en fases futuras:

- Interfaz y navegación.
- Componentes reutilizables.
- Datos de demostración.
- Escáner.
- Motor de inteligencia artificial.
- Motor regulatorio.
- Motor de riesgos.
- Cálculo de puntuación de privacidad.

Esta separación permite evolucionar el prototipo sin presentar las funciones futuras como si ya estuvieran implementadas.

---

## 📚 Documentación del repositorio

La documentación técnica se encuentra en la carpeta `docs/`:

- [Arquitectura de Foundation](docs/architecture-foundation.md)
- [Auditoría inicial del Hito 1](docs/audit-hito1-foundation.md)
- [Matriz de trazabilidad de requisitos](docs/requirements-traceability.md)
- [Lista de validación manual](docs/manual-validation-checklist.md)
- [Documentación del despliegue](docs/deployment.md)

Los entregables académicos independientes —como informe, presentación, contrato de equipo y carta Gantt— deben integrarse utilizando las versiones finales aprobadas por el equipo, sin inventar evidencias, fechas de reuniones ni identificadores personales.

---

## 🔎 Control de calidad

El repositorio dispone de un flujo de GitHub Actions para ejecutar en cambios sobre `main` y en solicitudes de incorporación:

1. Instalar dependencias.
2. Ejecutar ESLint.
3. Ejecutar la comprobación de tipos de TypeScript.
4. Ejecutar la compilación de producción.

La configuración de ESLint fue adaptada al formato de configuración plana utilizado por ESLint 9 mediante `eslint.config.mjs`.

> El estado de calidad debe basarse en la ejecución real del flujo de GitHub Actions. Las advertencias de dependencias y los resultados de seguridad deben revisarse antes de declarar el proyecto completamente validado.

---

## 🛣️ Próximas etapas

Las siguientes tareas corresponden a una evolución posterior y no forman parte de la funcionalidad productiva de Foundation:

- Incorporar autenticación y sesiones reales.
- Conectar una base de datos y definir persistencia.
- Implementar un escáner técnico real con controles de seguridad.
- Diseñar la recolección y trazabilidad de evidencias.
- Integrar el análisis mediante IA.
- Definir los motores de riesgo y regulación.
- Implementar un cálculo verificable del Privacy Score.
- Añadir pruebas automatizadas y evidencia de validación manual.

---

## 📌 Estado de transparencia

PRIVACYOS se presenta actualmente como un **prototipo navegable de Foundation con flujos demostrativos**. La documentación diferencia explícitamente entre funcionalidades visibles, capacidades planificadas y validaciones que todavía requieren evidencia técnica o revisión manual.
