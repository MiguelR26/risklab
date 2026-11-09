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
  {
    id: "magerit", title: "MAGERIT",
    questions: [
      { q: "¿Qué se identifica primero en un análisis con MAGERIT?", options: ["Las salvaguardas", "Los activos", "El riesgo residual"], answer: 1, why: "Sin saber qué activos hay que proteger no se pueden identificar amenazas ni impactos." },
      { q: "¿Qué es una salvaguarda?", options: ["Un control que reduce la probabilidad o el impacto", "Una amenaza externa", "Un activo valioso"], answer: 0, why: "Las salvaguardas son los controles, existentes o propuestos, que reducen el riesgo." },
      { q: "¿Qué dimensiones se valoran principalmente en un activo?", options: ["Disponibilidad, integridad y confidencialidad", "Costo, tiempo y calidad", "Probabilidad, color y tamaño"], answer: 0, why: "Son las tres dimensiones clásicas de la seguridad de la información." },
    ],
  },
  {
    id: "alternos-dmaic", title: "Procesos alternos y DMAIC",
    questions: [
      { q: "¿Qué vuelve confiable a un proceso alterno?", options: ["Que se improvise rápido", "Autorización, controles y registro de lo hecho", "Que no deje evidencia"], answer: 1, why: "Debe ser autorizado, controlado y registrado para poder conciliarlo después." },
      { q: "Cuando el sistema normal se recupera, ¿qué paso es clave?", options: ["Olvidar lo registrado", "Conciliar los registros del proceso alterno", "Apagar el sistema de respaldo"], answer: 1, why: "Sin conciliar quedan diferencias entre lo atendido y lo registrado." },
      { q: "¿Qué paso de DMAIC va después de Medir?", options: ["Controlar", "Analizar", "Mejorar"], answer: 1, why: "El orden es Definir, Medir, Analizar, Mejorar y Controlar." },
    ],
  },
  {
    id: "excel", title: "Excel aplicado a riesgos",
    questions: [
      { q: "¿Qué función cuenta cuántas celdas cumplen un criterio?", options: ["SUMAR.SI", "CONTAR.SI", "BUSCARV"], answer: 1, why: "CONTAR.SI cuenta las celdas que cumplen la condición indicada." },
      { q: "¿Qué herramienta resume incidentes por área sin escribir fórmulas?", options: ["Una tabla dinámica", "Un formato condicional", "Una macro obligatoria"], answer: 0, why: "Las tablas dinámicas agrupan y resumen datos arrastrando campos." },
      { q: "¿Qué hace BUSCARV?", options: ["Suma una columna", "Busca un valor y devuelve un dato de otra columna", "Ordena los datos"], answer: 1, why: "Busca en la primera columna de una tabla y devuelve el dato de la misma fila." },
    ],
  },
  {
    id: "sql-der", title: "SQL y DER",
    questions: [
      { q: "¿Qué cláusula filtra filas antes de agrupar?", options: ["WHERE", "HAVING", "JOIN"], answer: 0, why: "WHERE filtra filas; HAVING filtra grupos ya formados." },
      { q: "¿Para qué sirve JOIN?", options: ["Para unir tablas por columnas relacionadas", "Para borrar filas", "Para ordenar resultados"], answer: 0, why: "JOIN combina tablas usando la relación entre llave foránea y llave primaria." },
      { q: "Un estudiante toma muchos cursos y cada curso tiene muchos estudiantes. ¿Qué cardinalidad es?", options: ["Uno a uno", "Uno a muchos", "Muchos a muchos"], answer: 2, why: "Es muchos a muchos y suele resolverse con una tabla intermedia." },
    ],
  },
];
export const getQuiz = (id: string) => quizzes.find((q) => q.id === id);
