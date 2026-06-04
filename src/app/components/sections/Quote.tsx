import imgFundoComunicamos from "../../../assets/images/fundo comunicamos.png";
import { COLORS } from "../../constants/colors";

export function Quote() {
  return (
    <section className="relative overflow-hidden" style={{ background: COLORS.light }}>
      {/* Faixa dourada full-width que cruza toda a seção (~45% da altura) */}
      <div
        className="absolute left-0 right-0"
        style={{ top: "42%", height: 102, background: COLORS.gold, zIndex: 0 }}
      />
      {/* Caixa escura centralizada com margens laterais */}
      <div
        className="relative mx-auto"
        style={{
          marginLeft: "clamp(86px, 10.5vw, 202px)",
          marginRight: "clamp(86px, 10.5vw, 202px)",
          marginTop: 72,
          marginBottom: 72,
          zIndex: 3,
        }}
      >
        <div className="relative overflow-hidden" style={{ background: "rgb(30, 41, 59)" }}>
          <img
            src={imgFundoComunicamos}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.35, zIndex: 0 }}
          />
          <div className="relative px-10 md:px-16 py-14 md:py-20 text-center" style={{ zIndex: 4 }}>
            <p className="font-['Inter',sans-serif] text-[#d9d9d9]" style={{ fontSize: "clamp(30px, 2.4vw, 38px)", lineHeight: 1.7 }}>
              Comunicamos pouco, mas dizemos muito.<br />
              Não gritamos autoridade. Sustentamos.
            </p>
            <p className="font-['Inter',sans-serif] text-[#d9d9d9] mt-6 md:mt-8" style={{ fontSize: "clamp(30px, 2.4vw, 38px)", lineHeight: 1.7 }}>
              Atuamos com postura segura, estratégica, discreta e precisa.<br />
              Não utilizamos o medo como argumento nem a urgência como ferramenta.
            </p>
            <p className="font-['Inter',sans-serif] text-[#d9d9d9] mt-6 md:mt-8" style={{ fontSize: "clamp(30px, 2.4vw, 38px)", lineHeight: 1.7 }}>
              Preferimos clareza, precisão e direção.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}