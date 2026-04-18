'use client';

import { Instagram, Facebook, Linkedin, Mail, Phone, Globe, Award } from 'lucide-react';
import {
  WHATSAPP_NUMBER_DISPLAY,
  RESERVATIONS_EMAIL,
} from '@/lib/whatsapp';

/**
 * Footer — WBC 2019 explícito (mejora #1, ubicación obligatoria #3).
 * Cross-links a las 5 landings hermanas (placeholders hasta que existan).
 */
const crossLandings = [
  { label: 'Escapada cerca de Bogotá', href: '/escapada-bogota', active: false },
  { label: 'Day Tour de café', href: '/day-tour-cafe', active: false },
  { label: 'Buyout corporativo', href: '/buyout-corporativo', active: false },
  { label: 'Offsite de liderazgo', href: '/offsite-liderazgo', active: false },
  { label: 'Coffee pilgrimage (EN)', href: '/coffee-pilgrimage', active: false },
];

const socials = [
  {
    icon: <Instagram className="w-4 h-4" />,
    label: 'Instagram',
    href: 'https://www.instagram.com/lapalmayeltucan_hotel/',
  },
  {
    icon: <Facebook className="w-4 h-4" />,
    label: 'Facebook',
    href: 'https://www.facebook.com/lapalmayeltucanboutiquehotel/',
  },
  {
    icon: <Linkedin className="w-4 h-4" />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/la-palma-el-tuc%C3%A1n-hotel/',
  },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-navy-900 text-white/70 pt-16 sm:pt-24 pb-10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-14 mb-14">
        {/* Brand block */}
        <div className="col-span-1 sm:col-span-2">
          <div className="flex flex-col mb-5">
            <span className="text-xl sm:text-2xl font-serif font-bold tracking-tight mb-1">
              <span className="text-gold">LA PALMA</span>
              <span className="text-pink mx-1">&</span>
              <span className="text-gold">EL TUCÁN</span>
            </span>
            <span className="text-pink font-serif text-sm sm:text-base">
              MATRIMONIOS ENTRE CAFETALES
            </span>
          </div>
          <p className="text-white/55 max-w-sm leading-relaxed mb-5 text-sm font-light">
            Zipacón, Cundinamarca · 90 min desde Bogotá. Matrimonios íntimos
            hasta 50 invitados. Finca cafetera de agricultura regenerativa.
          </p>

          {/* WBC 2019 badge — mejora #1 en ubicación obligatoria #3 */}
          <div className="inline-flex items-center gap-2 bg-pink/10 border border-pink/25 text-white px-3 py-2 rounded-lg mb-5">
            <Award className="w-4 h-4 text-pink" />
            <span className="text-xs font-semibold">
              Origen del café campeón del WBC 2019
            </span>
          </div>

          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:bg-pink hover:border-pink transition-all"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Other landings */}
        <div>
          <h5 className="text-pink font-bold uppercase tracking-[0.3em] text-[10px] mb-5">
            Otras experiencias
          </h5>
          <ul className="space-y-3 text-xs text-white/55">
            {crossLandings.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  {l.label}
                  {!l.active && (
                    <span className="text-[9px] uppercase tracking-widest text-white/30">
                      · próx.
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h5 className="text-pink font-bold uppercase tracking-[0.3em] text-[10px] mb-5">
            Contacto bodas
          </h5>
          <ul className="space-y-3 text-xs text-white/55">
            <li className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-pink" />
              <a
                href={`tel:+573189565617`}
                className="hover:text-white transition-colors"
              >
                {WHATSAPP_NUMBER_DISPLAY}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-pink" />
              <a
                href={`mailto:${RESERVATIONS_EMAIL}`}
                className="hover:text-white transition-colors break-all"
              >
                {RESERVATIONS_EMAIL}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-pink" />
              <a
                href="https://lapalmayeltucanhotel.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                lapalmayeltucanhotel.com
              </a>
            </li>
          </ul>
          <p className="text-white/40 text-[11px] mt-4 leading-relaxed">
            Respondemos en &lt; 2h hábiles · lun-sáb 8am-8pm
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-white/30 text-[9px] sm:text-[10px] uppercase tracking-[0.35em] font-bold text-center md:text-left">
          © {new Date().getFullYear()} La Palma & El Tucán · Coffee and
          Adventure S.A.S.
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
          <span className="text-white/30 text-[9px] uppercase tracking-[0.35em] font-bold italic">
            Green Travel Award Winner
          </span>
          <div className="w-px h-3 bg-white/10 hidden sm:block" />
          <span className="text-white/30 text-[9px] uppercase tracking-[0.35em] font-bold">
            WBC 2019 · Sustainability First
          </span>
        </div>
      </div>
    </footer>
  );
}
