import imgFundoAtuacao from "../../../assets/images/fundo-atuacao.png";
import { COLORS } from "../../constants/colors";

const steps = [
  { title: "Análise", desc: "De contexto jurídico e dos riscos envolvidos" },
  { title: "Estratégia", desc: "Métodos, planos e ações coordenadas" },
  { title: "Condução", desc: "Execução técnica e comunicação clara" },
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
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h2 className="font-['Cormorant_Garamond',serif] text-[#d9d9d9]" style={{ fontSize: "clamp(26px, 3.5vw, 40px)", lineHeight: 1.2 }}>
            Atuação jurídica estruturada a partir de três eixos fundamentais:
          </h2>
          <div className="h-[2px] w-full max-w-[312px] md:max-w-[430px] mt-5 md:mt-7" style={{ background: "#A2CCFF" }} />
        </div>

        {/* Right Side: Vertical Stacked Cards */}
        <div className="lg:w-1/2 w-full flex flex-col gap-6 md:gap-8 relative overflow-hidden">
          {/* Vertical Gold Bar Background */}
          <div className="absolute top-0 bottom-0 left-[20%] w-[120px] md:w-[140px] z-0" style={{ background: COLORS.gold }} />

          {steps.map((step) => (
            <div key={step.title} className="relative z-10 px-7 md:px-9 py-6 md:py-7" style={{ background: COLORS.accent }}>
              <h3 className="font-['Cormorant_Garamond',serif] text-[#d9d9d9]" style={{ fontSize: "clamp(28px, 3vw, 35px)", lineHeight: 1.1 }}>
                {step.title}
              </h3>
              <div className="h-[1px] w-full mt-3 mb-4" style={{ background: "#3d4756" }} />
              <p className="font-['Inter',sans-serif] text-[#d9d9d9]" style={{ fontSize: "clamp(14px, 1.5vw, 18px)", lineHeight: 1.6 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
