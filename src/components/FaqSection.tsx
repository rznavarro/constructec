import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, trackEvent } from '../utils/analytics';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const faqs = [
    {
      q: '¿Conviene reparar o cambiar el techo?',
      a: 'Si el daño supera cerca del 30% de la superficie o la estructura de base está podrida, conviene cambiarlo. Si no, una reparación bien hecha es suficiente. Lo definimos en la visita técnica.',
    },
    {
      q: '¿Cuánto demora el trabajo?',
      a: 'Una reparación estándar toma entre 1 y 3 días. Un cambio de techo completo, entre 5 y 10 días hábiles.',
    },
    {
      q: '¿Qué material de techo conviene en Santiago?',
      a: 'Recomendamos Zinc-Alum con pintura arquitectónica por su duración y resistencia al clima de la zona central.',
    },
    {
      q: '¿Atienden emergencias cuando está lloviendo?',
      a: 'Sí. Hacemos un sellado provisorio para cortar la filtración y la solución definitiva cuando la superficie está seca.',
    },
    {
      q: '¿En qué comunas trabajan y cuánto cuesta la visita?',
      a: 'Trabajamos en Santiago y toda la Región Metropolitana. La visita técnica y el presupuesto son sin compromiso.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleWhatsApp = () => {
    trackEvent('whatsapp_click', { ubicacion: 'preguntas' });
  };

  return (
    <section id="preguntas" className="py-20 lg:py-28 bg-[#1E1E1E] text-white border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#272727] border border-[#F15808]/30 text-xs font-bold uppercase text-[#F15808] mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Respuestas claras</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FEF1E4]">
            Preguntas frecuentes sobre reparación de techos en Santiago
          </h2>
          <p className="text-sm sm:text-base text-[#FEF1E4]/70 mt-3">
            Todo lo que necesitas saber antes de contratar el arreglo de tu techumbre.
          </p>
        </div>

        {/* Accessible Accordion */}
        <div className="space-y-3.5 mb-12">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#272727] rounded-[6px] border border-white/10 overflow-hidden transition-colors hover:border-[#F15808]/40"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-question-${idx}`}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#FEF1E4] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F15808] group"
                >
                  <span className="group-hover:text-[#F15808] transition-colors">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white/5 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#F15808] text-white' : 'text-[#A6A6A6]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <div
                  id={`faq-answer-${idx}`}
                  role="region"
                  aria-labelledby={`faq-question-${idx}`}
                  className={`px-5 sm:px-6 transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-72 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'
                  }`}
                >
                  <div className="pt-2 border-t border-white/5">
                    <p className="text-sm sm:text-base text-[#FEF1E4]/85 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section End CTA */}
        <div className="text-center p-6 bg-[#272727]/60 rounded-[8px] border border-white/5">
          <p className="text-sm sm:text-base text-[#FEF1E4] mb-4">
            ¿Tienes otra duda sobre tu techo o necesitas una visita técnica urgente?
          </p>
          <a
            href={getWhatsAppUrl(
              'Hola Construtec, tengo una consulta sobre mi techo. Mi comuna es: '
            )}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-2.5 bg-[#F15808] hover:bg-[#FF6210] active:scale-[0.98] text-white text-sm sm:text-base font-bold px-7 py-3 rounded-[6px] transition-all shadow-md shadow-[#F15808]/20"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
