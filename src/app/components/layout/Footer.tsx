import imgFooterBg from "../../../assets/images/footer-bg.jpg";
import { COLORS } from "../../constants/colors";
import { Logo } from "./Logo";
import { WatermarkFooter } from "./Watermarks";

export function Footer() {
  return (
    <footer style={{ background: COLORS.cardBg }} className="relative overflow-hidden">
<img src={imgFooterBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 rotate-180 mix-blend-overlay opacity-10"><WatermarkFooter /></div>
      <div className="relative max-w-[1200px] mx-auto px-4 md:px-6 py-10 md:py-16 flex flex-col lg:flex-row gap-8 md:gap-12 z-10">
        <div className="lg:w-1/3 flex items-center justify-center">
          <Logo color="#ffffff" className="w-[140px] md:w-[160px] h-auto" />
        </div>
        <div className="lg:w-2/3 flex flex-col md:flex-row gap-8 justify-end">
          <div className="flex flex-col gap-2 md:gap-3">
            <h4 className="font-['Cormorant_Garamond',serif] font-semibold text-white mb-2" style={{ fontSize: 20 }}>Escritório</h4>
            {["O Escritório", "Áreas de Atuação", "Sócio Fundador", "Contato"].map((l) => (
              <a
                key={l}
                href={`#${l === "O Escritório" ? "escritorio" : l === "Áreas de Atuação" ? "atuacao" : l === "Sócio Fundador" ? "advogados" : l.toLowerCase()}`}
                className="font-['Inter',sans-serif] font-medium text-white/80 hover:text-[#5D7B93] transition"
                style={{ fontSize: "clamp(14px, 1.5vw, 15px)" }}
              >
                {l}
              </a>
            ))}
          </div>
          <div className="md:ml-12 border-l border-white/10 pl-0 md:pl-12">
            <h4 className="font-['Cormorant_Garamond',serif] font-semibold text-white mb-2" style={{ fontSize: "clamp(15px, 2vw, 20px)" }}>Visite</h4>
            <p className="font-['Inter',sans-serif] font-medium text-white/80" style={{ fontSize: "clamp(11px, 1.5vw, 15px)", lineHeight: 1.6 }}>
              Shopping Conjunto Nacional,<br />Torre Vermelha, sala 5026<br />Brasília - DF
            </p>
            <p className="font-['Inter',sans-serif] font-medium mt-4" style={{ fontSize: "clamp(11px, 1.5vw, 15px)" }}>
              <a href="tel:5561998827844" className="text-white hover:text-[#5D7B93] transition-colors duration-300">
                61 9 9882 7844
              </a>
            </p>
            <p className="font-['Inter',sans-serif] font-medium mt-1" style={{ fontSize: "clamp(11px, 1.5vw, 15px)" }}>
              <a href="mailto:contato@nwyadvocacia.adv.br" className="text-white/80 hover:text-[#5D7B93] transition-colors duration-300">
                contato@nwyadvocacia.adv.br
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 border-t border-white/10 pt-6 mt-6 flex justify-between items-center text-white/40 text-[13px]">
        <span>© {new Date().getFullYear()} NWY Advogados | por <a href="https://tauatech.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">tauatech.com</a></span>
      </div>
    </footer>
  );
}
