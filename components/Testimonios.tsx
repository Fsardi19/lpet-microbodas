'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

/**
 * Testimonios — SOLO los 3 verbatims reales verificados.
 * Fuente: memory/project_social_proof_real.md (extraídos 2026-04-17 de TripAdvisor).
 *
 * Atribución completa: nombre + TripAdvisor + mes año + ⭐⭐⭐⭐⭐
 * Link opcional a la fuente (aumenta credibilidad).
 *
 * REGLA CRÍTICA: jamás editar las palabras textuales (solo traducción ES mantenida).
 */
const testimonials = [
  {
    quote:
      'La experiencia fue simplemente espectacular. Desde el alojamiento hasta cada rincón de la finca, todo fue impecable. Lo que realmente marcó la diferencia fue el servicio — Daniela, Kelly, Jonathan y Diego nos trataron con amabilidad y atención al detalle constante.',
    name: 'Manuela G',
    origin: 'TripAdvisor',
    date: 'Julio 2025',
    context: 'Pareja',
  },
  {
    quote:
      'Es la segunda vez que visitamos La Palma y El Tucán — la primera en 2017 y ahora en 2024. Y lo amamos aún más. Las cabañas son muy cómodas, con vista increíble sobre el cafetal y mucha privacidad. Lo mejor es el tour de café. Si estás en Bogotá, no te lo puedes perder.',
    name: 'Alice B',
    origin: 'Bogotá · TripAdvisor',
    date: 'Septiembre 2024',
    context: 'Huésped recurrente',
  },
  {
    quote:
      'Uno de los mejores hoteles en los que me he hospedado. El staff es increíblemente atento — especialmente Camilo y Daniela nos hicieron sentir muy bienvenidos. Las cabañas tienen vistas increíbles, gran comida, cuartos impecables, arquitectura, decoración — cada detalle creó el mood perfecto.',
    name: 'Alessandra Spinelli',
    origin: 'Brasil · TripAdvisor',
    date: 'Julio 2025',
    context: 'Huésped internacional',
  },
];

const TRIPADVISOR_URL =
  'https://www.tripadvisor.com/Hotel_Review-g12654765-d12196258-Reviews-La_Palma_El_Tucan_Hotel-Zipacon_Cundinamarca_Department.html';

export default function Testimonios() {
  return (
    <section
      id="testimonios"
      className="py-20 sm:py-28 bg-[#FAF7F2]"
      aria-labelledby="testimonios-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-pink text-[11px] uppercase tracking-[0.35em] font-semibold mb-4">
            Lo que dicen huéspedes reales
          </p>
          <h2
            id="testimonios-heading"
            className="font-serif text-navy text-3xl sm:text-4xl md:text-5xl leading-tight mb-3"
          >
            Reseñas{' '}
            <span className="italic text-pink">textuales y verificables</span>.
          </h2>
          <p className="text-navy/65 text-base font-light">
            No inventamos nada. Los tres verbatims son públicos en TripAdvisor
            con nombre y fecha.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-10">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative bg-white rounded-2xl p-6 sm:p-8 border border-beige-200/60 shadow-sm flex flex-col"
            >
              <Quote
                aria-hidden
                className="absolute -top-3 left-6 w-8 h-8 text-pink bg-[#FAF7F2] rounded-full p-1.5"
                fill="currentColor"
              />

              <div className="flex items-center gap-1 mb-4 text-gold mt-2">
                {[...Array(5)].map((_, k) => (
                  <Star key={k} className="w-3.5 h-3.5" fill="currentColor" />
                ))}
              </div>

              <blockquote className="flex-1 text-navy/85 text-[15px] leading-relaxed font-light italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-auto pt-4 border-t border-beige-200/60">
                <div className="font-serif text-navy text-base font-semibold">
                  {t.name}
                </div>
                <div className="text-navy/55 text-xs mt-0.5">
                  {t.origin} · {t.date}
                </div>
                <div className="text-pink text-[10px] uppercase tracking-widest font-semibold mt-2">
                  {t.context}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Source link — aumenta credibilidad */}
        <div className="text-center">
          <a
            href={TRIPADVISOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-pink text-xs sm:text-sm uppercase tracking-widest font-semibold underline-offset-4 hover:underline transition-colors"
          >
            Ver las 242 reseñas en TripAdvisor →
          </a>
        </div>
      </div>
    </section>
  );
}
