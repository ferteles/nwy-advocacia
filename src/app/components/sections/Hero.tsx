import videoHero from "../../../assets/images/hero1920x1080-converter.mp4";
import { WatermarkHero } from "../layout/Watermarks";

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Fundo Único com o Vídeo MP4 para todo o bloco Hero */}
      <video
        src={videoHero}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none z-0"
      />
      
      <section className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden z-10">
        <WatermarkHero />
        <div className="relative max-w-[2286px] mx-auto w-full pt-0">
          <div className="max-w-[400px] md:max-w-[1360px] ml-auto">
            <h1 className="font-['Cormorant_Garamond',serif] hero-title">
              Atuação jurídica estratégica<br />
              com método, clareza e condução<br />
              responsável.
            </h1>
            <a href="#contato" className="inline-block mt-10 md:mt-12 font-['Inter',sans-serif] hero-cta border-b-2 border-black pb-1 hover:opacity-70 transition">
              Entrar em Contato
            </a>
          </div>
        </div>
      </section>

      {/* Decorative Transition Bars */}
      <div className="w-full flex flex-col relative z-10">
        <div className="w-full h-[100px] md:h-[150px]" /> 
        <div className="transition-bar-gold" />
        <div className="transition-bar-accent" />
        <div className="transition-bar-card" />
      </div>
    </div>
  );
}
