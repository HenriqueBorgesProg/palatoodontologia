import caso1 from "@/assets/caso-1.jpg";
import caso2 from "@/assets/caso-2.jpg";
import caso3 from "@/assets/caso-3.jpg";
import caso4 from "@/assets/caso-4.jpg";
import caso5 from "@/assets/caso-5.jpg";
import caso6 from "@/assets/caso-6.jpg";

const cases = [
  { id: 1, image: caso1, label: "Lentes de Contato Dental" },
  { id: 2, image: caso2, label: "Reabilitação Estética" },
  { id: 3, image: caso3, label: "Facetas em Porcelana" },
  { id: 4, image: caso4, label: "Harmonização do Sorriso" },
  { id: 5, image: caso5, label: "Facetas em Resina" },
  { id: 6, image: caso6, label: "Reabilitação Oral Completa" },
];

const ResultsSection = () => {
  return (
    <section id="resultados" className="py-32 md:py-48 section-alt-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="section-label">Casos Clínicos</span>
          <h2 className="section-title mt-4">Resultados Reais</h2>
          <p className="section-subtitle mx-auto mt-5">
            Transformações realizadas pela equipe da Palato Odontologia.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cases.map((c) => (
            <div
              key={c.id}
              className="group rounded-2xl overflow-hidden border border-border bg-card shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative">
                <img
                  src={c.image}
                  alt={`Antes e depois — ${c.label}`}
                  className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-semibold tracking-widest uppercase bg-foreground/70 text-primary-foreground px-3 py-1 rounded-full">
                    Antes
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-[10px] font-semibold tracking-widest uppercase bg-primary/90 text-primary-foreground px-3 py-1 rounded-full">
                    Depois
                  </span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-sm font-semibold text-foreground tracking-wide">
                  {c.label}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
