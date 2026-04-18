'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, Award } from 'lucide-react';
import { cloudinaryPath, ASSET_ALT } from '@/lib/cloudinary';
import {
  buildWhatsAppUrl,
  MESSAGES,
  WHATSAPP_NUMBER_DISPLAY,
  RESERVATIONS_EMAIL,
} from '@/lib/whatsapp';

/**
 * CTA final envolvente.
 * Copy final canibalizado del BRIEF: "Cotizar Matrimonio por WhatsApp".
 *
 * NO muestra precio (ticket $46M COP — venta consultiva).
 * Enfatiza WBC 2019 + SLA <2h (mejoras #1 y #3).
 */
export default function CTAFinal() {
  const bg = cloudinaryPath('cafetales');
  const waLink = buildWhatsAppUrl(MESSAGES.finalCta, 'cta-final');

  return (
    <section
      id="cta-final"
      className="relative py-24 sm:py-36 overflow-hidden bg-navy text-white"
      aria-labelledby="cta-final-heading"
    >
      {/* BG envolvente */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bg}
          alt={ASSET_ALT['cafetales']}
          fill
          sizes="100vw"
          loading="lazy"
          className="object-cover opacity-30 bw-wash"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/70 to-navy/95" />
        <div
          aria-hidden
          className="absolute inset-0 mix-blend-overlay opacity-40"
          style={{
            background:
              'radial-gradient(circle at 30% 30%, rgba(232,131,140,0.35), transparent 60%)',
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center"
      >
        <span className="inline-flex items-center gap-2 bg-pink/15 text-white px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.25em] font-bold mb-6 border border-pink/30">
          <Award className="w-3.5 h-3.5" />
          Origen del café campeón del WBC 2019
        </span>

        <h2
          id="cta-final-heading"
          className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight mb-6"
        >
          Tu matrimonio empieza con{' '}
          <span className="italic text-beige">un mensaje</span>.
        </h2>

        <p className="text-white/80 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10">
          A 90 minutos de Bogotá. Hasta 50 invitados. 20 cabañas privadas para
          tus huéspedes. Ceremonia entre cafetales, cena farm-to-table y el
          café que llevó a Jooyeon Jeon al título mundial de barista 2019 para
          el brindis. Respondemos en menos de 2 horas hábiles.
        </p>

        <div className="flex flex-col items-center gap-4">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shine-cta inline-flex items-center justify-center gap-3 bg-whatsapp hover:bg-whatsapp-700 text-white font-bold uppercase text-xs sm:text-sm tracking-widest px-10 sm:px-14 py-5 sm:py-6 rounded-xl shadow-2xl shadow-black/40 transition-transform active:scale-[0.98] hover:scale-[1.02] w-full sm:w-auto"
            aria-label="Cotizar matrimonio por WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
            Cotizar matrimonio por WhatsApp
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${RESERVATIONS_EMAIL}?subject=Cotización%20Matrimonio%20La%20Palma%20y%20El%20Tuc%C3%A1n`}
            className="text-white/70 hover:text-white text-xs uppercase tracking-widest underline-offset-4 hover:underline transition-colors"
          >
            O escríbenos a {RESERVATIONS_EMAIL}
          </a>

          <span className="text-white/50 text-[11px] sm:text-xs mt-2">
            WhatsApp {WHATSAPP_NUMBER_DISPLAY} · Respondemos en &lt; 2h hábiles
            · 8am-8pm
          </span>
        </div>
      </motion.div>
    </section>
  );
}
