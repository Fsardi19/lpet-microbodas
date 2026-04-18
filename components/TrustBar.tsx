'use client';

import { Star, Award, Leaf, Users } from 'lucide-react';

/**
 * TrustBar — credenciales verificables bajo el hero.
 * Claims 100% soportados:
 *  - 9,3/10 con 242 reseñas (metabuscadores, data pública)
 *  - Origen del café de Jooyeon Jeon, campeona WBC 2019 (Sprudge, verificado)
 *  - Green Travel Award (web oficial)
 *  - Capacidad 50 pax (confirmado por Diego Velez)
 */
export default function TrustBar() {
  const items = [
    {
      icon: <Star className="w-4 h-4 text-gold" fill="currentColor" />,
      label: '9,3/10',
      sub: '242 reseñas verificadas',
    },
    {
      icon: <Award className="w-4 h-4 text-pink" />,
      label: 'Origen del café WBC 2019',
      sub: 'Campeona mundial: Jooyeon Jeon',
    },
    {
      icon: <Leaf className="w-4 h-4 text-green" />,
      label: 'Green Travel Award',
      sub: 'Winner',
    },
    {
      icon: <Users className="w-4 h-4 text-navy" />,
      label: 'Hasta 50 invitados',
      sub: 'Ceremonia + recepción',
    },
  ];

  return (
    <section
      aria-label="Credenciales del venue"
      className="bg-white border-b border-beige-200/60 relative z-20"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 sm:py-6">
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
          {items.map((it) => (
            <li
              key={it.label}
              className="flex items-center gap-3 min-w-0"
            >
              <div className="w-10 h-10 rounded-full bg-beige-100 flex items-center justify-center flex-shrink-0">
                {it.icon}
              </div>
              <div className="min-w-0">
                <div className="text-navy font-semibold text-sm sm:text-[15px] leading-tight truncate">
                  {it.label}
                </div>
                <div className="text-navy/55 text-[11px] sm:text-xs leading-tight truncate">
                  {it.sub}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
