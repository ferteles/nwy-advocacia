import imgNotebook from "../../../assets/images/notebook-band.jpg";
import { COLORS } from "../../constants/colors";

export function Quote() {
  return (
    <section className="relative overflow-hidden" style={{ background: COLORS.light }}>
      {/* Faixa dourada full-width, centralizada verticalmente atrás da imagem */}
      <div
        className="absolute left-0 right-0 h-[60px] md:h-[102px]"
        style={{ top: "50%", transform: "translateY(-50%)", background: COLORS.gold, zIndex: 0 }}
      />

      {/* Imagem do caderno NWY centralizada */}
      <div
        className="relative"
        style={{
          marginLeft: "clamp(24px, 8.3vw, 120px)",
          marginRight: "clamp(24px, 8.3vw, 120px)",
          marginTop: "clamp(48px, 7vw, 96px)",
          marginBottom: "clamp(48px, 7vw, 96px)",
          zIndex: 3,
        }}
      >
        <img src={imgNotebook} alt="NWY Advogados" className="block w-full h-auto" />
      </div>
    </section>
  );
}
