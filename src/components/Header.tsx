import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import {
  PHONE_NUMBER,
  PHONE_TEL,
  getWhatsAppUrl,
  trackEvent,
} from '../utils/analytics';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    trackEvent('whatsapp_click', { ubicacion: 'header' });
  };

  const handlePhoneClick = () => {
    trackEvent('phone_click', { ubicacion: 'header' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#1E1E1E]/95 backdrop-blur-md py-2.5 shadow-lg shadow-black/30 border-b border-[#272727]'
          : 'bg-[#1E1E1E]/80 backdrop-blur-sm py-4 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center group transition-transform focus:outline-none focus:ring-2 focus:ring-[#F15808] rounded"
          aria-label="Construtec - Inicio"
        >
          <div className="bg-white/95 px-2.5 py-1.5 rounded-[6px] shadow-sm flex items-center justify-center">
            <img
              src="https://construtec.cl/wp-content/uploads/2024/07/imagotipo-construtec-500x140-.png"
              alt="Logo Construtec - Reparación de techos y canaletas"
              className={`w-auto object-contain transition-all duration-300 ${
                scrolled ? 'h-7 md:h-8' : 'h-8 md:h-10'
              }`}
              width="150"
              height="42"
            />
          </div>
        </a>

        {/* Desktop Anchor Menu */}
        <nav
          className="hidden lg:flex items-center space-x-6 text-sm font-medium text-[#FEF1E4]/90"
          aria-label="Navegación principal"
        >
          <a
            href="#servicios"
            className="hover:text-[#F15808] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#F15808] hover:after:w-full after:transition-all"
          >
            Servicios
          </a>
          <a
            href="#como-trabajamos"
            className="hover:text-[#F15808] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#F15808] hover:after:w-full after:transition-all"
          >
            Cómo trabajamos
          </a>
          <a
            href="#opiniones"
            className="hover:text-[#F15808] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#F15808] hover:after:w-full after:transition-all"
          >
            Opiniones
          </a>
          <a
            href="#preguntas"
            className="hover:text-[#F15808] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#F15808] hover:after:w-full after:transition-all"
          >
            Preguntas
          </a>
          <a
            href="#contacto"
            className="hover:text-[#F15808] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#F15808] hover:after:w-full after:transition-all"
          >
            Contacto
          </a>
        </nav>

        {/* Desktop Right CTAs */}
        <div className="hidden sm:flex items-center space-x-4">
          <a
            href={PHONE_TEL}
            onClick={handlePhoneClick}
            className="flex items-center gap-1.5 text-sm font-semibold text-[#FEF1E4] hover:text-[#F15808] transition-colors px-2 py-1 rounded focus:ring-2 focus:ring-[#F15808]"
            title="Llamar a Construtec"
          >
            <Phone className="w-4 h-4 text-[#F15808]" />
            <span>{PHONE_NUMBER}</span>
          </a>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="inline-flex items-center gap-2 bg-[#F15808] hover:bg-[#FF6210] active:scale-[0.98] text-white text-sm font-bold px-4 py-2 rounded-[6px] transition-all shadow-md shadow-[#F15808]/20 focus:ring-2 focus:ring-[#F15808]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Cotizar por WhatsApp</span>
          </a>
        </div>

        {/* Mobile Compact Bar (Logo + Phone + Compact WhatsApp) */}
        <div className="flex sm:hidden items-center space-x-2">
          <a
            href={PHONE_TEL}
            onClick={handlePhoneClick}
            aria-label="Llamar a Construtec por teléfono"
            className="p-2 text-[#FEF1E4] hover:text-[#F15808] rounded-full border border-white/10 active:bg-white/10"
          >
            <Phone className="w-4 h-4 text-[#F15808]" />
          </a>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            aria-label="Cotizar por WhatsApp"
            className="inline-flex items-center gap-1.5 bg-[#F15808] active:bg-[#FF6210] text-white text-xs font-bold px-3 py-1.5 rounded-[6px] shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Cotizar</span>
          </a>
        </div>
      </div>
    </header>
  );
};
