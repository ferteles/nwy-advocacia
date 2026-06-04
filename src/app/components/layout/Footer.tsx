import imgFooterBg from "../../../assets/images/footer-bg.png";
import { Logo } from "./Logo";
import { WatermarkFooter } from "./Watermarks";

export function Footer() {
  return (
    <footer className="bg-site-card-bg relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[6px] bg-site-gold z-10" />
      <img src={imgFooterBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 rotate-180 mix-blend-overlay opacity-10"><WatermarkFooter /></div>
      <div className="relative max-w-[1200px] mx-auto px-4 md:px-6 py-10 md:py-16 flex flex-col lg:flex-row gap-8 md:gap-12 z-10">
        <div className="lg:w-1/3">
          <Logo color="#949060" className="w-[100px] md:w-[120px] h-auto" />
        </div>
        <div className="lg:w-2/3 flex flex-col md:flex-row gap-8 justify-end">
          <div className="flex flex-col gap-2 md:gap-3">
            <h4 className="font-['Cormorant_Garamond',serif] font-semibold text-site-gold mb-2 text-[30px]">Escritório</h4>
            {["O Escritório", "Nossa Atuação", "Advogados", "Contato"].map((l) => (
              <a
                key={l}
                href={`#${l === "O Escritório" ? "escritorio" : l === "Nossa Atuação" ? "atuacao" : l.toLowerCase()}`}
                className="font-['Inter',sans-serif] font-medium text-white/80 hover:text-site-blue transition text-body-sm"
              >
                {l}
              </a>
            ))}
          </div>
          <div className="md:ml-12 border-l border-white/10 pl-0 md:pl-12">
            <h4 className="font-['Cormorant_Garamond',serif] font-semibold text-site-gold mb-2 text-quote">Visite</h4>
            <p className="font-['Inter',sans-serif] font-medium text-white/80 text-body-sm leading-relaxed">
              Shopping Conjunto Nacional,<br />Torre Vermelha, sala 5026<br />Brasília - DF
            </p>
            <p className="font-['Inter',sans-serif] font-medium text-white mt-4 text-body-sm">
              <a href="tel:+556****7844" className="hover:text-site-gold transition-colors">61 9 9882 7844</a>
            </p>
            <p className="font-['Inter',sans-serif] font-medium text-white/80 mt-1 text-body-sm">
              <a href="mailto:contato@nwyadvocacia.com.br" className="hover:text-site-gold transition-colors">contato@nwyadvocacia.com.br</a>
            </p>
          </div>
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 footer-bottom">
        <span>&copy; {new Date().getFullYear()} NWY Advogados.</span>
        <span>Desenvolvido por <a href="https://tauatech.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">tauatech.com</a></span>
      </div>
    </footer>
  );
}
