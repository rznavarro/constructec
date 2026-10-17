import React from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';
import {
  PHONE_NUMBER,
  PHONE_TEL,
  EMAIL_ADDRESS,
  getWhatsAppUrl,
  trackEvent,
} from '../utils/analytics';

export const Footer: React.FC = () => {
  const handleWhatsApp = () => {
    trackEvent('whatsapp_click', { ubicacion: 'footer' });
  };

  const handlePhone = () => {
    trackEvent('phone_click', { ubicacion: 'footer' });
  };

  return (
    <footer className="bg-[#1E1E1E] text-white pt-16 pb-24 md:pb-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Brand info */}
          <div className="lg:col-span-4">
            <div className="bg-white/95 inline-block px-3 py-2 rounded-[6px] mb-5 shadow-sm">
              <img
                src="https://construtec.cl/wp-content/uploads/2024/07/imagotipo-color-construtec-sitio-web-220x100-2.png"
                alt="Construtec Santiago"
                className="h-10 w-auto object-contain"
                loading="lazy"
                width="220"
                height="100"
              />
            </div>
            <p className="text-sm text-[#FEF1E4]/80 leading-relaxed mb-4">
              Reparación de techos, canaletas e impermeabilización en Santiago y la Región Metropolitana.
              Presupuestos sin compromiso y garantía por escrito.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#A6A6A6]">
              <ShieldCheck className="w-4 h-4 text-[#F15808]" />
              <span>Garantía por escrito y servicio post-venta garantizado</span>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3.5">
            <h3 className="text-base font-bold text-[#FEF1E4] uppercase tracking-wider mb-2">
              Contacto Directo
            </h3>
            <div>
              <a
                href={PHONE_TEL}
                onClick={handlePhone}
                className="inline-flex items-center gap-2.5 text-sm text-[#FEF1E4] hover:text-[#F15808] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#F15808] shrink-0" />
                <span>{PHONE_NUMBER}</span>
              </a>
            </div>

            <div>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-2.5 text-sm text-[#FEF1E4] hover:text-[#F15808] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#F15808] shrink-0" />
                <span>WhatsApp: {PHONE_NUMBER}</span>
              </a>
            </div>

            <div>
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="inline-flex items-center gap-2.5 text-sm text-[#FEF1E4] hover:text-[#F15808] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#F15808] shrink-0" />
                <span>{EMAIL_ADDRESS}</span>
              </a>
            </div>

            <div className="pt-2 text-xs text-[#A6A6A6] flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#F15808] shrink-0 mt-0.5" />
              <div>
                <span>Huelén 10, Santiago, Región Metropolitana</span>
              </div>
            </div>

            <div className="text-xs text-[#A6A6A6] flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#F15808] shrink-0" />
              <span>Lunes a Sábado · Emergencias por lluvia</span>
            </div>
          </div>

          {/* Zones & Value Details */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-base font-bold text-[#FEF1E4] uppercase tracking-wider mb-2">
              Cobertura en Toda la RM
            </h3>
            <p className="text-sm text-[#FEF1E4]/80 leading-relaxed">
              Atendemos todas las comunas de Santiago y alrededores: casas particulares, condominios residenciales, galpones industriales y locales comerciales.
            </p>

            <div className="pt-3 space-y-2 text-xs text-[#A6A6A6]">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#F15808]" />
                <span>Visita técnica y diagnóstico sin compromiso</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#F15808]" />
                <span>Sellado provisorio inmediato ante emergencias</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#F15808]" />
                <span>Instalación con hojalatería a medida y tornillos EPDM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A6A6A6] gap-4">
          <p>© 2026 Construtec. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <span>Materiales Cintac · Volcán · Sellos EPDM</span>
            <span>•</span>
            <span>Santiago, Chile</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
