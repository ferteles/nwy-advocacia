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
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-[120px] w-full pt-[120px] md:pt-[160px]">
          <div className="max-w-[400px] md:max-w-[820px] ml-auto">
            <h1 className="font-['Cormorant_Garamond',serif] text-[#1A1A1A]" style={{ fontSize: "clamp(28px, 3.8vw, 52px)", lineHeight: 1.25, fontWeight: 700 }}>
              Assessoria, consultoria e representação nas esferas administrativa e judicial, com foco na prevenção de conflitos, na defesa de direitos e na construção de soluções jurídicas eficazes.
            </h1>
            <p className="mt-6 font-['Inter',sans-serif] text-[#3d4756]" style={{ fontSize: "clamp(16px, 1.4vw, 20px)", fontWeight: 400 }}>
              Atuação estratégica, com método, clareza e condução responsável.
            </p>
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
