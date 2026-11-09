import type { Quiz } from "./types";

export const quizzes: Quiz[] = [
  {
    id: "fundamentos", title: "Fundamentos de gestión de riesgos",
    questions: [
      { q: "¿Qué dos factores combina un riesgo?", options: ["Probabilidad e impacto", "Costo y tiempo", "Amenaza y castigo"], answer: 0, why: "El riesgo se evalúa por qué tan probable es y qué tan grave sería." },
      { q: "¿Qué es el riesgo residual?", options: ["El que existe antes de aplicar controles", "El que permanece después de aplicar controles", "El que ya ocurrió"], answer: 1, why: "Residual es lo que queda tras los controles. Casi nunca es cero." },
      { q: "Algo que ya ocurrió y afecta a la empresa se llama…", options: ["Un riesgo futuro", "Un incidente o problema", "Un control preventivo"], answer: 1, why: "Un riesgo es una posibilidad; cuando se materializa, es un incidente." },
    ],
  },
  {
    id: "continuidad", title: "Continuidad de negocio",
    questions: [
      { q: "¿Para qué sirve principalmente el BIA?", options: ["Para priorizar procesos y definir requisitos de recuperación", "Para comprar sistemas de respaldo", "Para eliminar todos los riesgos"], answer: 0, why: "El BIA mide impactos y orienta prioridades; el BCP define cómo actuar." },
      { q: "Un sistema tiene RPO de 1 hora. ¿Qué significa?", options: ["Se acepta perder como máximo 1 hora de datos", "Debe recuperarse en 1 hora", "La interrupción máxima tolerable es 1 hora"], answer: 0, why: "El RPO se refiere a la pérdida de datos aceptable. El tiempo de recuperación es el RTO." },
      { q: "¿Qué relación debe cumplirse entre RTO y MTPD?", options: ["RTO mayor que MTPD", "RTO menor que MTPD", "Son siempre iguales"], answer: 1, why: "Debes recuperar antes de que el impacto se vuelva inaceptable." },
    ],
  },
];
export const getQuiz = (id: string) => quizzes.find((q) => q.id === id);
