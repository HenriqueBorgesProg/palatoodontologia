import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getWhatsAppUrl, openExternal } from "@/lib/externalNavigation";
import specialtySmile1 from "@/assets/specialty-smile-1.jpg";
import specialtySmile2 from "@/assets/specialty-smile-2.jpg";
import specialtySmile3 from "@/assets/specialty-smile-3.jpg";
import microscopeProcedure from "@/assets/microscope-procedure.jpg";

const WA = "556299693125";
const INTERVAL = 5000;

const specialties = [
  { title: "Buco-Maxilo e Ortognática", description: "Cirurgias corretivas faciais e procedimentos buco-maxilares com tecnologia de ponta e equipe especializada.", image: specialtySmile1 },
  { title: "Odontopediatria", description: "Cuidados odontológicos especializados para crianças, com abordagem acolhedora e ambiente preparado.", image: specialtySmile2 },
  { title: "Periodontia", description: "Tratamento de gengivas e tecidos de suporte dos dentes, devolvendo saúde e estética ao sorriso.", image: specialtySmile3 },
  { title: "Ortodontia", description: "Alinhamento dentário com aparelhos fixos, móveis e alinhadores invisíveis de última geração.", image: specialtySmile1 },
  { title: "Ortopedia Facial", description: "Correção de problemas esqueléticos e do crescimento facial com planejamento individualizado.", image: specialtySmile2 },
  { title: "Prótese", description: "Reabilitação oral com próteses fixas e removíveis, devolvendo função e beleza ao sorriso.", image: specialtySmile3 },
  { title: "Dentística", description: "Restaurações estéticas e funcionais dos dentes com materiais de alta qualidade e precisão.", image: microscopeProcedure },
  { title: "Microscopia", description: "Procedimentos odontológicos de alta precisão com microscópio operatório para resultados superiores.", image: microscopeProcedure },
];

const SpecialtiesSection = () => {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goNext = useCallback(() => {
    setActive((prev) => (prev + 1) % specialties.length);
  }, []);

  const goPrev = useCallback(() => {
    setActive((prev) => (prev - 1 + specialties.length) % specialties.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(goNext, INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, goNext]);

  const s = specialties[active];

  return (
    <section id="especialidades" className="py-32 md:py-48 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="section-label">Áreas de Atuação</span>
          <h2 className="section-title mt-4">Especialidades Odontológicas</h2>
          <p className="section-subtitle mx-auto mt-5">
            Equipe multidisciplinar com especialistas em diversas áreas.
          </p>
        </div>

        {/* Main carousel card */}
        <div
          className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onClick={() =>
            openExternal(
              getWhatsAppUrl(WA, `Olá! Gostaria de saber mais sobre ${s.title} na Palato Odontologia.`)
            )
          }
        >
          {/* Images – stacked with fade */}
          <div className="relative aspect-[16/7] md:aspect-[16/6]">
            {specialties.map((spec, i) => (
              <img
                key={spec.title}
                src={spec.image}
                alt={spec.title}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
                loading={i === 0 ? "eager" : "lazy"}
              />
            ))}
            {/* Overlay */}
            <div className="absolute inset-0 bg-foreground/50" />
          </div>

          {/* Text */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-14 z-10">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary-foreground/60 mb-3">
              {String(active + 1).padStart(2, "0")} / {String(specialties.length).padStart(2, "0")}
            </span>
            <h3 className="text-2xl md:text-4xl font-bold text-primary-foreground leading-tight mb-3 transition-all duration-500">
              {s.title}
            </h3>
            <p className="text-sm md:text-base text-primary-foreground/80 max-w-lg leading-relaxed font-light">
              {s.description}
            </p>
          </div>

          {/* Arrows */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary-foreground/20"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary-foreground/20"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {specialties.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-8 bg-primary" : "w-3 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Especialidade ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
