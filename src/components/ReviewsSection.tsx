import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote, MessageCircle, ExternalLink } from 'lucide-react';
import { getWhatsAppUrl, trackEvent } from '../utils/analytics';

export const ReviewsSection: React.FC = () => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) {
      setCount(5);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let current = 0;
          const target = 5;
          const interval = setInterval(() => {
            current += 1;
            setCount(current);
            if (current >= target) {
              clearInterval(interval);
            }
          }, 180);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const handleWhatsApp = () => {
    trackEvent('whatsapp_click', { ubicacion: 'opiniones' });
  };

  const reviews = [
    {
      text: 'Excelente trabajo, el techo de mi casa quedó sin goteras, el arreglo fue rápido, muy profesionales.',
      author: 'Miguel Fuentealba',
      service: 'Reparación de techo',
    },
    {
      text: 'Necesitaba nuevas canaletas para mi casa, quedaron perfectas, buen trabajo.',
      author: 'Jorge Matamala',
      service: 'Instalación de canaletas',
    },
    {
      text: 'El techo de mi galpón quedó perfecto, fue una buena inversión, muy profesionales.',
      author: 'Andrea Riquelme',
      service: 'Impermeabilización de techo',
    },
    {
      text: 'Precio justo y buen trabajo. Sacaron el techo viejo y pusieron uno nuevo, quedó súper.',
      author: 'Fernanda Valdebenito',
      service: 'Reparación de techo',
    },
    {
      text: 'La mejor opción precio calidad, sacaron las canaletas antiguas y pusieron una nueva, buen trabajo.',
      author: 'Michelle Garrido',
      service: 'Cambio de canaletas',
    },
    {
      text: 'El trabajo fue rápido y con buen precio, el techo quedó impermeabilizado como quería, nada que decir.',
      author: 'Alexander Quevedo',
      service: 'Impermeabilización de techo',
    },
  ];

  return (
    <section
      id="opiniones"
      ref={sectionRef}
      className="py-20 lg:py-24 bg-[#1E1E1E] text-white border-t border-white/5 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header with Animated Stat */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-white/10">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#F15808] mb-2">
              Opiniones 100% reales de clientes
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FEF1E4]">
              Lo que dicen nuestros clientes
            </h2>
          </div>

          {/* Animated 5+ Years Badge */}
          <div className="inline-flex items-center gap-4 bg-[#272727] px-5 py-3 rounded-[8px] border border-[#F15808]/30 shrink-0">
            <span className="text-4xl font-extrabold text-[#F15808] font-mono leading-none">
              +{count}
            </span>
            <div className="text-xs sm:text-sm text-[#FEF1E4] leading-tight font-medium">
              años reparando techos
              <span className="block text-[#A6A6A6]">en Santiago y RM</span>
            </div>
          </div>
        </div>

        {/* 6 Reviews Grid (Horizontal snap scroll on mobile, 3 cols on desktop) */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 snap-x snap-mandatory scrollbar-thin">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="min-w-[280px] sm:min-w-[320px] md:min-w-0 snap-start bg-[#272727] p-6 rounded-[6px] border border-white/5 flex flex-col justify-between hover:border-[#F15808]/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#F15808]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F15808]" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-white/20" />
                </div>
                <p className="text-sm sm:text-base text-[#FEF1E4]/90 italic leading-relaxed mb-5">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[#FEF1E4]">
                    {rev.author}
                  </h3>
                  <p className="text-xs text-[#F15808] font-medium">
                    {rev.service}
                  </p>
                </div>
                <span className="text-[11px] font-mono text-[#A6A6A6]">
                  Santiago
                </span>
              </div>
            </div>
          ))}
        </div>



        {/* Section End CTA */}
        <div className="mt-10 text-center">
          <a
            href={getWhatsAppUrl(
              'Hola Construtec, quiero cotizar un trabajo para mi techo con las mismas garantías. Mi comuna es: '
            )}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-2.5 bg-[#F15808] hover:bg-[#FF6210] active:scale-[0.98] text-white text-base sm:text-lg font-bold px-8 py-3.5 rounded-[6px] transition-all shadow-lg shadow-[#F15808]/25"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Cotizar mi techo</span>
          </a>
        </div>
      </div>
    </section>
  );
};
