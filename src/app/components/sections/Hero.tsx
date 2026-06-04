import videoHero from "../../../assets/images/hero1920x1080-converter.mp4";
import { COLORS } from "../../constants/colors";
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
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        style={{ zIndex: 0 }}
      />
      
      <section className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden z-10">
        <WatermarkHero />
        <div className="relative max-w-[1440px] mx-auto w-full pt-0">
          <div className="max-w-[400px] md:max-w-[1360px] ml-auto">
            <h1 className="font-['Cormorant_Garamond',serif] text-[#1A1A1A]" style={{ fontSize: "clamp(62px, 7.2vw, 104px)", lineHeight: 1.2, fontWeight: 400 }}>
              Atuação jurídica estratégica<br />
              com método, clareza e condução<br />
              responsável.
            </h1>
            <a href="#contato" className="inline-block mt-10 md:mt-12 font-['Inter',sans-serif] text-[#1A1A1A] border-b-2 border-black pb-1 hover:opacity-70 transition" style={{ fontSize: "clamp(34px, 2.4vw, 40px)", fontWeight: 500 }}>
              Entrar em Contato
            </a>
          </div>
        </div>
      </section>

      {/* Decorative Transition Bars */}
      <div className="w-full flex flex-col relative z-10">
        {/* Dark area with GIF (implicit from wrapper) */}
        <div className="w-full h-[100px] md:h-[150px]" /> 
        {/* Gold Band */}
        <div className="w-full h-[75px] md:h-[105px] opacity-40" style={{ background: COLORS.gold }} />
        {/* Blue Strip */}
        <div className="w-full h-[30px] md:h-[45px] opacity-50" style={{ background: COLORS.accent }} />
        <div className="w-full h-[60px] md:h-[100px] opacity-80" style={{ background: COLORS.cardBg }} />
      </div>
    </div>
  );
}