import imgFundoAtuacao from "../../../assets/images/fundo-atuacao.png";
import { COLORS } from "../../constants/colors";

const steps = [
  { title: "Análise", desc: "Leitura aprofundada do caso, do contexto jurídico e dos riscos envolvidos." },
  { title: "Estratégia", desc: "Definição do caminho jurídico mais adequado, considerando objetivos, cenários possíveis e impactos de curto, médio e longo prazo." },
  { title: "Condução", desc: "Execução técnica das medidas necessárias, com acompanhamento responsável e comunicação clara ao longo de todo o processo." },
];

export function Methodology() {
  return (
    <section className="relative overflow-hidden" style={{ background: COLORS.cardBg }}>
      <img
        src={imgFundoAtuacao}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      />
      <div className="relative max-w-[1200px] mx-auto px-4 md:px-6 py-12 md:py-20 flex flex-col lg:flex-row gap-8 md:gap-12" style={{ zIndex: 1 }}>
        <div className="lg:w-1/2">
          <h2 className="font-['Cormorant_Garamond',serif] text-[#d9d9d9]" style={{ fontSize: "clamp(46px, 5.25vw, 68px)", lineHeight: 1.2 }}>
            Nossa atuação jurídica é estruturada a partir de três eixos fundamentais:
          </h2>
          <div className="h-[3px] w-full max-w-[312px] md:max-w-[430px] mt-4 md:mt-6" style={{ background: COLORS.gold }} />
        </div>

        {/* Right Side: Vertical Stacked Cards */}
        <div className="lg:w-1/2 w-full flex flex-col gap-6 md:gap-8 relative overflow-hidden">
          {/* Vertical Gold Bar Background */}
          <div className="absolute top-0 bottom-0 left-[20%] w-[120px] md:w-[140px] z-0" style={{ background: COLORS.gold }} />

          {steps.map((step) => (
            <div key={step.title} className="relative z-10 p-6 md:p-8" style={{ background: COLORS.accent }}>
              <div className="h-[3px] w-full mb-4 md:mb-5" style={{ background: COLORS.gold }} />
              <h3 className="font-['Cormorant_Garamond',serif] text-[#d9d9d9]" style={{ fontSize: "clamp(50px, 4.5vw, 60px)" }}>
                {step.title}
              </h3>
              <p className="font-['Inter',sans-serif] text-[#d9d9d9] mt-3" style={{ fontSize: "clamp(28px, 2.25vw, 34px)", lineHeight: 1.6 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}