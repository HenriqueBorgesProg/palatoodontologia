import { ArrowUpRight } from "lucide-react";
import { getWhatsAppUrl, openExternal } from "@/lib/externalNavigation";

const WA = "556299693125";

const specialties = [
  { title: "Buco-Maxilo e Ortognática", description: "Cirurgias corretivas faciais e procedimentos buco-maxilares." },
  { title: "Odontopediatria", description: "Cuidados odontológicos especializados para crianças." },
  { title: "Periodontia", description: "Tratamento de gengivas e tecidos de suporte dos dentes." },
  { title: "Ortodontia", description: "Alinhamento dentário com aparelhos fixos, móveis e alinhadores." },
  { title: "Ortopedia Facial", description: "Correção de problemas esqueléticos e do crescimento facial." },
  { title: "Prótese", description: "Reabilitação oral com próteses fixas e removíveis." },
  { title: "Dentística", description: "Restaurações estéticas e funcionais dos dentes." },
  { title: "Microscopia", description: "Procedimentos odontológicos de alta precisão com microscópio operatório." },
];

const SpecialtiesSection = () => {
  return (
    <section id="especialidades" className="py-24 md:py-36 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="section-label">Áreas de Atuação</span>
          <h2 className="section-title mt-4">Especialidades Odontológicas</h2>
          <p className="section-subtitle mx-auto mt-5">
            Equipe multidisciplinar com especialistas em diversas áreas.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((s, i) => (
            <button
              key={s.title}
              type="button"
              onClick={() => openExternal(getWhatsAppUrl(WA, `Olá! Gostaria de saber mais sobre ${s.title} na Palato Odontologia.`))}
              className="group glass-card p-8 hover:border-primary/30 transition-all duration-300 text-left"
            >
              <span className="text-xs text-muted-foreground font-mono">0{i + 1}</span>
              <h3 className="font-heading text-xl font-light text-foreground mt-4 group-hover:text-primary transition-colors">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-3 font-light leading-relaxed">
                {s.description}
              </p>
              <div className="flex items-center gap-2 mt-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs font-medium tracking-wider uppercase">Saiba Mais</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
