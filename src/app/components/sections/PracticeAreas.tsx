const practiceAreas = [
  { title: "Direito\nMilitar", desc: "Atuação em demandas administrativas, disciplinares e judiciais relacionadas às Forças Armadas e demais instituições militares." },
  { title: "Direito\nPrevidenciário", desc: "Atuação em questões previdenciárias, benefícios, aposentadorias e demandas correlatas, nas esferas administrativa e judicial." },
  { title: "Direito\nAdministrativo", desc: "Atuação em demandas envolvendo a Administração Pública, atos administrativos, processos administrativos e relações jurídicas com o poder público." },
  { title: "Direito Civil", desc: "Atuação em demandas cíveis estratégicas, incluindo responsabilidade civil, obrigações, contratos, relações de consumo e litígios patrimoniais." },
  { title: "Direito Penal", desc: "Atuação em demandas criminais, tanto na fase investigativa quanto processual, incluindo acompanhamento de inquéritos, ações penais e medidas cautelares." },
  { title: "Proteção aos Direitos\nda Mulher", desc: "Atuação jurídica na proteção dos direitos da mulher, com abordagem técnica e humanizada, orientada pela perspectiva de gênero, abrangendo medidas protetivas de urgência, demandas de violência doméstica e familiar, acompanhamento criminal, ações cíveis e de família." },
  { title: "Consultivo Jurídico", desc: "Atuação preventiva e estratégica, com análise de riscos, orientação jurídica e suporte à tomada de decisões." },
  { title: "Demandas Complexas", desc: "Atuação em casos que exigem condução jurídica estruturada e responsabilidade na tomada de decisões." },
];

export function PracticeAreas() {
  return (
    <section id="atuacao" className="bg-site-light pb-10 md:pb-20">
      <div className="max-w-[2286px] mx-auto px-6 md:px-[120px] pt-10 md:pt-14 pb-8 md:pb-12">
        <h2 className="font-['Cormorant_Garamond',serif] text-[#1e1e1e] text-section-title">
          Atuamos em diferentes áreas do Direito, com foco em demandas que exigem leitura de cenário, responsabilidade decisória e condução técnica consistente.
        </h2>
      </div>
      <div className="max-w-[2286px] mx-auto px-6 md:px-[120px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8">
        {practiceAreas.map((area, i) => (
          <div
            key={area.title}
            className={`p-6 md:p-8 flex flex-col md:col-span-1 ${i < 6 ? "lg:col-span-4" : "lg:col-span-6"} bg-site-card-bg`}
          >
            <div className="gold-bar" />
            <h3 className="font-['Cormorant_Garamond',serif] pa-card-title">
              {area.title}
            </h3>
            <p className="font-['Inter',sans-serif] pa-card-desc mt-3 md:mt-4">
              {area.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
