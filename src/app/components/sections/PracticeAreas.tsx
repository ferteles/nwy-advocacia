import imgAreas from "../../../assets/images/areas-office.jpg";
import { COLORS } from "../../constants/colors";

const areas = [
  "Direito Militar",
  "Direito Previdenciário",
  "Direito Administrativo",
  "Direito Civil",
  "Direito Penal",
  "Proteção aos Direitos da Mulher",
  "Consultivo Jurídico",
];

const BAR = "#3d4756";

export function PracticeAreas() {
  return (
    <section id="atuacao" className="relative overflow-hidden bg-white">

      {/* Desktop */}
      <div className="hidden lg:block relative bg-white">
        {/* Imagem da sala à direita (full-bleed) */}
        <div className="absolute top-0 bottom-0 right-0" style={{ left: "45%" }}>
          <img src={imgAreas} alt="" className="w-full h-full object-cover" style={{ opacity: 0.4 }} />
        </div>

        {/* Conteúdo */}
        <div className="relative max-w-[1440px] mx-auto" style={{ paddingTop: 96, paddingBottom: 96 }}>
          {/* Título + linha */}
          <div className="flex items-center gap-6" style={{ paddingLeft: 190, width: "52%" }}>
            <h2
              className="font-['Cormorant_Garamond',serif] text-[#444950] whitespace-nowrap"
              style={{ fontSize: "clamp(40px, 4vw, 58px)", fontWeight: 600, lineHeight: 1.1 }}
            >
              Áreas de Atuação
            </h2>
            <div style={{ flex: 1, height: 2, background: COLORS.gold }} />
          </div>

          {/* Barras (full-bleed à esquerda) */}
          <div style={{ marginTop: 48, width: 600 }}>
            {areas.map((area) => (
              <div
                key={area}
                className="flex items-center justify-end"
                style={{ background: BAR, height: 82, marginBottom: 13 }}
              >
                <span
                  className="font-['Cormorant_Garamond',serif] text-[#d9d9d9] text-right px-8"
                  style={{ fontSize: "clamp(24px, 2.4vw, 34px)", fontWeight: 600, lineHeight: 1.2 }}
                >
                  {area}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="block lg:hidden bg-white">
        <div className="relative h-[200px] overflow-hidden">
          <img src={imgAreas} alt="" className="w-full h-full object-cover" style={{ opacity: 0.4 }} />
        </div>
        <div className="px-6 pt-8 pb-10">
          <div className="flex items-center gap-4">
            <h2
              className="font-['Cormorant_Garamond',serif] text-[#444950] whitespace-nowrap"
              style={{ fontSize: 34, fontWeight: 600, lineHeight: 1.1 }}
            >
              Áreas de Atuação
            </h2>
            <div style={{ flex: 1, height: 2, background: COLORS.gold }} />
          </div>
          <div className="mt-7">
            {areas.map((area) => (
              <div
                key={area}
                className="flex items-center justify-end"
                style={{ background: BAR, height: 72, marginBottom: 11 }}
              >
                <span
                  className="font-['Cormorant_Garamond',serif] text-[#d9d9d9] text-right px-5"
                  style={{ fontSize: 24, fontWeight: 600, lineHeight: 1.2 }}
                >
                  {area}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
