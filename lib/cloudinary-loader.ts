/**
 * Custom Cloudinary loader para next/image.
 * Uso:
 *   <Image src={cloudinaryPath('cafetales')} width={1600} height={1000} ... />
 *
 * Next/image pasa la src completa — aquí solo inyectamos f_auto,q_70,w_{width}.
 * Evita bug de doble-transformación en la cuenta dsylu9a7k.
 */

export default function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  const q = quality || 70;
  // If src is already a full Cloudinary URL, inject transform after /upload/
  if (src.startsWith('https://res.cloudinary.com/')) {
    if (src.includes('/image/upload/')) {
      return src.replace(
        '/image/upload/',
        `/image/upload/f_auto,q_${q},w_${width}/`
      );
    }
    return src;
  }
  // Otherwise assume it's a path like "lpet/xxx.png"
  const cloud = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD || 'dsylu9a7k';
  const clean = src.startsWith('/') ? src.slice(1) : src;
  return `https://res.cloudinary.com/${cloud}/image/upload/f_auto,q_${q},w_${width}/${clean}`;
}
