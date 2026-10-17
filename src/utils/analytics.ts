// Analytics event tracking for GA4 / GTM / dataLayer

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export type ClickLocation =
  | 'header'
  | 'hero'
  | 'problema'
  | 'servicios'
  | 'servicio_card'
  | 'opiniones'
  | 'como_trabajamos'
  | 'emergencia'
  | 'preguntas'
  | 'cta_final'
  | 'flotante'
  | 'barra_movil'
  | 'footer';

export const trackEvent = (
  eventName: 'whatsapp_click' | 'phone_click' | 'form_submit',
  params: Record<string, unknown>
) => {
  try {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: eventName,
        timestamp: new Date().toISOString(),
        ...params,
      });
      // Helpful log for debugging without cluttering UI
      console.info(`[Analytics] ${eventName}:`, params);
    }
  } catch (err) {
    console.error('Analytics tracking error:', err);
  }
};

export const WHATSAPP_BASE_URL = 'https://wa.me/56993658099';
export const WHATSAPP_DEFAULT_TEXT =
  'Hola Construtec, quiero cotizar un trabajo de techo. Mi comuna es: ';
export const WHATSAPP_EMERGENCY_TEXT =
  'Hola Construtec, tengo una emergencia: me está entrando agua. Mi comuna es: ';
export const PHONE_NUMBER = '+56 9 9365 8099';
export const PHONE_TEL = 'tel:+56993658099';
export const EMAIL_ADDRESS = 'info@construtec.cl';

export const getWhatsAppUrl = (text = WHATSAPP_DEFAULT_TEXT) => {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(text)}`;
};
