import { useState, useEffect, useCallback } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { getWhatsAppUrl, openExternal } from "@/lib/externalNavigation";

const WA = "556299693125";

const treatments = [
  { title: "Airflow", description: "Tecnologia moderna para limpeza dental profunda, eficaz e confortável." },
  { title: "Alinhadores", description: "Ortodontia invisível para alinhar seus dentes com discrição e conforto." },
  { title: "Aparelho Fixo", description: "Tratamento ortodôntico tradicional para correção do posicionamento dental." },
  {
    title: "Clareamento Dental",
    description: "Procedimento estético para deixar seus dentes mais brancos e brilhantes.",
  },
  {
    title: "Facetas de Resina",
    description: "Solução estética acessível para corrigir imperfeições e transformar o sorriso.",
  },
  {
    title: "Lentes de Contato Dental",
    description: "Lâminas ultrafinas de porcelana para um sorriso perfeito e natural.",
  },
  {
    title: "Remoção de Lentes com Laser",
    description: "Feixe de luz para remover lentes de contato dentárias com alta precisão.",
  },
  {
    title: "Remoção de Cárie com Laser",
    description: "Tratamento minimamente invasivo para remoção de cárie sem dor.",
  },
  {
    title: "Implantes Dentários",
    description: "Implantes de alta qualidade para restaurar dentes perdidos com naturalidade.",
  },
  { title: "Tratamento DTM", description: "Tratamento da articulação temporomandibular e seus distúrbios." },
  { title: "Tratamento Apneia", description: "Tratamento para apneia do sono e distúrbios respiratórios." },
  { title: "Tratamento com Laser", description: "Abordagem minimamente invasiva com tecnologia laser de ponta." },
  { title: "Gengivoplastia", description: "Remodelação gengival para um sorriso mais harmônico e equilibrado." },
  {
    title: "Prótese Dentária",
    description: "Soluções para restauração e substituição de dentes perdidos ou danificados.",
  },
];

const ITEMS_PER_PAGE_DESKTOP = 4;
const ITEMS_PER_PAGE_MOBILE = 1;
const AUTO_PLAY_INTERVAL = 5000;

const TreatmentsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const itemsPerPage = isMobile ? ITEMS_PER_PAGE_MOBILE : ITEMS_PER_PAGE_DESKTOP;
  const totalPages = Math.ceil(treatments.length / itemsPerPage);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  const visibleTreatments = treatments.slice(currentIndex * itemsPerPage, currentIndex * itemsPerPage + itemsPerPage);

  return (
    <section id="tratamentos" className="py-28 md:py-40 section-alt-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="section-label">Nossos Tratamentos</span>
          <h2 className="section-title mt-4">Tratamentos Odontológicos</h2>
          <p className="section-subtitle mx-auto mt-5">Abordagens inovadoras para saúde bucal e confiança.</p>
        </div>

        <div className="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-background border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={next}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-background border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* BACKUP GRID ORIGINAL */}
          {/* className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border mx-6 md:mx-8" */}

          {/* Grid Inteligente */}
          <div
            className={`
              grid gap-px bg-border mx-6 md:mx-8
              ${visibleTreatments.length === 1 ? "grid-cols-1" : ""}
              ${visibleTreatments.length === 2 ? "grid-cols-1 sm:grid-cols-2" : ""}
              ${visibleTreatments.length === 3 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : ""}
              ${visibleTreatments.length >= 4 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" : ""}
            `}
          >
            {visibleTreatments.map((t) => (
              <button
                key={t.title}
                type="button"
                onClick={() =>
                  openExternal(
                    getWhatsAppUrl(WA, `Olá! Gostaria de saber mais sobre ${t.title} na Palato Odontologia.`),
                  )
                }
                className="group bg-background p-8 flex flex-col justify-between min-h-[240px] hover:bg-card transition-all duration-300 text-left border border-transparent hover:border-primary/20 hover:shadow-lg"
              >
                <div>
                  {/* Ícone fake elegante */}
                  <div className="w-10 h-10 mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">{t.title.charAt(0)}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {t.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed font-light">{t.description}</p>
                </div>

                <div className="flex items-center gap-2 mt-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-medium tracking-wider uppercase">Saiba Mais</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentIndex ? "bg-primary w-6" : "bg-border hover:bg-muted-foreground"
              }`}
              aria-label={`Página ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
