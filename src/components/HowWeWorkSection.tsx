import React from 'react';
import {
  MessageSquare,
  ClipboardCheck,
  ShieldCheck,
  AlertOctagon,
  ArrowRight,
  Zap,
} from 'lucide-react';
import {
  WHATSAPP_EMERGENCY_TEXT,
  getWhatsAppUrl,
  trackEvent,
} from '../utils/analytics';

export const HowWeWorkSection: React.FC = () => {
  const handleEmergencyClick = () => {
    trackEvent('whatsapp_click', {
      ubicacion: 'emergencia',
      motivo: 'emergencia_lluvia',
    });
  };

  const steps = [
    {
      num: '01',
      icon: <MessageSquare className="w-6 h-6 text-[#F15808]" />,
      title: 'Escríbenos por WhatsApp',
      desc: 'Cuéntanos qué pasa y en qué comuna estás. Si puedes, manda una foto del techo o de la gotera para darte una orientación rápida.',
    },
    {
      num: '02',
      icon: <ClipboardCheck className="w-6 h-6 text-[#F15808]" />,
      title: 'Visita y presupuesto sin compromiso',
      desc: 'Revisamos el techo, detectamos daños ocultos y te entregamos un presupuesto detallado con alternativas de reparación o cambio.',
    },
    {
      num: '03',
      icon: <ShieldCheck className="w-6 h-6 text-[#F15808]" />,
      title: 'Trabajo terminado con garantía',
      desc: 'Hacemos el trabajo, probamos que no entre agua y te dejamos la garantía por escrito con servicio post-venta garantizado.',
    },
  ];

  return (
    <section id="como-trabajamos" className="py-20 lg:py-28 bg-[#FEF1E4] text-[#353535] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#F15808] mb-2">
            Proceso transparente y sin sorpresas
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E1E1E]">
            Así de simple, en 3 pasos
          </h2>
          <p className="text-base sm:text-lg text-[#353535] mt-3">
            Desde el primer mensaje hasta la prueba de estanqueidad de tu techumbre.
          </p>
        </div>

        {/* 3 Steps with visual connecting line */}
        <div className="relative mb-16">
          {/* Desktop Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-[#F15808]/20 via-[#F15808] to-[#F15808]/20 -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-[8px] border border-[#F15808]/20 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-[6px] bg-[#FEF1E4] border border-[#F15808]/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>
                    <span className="text-3xl font-extrabold font-mono text-[#F15808]/30 group-hover:text-[#F15808] transition-colors">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#1E1E1E] mb-3 group-hover:text-[#F15808] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#353535] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#FEF1E4] flex items-center text-xs font-semibold text-[#F15808]">
                  <span>Paso {idx + 1} de 3</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlight Emergency Box */}
        <div className="bg-white rounded-[8px] border-2 border-[#F15808] p-6 sm:p-8 shadow-xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-4">
              <div className="p-3 bg-[#F15808]/10 text-[#F15808] rounded-[6px] shrink-0">
                <AlertOctagon className="w-8 h-8" />
              </div>
              <div>
                <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-[#F15808] mb-1">
                  Atención prioritaria ante lluvias
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#1E1E1E]">
                  ¿Te está entrando agua ahora?
                </h3>
                <p className="text-sm sm:text-base text-[#353535] mt-1 max-w-2xl font-medium">
                  Hacemos un{' '}
                  <strong className="text-[#1E1E1E]">sellado provisorio de emergencia</strong>{' '}
                  para cortar la gotera de inmediato y la{' '}
                  <strong className="text-[#1E1E1E]">reparación definitiva</strong> cuando el techo esté seco.
                </p>
              </div>
            </div>

            <a
              href={getWhatsAppUrl(WHATSAPP_EMERGENCY_TEXT)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleEmergencyClick}
              className="inline-flex items-center justify-center gap-2.5 bg-[#F15808] hover:bg-[#FF6210] active:scale-[0.98] text-white text-base sm:text-lg font-extrabold px-8 py-4 rounded-[6px] transition-all shadow-lg shadow-[#F15808]/30 shrink-0 w-full lg:w-auto"
            >
              <Zap className="w-5 h-5 fill-white" />
              <span>Tengo una emergencia</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
