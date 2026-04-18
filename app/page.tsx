import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import PropuestaValor from '@/components/PropuestaValor';
import ExperienciaMatrimonio from '@/components/ExperienciaMatrimonio';
import Galeria from '@/components/Galeria';
import Testimonios from '@/components/Testimonios';
import Sostenibilidad from '@/components/Sostenibilidad';
import Ubicacion from '@/components/Ubicacion';
import FormularioCorto from '@/components/FormularioCorto';
import FAQ from '@/components/FAQ';
import CTAFinal from '@/components/CTAFinal';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] selection:bg-pink selection:text-white">
      <Hero />
      <TrustBar />
      <PropuestaValor />
      <ExperienciaMatrimonio />
      <Galeria />
      <Testimonios />
      <Sostenibilidad />
      <Ubicacion />
      <FormularioCorto />
      <FAQ />
      <CTAFinal />
      <Footer />
    </main>
  );
}
