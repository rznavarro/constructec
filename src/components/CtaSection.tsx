import React, { useState } from 'react';
import {
  MessageCircle,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import {
  PHONE_NUMBER,
  PHONE_TEL,
  EMAIL_ADDRESS,
  WHATSAPP_BASE_URL,
  getWhatsAppUrl,
  trackEvent,
} from '../utils/analytics';

export const CtaSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Reparación o cambio de techo');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim()) {
      return;
    }

    trackEvent('form_submit', {
      servicio: service,
      nombre_longitud: name.trim().length,
    });

    const customText = `Hola Construtec, mi nombre es ${name.trim()}. Quiero cotizar: ${service}. Mi celular de contacto es ${phone.trim()}.`;
    const targetUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(customText)}`;

    // Set success UI state
    setSubmitted(true);

    // Open WhatsApp
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDirectWhatsApp = () => {
    trackEvent('whatsapp_click', { ubicacion: 'cta_final' });
  };

  const handlePhoneClick = () => {
    trackEvent('phone_click', { ubicacion: 'cta_final' });
  };

  return (
    <section
      id="contacto"
      className="py-20 lg:py-28 bg-gradient-to-b from-[#1E1E1E] via-[#241712] to-[#1E1E1E] text-white relative overflow-hidden"
    >
      {/* Background radial accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F15808]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading, Subtitle & Direct Action */}
          <div className="lg:col-span-6">
            <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-[#F15808] mb-3">
              Respuesta en menos de 10 minutos
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FEF1E4] leading-tight mb-6">
              Que la próxima lluvia te pille con el techo listo
            </h2>
            <p className="text-base sm:text-lg text-[#FEF1E4]/90 mb-8 leading-relaxed">
              Escríbenos hoy y coordinamos la{' '}
              <strong className="text-white font-bold">visita técnica sin compromiso</strong>.
              Revisamos la pendiente, sellos, tornillos y estado general de tus canaletas o cubierta.
            </p>

            {/* Direct WhatsApp Big Button */}
            <div className="mb-8">
              <a
                href={getWhatsAppUrl(
                  'Hola Construtec, quiero coordinar una visita técnica sin compromiso. Mi comuna es: '
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDirectWhatsApp}
                className="inline-flex items-center justify-center gap-3 bg-[#F15808] hover:bg-[#FF6210] active:scale-[0.98] text-white text-base sm:text-lg font-extrabold px-8 py-4 rounded-[6px] transition-all shadow-xl shadow-[#F15808]/30 w-full sm:w-auto"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Cotizar gratis por WhatsApp</span>
              </a>
            </div>

            {/* Support Line */}
            <div className="p-4 rounded-[6px] bg-[#272727]/80 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm text-[#FEF1E4]/90">
              <span className="font-semibold text-white">¿Prefieres llamar o escribir?</span>
              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
                <a
                  href={PHONE_TEL}
                  onClick={handlePhoneClick}
                  className="inline-flex items-center gap-1.5 text-[#F15808] hover:text-[#FF6210] font-bold"
                >
                  <Phone className="w-4 h-4" />
                  <span>{PHONE_NUMBER}</span>
                </a>
                <span className="text-white/20">|</span>
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="inline-flex items-center gap-1.5 text-[#FEF1E4] hover:text-[#F15808] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#F15808]" />
                  <span>{EMAIL_ADDRESS}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 3-Field Instant WhatsApp Form */}
          <div className="lg:col-span-6">
            <div className="bg-[#272727] rounded-[10px] p-7 sm:p-9 border border-[#F15808]/30 shadow-2xl shadow-black/60 relative">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div>
                  <h3 className="text-xl font-extrabold text-[#FEF1E4]">
                    Cotización Rápida
                  </h3>
                  <p className="text-xs text-[#A6A6A6] mt-0.5">
                    Completa 3 datos y abriremos WhatsApp con tu mensaje listo
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#F15808]/20 flex items-center justify-center text-[#F15808]">
                  <Send className="w-5 h-5" />
                </div>
              </div>

              {submitted ? (
                <div className="p-6 bg-white/5 rounded-[8px] border border-green-500/30 text-center animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">
                    ¡Solicitud iniciada!
                  </h4>
                  <p className="text-sm text-[#FEF1E4]/80 mb-5">
                    Se ha abierto WhatsApp con tu mensaje prellenado para coordinar tu visita técnica sin costo.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#F15808] hover:underline font-semibold"
                  >
                    Enviar otra consulta o modificar datos
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Field 1: Name */}
                  <div>
                    <label
                      htmlFor="form-name"
                      className="block text-xs font-bold uppercase tracking-wider text-[#FEF1E4] mb-1.5"
                    >
                      Nombre y Apellido <span className="text-[#F15808]">*</span>
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ej: Juan Pérez"
                      className="w-full bg-[#1E1E1E] text-white placeholder-gray-500 text-sm sm:text-base px-4 py-3 rounded-[6px] border border-white/15 focus:border-[#F15808] focus:ring-1 focus:ring-[#F15808] transition-colors"
                    />
                  </div>

                  {/* Field 2: Phone */}
                  <div>
                    <label
                      htmlFor="form-phone"
                      className="block text-xs font-bold uppercase tracking-wider text-[#FEF1E4] mb-1.5"
                    >
                      Celular de contacto <span className="text-[#F15808]">*</span>
                    </label>
                    <input
                      id="form-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+56 9 1234 5678"
                      className="w-full bg-[#1E1E1E] text-white placeholder-gray-500 text-sm sm:text-base px-4 py-3 rounded-[6px] border border-white/15 focus:border-[#F15808] focus:ring-1 focus:ring-[#F15808] transition-colors"
                    />
                  </div>

                  {/* Field 3: Service */}
                  <div>
                    <label
                      htmlFor="form-service"
                      className="block text-xs font-bold uppercase tracking-wider text-[#FEF1E4] mb-1.5"
                    >
                      Servicio requerido <span className="text-[#F15808]">*</span>
                    </label>
                    <select
                      id="form-service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-[#1E1E1E] text-white text-sm sm:text-base px-4 py-3 rounded-[6px] border border-white/15 focus:border-[#F15808] focus:ring-1 focus:ring-[#F15808] transition-colors"
                    >
                      <option value="Reparación o cambio de techo">
                        Reparación o cambio de techo
                      </option>
                      <option value="Canaletas">Canaletas y bajadas de agua</option>
                      <option value="Impermeabilización">Impermeabilización de techos</option>
                      <option value="Servicios eléctricos">Servicios eléctricos</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#F15808] hover:bg-[#FF6210] active:scale-[0.99] text-white text-base font-bold py-3.5 px-6 rounded-[6px] transition-all shadow-lg shadow-[#F15808]/30 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Enviar y cotizar</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-[#A6A6A6] text-center mt-3">
                    Al presionar "Enviar y cotizar" se abrirá WhatsApp con tus datos listos. No enviamos spam.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
