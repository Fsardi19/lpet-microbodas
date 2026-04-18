'use client';

import { motion } from 'framer-motion';
import { Users, Home, Award } from 'lucide-react';

/**
 * Propuesta de valor — 3 bullets canibalizados de la landing actual bodas.lapalmayeltucanhotel.com
 * + mejoras obligatorias:
 *   - Bullet 1: capacidad 50 (la landing actual dice 40 — Diego confirmó 50)
 *   - Bullet 3: reemplaza "reconocida mundialmente" por claim específico WBC 2019
 *
 * Copy aprobado verbatim del BRIEF para bullets 1 y 2.
 */
const items = [
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Celebraciones íntimas, hasta 50 personas',
    text:
      'Ceremonia y recepción en espacios al aire libre entre cafetales. Formato íntimo pensado para parejas que priorizan detalle y privacidad sobre volumen.',
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: 'Cabañas privadas entre cafetales',
    text:
      '20 cabañas independientes inmersas en la naturaleza para que tu celebración se convierta en una experiencia de fin de semana, no solo una noche.',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Origen del café de la campeona mundial de baristas 2019',
    text:
      'En 2019, Jooyeon Jeon ganó el World Barista Championship en Boston usando nuestro café variedad Sierra con fermentación anaeróbica. Tus invitados prueban — y se llevan — el café que llevó al título mundial.',
  },
];

export default function PropuestaValor() {
  return (
    <section
      id="propuesta-valor"
      className="py-20 sm:py-28 bg-[#FAF7F2]"
      aria-labelledby="propuesta-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-pink text-[11px] uppercase tracking-[0.35em] font-semibold mb-4">
            Por qué aquí y no en un salón
          </p>
          <h2
            id="propuesta-heading"
            className="font-serif text-navy text-3xl sm:text-4xl md:text-5xl leading-tight"
          >
            Tres razones para casarte{' '}
            <span className="italic text-pink">entre cafetales</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-beige-200/40 hover:shadow-xl hover:border-pink/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-pink-50 text-pink flex items-center justify-center mb-5 group-hover:bg-pink group-hover:text-white transition-colors">
                {it.icon}
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-navy mb-3">
                {it.title}
              </h3>
              <p className="text-navy/70 text-[15px] leading-relaxed">
                {it.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
