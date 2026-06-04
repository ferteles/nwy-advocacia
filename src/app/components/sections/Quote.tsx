import imgFundoComunicamos from "../../../assets/images/fundo comunicamos.png";

export function Quote() {
  return (
    <section className="relative overflow-hidden bg-site-light">
      {/* Faixa dourada full-width que cruza toda a seção (~45% da altura) */}
      <div className="absolute left-0 right-0 bg-site-gold top-[42%] h-[102px] z-0" />
      {/* Caixa escura centralizada com margens laterais */}
      <div className="quote-box">
        <div className="quote-inner">
          <img
            src={imgFundoComunicamos}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-35 z-0"
          />
          <div className="relative px-10 md:px-16 py-14 md:py-20 text-center z-10">
            <p className="font-['Inter',sans-serif] quote-text">
              Comunicamos pouco, mas dizemos muito.<br />
              Não gritamos autoridade. Sustentamos.
            </p>
            <p className="font-['Inter',sans-serif] quote-text mt-6 md:mt-8">
              Atuamos com postura segura, estratégica, discreta e precisa.<br />
              Não utilizamos o medo como argumento nem a urgência como ferramenta.
            </p>
            <p className="font-['Inter',sans-serif] quote-text mt-6 md:mt-8">
              Preferimos clareza, precisão e direção.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
