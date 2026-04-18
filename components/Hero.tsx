'use client';

import { motion } from 'framer-motion';
import { MessageCircle, MapPin, ArrowRight, Award, Users } from 'lucide-react';
import Image from 'next/image';
import { cloudinaryPath, ASSET_ALT } from '@/lib/cloudinary';
import { buildWhatsAppUrl, MESSAGES } from '@/lib/whatsapp';

/**
 * Hero microbodas.
 *
 * Replica el patrón que converte 8,6% en la landing actual bodas.lapalmayeltucanhotel.com
 * + 3 mejoras:
 *   (1) WBC 2019 al frente (no "reconocida mundialmente" genérico)
 *   (2) Capacidad 50 pax (no 40 — Diego confirmó)
 *   (3) SLA <2h hábiles como badge visible
 *
 * Foto de apertura: cafetales con wash B/W sutil (como la landing actual usa en ceremonia).
 * No mostramos precio — venta consultiva, ticket promedio $46M COP.
 */
export default function Hero() {
  const heroSrc = cloudinaryPath('cafetales');

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-navy"
    >
      {/* BACKGROUND IMAGE — Cloudinary, LCP priority */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroSrc}
          alt={ASSET_ALT['cafetales']}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover bw-wash"
        />
        {/* Dual overlay: darker top for contrast, navy fade bottom */}
        <div className="absolute inset-0 bg-navy/55" />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-7xl px-5 sm:px-8 pt-28 sm:pt-24 pb-16 sm:pb-24">
        <div className="max-w-3xl">
          {/* Credential badge — WBC 2019 al frente (mejora #1) */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink text-white text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] font-semibold mb-6 shadow-lg shadow-pink/30"
          >
            <Award className="w-3.5 h-3.5" />
            Origen del café · Campeona mundial de baristas 2019
          </motion.div>

          {/* H1 — resuelve la pregunta de apertura de microbodas (capacidad + buyout) */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-5 sm:mb-7"
          >
            Matrimonios íntimos{' '}
            <span className="italic text-beige">en una finca cafetera</span>{' '}
            reconocida mundialmente.
          </motion.h1>

          {/* Subhead — canibalizado literal de la landing actual + refuerzo capacidad */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/90 text-lg sm:text-xl md:text-2xl font-light leading-relaxed mb-8 max-w-2xl"
          >
            Hasta{' '}
            <strong className="text-white font-medium">50 invitados</strong>.
            Ceremonia entre cafetales, cena farm-to-table y{' '}
            <strong className="text-white font-medium">20 cabañas privadas</strong>{' '}
            para tus invitados. Una celebración diseñada en armonía con la
            naturaleza.
          </motion.p>

          {/* Capacity chips (reemplaza pricing strip — bodas NO muestra precio) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-8 flex flex-wrap items-center gap-2 sm:gap-3"
          >
            <span className="glass-dark rounded-full px-4 py-2 text-white/90 text-xs sm:text-sm font-medium inline-flex items-center gap-2">
              <Users className="w-3.5 h-3.5 text-pink" />
              Hasta 50 invitados
            </span>
            <span className="glass-dark rounded-full px-4 py-2 text-white/90 text-xs sm:text-sm font-medium inline-flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-pink" />
              90 min de Bogotá
            </span>
            <span className="glass-dark rounded-full px-4 py-2 text-white/90 text-xs sm:text-sm font-medium">
              Fin de semana completo disponible
            </span>
          </motion.div>

          {/* CTAs — WhatsApp principal, formulario secundario (80% tráfico mobile ≈ WhatsApp) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <a
              href={buildWhatsAppUrl(MESSAGES.hero, 'hero')}
              target="_blank"
              rel="noopener noreferrer"
              className="shine-cta inline-flex items-center justify-center gap-3 bg-whatsapp hover:bg-whatsapp-700 text-white font-semibold text-sm uppercase tracking-widest px-7 py-5 rounded-xl shadow-2xl shadow-black/30 transition-transform active:scale-[0.98] hover:scale-[1.02]"
            >
              <MessageCircle className="w-5 h-5" />
              Cotizar matrimonio por WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#formulario"
              className="inline-flex items-center justify-center gap-2 glass text-white font-semibold text-sm uppercase tracking-widest px-6 py-5 rounded-xl hover:bg-white/15 transition-all"
            >
              Solicitar propuesta por email
            </a>
          </motion.div>

          {/* SLA badge — mejora #3 obligatoria (Diego comprometió <2h hábiles) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6 text-white/80 text-[11px] sm:text-xs"
          >
            <span className="flex items-center gap-1.5 bg-green/20 border border-green/30 px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 bg-green rounded-full animate-pulse" />
              <strong className="text-white font-semibold">
                Respondemos en &lt; 2h hábiles
              </strong>
              <span className="text-white/60">· 8am-8pm</span>
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-pink" />
              Zipacón, Cundinamarca · 1 700 m
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/50">
        <span className="text-[9px] uppercase tracking-[0.5em] font-semibold">
          Scroll
        </span>
        <div className="w-px h-10 bg-white/30" />
      </div>
    </section>
  );
}
