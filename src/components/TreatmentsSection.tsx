import { ArrowUpRight } from "lucide-react";

const WA = "5562982414338";

const treatments = [
  { title: "Remoção de Lentes com Laser", description: "Feixe de luz para remover lentes de contato dentárias com alta precisão." },
  { title: "Profilaxia", description: "Procedimentos para prevenir cáries, gengivite e periodontite." },
  { title: "Tratamento DTM", description: "Tratamento da articulação temporomandibular e seus distúrbios." },
  { title: "Tratamento Apneia", description: "Tratamento para apneia do sono e distúrbios respiratórios." },
  { title: "Palato Beauty", description: "Procedimentos estéticos para um sorriso saudável e harmonioso." },
  { title: "Airflow", description: "Tecnologia moderna para limpeza dental profunda e eficaz." },
  { title: "Tratamento com Laser", description: "Abordagem minimamente invasiva com tecnologia laser." },
  { title: "Implantes Dentários", description: "Implantes de alta qualidade para restaurar seu sorriso." },
];

const TreatmentsSection = () => {
  return (
    <section id="tratamentos" className="py-24 md:py-36 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="section-label">Nossos Tratamentos</span>
          <h2 className="section-title mt-4">Tratamentos Odontológicos</h2>
          <p className="section-subtitle mx-auto mt-5">
            Abordagens inovadoras para saúde bucal e confiança.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {treatments.map((t) => (
            <a
              key={t.title}
              href={`https://api.whatsapp.com/send?phone=${WA}&text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre ${t.title} na Palato Odontologia.`)}`}
              className="group bg-background p-8 flex flex-col justify-between min-h-[220px] hover:bg-card transition-colors"
            >
              <div>
                <h3 className="font-heading text-xl font-light text-foreground group-hover:text-primary transition-colors leading-tight">
                  {t.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-3 leading-relaxed font-light">{t.description}</p>
              </div>
              <div className="flex items-center gap-2 mt-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs font-medium tracking-wider uppercase">Saiba Mais</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;