import React from 'react';
import { Droplets, CloudRain, AlertTriangle, ArrowRight, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, trackEvent } from '../utils/analytics';

export const ProblemSection: React.FC = () => {
  const handleWhatsApp = () => {
    trackEvent('whatsapp_click', { ubicacion: 'problema' });
  };

  const cards = [
    {
      icon: <Droplets className="w-7 h-7 text-[#F15808]" />,
      title: 'Cada lluvia entra más agua',
      desc: 'La gotera de hoy termina dañando cielos, muros y la instalación eléctrica.',
    },
    {
      icon: <CloudRain className="w-7 h-7 text-[#F15808]" />,
      title: 'Canaletas tapadas o rotas',
      desc: 'El agua cae por los muros y llega a las fundaciones de tu casa o negocio.',
    },
    {
      icon: <AlertTriangle className="w-7 h-7 text-[#F15808]" />,
      title: 'Planchas sueltas o pizarreño viejo',
      desc: 'Mientras más esperas, más cara sale la reparación por filtraciones acumuladas.',
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FEF1E4] text-[#353535] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left / Main text & cards */}
          <div className="lg:col-span-7">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#F15808] mb-3">
              Evita daños mayores en tu propiedad
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E1E1E] leading-tight mb-8">
              ¿Goteras, manchas de humedad o canaletas que rebalsan?
            </h2>

            {/* 3 Problem Cards */}
            <div className="space-y-4 mb-8">
              {cards.map((card, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-5 bg-white rounded-[6px] border border-[#F15808]/20 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-2.5 rounded-[6px] bg-[#FEF1E4] border border-[#F15808]/30 shrink-0">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1E1E1E] mb-1">
                      {card.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#353535] leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Cierre */}
            <div className="p-5 bg-white/80 rounded-[6px] border-l-4 border-[#F15808] mb-8">
              <p className="text-base sm:text-lg font-semibold text-[#1E1E1E]">
                Lo revisamos, te decimos si conviene reparar o cambiar, y lo dejamos listo en días.
              </p>
            </div>

            {/* WhatsApp CTA */}
            <div>
              <a
                href={getWhatsAppUrl(
                  'Hola Construtec, quiero que revisen mi techo por goteras o canaletas. Mi comuna es: '
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-2.5 bg-[#F15808] hover:bg-[#FF6210] active:scale-[0.98] text-white text-base sm:text-lg font-bold px-7 py-3.5 rounded-[6px] transition-all shadow-lg shadow-[#F15808]/25 group"
              >
                <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>Quiero que revisen mi techo</span>
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Image (Desktop) */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="relative rounded-[8px] overflow-hidden shadow-2xl border-2 border-white/60 group">
              <img
                src="https://construtec.cl/wp-content/uploads/2024/07/reparacion-de-techo-500x700-1.webp"
                alt="Técnico especialista de Construtec revisando techumbre en Santiago"
                className="w-full h-auto object-cover max-h-[580px] transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                width="500"
                height="700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 bg-[#1E1E1E]/90 backdrop-blur-sm p-4 rounded-[6px] text-white border border-white/10">
                <p className="text-xs font-medium text-[#F15808] uppercase tracking-wider mb-1">
                  Diagnóstico en terreno
                </p>
                <p className="text-sm font-semibold">
                  Detectamos el origen real de la filtración antes de que rompa tu cielo raso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
