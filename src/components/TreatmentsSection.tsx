const treatments = [
  { title: "Remoção de Lentes com Laser", description: "Procedimento que utiliza feixe de luz para remover lentes de contato dentárias com alta precisão.", image: "https://www.palatoodontologia.com.br/upload/service/az8f3bazzlP3WrmsnBmHN9xPk5eurtD23SksSgJe.jpeg", link: "https://www.palatoodontologia.com.br/remocao-de-lentes-com-laser" },
  { title: "Profilaxia", description: "Procedimentos para prevenir cáries, gengivite e periodontite.", image: "https://www.palatoodontologia.com.br/upload/service/AJWb9L5O2jpgCly6ZeHs2GfnxTCSBNL5D3S3jolN.jpeg", link: "https://www.palatoodontologia.com.br/profilaxia" },
  { title: "Tratamento DTM", description: "Distúrbio que afeta a articulação temporomandibular responsável pelos movimentos da mandíbula.", image: "https://www.palatoodontologia.com.br/upload/service/CtsV2DoKhvxCRqHuDoW5KPgrROReD6FNX0KYCBS4.jpeg", link: "https://www.palatoodontologia.com.br/tratamento-dtm" },
  { title: "Tratamento Apneia", description: "Tratamento para apneia do sono com interrupções na respiração durante o sono.", image: "https://www.palatoodontologia.com.br/upload/service/W0Ub7LjetojDhwV7QDLeB9zBUokPHnBweFiuXe9v.jpeg", link: "https://www.palatoodontologia.com.br/tratamento-apneia" },
  { title: "Palato Beauty", description: "Sorriso bonito e saudável é fundamental para autoestima e bem-estar.", image: "https://www.palatoodontologia.com.br/upload/service/W11VNyxR3t1QbhmG7qfHvi9MAMRG5GSAwsRD8gSu.jpeg", link: "https://www.palatoodontologia.com.br/palato-beauty" },
  { title: "Airflow", description: "Tecnologia moderna para limpeza dental profunda e eficaz.", image: "https://www.palatoodontologia.com.br/upload/service/EUmLrqS3shQbfMdKMWRwGZ4VmHjABT9sfxz6VYqJ.jpeg", link: "https://www.palatoodontologia.com.br/airflow" },
  { title: "Tratamento com Laser", description: "Abordagem moderna e minimamente invasiva na odontologia.", image: "https://www.palatoodontologia.com.br/upload/service/wrRm7CeQyFJNy9HyoglYE5Fic2LLeLgwpgwtAdki.jpeg", link: "https://www.palatoodontologia.com.br/tratamento-com-laser" },
  { title: "Implantes Dentários", description: "Implantes de alta qualidade para restaurar seu sorriso com naturalidade.", image: "https://www.palatoodontologia.com.br/upload/service/nXePyLYn7EVJAiINyPIdgk7qHxhQ0TUDZjLKAMQt.jpeg", link: "https://www.palatoodontologia.com.br/implantes-dentarios" },
];

const TreatmentsSection = () => {
  return (
    <section id="tratamentos" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="section-label">Clínica Odontológica em Goiânia</span>
          <h2 className="section-title mt-3">Tratamentos Odontológicos</h2>
          <p className="section-subtitle mx-auto mt-4">
            Nossos tratamentos vão além do sorriso, buscando promover a saúde bucal e a confiança de cada paciente através de abordagens inovadoras.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((t) => (
            <a
              key={t.title}
              href={t.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={t.image}
                  alt={t.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                  {t.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{t.description}</p>
                <span className="inline-block mt-3 text-sm font-semibold text-primary">
                  Saiba Mais →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
