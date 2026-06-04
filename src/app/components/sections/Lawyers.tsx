import imgPaulo from "../../../assets/images/paulo-waterloo.png";

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
    <section id="advogados" className="bg-white section-pad">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <h2 className="font-['Cormorant_Garamond',serif] text-[#1e1e1e] lawyer-section-title">
          Advogados
        </h2>

        {/* Desktop: center the lawyer card */}
        <div className="hidden md:flex justify-center">
          <div className="max-w-[400px]">
            {lawyers.map((l) => (
              <div key={l.name}>
                <img src={l.photo} alt={l.name} className="w-full h-[400px] object-cover rounded-sm" />
                <div className="gold-bar mt-4" />
                <h3 className="font-['Cormorant_Garamond',serif] text-[#32353A] lawyer-name">
                  {l.name}
                </h3>
                <p className="font-['Inter',sans-serif] text-[#32353A] lawyer-oab mt-1">
                  {l.oab}
                </p>
                <p className="font-['Inter',sans-serif] text-[#1A1A1A]/80 lawyer-bio mt-6">
                  {l.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: featured lawyer (Paulo Waterloo) */}
        <div className="md:hidden">
          <img src={lawyers[0].photo} alt={lawyers[0].name} className="w-full h-[360px] object-cover rounded-sm" />
          <div className="gold-bar mt-4" />
          <h3 className="font-['Cormorant_Garamond',serif] text-[#32353A] lawyer-name">
            {lawyers[0].name}
          </h3>
          <p className="font-['Inter',sans-serif] text-[#32353A] lawyer-oab mt-1">
            {lawyers[0].oab}
          </p>
          <p className="font-['Inter',sans-serif] text-[#32353A] lawyer-bio mt-4">
            {lawyers[0].bio}
          </p>
        </div>
      </div>
    </section>
  );
}
