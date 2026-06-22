import imgOffice from "../../../assets/images/office-interior.png";
import { COLORS } from "../../constants/colors";

export function About() {
  return (
    <section id="escritorio" className="relative overflow-hidden">
      {/* Mobile layout */}
      <div className="block lg:hidden" style={{ background: COLORS.light }}>
        <div className="px-4 pt-8 pb-0">
          <img src={imgOffice} alt="Escritório NWY Advogados" className="w-full h-[412px] object-cover" />
        </div>
      </div>
      <div className="block lg:hidden" style={{ background: COLORS.cardBg }}>
        <div className="px-4 py-10 space-y-6">
          <p className="font-['Cormorant_Garamond',serif] text-[#dadad7]" style={{ fontSize: 22, lineHeight: 1.6, fontWeight: 700 }}>
            Atuação sólida e experiente em contextos que exigem responsabilidade, planejamento e tomada de decisão consciente.
          </p>
          <p className="font-['Cormorant_Garamond',serif] text-[#dadad7]" style={{ fontSize: 22, lineHeight: 1.6, fontWeight: 700 }}>
            Análise de cenário, definição e condução técnica.
          </p>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:block relative" style={{ background: COLORS.light }}>
        <div className="absolute left-0 right-0" style={{ top: 250, height: 460, background: COLORS.cardBg }} />
        <div className="relative max-w-[1440px] mx-auto" style={{ paddingTop: 120, paddingBottom: 80, paddingLeft: 120, paddingRight: 120 }}>
          <div className="flex items-start">
            <div className="relative flex-shrink-0" style={{ width: '40%', zIndex: 1 }}>
              <img src={imgOffice} alt="Escritório NWY Advogados" className="w-full object-cover relative" style={{ height: 640 }} />
            </div>
            <div className="flex-1 relative self-stretch" style={{ zIndex: 1 }}>
              <div className="absolute left-0 right-0 flex flex-col justify-center pl-16 pr-8" style={{ top: 130, height: 460 }}>
                <p className="font-['Cormorant_Garamond',serif] text-[#dadad7]" style={{ fontSize: "clamp(20px, 1.8vw, 26px)", lineHeight: 1.6, fontWeight: 700 }}>
                  Atuação sólida e experiente em contextos que exigem responsabilidade, planejamento e tomada de decisão consciente.
                </p>
                <p className="font-['Cormorant_Garamond',serif] text-[#dadad7] mt-8" style={{ fontSize: "clamp(20px, 1.8vw, 26px)", lineHeight: 1.6, fontWeight: 700 }}>
                  Análise de cenário, definição e condução técnica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
