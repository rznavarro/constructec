import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import {
  PHONE_NUMBER,
  PHONE_TEL,
  getWhatsAppUrl,
  trackEvent,
} from '../utils/analytics';

export const FloatingActions: React.FC = () => {
  const handleFloatingWhatsApp = () => {
    trackEvent('whatsapp_click', { ubicacion: 'flotante' });
  };

  const handleMobileWhatsApp = () => {
    trackEvent('whatsapp_click', { ubicacion: 'barra_movil' });
  };

  const handleMobilePhone = () => {
    trackEvent('phone_click', { ubicacion: 'barra_movil' });
  };

  return (
    <>
      {/* Floating WhatsApp Button (Desktop & Mobile) - positioned bottom-right with 6s soft pulse */}
      <aside
        aria-label="Contacto rápido por WhatsApp"
        className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-50 flex items-center group"
      >
        <span className="hidden md:inline-block mr-2.5 px-3 py-1.5 bg-[#1E1E1E] text-[#FEF1E4] text-xs font-bold rounded-full shadow-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          ¿Tienes goteras? Cotiza en 1 min
        </span>

        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleFloatingWhatsApp}
          aria-label="Escribir por WhatsApp a Construtec para cotizar reparación de techo"
          className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl transition-all duration-300 animate-soft-pulse hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        >
          <MessageCircle className="w-8 h-8 fill-current stroke-none" />
        </a>
      </aside>

      {/* Mobile Fixed Bottom Bar (Screens < 768px) */}
      <div className="fixed md:hidden bottom-0 left-0 right-0 z-40 bg-[#1E1E1E]/95 backdrop-blur-md border-t border-white/15 px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-2xl">
        <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
          {/* Secondary Button: Call (Outline) */}
          <a
            href={PHONE_TEL}
            onClick={handleMobilePhone}
            aria-label="Llamar a Construtec por teléfono"
            className="flex items-center justify-center gap-2 py-3 px-3 rounded-[6px] border border-white/70 hover:border-white bg-[#272727] text-white text-sm font-bold active:scale-[0.98] transition-all min-h-[44px]"
          >
            <Phone className="w-4 h-4 text-[#F15808]" />
            <span>Llamar</span>
          </a>

          {/* Primary Button: WhatsApp (Orange #F15808) */}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleMobileWhatsApp}
            aria-label="Cotizar por WhatsApp a Construtec"
            className="flex items-center justify-center gap-2 py-3 px-3 rounded-[6px] bg-[#F15808] hover:bg-[#FF6210] text-white text-sm font-bold shadow-md shadow-[#F15808]/30 active:scale-[0.98] transition-all min-h-[44px]"
          >
            <MessageCircle className="w-4 h-4 fill-white stroke-none" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
};
