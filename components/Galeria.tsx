'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { cloudinaryPath, ASSET_ALT } from '@/lib/cloudinary';
import type { CloudinaryAsset } from '@/lib/cloudinary';

/**
 * Galería — 8 fotos curadas por audiencia "bodas".
 *
 * Fotos pendientes (marcadas en IMPLEMENTATION-NOTES.md — gap crítico):
 *   - Ceremonia al aire libre entre cafetales
 *   - Novia preparándose en cabaña
 *   - Mesa larga farm-to-table con setup de boda
 *   - Cóctel al atardecer
 *   - Pista de baile nocturna con luces
 *
 * Hasta que existan: usar placeholders contextualizados con el copy.
 */
const photos: { asset: CloudinaryAsset; span?: string; tag: string }[] = [
  { asset: 'cafetales', span: 'sm:col-span-2 sm:row-span-2', tag: 'Ceremonia entre cafetales' },
  { asset: 'comida-farm-to-table', tag: 'Cena farm-to-table' },
  { asset: 'cabana-interior', tag: 'Cabañas para invitados' },
  { asset: 'huerta', tag: 'Huerta · menú del chef' },
  { asset: 'eventos', tag: 'Espacios de celebración' },
  { asset: 'caminata-bosque', tag: 'Fotos entre el bosque' },
  { asset: 'hero-aerial', tag: 'Vista aérea de la finca' },
  { asset: 'cascada', tag: 'Entorno natural' },
];

export default function Galeria() {
  return (
    <section
      id="galeria"
      className="py-20 sm:py-28 bg-white"
      aria-labelledby="galeria-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-2xl">
            <p className="text-pink text-[11px] uppercase tracking-[0.35em] font-semibold mb-4">
              Cómo se ve la finca
            </p>
            <h2
              id="galeria-heading"
              className="font-serif text-navy text-3xl sm:text-4xl md:text-5xl leading-tight"
            >
              La finca que será tu{' '}
              <span className="italic text-pink">escenario</span>.
            </h2>
          </div>
          <p className="text-navy/60 text-sm sm:text-base max-w-xs">
            Todas las fotos son de la finca. Estamos subiendo las imágenes de
            ceremonia — si quieres ver álbum completo, lo enviamos por
            WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[160px] sm:auto-rows-[220px] gap-2 sm:gap-3">
          {photos.map((p, i) => (
            <motion.figure
              key={p.asset + i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className={`relative overflow-hidden rounded-xl bg-beige-200 group ${
                p.span || ''
              }`}
            >
              <Image
                src={cloudinaryPath(p.asset)}
                alt={ASSET_ALT[p.asset]}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                loading="lazy"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <figcaption className="absolute bottom-2 left-2 text-[10px] sm:text-[11px] uppercase tracking-widest bg-navy/75 text-white/95 px-2 py-1 rounded backdrop-blur-sm">
                {p.tag}
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <p className="text-navy/45 text-xs mt-5 italic">
          Álbum de bodas pasadas disponible por WhatsApp. Fotos específicas de
          ceremonia en finca pendientes de subir — actualizamos esta galería
          antes del deploy público.
        </p>
      </div>
    </section>
  );
}
