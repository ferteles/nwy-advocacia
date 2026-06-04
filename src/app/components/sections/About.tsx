import imgOffice from "../../../assets/images/office-building.png";
import { COLORS } from "../../constants/colors";

export function About() {
  return (
    <section id="escritorio" className="relative overflow-hidden">
      {/* Mobile layout */}
      <div className="block lg:hidden" style={{ background: COLORS.light }}>
        <div className="px-4 pt-8 pb-0">
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-[4px]" style={{ background: COLORS.gold }} />
            <img src={imgOffice} alt="Escritório" className="w-full h-[300px] object-cover" />
          </div>
        </div>
      </div>
      <div className="block lg:hidden" style={{ background: COLORS.cardBg }}>
        <div className="px-4 py-10 space-y-4">
          <p className="font-['Inter',sans-serif] text-[#dadad7]" style={{ fontSize: 18, lineHeight: 1.5 }}>
            Nascemos de uma atuação sólida e da experiência em contextos que exigem responsabilidade, planejamento e tomada de decisão consciente.
          </p>
          <p className="font-['Inter',sans-serif] text-[#dadad7]" style={{ fontSize: 18, lineHeight: 1.5 }}>
            Estruturamos nossa prática para atuar de forma independente, técnica e estratégica, respeitando regras, procedimentos e o impacto real das decisões jurídicas.
          </p>
          <p className="font-['Inter',sans-serif] text-[#dadad7]" style={{ fontSize: 18, lineHeight: 1.5 }}>
            Não atuamos por impulso nem reagimos a problemas já instalados.
          </p>
          <p className="font-['Inter',sans-serif] text-[#dadad7]" style={{ fontSize: 18, lineHeight: 1.5 }}>
            Analisamos cenários, definimos estratégias e conduzimos cada demanda com clareza e controle.
          </p>
        </div>
      </div>

      {/* Desktop — banda escura full-width cruza a imagem (fiel ao Figma) */}
      <div className="hidden lg:block relative" style={{ background: COLORS.light }}>
        {/* Banda escura: começa 250px do topo, altura 460px */}
        <div className="absolute left-0 right-0" style={{ top: 250, height: 460, background: COLORS.cardBg }} />
        <div className="relative max-w-[1440px] mx-auto" style={{ paddingTop: 120, paddingBottom: 80, paddingLeft: 120, paddingRight: 120 }}>
          <div className="flex items-start">
            {/* Imagem: inicia em y=120, 130px acima da banda escura */}
            <div className="relative flex-shrink-0" style={{ width: '40%', zIndex: 1 }}>
              <div className="absolute left-0 top-0 bottom-0 w-[40px]" style={{ background: COLORS.gold, zIndex: 2 }} />
              <img src={imgOffice} alt="Escritório" className="w-full object-cover relative" style={{ height: 640 }} />
            </div>
            {/* Texto: inicia em y=120+180=300 → perfeitamente centralizado na banda escura */}
            <div className="flex-1 relative" style={{ zIndex: 1, paddingTop: 180, paddingLeft: 64 }}>
              <p className="font-['Inter',sans-serif] text-[#dadad7]" style={{ fontSize: "clamp(30px, 2.1vw, 36px)", lineHeight: 1.5 }}>
                Nascemos de uma atuação sólida e da experiência em contextos que exigem responsabilidade, planejamento e tomada de decisão consciente.
              </p>
              <p className="font-['Inter',sans-serif] text-[#dadad7] mt-4" style={{ fontSize: "clamp(30px, 2.1vw, 36px)", lineHeight: 1.5 }}>
                Estruturamos nossa prática para atuar de forma independente, técnica e estratégica, respeitando regras, procedimentos e o impacto real das decisões jurídicas.
              </p>
              <p className="font-['Inter',sans-serif] text-[#dadad7] mt-4" style={{ fontSize: "clamp(30px, 2.1vw, 36px)", lineHeight: 1.5 }}>
                Não atuamos por impulso nem reagimos a problemas já instalados.
              </p>
              <p className="font-['Inter',sans-serif] text-[#dadad7] mt-4" style={{ fontSize: "clamp(30px, 2.1vw, 36px)", lineHeight: 1.5 }}>
                Analisamos cenários, definimos estratégias e conduzimos cada demanda com clareza e controle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}