'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Car, Bus, Plane, MapPin, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl, MESSAGES } from '@/lib/whatsapp';

/**
 * Ubicación — copy verbatim del BRIEF:
 * "Estamos en Zipacón, Cundinamarca. Un refugio mágico a solo 90 minutos de
 * Bogotá, perfecto para una celebración lejos del ruido de la ciudad."
 *
 * + 3 opciones cómo llegar (canibalizado de research/objections/02-copy-defensores.md)
 * adaptado a bodas (priorizamos transporte de invitados desde Bogotá).
 */
const options = [
  {
    id: 'A',
    icon: <Plane className="w-5 h-5" />,
    title: 'Transporte privado para invitados',
    price: 'Desde $500.000 COP',
    time: 'Van · ida y regreso · hasta 4 pax',
    body:
      'Coordinamos transporte para invitados desde Bogotá (Libertario Calle 85) o desde El Dorado. Opción de van colectiva o SUV privada.',
  },
  {
    id: 'B',
    icon: <Bus className="w-5 h-5" />,
    title: 'Dejan su carro en Cachipay',
    price: '$130.000 COP',
    time: 'Ida y regreso · shuttle 4x4',
    body:
      'Para invitados con carro bajo: lo dejan en Cachipay y nuestra camioneta los recoge y los devuelve el día siguiente.',
  },
  {
    id: 'C',
    icon: <Car className="w-5 h-5" />,
    title: 'Vienen en 4x4 o SUV alta',
    price: 'Sin costo extra',
    time: '1 h 30 min desde Bogotá',
    body:
      'Coordenadas exactas por WhatsApp. Google Maps puede fallar los últimos 5 km — nosotros los guiamos en vivo.',
  },
];

export default function Ubicacion() {
  const [showMap, setShowMap] = useState(false);
  const whatsappLink = buildWhatsAppUrl(MESSAGES.ubicacion, 'ubicacion');

  return (
    <section
      id="ubicacion"
      className="py-20 sm:py-28 bg-white"
      aria-labelledby="ubicacion-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mb-10 sm:mb-14">
          <p className="text-pink text-[11px] uppercase tracking-[0.35em] font-semibold mb-4">
            Ubicación
          </p>
          <h2
            id="ubicacion-heading"
            className="font-serif text-navy text-3xl sm:text-4xl md:text-5xl leading-tight mb-5"
          >
            Zipacón, Cundinamarca ·{' '}
            <span className="italic text-pink">90 min de Bogotá</span>.
          </h2>
          <p className="text-navy/70 text-lg font-light leading-relaxed max-w-2xl">
            Un refugio mágico a solo 90 minutos de Bogotá, perfecto para una
            celebración lejos del ruido de la ciudad. Lo suficientemente cerca
            para que tus invitados no tomen vuelo — lo suficientemente lejos
            para que se sienta otro mundo.
          </p>
        </div>

        {/* Options cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-10 sm:mb-12">
          {options.map((o, i) => (
            <motion.div
              key={o.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative bg-[#FAF7F2] rounded-2xl p-6 sm:p-7 border border-beige-200/60"
            >
              <span className="absolute -top-3 left-6 px-3 py-1 bg-pink text-white text-[10px] uppercase tracking-widest font-bold rounded">
                Opción {o.id}
              </span>
              <div className="w-11 h-11 rounded-xl bg-navy text-white flex items-center justify-center mb-4 mt-3">
                {o.icon}
              </div>
              <h3 className="font-serif text-navy text-xl mb-2">{o.title}</h3>
              <div className="flex flex-wrap items-baseline gap-2 mb-3">
                <span className="text-pink font-bold text-lg">{o.price}</span>
                <span className="text-navy/50 text-xs">· {o.time}</span>
              </div>
              <p className="text-navy/70 text-[14px] leading-relaxed">{o.body}</p>
            </motion.div>
          ))}
        </div>

        {/* SLA strip */}
        <div className="bg-navy text-white rounded-2xl p-5 sm:p-7 flex flex-col sm:flex-row sm:items-center gap-4 mb-10">
          <div className="flex items-start sm:items-center gap-3 flex-1 min-w-0">
            <MapPin className="w-5 h-5 text-pink flex-shrink-0" />
            <p className="text-sm sm:text-[15px] leading-relaxed text-white/90">
              <strong className="text-white">
                Recomendamos visitar la finca antes de decidir.
              </strong>{' '}
              Coordinamos una visita privada con tu pareja y wedding planner
              (si lo tienes) para ver los espacios en vivo.
            </p>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-700 text-white px-5 py-3 rounded-xl font-semibold text-xs uppercase tracking-widest transition-all whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            Agendar visita
          </a>
        </div>

        {/* Map (lazy-loaded) */}
        <div className="relative rounded-2xl overflow-hidden bg-beige-100 aspect-[16/9] border border-beige-200/60">
          {showMap ? (
            <iframe
              title="Ubicación La Palma & El Tucán Hotel"
              src="https://www.google.com/maps?q=La+Palma+y+El+Tucan+Hotel+Zipacon+Cundinamarca&output=embed"
              loading="lazy"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setShowMap(true)}
              className="absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-beige-100 to-beige-200 hover:from-beige-200 hover:to-beige-500/60 transition-colors group"
              aria-label="Cargar mapa de Google Maps con la ubicación del hotel"
            >
              <MapPin className="w-10 h-10 text-pink group-hover:scale-110 transition-transform" />
              <span className="font-serif text-navy text-xl">
                Ver ubicación en Google Maps
              </span>
              <span className="text-navy/60 text-xs uppercase tracking-widest">
                Zipacón · Cundinamarca · Colombia
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
