import imgFundoAtuacao from "../../../assets/images/fundo-atuacao.png";

const steps = [
  { title: "Análise", desc: "Leitura aprofundada do caso, do contexto jurídico e dos riscos envolvidos." },
  { title: "Estratégia", desc: "Definição do caminho jurídico mais adequado, considerando objetivos, cenários possíveis e impactos de curto, médio e longo prazo." },
  { title: "Condução", desc: "Execução técnica das medidas necessárias, com acompanhamento responsável e comunicação clara ao longo de todo o processo." },
];

export function Methodology() {
  return (
    <section className="relative overflow-hidden bg-site-card-bg">
      <img
        src={imgFundoAtuacao}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      />
      <div className="relative max-w-[1200px] mx-auto px-4 md:px-6 section-pad flex flex-col lg:flex-row gap-8 md:gap-12 z-10">
        <div className="lg:w-1/2">
          <h2 className="font-['Cormorant_Garamond',serif] text-site-card-fg text-section-title">
            Nossa atuação jurídica é estruturada a partir de três eixos fundamentais:
          </h2>
          <div className="gold-bar-wide mt-4 md:mt-6" />
        </div>

        {/* Right Side: Vertical Stacked Cards */}
        <div className="lg:w-1/2 w-full flex flex-col gap-6 md:gap-8 relative overflow-hidden">
          {/* Vertical Gold Bar Background */}
          <div className="method-gold-bg" />

          {steps.map((step) => (
            <div key={step.title} className="relative z-10 p-6 md:p-8 bg-site-accent">
              <div className="gold-bar" />
              <h3 className="font-['Cormorant_Garamond',serif] method-card-title">
                {step.title}
              </h3>
              <p className="font-['Inter',sans-serif] method-card-desc mt-3">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
