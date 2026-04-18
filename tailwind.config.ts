import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,js,jsx,mdx}',
    './components/**/*.{ts,tsx,js,jsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // LP&ET brand palette (validated with Lina)
        pink: {
          DEFAULT: '#E8838C',
          50: '#FDF2F4',
          100: '#FBE4E8',
          500: '#E8838C',
          600: '#D96670',
          700: '#B94855',
        },
        navy: {
          DEFAULT: '#1E1E3F',
          900: '#141429',
          800: '#1E1E3F',
          700: '#2A2A55',
        },
        gold: {
          DEFAULT: '#C9A227',
          500: '#C9A227',
          600: '#A8871F',
        },
        beige: {
          DEFAULT: '#D4C5B0',
          100: '#F3EEE5',
          200: '#E9E0D0',
          500: '#D4C5B0',
        },
        green: {
          DEFAULT: '#2D5A3D',
          700: '#2D5A3D',
          600: '#3A6B4C',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          600: '#1EBE5A',
          700: '#128C7E',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out both',
        'fade-up': 'fadeUp 0.9s ease-out both',
        'shine': 'shine 2.5s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shine: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(180deg, rgba(30,30,63,0) 0%, rgba(30,30,63,0.55) 60%, rgba(30,30,63,0.95) 100%)',
        'gradient-shine': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)',
      },
    },
  },
  plugins: [],
};

export default config;
