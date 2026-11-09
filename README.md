# RiskLab (MVP)

Plataforma educativa de gestión de riesgos, en español. Next.js 14 (App Router), TypeScript y Tailwind CSS. Sin backend: el progreso vive en `localStorage`.

## Instalar y ejecutar
Requiere Node.js 18.18 o superior.

    npm install
    npm run dev        # http://localhost:3000
    npm run build && npm start   # versión de producción

## Publicar
- **Vercel (más simple):** sube el proyecto a GitHub, impórtalo en vercel.com y despliega. No necesita variables de entorno.
- **Otro hosting con Node:** `npm run build` y `npm start`.

## Estructura
    src/content/     Contenido educativo (cursos, casos, cuestionarios) y sus tipos. Sin React.
    src/components/  Interfaz: ui/ (botón, tarjeta, barra), simuladores, lección, catálogo.
    src/lib/         storage.ts (progreso en localStorage) y utilidades.
    src/app/         Rutas: / /dashboard /cursos /cursos/[curso]/[leccion] /laboratorio /evaluaciones /perfil

## Agregar una lección
1. Añade un objeto `Lesson` al curso en `src/content/courses.ts` (bloques: p, h, everyday, business, callout, interview, matrix, case).
2. Opcional: crea un cuestionario en `quizzes.ts` y enlázalo con `quizId`.
La ruta, el catálogo, el panel y la navegación anterior/siguiente se actualizan solos.

## Decisiones de arquitectura
- **Contenido como datos tipados:** las lecciones son bloques; los componentes solo los dibujan. Escribir contenido no exige tocar React.
- **Dos rutas, un mismo contenido:** la ruta de entrevista muestra además los bloques `interview`. No hay lecciones duplicadas.
- **Progreso con `useSyncExternalStore`:** un solo almacén con clave versionada (`risklab:v1`). Devuelve `null` en servidor e hidratación, lo que activa el estado de carga sin errores de hidratación. Se sincroniza entre pestañas.
- **Estados:** carga (esqueleto), error (almacenamiento no disponible, página fallida) y vacío (panel sin actividad).
- **Tema:** clase `dark` con script previo al pintado para evitar parpadeo; variables CSS con la paleta marfil y verde.
- **Componentes estilo shadcn/ui:** `Button` y `Card` siguen su patrón (Tailwind + `cn`) sin dependencias extra. Para usar el CLI oficial: `npx shadcn@latest init` y luego `npx shadcn@latest add dialog tabs ...`.

## Limitaciones del MVP
- Solo 3 lecciones completas (2 de fundamentos y el caso de continuidad). Los otros 4 módulos aparecen como «en preparación».
- El progreso no se sincroniza entre dispositivos ni hay cuentas.
- La matriz y el caso usan valores hipotéticos y puntajes didácticos; no son metodologías oficiales ni regulatorias.
- Sin pruebas automáticas. Falta una revisión de accesibilidad con lector de pantalla real.
- Geist no se incluyó: se usa Inter vía `next/font`.
