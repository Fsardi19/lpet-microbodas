/**
 * Cloudinary helpers — microbodas.
 * Cloud: dsylu9a7k (oficial del proyecto)
 * Base folder: lpet/
 *
 * Siempre `f_auto,q_70,w_{width}`.
 * Nunca imágenes locales, nunca stock, nunca cuenta ajena `dkqocgknd`.
 */

export const CLOUDINARY_CLOUD =
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD || 'dsylu9a7k';

export const CLOUDINARY_BASE = `https://res.cloudinary.com/${CLOUDINARY_CLOUD}/image/upload`;

/**
 * Assets disponibles en la cuenta oficial.
 * Los marcados con (*) son placeholders contextualizados — las fotos reales
 * de ceremonia/boda son pendientes de subir por Felipe/Diego.
 */
export type CloudinaryAsset =
  | 'hero-aerial'
  | 'cabana-interior'
  | 'cafetales'
  | 'comida-farm-to-table'
  | 'huerta'
  | 'caminata-bosque'
  | 'cascada'
  | 'eventos';

export interface CloudinaryOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'auto' | 'webp' | 'jpg' | 'png';
  crop?: 'fill' | 'fit' | 'scale' | 'limit';
  gravity?: 'auto' | 'center' | 'face';
  angle?: number;
  effect?: string;
}

/**
 * Build a Cloudinary URL for a given asset slug.
 */
export function cloudinaryUrl(
  asset: CloudinaryAsset,
  options: CloudinaryOptions = {}
): string {
  const {
    width,
    height,
    quality = 70,
    format = 'auto',
    crop = 'fill',
    gravity,
    angle,
    effect,
  } = options;

  const parts: string[] = [`f_${format}`, `q_${quality}`];
  if (width) parts.push(`w_${width}`);
  if (height) parts.push(`h_${height}`);
  if (width && height) parts.push(`c_${crop}`);
  if (gravity) parts.push(`g_${gravity}`);
  if (angle !== undefined) parts.push(`a_${angle}`);
  if (effect) parts.push(`e_${effect}`);

  const transform = parts.join(',');
  return `${CLOUDINARY_BASE}/${transform}/lpet/${asset}.png`;
}

/**
 * Path-only (no transform) — úsalo como `src` de `next/image`
 * con el custom loader.
 */
export function cloudinaryPath(asset: CloudinaryAsset): string {
  return `lpet/${asset}.png`;
}

/**
 * Alt texts (accesibilidad + SEO) — curados por audiencia "microbodas".
 * Contextualizan los placeholders hacia la promesa de matrimonio íntimo.
 */
export const ASSET_ALT: Record<CloudinaryAsset, string> = {
  'hero-aerial':
    'Vista aérea de La Palma & El Tucán: finca cafetera para matrimonios íntimos hasta 50 invitados, a 90 min de Bogotá',
  'cabana-interior':
    'Cabaña independiente entre cafetales — alojamiento para invitados de matrimonios íntimos en La Palma & El Tucán',
  cafetales:
    'Cafetales de la finca origen del café ganador del World Barista Championship 2019 — escenario natural para ceremonias al aire libre',
  'comida-farm-to-table':
    'Cena farm-to-table con ingredientes de huerta orgánica propia, servicio personalizado para matrimonios',
  huerta:
    'Huerta orgánica que abastece la recepción del matrimonio — producto local, kilómetro cero',
  'caminata-bosque':
    'Bosque de niebla privado para fotografías de matrimonio entre cafetales y montaña',
  cascada:
    'Entorno natural envolvente para ceremonias simbólicas — Zipacón, Cundinamarca',
  eventos:
    'Espacios para eventos entre cafetales — ceremonia, recepción y celebración nocturna',
};
