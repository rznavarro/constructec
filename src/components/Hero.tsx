import React from 'react';
import { MessageCircle, Phone, CheckCircle2, ShieldCheck, Clock, Zap } from 'lucide-react';
import {
  PHONE_NUMBER,
  PHONE_TEL,
  getWhatsAppUrl,
  trackEvent,
} from '../utils/analytics';

export const Hero: React.FC = () => {
  const handleWhatsApp = () => {
    trackEvent('whatsapp_click', { ubicacion: 'hero' });
  };

  const handlePhone = () => {
    trackEvent('phone_click', { ubicacion: 'hero' });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24 bg-[#1E1E1E] overflow-hidden">
      {/* Background with Ken Burns slow zoom */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="https://construtec.cl/wp-content/uploads/2024/07/Arreglo-techo-1920x1080-_1_.webp"
          alt="Reparación de techos y hojalatería en Santiago"
          className="w-full h-full object-cover object-center animate-kenburns origin-center opacity-45"
          fetchPriority="high"
          width="1920"
          height="1080"
        />
        {/* Dark directional gradient overlay (90% left to transparent right) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(30,30,30,0.96) 0%, rgba(30,30,30,0.88) 55%, rgba(30,30,30,0.5) 100%)',
          }}
        />
        {/* Atmospheric subtle rain layer */}
        <div className="absolute inset-0 rain-overlay opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Top Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[4px] bg-[#272727]/90 border border-[#F15808]/40 mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#F15808] animate-ping" />
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#F15808]">
              TECHOS · CANALETAS · IMPERMEABILIZACIÓN — SANTIAGO Y RM
            </span>
          </div>

          {/* H1 (Single H1 on the entire page) */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-[#FEF1E4] leading-[1.12] mb-6 tracking-tight">
            Reparación de techos y canaletas en Santiago,{' '}
            <span className="text-[#F15808] drop-shadow-sm">sin goteras</span> y con{' '}
            <span className="underline decoration-[#F15808]/60 underline-offset-8">
              garantía por escrito
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-[#FEF1E4]/90 font-normal leading-relaxed mb-8 max-w-2xl">
            Reparamos, cambiamos e impermeabilizamos techos de casas, galpones y locales
            en toda la Región Metropolitana. Te visitamos y te damos un{' '}
            <strong className="text-white font-semibold">presupuesto sin compromiso</strong>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsApp}
              className="inline-flex items-center justify-center gap-3 bg-[#F15808] hover:bg-[#FF6210] active:scale-[0.98] text-white text-base sm:text-lg font-bold px-7 py-4 rounded-[6px] transition-all shadow-xl shadow-[#F15808]/30 group"
            >
              <MessageCircle className="w-6 h-6 transition-transform group-hover:rotate-6" />
              <span>Cotizar gratis por WhatsApp</span>
            </a>

            <a
              href={PHONE_TEL}
              onClick={handlePhone}
              className="inline-flex items-center justify-center gap-2.5 bg-transparent hover:bg-white/10 active:scale-[0.98] text-[#FEF1E4] border-2 border-white/80 hover:border-white text-base sm:text-lg font-semibold px-6 py-3.5 rounded-[6px] transition-all"
            >
              <Phone className="w-5 h-5 text-[#F15808]" />
              <span>Llamar al {PHONE_NUMBER}</span>
            </a>
          </div>

          {/* Trust Row (3 items) */}
          <div className="pt-6 border-t border-white/10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 bg-[#272727]/60 border border-white/5 rounded-[6px] p-3">
                <CheckCircle2 className="w-5 h-5 text-[#F15808] shrink-0" />
                <span className="text-sm font-semibold text-[#FEF1E4]">
                  Más de 5 años de experiencia
                </span>
              </div>

              <div className="flex items-center gap-3 bg-[#272727]/60 border border-white/5 rounded-[6px] p-3">
                <ShieldCheck className="w-5 h-5 text-[#F15808] shrink-0" />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-[#FEF1E4]">
                    Garantía por escrito
                  </span>
                  <span className="text-[11px] text-[#A6A6A6]">
                    y servicio post-venta garantizado
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-[#272727]/60 border border-white/5 rounded-[6px] p-3">
                <Zap className="w-5 h-5 text-[#F15808] shrink-0" />
                <span className="text-sm font-semibold text-[#FEF1E4]">
                  Atendemos emergencias con lluvia
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
