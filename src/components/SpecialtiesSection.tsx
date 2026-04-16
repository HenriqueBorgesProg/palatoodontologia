import { getWhatsAppUrl, openExternal } from "@/lib/externalNavigation";
import specialtySmile1 from "@/assets/specialty-smile-1.jpg";
import specialtySmile2 from "@/assets/specialty-smile-2.jpg";
import specialtySmile3 from "@/assets/specialty-smile-3.jpg";
import microscopeProcedure from "@/assets/microscope-procedure.jpg";

const WA = "556299693125";

const specialties = [
  { title: "Buco-Maxilo e Ortognática", description: "Cirurgias corretivas faciais e procedimentos buco-maxilares.", image: specialtySmile1 },
  { title: "Odontopediatria", description: "Cuidados odontológicos especializados para crianças.", image: specialtySmile2 },
  { title: "Periodontia", description: "Tratamento de gengivas e tecidos de suporte dos dentes.", image: specialtySmile3 },
  { title: "Ortodontia", description: "Alinhamento dentário com aparelhos fixos, móveis e alinhadores.", image: specialtySmile1 },
  { title: "Ortopedia Facial", description: "Correção de problemas esqueléticos e do crescimento facial.", image: specialtySmile2 },
  { title: "Prótese", description: "Reabilitação oral com próteses fixas e removíveis.", image: specialtySmile3 },
  { title: "Dentística", description: "Restaurações estéticas e funcionais dos dentes.", image: microscopeProcedure },
  { title: "Microscopia", description: "Procedimentos odontológicos de alta precisão com microscópio operatório.", image: microscopeProcedure },
];

const SpecialtiesSection = () => {
  return (
    <section id="especialidades" className="py-32 md:py-48 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="section-label">Áreas de Atuação</span>
          <h2 className="section-title mt-4">Especialidades Odontológicas</h2>
          <p className="section-subtitle mx-auto mt-5">
            Equipe multidisciplinar com especialistas em diversas áreas.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {specialties.map((s) => (
            <button
              key={s.title}
              type="button"
              onClick={() => openExternal(getWhatsAppUrl(WA, `Olá! Gostaria de saber mais sobre ${s.title} na Palato Odontologia.`))}
              className="group relative h-64 rounded-xl overflow-hidden text-left"
            >
              <img
                src={s.image}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/60 group-hover:bg-foreground/70 transition-colors duration-300" />
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <h3 className="text-lg font-bold text-primary-foreground leading-snug">
                  {s.title}
                </h3>
                <p className="text-xs text-primary-foreground/70 mt-2 font-light leading-relaxed line-clamp-2">
                  {s.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
