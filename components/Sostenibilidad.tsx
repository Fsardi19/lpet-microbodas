'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Leaf, Sprout, Globe } from 'lucide-react';
import { cloudinaryPath, ASSET_ALT } from '@/lib/cloudinary';

/**
 * Sostenibilidad — copy canibalizado verbatim de la landing actual de bodas.
 * Resuelve 2 cosas:
 *  - Diferenciación vs venues genéricos (84% de viajeros valora sostenibilidad · Booking 2025)
 *  - Refuerza autoridad WBC 2019 como consecuencia de agricultura regenerativa
 */
export default function Sostenibilidad() {
  const pillars = [
    {
      icon: <Leaf className="w-5 h-5" />,
      title: 'Agricultura regenerativa',
      body:
        'Producimos un café de clase mundial con un modelo que cuida el suelo, el agua y las comunidades cafeteras de la región.',
    },
    {
      icon: <Sprout className="w-5 h-5" />,
      title: 'Kilómetro cero en la cocina',
      body:
        'Huerta orgánica propia. El menú del matrimonio nace a pasos de la mesa — con ingredientes que los invitados pueden ver cosechar.',
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: 'Impacto social medible',
      body:
        'Cada boda apoya a productores locales de café de especialidad y al ecosistema del bosque de niebla de Cundinamarca.',
    },
  ];

  return (
    <section
      id="sostenibilidad"
      className="py-20 sm:py-28 bg-navy text-white relative overflow-hidden"
      aria-labelledby="sosten-heading"
    >
      {/* Ambient photo */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src={cloudinaryPath('huerta')}
          alt={ASSET_ALT['huerta']}
          fill
          sizes="100vw"
          loading="lazy"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/85 to-navy" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-12 gap-8 sm:gap-12 items-start">
          <div className="md:col-span-5">
            <p className="text-pink text-[11px] uppercase tracking-[0.35em] font-semibold mb-4">
              Agricultura regenerativa
            </p>
            <h2
              id="sosten-heading"
              className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight mb-6"
            >
              Una boda que{' '}
              <span className="italic text-beige">apoya la tierra</span>.
            </h2>
            <p className="text-white/80 text-base sm:text-lg font-light leading-relaxed">
              Al elegir La Palma &amp; El Tucán, tu matrimonio apoya un modelo
              de agricultura regenerativa que cuida el suelo, el agua y las
              comunidades cafeteras de la región. En abril de 2019, la barista
              coreana Jooyeon Jeon ganó el{' '}
              <strong className="text-white">
                World Barista Championship en Boston
              </strong>{' '}
              usando nuestro café variedad Sierra con fermentación anaeróbica —
              la consecuencia directa de este modelo.
            </p>
          </div>

          <ul className="md:col-span-7 grid sm:grid-cols-1 gap-3 sm:gap-4">
            {pillars.map((p, i) => (
              <motion.li
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-xl p-5 sm:p-6 flex gap-4"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-green/25 text-white flex items-center justify-center border border-green/30">
                  {p.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1">
                    {p.title}
                  </h3>
                  <p className="text-white/75 text-sm sm:text-[15px] leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
