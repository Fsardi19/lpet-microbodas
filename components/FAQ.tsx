'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl, MESSAGES } from '@/lib/whatsapp';

/**
 * FAQ — 8 preguntas.
 *
 * Copy defensor alimentado por research/objections/02-copy-defensores.md + BRIEF.
 * SLA <2h hábiles (mejora #3) visible explícitamente en pregunta 8.
 * Capacidad 50 (mejora #2) en pregunta 1.
 *
 * Schema.org FAQPage embebido para rich results.
 */
const faqs = [
  {
    q: '¿Cuánta capacidad tienen para la ceremonia y la recepción?',
    a: `**Hasta 50 invitados** para ceremonia y recepción. El formato íntimo es intencional — nuestra arquitectura y servicio están diseñados para este tamaño, no para salones masivos.`,
  },
  {
    q: '¿Qué incluye una boda en La Palma & El Tucán?',
    a: `Cada boda se cotiza a medida. Incluye uso de espacios para ceremonia y recepción, cocina farm-to-table, 20 cabañas para hospedaje de invitados, degustación de cafés de especialidad, tour de café para los huéspedes, coordinación y staff durante el evento. Cotiza por WhatsApp para recibir propuesta personalizada con tu fecha y número de invitados.`,
  },
  {
    q: '¿Con cuánto tiempo de anticipación debemos reservar?',
    a: `Recomendamos mínimo **60-90 días** de anticipación para asegurar fecha concreta. Para fechas más cercanas, escríbenos por WhatsApp — vemos disponibilidad y opciones.`,
  },
  {
    q: '¿Cómo llegan los invitados?',
    a: `Tres opciones que coordinamos: **(A)** transporte privado desde Bogotá (Libertario Calle 85 o El Dorado) desde $500.000 COP hasta 4 pax; **(B)** dejan el carro en Cachipay y shuttle 4x4 ida-regreso por $130.000 COP; **(C)** vienen en 4x4 propio — enviamos coordenadas exactas por WhatsApp (Google Maps puede fallar los últimos 5 km).`,
  },
  {
    q: '¿Podemos hacer boda con hospedaje para los invitados?',
    a: `**Sí.** Las 20 cabañas independientes están disponibles en buyout total para eventos. Tu boda puede ser un fin de semana completo — jueves/viernes check-in, ceremonia, recepción, brunch del día siguiente, check-out el domingo.`,
  },
  {
    q: '¿Ofrecen coordinación de la boda?',
    a: `**Sí.** Nuestro equipo coordina logística, timing y proveedores internos. Tenemos red de wedding planners recomendados para diseño, decoración floral y fotografía. Si ya tienes wedding planner, trabajamos con el/ella sin fricción.`,
  },
  {
    q: '¿Tienen ceremonia religiosa disponible?',
    a: `Podemos organizar **ceremonia religiosa con oficiante externo** coordinado por nosotros, **ceremonia civil con notario**, o **ceremonia simbólica al aire libre** entre cafetales. Tú eliges el formato — nosotros lo operamos.`,
  },
  {
    q: '¿Cuánto se demoran en responder?',
    a: `**Respondemos en menos de 2 horas hábiles** (lunes a sábado, 8am-8pm). No es bot: es Diego o Daniela del equipo. Si escribes fuera de horario, te respondemos al día siguiente hábil temprano.`,
  },
];

function FAQItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  const html = a.replace(/\*\*(.*?)\*\*/g, '<strong class="text-navy">$1</strong>');
  return (
    <div className="border-b border-beige-200/60 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 py-5 sm:py-6 text-left group"
      >
        <span className="font-serif text-navy text-lg sm:text-xl leading-snug">
          {q}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full border border-navy/20 flex items-center justify-center transition-all ${
            open ? 'bg-pink border-pink rotate-45' : 'group-hover:border-pink'
          }`}
        >
          <Plus className={`w-4 h-4 ${open ? 'text-white' : 'text-navy'}`} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p
              className="pb-6 text-navy/70 text-[15px] leading-relaxed max-w-3xl"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a.replace(/\*\*(.*?)\*\*/g, '$1'),
      },
    })),
  };

  const waLink = buildWhatsAppUrl(MESSAGES.faq, 'faq');

  return (
    <section
      id="faq"
      className="py-20 sm:py-28 bg-white"
      aria-labelledby="faq-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="mb-10 sm:mb-14">
          <p className="text-pink text-[11px] uppercase tracking-[0.35em] font-semibold mb-4">
            Preguntas frecuentes
          </p>
          <h2
            id="faq-heading"
            className="font-serif text-navy text-3xl sm:text-4xl md:text-5xl leading-tight"
          >
            Lo que{' '}
            <span className="italic text-pink">ya nos preguntaron</span>{' '}
            otras parejas.
          </h2>
        </div>

        <div>
          {faqs.map((f, i) => (
            <FAQItem
              key={f.q}
              q={f.q}
              a={f.a}
              open={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>

        <div className="mt-10 bg-[#FAF7F2] rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center gap-4">
          <p className="flex-1 text-navy/80 text-sm sm:text-[15px] leading-relaxed">
            ¿Tu pregunta no está aquí?{' '}
            <strong className="text-navy">
              Respondemos por WhatsApp en menos de 2 horas hábiles.
            </strong>
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-700 text-white px-5 py-3 rounded-xl font-semibold text-xs uppercase tracking-widest transition-all whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            Pregunta por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
