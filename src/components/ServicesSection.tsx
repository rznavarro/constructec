import React, { useState } from 'react';
import {
  Hammer,
  ShieldAlert,
  ArrowUpRight,
  MessageCircle,
  Zap,
  CheckCircle,
  Cpu,
  Video,
  Radio,
  SlidersHorizontal,
  Wifi,
  Shield,
  Layers,
} from 'lucide-react';
import { getWhatsAppUrl, trackEvent } from '../utils/analytics';

export const ServicesSection: React.FC = () => {
  const [activeChip, setActiveChip] = useState<string | null>(null);

  const mainServices = [
    {
      title: 'Reparación y cambio de techo',
      desc: 'Reparamos o cambiamos techos dañados para que aguanten lluvia, viento y sol.',
      img: 'https://construtec.cl/wp-content/uploads/2024/07/reparacion-de-techo-1-700x500-1.webp',
      alt: 'Reparación y cambio de techumbres en Santiago',
      serviceQuery: 'Reparación y cambio de techo',
      materials: 'Zinc, Zinc-Alum, Tejas y Pizarreño',
    },
    {
      title: 'Instalación y cambio de canaletas',
      desc: 'Canales y bajadas a medida para que el agua de lluvia salga por donde debe.',
      img: 'https://construtec.cl/wp-content/uploads/2024/07/instalacion-de-canaleta-1-700x500-1.webp',
      alt: 'Instalación y cambio de hojalatería y canaletas en Santiago',
      serviceQuery: 'Instalación y cambio de canaletas',
      materials: 'Hojalatería a medida y bajadas EPDM',
    },
    {
      title: 'Impermeabilización de techos',
      desc: 'Membranas y sellos que cortan filtraciones y humedad en todo tipo de techo.',
      img: 'https://construtec.cl/wp-content/uploads/2024/07/impermeabilizacion-de-techo-1-700x500-1.webp',
      alt: 'Impermeabilización con membranas hidrófugas en Santiago',
      serviceQuery: 'Impermeabilización de techos',
      materials: 'Membranas asfálticas y sellos hidrófugos',
    },
    {
      title: 'Servicios eléctricos',
      desc: 'Instalaciones seguras para hogares y negocios.',
      img: 'https://construtec.cl/wp-content/uploads/2024/07/reparacion-electrica-700x500-1.png',
      alt: 'Servicios e instalaciones eléctricas certificadas en Santiago',
      serviceQuery: 'Servicios eléctricos',
      materials: 'Tableros, cableados y automatización',
    },
  ];

  const electricChips = [
    {
      name: 'Remodelación eléctrica',
      icon: <Zap className="w-4 h-4" />,
      img: 'https://construtec.cl/wp-content/uploads/2024/07/reparacion-electrica-700x500-1.png',
    },
    {
      name: 'Tableros de automatización',
      icon: <SlidersHorizontal className="w-4 h-4" />,
      img: 'https://construtec.cl/wp-content/uploads/2024/07/tablero-automatizacion-700x500-1.png',
    },
    {
      name: 'Portones eléctricos',
      icon: <Cpu className="w-4 h-4" />,
      img: 'https://construtec.cl/wp-content/uploads/2024/07/porton-electrico-700x500-1.png',
    },
    {
      name: 'Cámaras de seguridad',
      icon: <Video className="w-4 h-4" />,
      img: 'https://construtec.cl/wp-content/uploads/2024/07/camara-de-seguridad-700x500-1.png',
    },
    {
      name: 'Citófonos',
      icon: <Radio className="w-4 h-4" />,
      img: 'https://construtec.cl/wp-content/uploads/2024/07/instalacion-de-citofono-700x500-1.png',
    },
    {
      name: 'Cercos eléctricos',
      icon: <Shield className="w-4 h-4" />,
      img: 'https://construtec.cl/wp-content/uploads/2024/07/cerco-electrico-700x500-1.png',
    },
    {
      name: 'Redes de internet',
      icon: <Wifi className="w-4 h-4" />,
      img: 'https://construtec.cl/wp-content/uploads/2024/07/servicio-de-red-700x500-1.png',
    },
  ];

  const handleServiceClick = (serviceTitle: string) => {
    trackEvent('whatsapp_click', {
      ubicacion: 'servicios',
      servicio: serviceTitle,
    });
  };

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-[#1E1E1E] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#F15808] mb-2">
            Especialistas en techumbre y hojalatería
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FEF1E4] mb-4">
            Lo que hacemos por tu techo
          </h2>
          <p className="text-base sm:text-lg text-[#FEF1E4]/80 leading-relaxed">
            Trabajamos zinc, Zinc-Alum, planchas metálicas, tejas, reemplazo de pizarreño
            y cubiertas de galpones en toda la Región Metropolitana.
          </p>
        </div>

        {/* 4 Main Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {mainServices.map((service, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between bg-[#272727] rounded-[6px] overflow-hidden border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 hover:border-[#F15808]/40 relative"
            >
              {/* Card Image */}
              <div className="relative aspect-[7/5] w-full overflow-hidden bg-black/40">
                <img
                  src={service.img}
                  alt={service.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width="700"
                  height="500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#272727] via-transparent to-transparent opacity-60" />
                <span className="absolute top-3 left-3 bg-[#1E1E1E]/90 backdrop-blur-sm text-[#F15808] text-[11px] font-bold px-2 py-0.5 rounded border border-white/10 uppercase tracking-wider">
                  Servicio 0{idx + 1}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#FEF1E4] mb-2 group-hover:text-[#F15808] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#FEF1E4]/75 mb-4 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <span className="text-[11px] font-medium text-[#A6A6A6] block mb-3">
                    Materiales: {service.materials}
                  </span>
                  <a
                    href={getWhatsAppUrl(
                      `Hola Construtec, quiero cotizar el servicio de ${service.serviceQuery}. Mi comuna es: `
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleServiceClick(service.title)}
                    className="inline-flex items-center justify-between w-full text-sm font-bold text-[#F15808] hover:text-[#FF6210] group-hover:underline decoration-[#F15808] underline-offset-4 py-1"
                  >
                    <span>Cotizar este servicio</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>

              {/* Bottom orange accent bar appearing on hover */}
              <div className="h-1 w-0 bg-[#F15808] transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Secondary Block: "También hacemos trabajos eléctricos" */}
        <div className="bg-[#272727]/70 border border-white/10 rounded-[8px] p-6 sm:p-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div>
              <h3 className="text-xl font-bold text-[#FEF1E4] flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#F15808]" />
                También hacemos trabajos eléctricos integrales
              </h3>
              <p className="text-xs sm:text-sm text-[#A6A6A6] mt-1">
                Complementamos techumbres e instalaciones con soluciones eléctricas seguras y garantizadas.
              </p>
            </div>
            <span className="text-xs text-[#FEF1E4]/60 font-mono">
              Hogares, locales comerciales y galpones
            </span>
          </div>

          {/* Chips */}
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {electricChips.map((chip, idx) => (
              <a
                key={idx}
                href={getWhatsAppUrl(
                  `Hola Construtec, quiero cotizar el servicio eléctrico: ${chip.name}. Mi comuna es: `
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleServiceClick(chip.name)}
                onMouseEnter={() => setActiveChip(chip.name)}
                onMouseLeave={() => setActiveChip(null)}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-[6px] bg-[#1E1E1E] hover:bg-[#F15808] hover:text-white text-xs sm:text-sm font-semibold text-[#FEF1E4] border border-white/10 transition-all duration-200 group"
              >
                <span className="text-[#F15808] group-hover:text-white transition-colors">
                  {chip.icon}
                </span>
                <span>{chip.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>

          {/* Material Quality & Suppliers strip */}
          <div className="mt-6 pt-5 border-t border-white/5 flex flex-wrap items-center justify-between text-xs text-[#A6A6A6] gap-3">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-[#F15808]" />
              Materiales certificados Cintac y Volcán
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-[#F15808]" />
              Tornillería autoperforante con sello EPDM
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-[#F15808]" />
              Hojalatería a medida para canales y bajadas
            </span>
          </div>
        </div>

        {/* Section End CTA */}
        <div className="text-center pt-4">
          <a
            href={getWhatsAppUrl(
              'Hola Construtec, quiero cotizar un servicio para mi techo o propiedad. Mi comuna es: '
            )}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleServiceClick('Boton seccion servicios')}
            className="inline-flex items-center gap-2.5 bg-[#F15808] hover:bg-[#FF6210] active:scale-[0.98] text-white text-base sm:text-lg font-bold px-8 py-3.5 rounded-[6px] transition-all shadow-lg shadow-[#F15808]/25"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Cotizar servicios por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
