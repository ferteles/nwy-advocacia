import imgPaulo from "../../../assets/images/paulo-waterloo.png";
import { COLORS } from "../../constants/colors";

const lawyers = [
  {
    name: "Paulo Waterloo",
    oab: "OAB 60977 - DF",
    photo: imgPaulo,
    bio: "Especialista em Direito Militar e Administração Pública, com sólida experiência em demandas administrativas e judiciais envolvendo a União perante o TRF-1 e em procedimentos conduzidos pelo Ministério Público Federal.\n\nAtuação consistente no assessoramento em Inquéritos Policiais Militares, Conselhos de Justificação e de Disciplina, além de procedimentos administrativos no âmbito das Forças Armadas e das forças auxiliares, bem como em ações penais perante a Justiça Militar.\nExperiência na defesa em Comissões Parlamentares de Inquérito.\n\nAtuação em demandas de Direito Administrativo, Penal, Civil e Previdenciário.",
  },
];

export function Lawyers() {
  return (
    <section id="advogados" style={{ background: "white" }} className="py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <h2 className="font-['Cormorant_Garamond',serif] text-[#1e1e1e] mb-8 md:mb-12" style={{ fontSize: "clamp(34px, 4vw, 40px)", lineHeight: 1.15 }}>
          Advogados
        </h2>

        {/* Desktop: center the lawyer card */}
        <div className="hidden md:flex justify-center">
          <div className="max-w-[400px]">
            {lawyers.map((l) => (
              <div key={l.name}>
                <img src={l.photo} alt={l.name} className="w-full h-[400px] object-cover rounded-sm" />
                <div className="h-[3px] w-full mt-4" style={{ background: COLORS.gold }} />
                <h3 className="font-['Cormorant_Garamond',serif] text-[#32353A] mt-3" style={{ fontSize: 32, lineHeight: "30px", fontWeight: 600 }}>
                  {l.name}
                </h3>
                <p className="font-['Inter',sans-serif] text-[#32353A] mt-1" style={{ fontSize: 20 }}>
                  {l.oab}
                </p>
                <p className="font-['Inter',sans-serif] text-[#1A1A1A]/80 mt-6 whitespace-pre-line" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  {l.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: featured lawyer (Paulo Waterloo) */}
        <div className="md:hidden">
          <img src={lawyers[0].photo} alt={lawyers[0].name} className="w-full h-[360px] object-cover rounded-sm" />
          <div className="h-[3px] w-full mt-4" style={{ background: COLORS.gold }} />
          <h3 className="font-['Cormorant_Garamond',serif] text-[#32353A] mt-3" style={{ fontSize: 28, lineHeight: "26px", fontWeight: 600 }}>
            {lawyers[0].name}
          </h3>
          <p className="font-['Inter',sans-serif] text-[#32353A] mt-1" style={{ fontSize: 18 }}>
            {lawyers[0].oab}
          </p>
          <p className="font-['Inter',sans-serif] text-[#32353A] mt-4 whitespace-pre-line" style={{ fontSize: 13, lineHeight: 1.6 }}>
            {lawyers[0].bio}
          </p>
        </div>
      </div>
    </section>
  );
}
