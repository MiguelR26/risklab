import type { CaseStudy } from "./types";

export const cases: CaseStudy[] = [
  {
    id: "tienda-online",
    title: "Caída de una tienda online",
    context:
      "Caso ficticio con datos hipotéticos. Una tienda de teléfonos pierde su página web durante 5 horas un sábado. Puede recibir pedidos por WhatsApp Business, pero su inventario de respaldo no se actualiza desde hace 24 horas. Tú coordinas la respuesta.",
    decisions: [
      {
        prompt: "Primera hora: ¿cómo usas WhatsApp Business?",
        options: [
          { text: "Esperar a que vuelva la web sin hacer nada.", points: 0, feedback: "Se activa el BIA y el BCP para no detener las ventas críticas. Esperar sin plan alarga el impacto." },
          { text: "Activarlo, pero confirmar cada venta solo después de verificar existencias reales.", points: 2, feedback: "Correcto: usas el proceso alterno con un control. El inventario de hace 24 horas no es confiable." },
          { text: "Aceptar todos los pedidos con el inventario de hace 24 horas.", points: 0, feedback: "Riesgo alto de vender lo que no hay. Genera reclamos y reembolsos." },
        ],
      },
      {
        prompt: "Mientras dura la caída: ¿cómo controlas pedidos y pagos?",
        options: [
          { text: "Registrar cada pedido y pago en una hoja compartida con hora, producto y comprobante.", points: 2, feedback: "Deja evidencia y facilita la conciliación posterior." },
          { text: "Registrar solo los pedidos grandes.", points: 1, feedback: "Parcial: los pedidos pequeños también pueden causar diferencias al conciliar." },
          { text: "Confiar en la memoria del equipo.", points: 0, feedback: "Sin registro no hay control ni forma de detectar errores o fraude." },
        ],
      },
      {
        prompt: "La web vuelve a funcionar: ¿qué haces?",
        options: [
          { text: "Reanudar ventas normales y olvidar los pedidos de WhatsApp.", points: 0, feedback: "Quedan pedidos sin procesar y registros inconsistentes." },
          { text: "Conciliar pedidos, pagos y existencias antes de reanudar, y documentar el incidente.", points: 2, feedback: "Cierras el ciclo: recuperas, concilias y aprendes para mejorar el plan." },
          { text: "Conciliar solo los pagos.", points: 1, feedback: "Los pagos importan, pero faltan existencias y pedidos pendientes." },
        ],
      },
    ],
  },
];
export const getCase = (id: string) => cases.find((c) => c.id === id);
