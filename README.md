# Landing: microbodas · La Palma & El Tucán

> Matrimonios íntimos hasta 50 invitados en finca cafetera ganadora del
> **World Barista Championship 2019**, a 90 min de Bogotá.

## Stack

- **Next.js 14** (app router, TypeScript)
- **Tailwind CSS 3.4** con paleta LP&ET (PINK `#E8838C`, NAVY `#1E1E3F`, GOLD `#C9A227`, BEIGE `#D4C5B0`, GREEN `#2D5A3D`)
- **Framer Motion** para animaciones scroll
- **Cloudinary** (cuenta oficial `dsylu9a7k`) con custom loader
- **Lucide React** para iconos
- **Fonts:** Playfair Display (serif) + Inter (sans) — consistencia con escapada-bogota

## Estructura

```
microbodas/
├── app/
│   ├── layout.tsx         # Metadata SEO + Schema.org EventVenue + LodgingBusiness + Service
│   ├── page.tsx           # Composición de 12 secciones
│   └── globals.css        # Tailwind + utils (shine-cta, bw-wash, pax-slider)
├── components/
│   ├── Hero.tsx                    # Foto B/W cafetales + WBC badge + SLA pulsante
│   ├── TrustBar.tsx                # 9,3/10 · WBC · Green Travel · 50 pax
│   ├── PropuestaValor.tsx          # 3 bullets (50 pax · 20 cabañas · WBC 2019)
│   ├── ExperienciaMatrimonio.tsx   # Journey por momentos del día (6 pasos)
│   ├── Galeria.tsx                 # 8 fotos Cloudinary con gap notado
│   ├── Testimonios.tsx             # 3 verbatims reales TripAdvisor + link fuente
│   ├── Sostenibilidad.tsx          # Agricultura regenerativa + WBC como consecuencia
│   ├── Ubicacion.tsx               # Zipacón 90 min + 3 opciones transporte
│   ├── FormularioCorto.tsx         # 6 campos con slider pax (máx 50)
│   ├── FAQ.tsx                     # 8 preguntas + Schema.org FAQPage
│   ├── CTAFinal.tsx                # BG envolvente + WhatsApp pre-llenado
│   └── Footer.tsx                  # WBC badge + cross-landings + SLA
├── lib/
│   ├── cloudinary.ts        # Helpers + ASSET_ALT curados para bodas
│   ├── cloudinary-loader.ts # Custom loader next/image (fix single-transform)
│   └── whatsapp.ts          # buildWhatsAppUrl + MESSAGES (6 mensajes pre-llenados)
├── package.json
├── tsconfig.json
├── next.config.mjs
├── tailwind.config.ts
├── postcss.config.mjs
├── .env.example
├── .gitignore
├── BRIEF.md
├── README.md (este archivo)
└── IMPLEMENTATION-NOTES.md
```

## Setup local

```bash
cd landing-pages/microbodas
cp .env.example .env.local   # edita y completa vars
npm install
npm run dev                  # puerto 3005
```

Abre `http://localhost:3005`.

> Nota: la escapada-bogota usa puerto 3004 (default `3000` si no se sobreescribe). Esta landing usa `3005` por defecto para correr ambas en paralelo sin conflicto.

## Environment variables

| Var | Requerida | Descripción |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | recomendada | URL canónica en producción (SEO, OG, Schema.org) |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD` | no | Default `dsylu9a7k` (cuenta oficial). No cambiar a `dkqocgknd` (ajena) |
| `NEXT_PUBLIC_GA4_ID` | no | GA4 Measurement ID — Felipe cuando active |
| `NEXT_PUBLIC_META_PIXEL_ID` | no | Meta Pixel — Felipe cuando active |
| `NEXT_PUBLIC_FORM_ENDPOINT` | opcional | Endpoint Formspree/Getform/n8n. Si está vacío, el form hace fallback a WhatsApp con payload prellenado |

## Deploy (Vercel)

> **No ejecutar sin aprobación de `quality-gate`.**

```bash
# 1. Crear repo
gh repo create Fsardi19/lpet-microbodas --private

# 2. Push
git init
git add .
git commit -m "chore: init landing microbodas (WBC 2019, 50 pax, SLA <2h)"
git remote add origin git@github.com:Fsardi19/lpet-microbodas.git
git push -u origin main

# 3. Vercel
vercel --project lpet-microbodas
# O via dashboard: Import GitHub repo → deploy

# 4. Env vars en Vercel dashboard
# 5. Dominio preview → validar → luego custom `microbodas.lapalmayeltucanhotel.com`
```

## Rendimiento objetivo

- **LCP < 2.5s** mobile (hero imagen con `priority` + `fetchPriority="high"`)
- **CLS < 0.1** (aspect-ratio fijo en galería/journey; slider con altura fija)
- **Lighthouse Performance ≥ 90** mobile

## Reglas de oro aplicadas (CLAUDE.md)

1. **NO precio visible** — venta consultiva B2B ($46M ticket medio)
2. **NUNCA "cata"** — usamos "degustación de cafés de especialidad"
3. **Testimonios reales únicamente** — 3 verbatims literales TripAdvisor con atribución
4. **WBC 2019** aparece en 5 ubicaciones (hero badge, bullet, sostenibilidad, CTA final, footer)
5. **Cloudinary oficial** — cuenta `dsylu9a7k`, nunca `dkqocgknd`
6. **Mobile-first** — 375px first, 70%+ tráfico Colombia es mobile
7. **WhatsApp pre-llenado** — mensaje pide fecha tentativa + pax
8. **Capacidad 50 pax** — corregido vs landing actual (tenía 40)
9. **SLA <2h hábiles** — badge pulsante visible + en FAQ
10. **Schema.org** — EventVenue con maximumAttendeeCapacity: 50

## Próximos pasos antes de publicar

Ver `IMPLEMENTATION-NOTES.md` sección "Pre-deploy checklist".
