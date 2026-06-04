import imgFooterBg from "../../../assets/images/footer-bg.png";
import { COLORS } from "../../constants/colors";
import { Logo } from "./Logo";
import { WatermarkFooter } from "./Watermarks";

export function Footer() {
  return (
    <footer style={{ background: COLORS.cardBg }} className="relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[6px]" style={{ background: COLORS.gold, zIndex: 10 }} />
      <img src={imgFooterBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 rotate-180 mix-blend-overlay opacity-10"><WatermarkFooter /></div>
      <div className="relative max-w-[1200px] mx-auto px-4 md:px-6 py-10 md:py-16 flex flex-col lg:flex-row gap-8 md:gap-12 z-10">
        <div className="lg:w-1/3">
          <Logo color="#949060" className="w-[100px] md:w-[120px] h-auto" />
        </div>
        <div className="lg:w-2/3 flex flex-col md:flex-row gap-8 justify-end">
          <div className="flex flex-col gap-2 md:gap-3">
            <h4 className="font-['Cormorant_Garamond',serif] font-semibold text-[#949060] mb-2" style={{ fontSize: 20 }}>Escritório</h4>
            {["O Escritório", "Nossa Atuação", "Advogados", "Contato"].map((l) => (
              <a
                key={l}
                href={`#${l === "O Escritório" ? "escritorio" : l === "Nossa Atuação" ? "atuacao" : l.toLowerCase()}`}
                className="font-['Inter',sans-serif] font-medium text-white/80 hover:text-[#5D7B93] transition"
                style={{ fontSize: "clamp(28px, 2.25vw, 30px)" }}
              >
                {l}
              </a>
            ))}
          </div>
          <div className="md:ml-12 border-l border-white/10 pl-0 md:pl-12">
            <h4 className="font-['Cormorant_Garamond',serif] font-semibold text-[#949060] mb-2" style={{ fontSize: "clamp(30px, 3.0vw, 38px)" }}>Visite</h4>
            <p className="font-['Inter',sans-serif] font-medium text-white/80" style={{ fontSize: "clamp(24px, 2.25vw, 30px)", lineHeight: 1.6 }}>
              Shopping Conjunto Nacional,<br />Torre Vermelha, sala 5026<br />Brasília - DF
            </p>
            <p className="font-['Inter',sans-serif] font-medium text-white mt-4" style={{ fontSize: "clamp(24px, 2.25vw, 30px)" }}>
              <a href="tel:+556****7844" className="hover:text-[#949060] transition-colors">61 9 9882 7844</a>
            </p>
            <p className="font-['Inter',sans-serif] font-medium text-white/80 mt-1" style={{ fontSize: "clamp(24px, 2.25vw, 30px)" }}>
              <a href="mailto:contato@nwyadvocacia.com.br" className="hover:text-[#949060] transition-colors">contato@nwyadvocacia.com.br</a>
            </p>
          </div>
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 border-t border-white/10 pt-6 mt-6 flex justify-between items-center text-white/40 text-[27px]">
        <span>© {new Date().getFullYear()} NWY Advogados.</span>
        <span>Desenvolvido por <a href="https://tauatech.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">tauatech.com</a></span>
      </div>
    </footer>
  );
}