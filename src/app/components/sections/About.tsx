import imgOffice from "../../../assets/images/office-building.png";

export function About() {
  return (
    <section id="escritorio" className="relative overflow-hidden">
      {/* Mobile layout */}
      <div className="block lg:hidden bg-site-light">
        <div className="px-4 pt-8 pb-0">
          <div className="relative">
            <div className="gold-bar-vertical" />
            <img src={imgOffice} alt="Escritório" className="w-full h-[300px] object-cover" />
          </div>
        </div>
      </div>
      <div className="block lg:hidden bg-site-card-bg">
        <div className="px-4 py-10 space-y-4">
          <p className="font-['Inter',sans-serif] text-[#dadad7] about-text">
            Nascemos de uma atuação sólida e da experiência em contextos que exigem responsabilidade, planejamento e tomada de decisão consciente.
          </p>
          <p className="font-['Inter',sans-serif] text-[#dadad7] about-text">
            Estruturamos nossa prática para atuar de forma independente, técnica e estratégica, respeitando regras, procedimentos e o impacto real das decisões jurídicas.
          </p>
          <p className="font-['Inter',sans-serif] text-[#dadad7] about-text">
            Não atuamos por impulso nem reagimos a problemas já instalados.
          </p>
          <p className="font-['Inter',sans-serif] text-[#dadad7] about-text">
            Analisamos cenários, definimos estratégias e conduzimos cada demanda com clareza e controle.
          </p>
        </div>
      </div>

      {/* Desktop — banda escura full-width cruza a imagem (fiel ao Figma) */}
      <div className="hidden lg:block relative bg-site-light">
        {/* Banda escura: começa 250px do topo, altura 460px */}
        <div className="about-dark-band" />
        <div className="relative max-w-[2286px] mx-auto about-desktop-container">
          <div className="flex items-start">
            {/* Imagem: inicia em y=120, 130px acima da banda escura */}
            <div className="about-desktop-image-wrap">
              <div className="gold-bar-vertical" />
              <img src={imgOffice} alt="Escritório" className="about-desktop-image" />
            </div>
            {/* Texto: inicia em y=120+180=300 → perfeitamente centralizado na banda escura */}
            <div className="about-desktop-text">
              <p className="font-['Inter',sans-serif] text-[#dadad7] about-text">
                Nascemos de uma atuação sólida e da experiência em contextos que exigem responsabilidade, planejamento e tomada de decisão consciente.
              </p>
              <p className="font-['Inter',sans-serif] text-[#dadad7] about-text mt-4">
                Estruturamos nossa prática para atuar de forma independente, técnica e estratégica, respeitando regras, procedimentos e o impacto real das decisões jurídicas.
              </p>
              <p className="font-['Inter',sans-serif] text-[#dadad7] about-text mt-4">
                Não atuamos por impulso nem reagimos a problemas já instalados.
              </p>
              <p className="font-['Inter',sans-serif] text-[#dadad7] about-text mt-4">
                Analisamos cenários, definimos estratégias e conduzimos cada demanda com clareza e controle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
