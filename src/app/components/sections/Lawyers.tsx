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
  const l = lawyers[0];

  return (
    <section id="advogados" style={{ background: "white" }} className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <h2 className="font-['Cormorant_Garamond',serif] text-[#1e1e1e] mb-8 md:mb-16" style={{ fontSize: "clamp(36px, 4vw, 48px)", lineHeight: 1.15 }}>
          Sócio Fundador
        </h2>

        {/* Desktop Layout: elegante grid de duas colunas */}
        <div className="hidden md:grid grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Coluna da Imagem */}
          <div className="col-span-5 flex flex-col">
            <div className="overflow-hidden rounded-sm shadow-md bg-gray-100">
              <img 
                src={l.photo} 
                alt={l.name} 
                className="w-full h-[550px] object-cover object-top transition-transform duration-700 hover:scale-105" 
              />
            </div>
            {/* Barra Dourada abaixo da foto */}
            <div className="h-[3px] w-full mt-4" style={{ background: COLORS.gold }} />
          </div>

          {/* Coluna de Texto/Biografia */}
          <div className="col-span-7 flex flex-col justify-center">
            <h3 className="font-['Cormorant_Garamond',serif] text-[#262626] font-semibold tracking-wide" style={{ fontSize: "clamp(38px, 3.5vw, 44px)", lineHeight: 1.15 }}>
              {l.name}
            </h3>
            <p className="font-['Inter',sans-serif] font-medium tracking-wide mt-2" style={{ color: COLORS.gold, fontSize: 18 }}>
              {l.oab}
            </p>
            
            {/* Divisor elegante horizontal */}
            <div className="w-16 h-[2px] my-6" style={{ background: COLORS.gold }} />

            <div className="font-['Inter',sans-serif] text-[#262626]/90 space-y-4 text-justify" style={{ fontSize: 16, lineHeight: 1.85 }}>
              {l.bio.split('\n\n').map((paragraph, index) => (
                <p key={index} className="whitespace-pre-line">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout: empilhado de forma elegante */}
        <div className="md:hidden flex flex-col gap-6">
          <div>
            <img 
              src={l.photo} 
              alt={l.name} 
              className="w-full h-[380px] object-cover object-top rounded-sm shadow-sm" 
            />
            <div className="h-[3px] w-full mt-3" style={{ background: COLORS.gold }} />
          </div>
          <div>
            <h3 className="font-['Cormorant_Garamond',serif] text-[#262626] font-semibold" style={{ fontSize: 30, lineHeight: 1.2 }}>
              {l.name}
            </h3>
            <p className="font-['Inter',sans-serif] font-medium mt-1" style={{ color: COLORS.gold, fontSize: 16 }}>
              {l.oab}
            </p>
            
            <div className="w-12 h-[2px] my-4" style={{ background: COLORS.gold }} />

            <div className="font-['Inter',sans-serif] text-[#262626]/90 space-y-3 text-justify" style={{ fontSize: 14, lineHeight: 1.75 }}>
              {l.bio.split('\n\n').map((paragraph, index) => (
                <p key={index} className="whitespace-pre-line">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
