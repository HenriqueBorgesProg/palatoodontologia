import { Users, Microscope, Award, MapPin, PlayCircle } from "lucide-react";
import { openExternal, YOUTUBE_VIDEO_URL } from "@/lib/externalNavigation";

const stats = [
  { value: "20+", label: "Anos de Experiência" },
  { value: "15+", label: "Especialidades" },
  { value: "1000+", label: "Pacientes Atendidos" },
];

const highlights = [
  { icon: Users, title: "Equipe Multidisciplinar", description: "Dentistas especializados em diferentes áreas da odontologia." },
  { icon: Microscope, title: "Tecnologia de Ponta", description: "Equipamentos de última geração para diagnóstico e tratamento." },
  { icon: MapPin, title: "Localização Premium", description: "Edifício Metropolitano, área nobre de Goiânia." },
  { icon: Award, title: "Padrão de Excelência", description: "Comprometimento com qualidade em cada procedimento." },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 md:py-36 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="section-label">Sobre a Palato</span>
          <h2 className="section-title mt-4">Tradição e Inovação</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-muted-foreground text-base leading-relaxed mb-12 font-light">
              A Palato Odontologia está há quase duas décadas no mercado como uma renomada clínica odontológica em Goiânia. Nossa nova clínica, localizada no prestigiado Edifício Metropolitano, reflete nossa dedicação e compromisso com a excelência em serviços odontológicos.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-12">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-5 border border-border">
                  <div className="text-2xl md:text-3xl font-heading font-light text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-2 tracking-wide uppercase">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-1">
              {highlights.map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-4 hover:bg-secondary/50 transition-colors">
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-foreground text-sm">{item.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-28 border border-border p-8 md:p-10 bg-secondary/30">
            <div className="flex justify-center mb-5">
              <PlayCircle className="w-14 h-14 text-primary" />
            </div>
            <p className="text-center text-muted-foreground text-sm md:text-base leading-relaxed font-light">
              Para máxima compatibilidade em Firefox e Vivaldi, o vídeo de apresentação abre direto no YouTube em nova aba segura.
            </p>
            <div className="flex justify-center mt-6">
              <button
                type="button"
                onClick={() => openExternal(YOUTUBE_VIDEO_URL)}
                className="px-8 py-3 gold-gradient text-primary-foreground text-xs font-semibold tracking-[0.1em] uppercase"
              >
                Assistir no YouTube
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
