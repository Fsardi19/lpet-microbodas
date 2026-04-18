'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { cloudinaryPath, ASSET_ALT } from '@/lib/cloudinary';
import type { CloudinaryAsset } from '@/lib/cloudinary';

/**
 * "La experiencia de tu matrimonio" — journey por momentos del día.
 * Estructura de la landing actual (sección "journey"), copy intro del BRIEF.
 *
 * Fotos placeholder contextualizadas (cafetales/cabaña/comida) hasta que
 * Felipe/Diego suban las 5 fotos pendientes marcadas en IMPLEMENTATION-NOTES.
 */
const moments: {
  time: string;
  title: string;
  body: string;
  asset: CloudinaryAsset;
}[] = [
  {
    time: 'Mañana',
    title: 'Preparación entre el bosque',
    body:
      'Comienza el día en cabañas privadas rodeadas de bosque y montaña. Calma, luz natural y la emoción compartida antes del gran momento.',
    asset: 'cabana-interior',
  },
  {
    time: 'Media tarde',
    title: 'Ceremonia al aire libre entre cafetales',
    body:
      'Ceremonia civil, simbólica o religiosa con oficiante externo coordinado por nosotros. Cafetales, montaña y bosque de niebla como escenario natural.',
    asset: 'cafetales',
  },
  {
    time: 'Atardecer',
    title: 'Cóctel con café de especialidad',
    body:
      'Tus invitados brindan con una degustación del café que llevó a Jooyeon Jeon al título mundial de barista 2019 — variedad Sierra con fermentación anaeróbica. Canapés farm-to-table preparados por nuestro equipo.',
    asset: 'huerta',
  },
  {
    time: 'Noche',
    title: 'Cena farm-to-table',
    body:
      'Menú del chef con ingredientes de la huerta orgánica de la finca. Mesa larga entre cafetales o cena servida según tu formato preferido.',
    asset: 'comida-farm-to-table',
  },
  {
    time: 'Hasta la madrugada',
    title: 'Celebración bajo el cielo estrellado',
    body:
      'Pista de baile abierta, cielo sin contaminación lumínica y fogata opcional. Timing flexible — no hay salón que cerrar a las 2am.',
    asset: 'eventos',
  },
  {
    time: 'Día siguiente',
    title: 'Brunch y despedida sin afán',
    body:
      'Los invitados amanecen en la finca. Brunch servido en el restaurante con tour de café opcional. Se van con café, memoria y fotos reales.',
    asset: 'caminata-bosque',
  },
];

export default function ExperienciaMatrimonio() {
  return (
    <section
      id="experiencia"
      className="py-20 sm:py-28 bg-[#FAF7F2]"
      aria-labelledby="experiencia-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-pink text-[11px] uppercase tracking-[0.35em] font-semibold mb-4">
            La experiencia de tu matrimonio
          </p>
          <h2
            id="experiencia-heading"
            className="font-serif text-navy text-3xl sm:text-4xl md:text-5xl leading-tight mb-4"
          >
            Un fin de semana{' '}
            <span className="italic text-pink">diseñado a tu ritmo</span>.
          </h2>
          <p className="text-navy/65 text-lg font-light">
            No un evento de tres horas. Una experiencia que empieza la mañana
            que llegas y termina con brunch al día siguiente.
          </p>
        </div>

        <ol className="relative space-y-10 sm:space-y-14">
          {/* Vertical timeline */}
          <span
            aria-hidden
            className="absolute left-4 sm:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-pink/40 via-pink/10 to-transparent"
          />

          {moments.map((m, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.li
                key={m.time + m.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6 }}
                className="relative grid sm:grid-cols-2 gap-6 sm:gap-10 items-center"
              >
                <span
                  aria-hidden
                  className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-pink ring-4 ring-[#FAF7F2]"
                />

                {/* Content */}
                <div
                  className={`pl-12 sm:pl-0 ${
                    isLeft ? 'sm:pr-12 sm:text-right' : 'sm:col-start-2 sm:pl-12'
                  }`}
                >
                  <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-pink font-bold mb-3">
                    {m.time}
                  </span>
                  <h3 className="font-serif text-navy text-2xl sm:text-3xl mb-3 leading-tight">
                    {m.title}
                  </h3>
                  <p className="text-navy/70 text-[15px] leading-relaxed">
                    {m.body}
                  </p>
                </div>

                {/* Image */}
                <div
                  className={`pl-12 sm:pl-0 ${
                    isLeft ? 'sm:col-start-2' : 'sm:col-start-1 sm:row-start-1'
                  }`}
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-beige-200">
                    <Image
                      src={cloudinaryPath(m.asset)}
                      alt={ASSET_ALT[m.asset]}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      loading="lazy"
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
