import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://microbodas.lapalmayeltucanhotel.com';

// OG image — romántica, cafetales (placeholder hasta que haya foto ceremonia real)
const ogImage =
  'https://res.cloudinary.com/dsylu9a7k/image/upload/f_auto,q_80,w_1200,h_630,c_fill,g_center/lpet/cafetales.png';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title:
    'Matrimonios en finca cafetera · La Palma & El Tucán · 90 min Bogotá',
  description:
    'Matrimonios íntimos hasta 50 pax en la finca origen del café de la campeona WBC 2019. 20 cabañas privadas. 90 min de Bogotá. Cotiza por WhatsApp.',
  keywords: [
    'matrimonios Bogotá',
    'bodas íntimas Colombia',
    'bodas entre cafetales',
    'matrimonio finca cafetera',
    'microbodas Cundinamarca',
    'World Barista Championship 2019',
    'La Palma y El Tucán bodas',
    'buyout matrimonio 50 pax',
    'bodas destino Zipacón',
  ],
  authors: [{ name: 'La Palma & El Tucán' }],
  creator: 'La Palma & El Tucán',
  publisher: 'La Palma & El Tucán',
  applicationName: 'LP&ET — Matrimonios entre cafetales',
  alternates: {
    canonical: '/',
    languages: {
      'es-CO': '/',
      es: '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: siteUrl,
    siteName: 'La Palma & El Tucán',
    title:
      'Matrimonios íntimos entre cafetales · La Palma & El Tucán',
    description:
      'Ceremonia y recepción hasta 50 invitados en la finca origen del café de Jooyeon Jeon, campeona del World Barista Championship 2019. 20 cabañas privadas para tus invitados. A 90 min de Bogotá.',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Matrimonio íntimo entre cafetales en La Palma & El Tucán — origen del café campeón mundial de baristas 2019',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matrimonios íntimos · La Palma & El Tucán · 90 min Bogotá',
    description:
      'Ceremonia entre cafetales, 20 cabañas para invitados, brindis con el café de la campeona WBC 2019. Cotiza por WhatsApp.',
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: 'https://res.cloudinary.com/dsylu9a7k/image/upload/v1770761984/lpet/logo-ampersand-circle.png',
  },
  verification: {
    // Pendiente: Felipe agrega Google Search Console tag cuando sea momento.
  },
  category: 'travel',
};

export const viewport: Viewport = {
  themeColor: '#1E1E3F',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

/**
 * Schema.org JSON-LD para microbodas:
 * - EventVenue con maximumAttendeeCapacity: 50 (CORREGIDO — landing actual tenía 40)
 * - LodgingBusiness (20 cabañas para hospedaje invitados)
 * - AggregateRating 9.3/10 · 242 reviews
 * - amenityFeature alineado al segmento bodas
 */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'EventVenue',
      '@id': `${siteUrl}#venue`,
      name: 'La Palma & El Tucán · Espacios para matrimonios',
      description:
        'Finca origen del café usado por Jooyeon Jeon para ganar el World Barista Championship 2019. Espacios para ceremonia al aire libre, cena farm-to-table y 20 cabañas independientes para hospedaje de invitados. Capacidad total hasta 50 invitados.',
      url: siteUrl,
      telephone: '+573189565617',
      email: 'reservations@lapalmayeltucan.com',
      image: ogImage,
      maximumAttendeeCapacity: 50,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Zipacón',
        addressRegion: 'Cundinamarca',
        addressCountry: 'CO',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 4.759,
        longitude: -74.379,
      },
      amenityFeature: [
        { '@type': 'LocationFeatureSpecification', name: 'Ceremonia al aire libre entre cafetales' },
        { '@type': 'LocationFeatureSpecification', name: 'Cena farm-to-table' },
        { '@type': 'LocationFeatureSpecification', name: '20 cabañas independientes para invitados' },
        { '@type': 'LocationFeatureSpecification', name: 'Degustación de cafés de especialidad para invitados' },
        { '@type': 'LocationFeatureSpecification', name: 'Coordinación de logística y timing' },
        { '@type': 'LocationFeatureSpecification', name: 'WiFi Starlink en zonas comunes' },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '9.3',
        bestRating: '10',
        reviewCount: '242',
      },
      award:
        'Origen del café de la campeona del World Barista Championship 2019 (Jooyeon Jeon) · Green Travel Award Winner',
    },
    {
      '@type': 'LodgingBusiness',
      '@id': `${siteUrl}#lodging`,
      name: 'La Palma & El Tucán',
      url: 'https://lapalmayeltucanhotel.com/',
      telephone: '+573189565617',
      email: 'reservations@lapalmayeltucan.com',
      numberOfRooms: 20,
      starRating: { '@type': 'Rating', ratingValue: '5' },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Zipacón',
        addressRegion: 'Cundinamarca',
        addressCountry: 'CO',
      },
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}#wedding-service`,
      name: 'Matrimonios íntimos entre cafetales',
      provider: { '@id': `${siteUrl}#venue` },
      areaServed: { '@type': 'Country', name: 'Colombia' },
      description:
        'Matrimonios hasta 50 invitados con ceremonia, cena farm-to-table, hospedaje para invitados en 20 cabañas independientes y experiencia del café de la campeona mundial de baristas 2019.',
      serviceType: 'Wedding Venue',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-CO" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link
          rel="preconnect"
          href="https://res.cloudinary.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
