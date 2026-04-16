import { Users, Microscope, Award, MapPin } from "lucide-react";

const stats = [
  { value: "20+", label: "Anos de Experiência" },
  { value: "8+", label: "Especialidades" },
  { value: "1000+", label: "Pacientes Atendidos" },
];

const highlights = [
  {
    icon: Users,
    title: "Equipe Multidisciplinar",
    description: "Dentistas especializados em diferentes áreas da odontologia.",
  },
  {
    icon: Microscope,
    title: "Tecnologia de Ponta",
    description: "Equipamentos de última geração para diagnóstico e tratamento.",
  },
  { icon: MapPin, title: "Localização Premium", description: "Edifício Metropolitano, área nobre de Goiânia." },
  { icon: Award, title: "Padrão de Excelência", description: "Comprometimento com qualidade em cada procedimento." },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-28 md:py-40 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="section-label">Sobre a Palato</span>
          <h2 className="section-title mt-4">Tradição e Inovação</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-muted-foreground text-base leading-relaxed mb-12 font-light">
              A Palato Odontologia está há mais de duas décadas no mercado como uma renomada clínica odontológica em
              Goiânia. Nossa clínica, localizada no prestigiado Edifício Metropolitano, reflete nossa dedicação e
              compromisso com a excelência em serviços odontológicos.
            </p>

            <div className="grid grid-cols-3 gap-2 md:gap-4 mb-12">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-3 md:p-5 border border-border rounded-lg overflow-hidden">
                  <div className="text-xl md:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-[10px] md:text-xs text-muted-foreground mt-2 tracking-wide uppercase leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-1">
              {highlights.map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors">
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1 font-light">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-28">
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/Vth3vuHQyO0"
                title="Palato Odontologia - Apresentação"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
