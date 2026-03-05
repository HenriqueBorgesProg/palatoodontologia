import { Users, Microscope, Sparkles, MapPin, Award } from "lucide-react";

const stats = [
  { value: "20+", label: "Anos de Experiência" },
  { value: "15+", label: "Especialidades" },
  { value: "1000+", label: "Pacientes Atendidos" },
];

const highlights = [
  { icon: Users, title: "Equipe Multidisciplinar", description: "Dentistas especializados em diferentes áreas da odontologia." },
  { icon: Microscope, title: "Tecnologia de Ponta", description: "Avançadas tecnologias de diagnóstico e tratamento." },
  { icon: Sparkles, title: "Harmonização do Sorriso", description: "Procedimentos cosméticos para melhorar a harmonia facial." },
  { icon: MapPin, title: "Localização Premium", description: "Edifício Metropolitano, área de prestígio em Goiânia." },
  { icon: Award, title: "Alto Padrão", description: "Comprometimento com qualidade e excelência em cada procedimento." },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="section-label">Sobre a Palato</span>
          <h2 className="section-title mt-3">Quase Duas Décadas de Excelência</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              A Palato Odontologia está há quase duas décadas no mercado como uma renomada clínica odontológica em Goiânia. A abertura da nossa nova clínica, agora localizada no prestigiado Edifício Metropolitano, é um reflexo tangível da nossa contínua dedicação e compromisso. Planejamos cuidadosamente cada detalhe para oferecer a excelência em serviços odontológicos que você merece.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 glass-card">
                  <div className="text-3xl font-heading font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {highlights.map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-28">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border/50">
              <iframe
                src="https://www.youtube.com/embed/Vth3vuHQyO0"
                title="Conheça a Palato Odontologia!"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Conheça a Palato Odontologia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
