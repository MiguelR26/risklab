import type { Course, Lesson } from "./types";

export const courses: Course[] = [
  {
    slug: "fundamentos",
    title: "Fundamentos de gestión de riesgos",
    description: "Qué es un riesgo, cómo se mide y por qué los controles no lo eliminan por completo.",
    lessons: [
      {
        slug: "que-es-un-riesgo", title: "Qué es un riesgo", minutes: 10, quizId: "fundamentos",
        summary: "Probabilidad, impacto y el ciclo básico de gestión.",
        blocks: [
          { t: "p", text: "Un riesgo es la posibilidad de que ocurra algo que afecte lo que queremos lograr. Todavía no pasó: por eso se puede gestionar." },
          { t: "everyday", text: "Sales de casa y el cielo está nublado. Puede llover (probabilidad) y, si llueve sin paraguas, llegarás mojado a tu reunión (impacto). Llevar paraguas es un control." },
          { t: "h", text: "Los dos ingredientes" },
          { t: "p", text: "Todo riesgo se describe con dos preguntas: ¿qué tan probable es? y ¿qué tan grave sería? Un evento muy probable pero inofensivo, o gravísimo pero casi imposible, no se trata igual que uno probable y grave a la vez." },
          { t: "callout", title: "Riesgo, incidente y problema", text: "Mientras algo no ha ocurrido, es un riesgo. Cuando ocurre, se llama incidente o problema y se atiende con el plan de respuesta." },
          { t: "business", text: "Una tienda online vende la mayor parte de sus pedidos el fin de semana. El riesgo es que su página caiga justo en ese momento: la probabilidad depende de su infraestructura y el impacto, de lo que se deja de vender y de la confianza que se pierde." },
          { t: "h", text: "El ciclo de gestión" },
          { t: "p", text: "Identificar qué puede fallar, evaluar probabilidad e impacto, tratar el riesgo (reducirlo, transferirlo, aceptarlo o evitarlo) y dar seguimiento para comprobar que los controles funcionan." },
          { t: "h", text: "Practica con la matriz" },
          { t: "matrix" },
          { t: "interview", text: "Si te preguntan «¿qué es la gestión de riesgos?»: «Es un proceso para identificar qué puede afectar los objetivos del negocio, evaluar su probabilidad e impacto, decidir cómo tratarlo y darle seguimiento.»" },
        ],
      },
      {
        slug: "inherente-y-residual", title: "Riesgo inherente y residual", minutes: 8, quizId: "fundamentos",
        summary: "El riesgo antes y después de los controles.",
        blocks: [
          { t: "everyday", text: "Andar en bicicleta sin casco tiene un riesgo alto de lesión grave. Con casco, luces y calles tranquilas el riesgo baja, pero nunca llega a cero." },
          { t: "p", text: "El riesgo inherente es el que existe antes de considerar controles. El riesgo residual es el que permanece después de aplicarlos. La gestión busca que el residual quede en un nivel aceptable." },
          { t: "business", text: "Una caja con efectivo sin vigilancia tiene riesgo inherente alto de robo. Con caja fuerte, cámaras y arqueos diarios, el residual baja. Si sigue siendo alto, se refuerzan controles o se cambia el proceso." },
          { t: "callout", title: "Los controles deben funcionar", text: "Un control que existe en papel pero no se ejecuta no reduce el riesgo. Por eso el seguimiento es parte del ciclo." },
          { t: "matrix" },
          { t: "interview", text: "Respuesta modelo: «Evalúo el riesgo inherente, identifico los controles existentes, mido su efectividad y calculo el residual para decidir si es aceptable o requiere más tratamiento.»" },
        ],
      },
    ],
  },
  {
    slug: "continuidad",
    title: "Continuidad de negocio",
    description: "BIA, BCP, RTO, RPO y MTPD aplicados a una interrupción real.",
    lessons: [
      {
        slug: "caso-tienda-online", title: "Caso: caída de una tienda online", minutes: 12, quizId: "continuidad",
        summary: "Toma decisiones durante una interrupción y recibe retroalimentación.",
        blocks: [
          { t: "p", text: "El BIA (análisis de impacto al negocio) identifica qué procesos son críticos y cuánto tiempo pueden detenerse. El BCP (plan de continuidad) define cómo se mantiene o recupera la operación durante la interrupción." },
          { t: "p", text: "RTO es el tiempo objetivo para recuperar el servicio. RPO es hasta cuánto tiempo atrás se acepta perder datos. MTPD es el tiempo máximo de interrupción antes de que el impacto sea inaceptable; el RTO debe ser menor que el MTPD." },
          { t: "everyday", text: "Se corta la luz en tu casa mientras cocinas. Tu plan alterno puede ser una linterna y una estufa de gas. Lo que importa es decidir antes qué es urgente y cuánto puedes esperar." },
          { t: "case", caseId: "tienda-online" },
          { t: "interview", text: "Estructura útil: identificar procesos críticos con el BIA, activar el BCP y el canal alterno, controlar pagos y existencias, comunicar, conciliar al recuperar y documentar lecciones aprendidas." },
        ],
      },
    ],
  },
  { slug: "magerit", title: "MAGERIT", description: "Metodología de análisis y gestión de riesgos de sistemas de información.", lessons: [] },
  { slug: "alternos-dmaic", title: "Procesos alternos y DMAIC", description: "Contingencias operativas y mejora continua con datos.", lessons: [] },
  { slug: "excel", title: "Excel aplicado a riesgos", description: "Fórmulas, filtros y tablas dinámicas para analizar incidentes.", lessons: [] },
  { slug: "sql-der", title: "SQL y DER", description: "Consultas básicas y modelado de datos.", lessons: [] },
];

export const lessonId = (courseSlug: string, lesson: Lesson) => `${courseSlug}/${lesson.slug}`;
export const allLessons = () =>
  courses.flatMap((course) => course.lessons.map((lesson) => ({ course, lesson, id: lessonId(course.slug, lesson) })));
