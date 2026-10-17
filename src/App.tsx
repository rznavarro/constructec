/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { ServicesSection } from './components/ServicesSection';
import { ReviewsSection } from './components/ReviewsSection';
import { HowWeWorkSection } from './components/HowWeWorkSection';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen bg-[#1E1E1E] text-[#FEF1E4] flex flex-col font-sans selection:bg-[#F15808] selection:text-white">
      {/* 4.0 Header Sticky */}
      <Header />

      <main className="flex-1">
        {/* 4.1 Hero */}
        <Hero />

        {/* 4.2 El problema (Fondo crema #FEF1E4) */}
        <ProblemSection />

        {/* 4.3 Servicios (Fondo oscuro #1E1E1E) */}
        <ServicesSection />

        {/* 4.4 Trabajos reales (Fondo crema):
            Regla explícita del metaprompt:
            "[FALTA: 6–8 fotos reales de trabajos de Construtec (techos, canaletas, impermeabilización), con comuna de cada trabajo].
             Mientras no estén, OCULTA esta sección (no uses fotos de stock como si fueran trabajos reales)."
            Por directriz, se mantiene oculta para no engañar al usuario con fotos de stock.
        */}

        {/* 4.5 Opiniones de clientes (Fondo oscuro #1E1E1E) */}
        <ReviewsSection />

        {/* 4.6 Cómo trabajamos (Fondo crema #FEF1E4) */}
        <HowWeWorkSection />

        {/* 4.7 Preguntas frecuentes (Fondo oscuro #1E1E1E) */}
        <FaqSection />

        {/* 4.8 CTA final + Formulario */}
        <CtaSection />
      </main>

      {/* 4.9 Footer */}
      <Footer />

      {/* Botón flotante WhatsApp + Barra inferior fija en móvil */}
      <FloatingActions />
    </div>
  );
}
