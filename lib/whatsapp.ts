/**
 * WhatsApp helpers — microbodas.
 *
 * WhatsApp Reservas (humano): +57 318 956 5617
 * Email: reservations@lapalmayeltucan.com
 *
 * Regla específica bodas: NO mostramos precio. Toda cotización va por WhatsApp
 * (ticket promedio $46M COP, venta consultiva).
 */

export const WHATSAPP_NUMBER = '573189565617';
export const WHATSAPP_NUMBER_DISPLAY = '+57 318 956 5617';

export const RESERVATIONS_EMAIL = 'reservations@lapalmayeltucan.com';

/**
 * Build a wa.me URL with pre-filled message and optional UTM source.
 * UTM va DENTRO del text (WhatsApp ignora query params extras).
 */
export function buildWhatsAppUrl(message: string, utmSource?: string): string {
  const withTag = utmSource ? `${message}\n\n(ref: ${utmSource})` : message;
  const text = encodeURIComponent(withTag);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

/**
 * Mensajes pre-llenados reutilizables (boda, venta consultiva).
 * Todos incluyen los 3 datos mínimos que Diego necesita para cotizar rápido:
 * - confirmar intención (boda)
 * - fecha tentativa
 * - pax estimado
 */
export const MESSAGES = {
  hero:
    'Hola, quiero cotizar mi matrimonio en La Palma & El Tucán. Tenemos fecha tentativa: [fecha]. Aprox [X] invitados.',
  cotizacion:
    'Hola, quiero recibir propuesta para nuestro matrimonio. Fecha tentativa: [fecha]. Invitados estimados: [X]. Hospedaje para invitados: sí / no.',
  experiencia:
    'Hola, nos interesa cotizar un matrimonio con fin de semana completo (jueves/viernes a domingo) en La Palma & El Tucán. Fecha tentativa [fecha], [X] invitados.',
  ubicacion:
    'Hola, quiero coordinar visita a la finca con mi pareja para ver espacios antes de cotizar nuestro matrimonio. Fecha sugerida: [fecha].',
  faq:
    'Hola, tengo una pregunta antes de cotizar mi matrimonio en La Palma & El Tucán.',
  finalCta:
    'Hola, quiero cotizar mi matrimonio en La Palma & El Tucán. Tenemos fecha tentativa: [fecha]. Aprox [X] invitados.',
} as const;

export type MessageKey = keyof typeof MESSAGES;
