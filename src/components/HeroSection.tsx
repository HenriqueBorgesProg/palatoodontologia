import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Clínica Palato" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-terracotta-dark/80 via-terracotta-dark/60 to-terracotta-dark/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold/40 bg-gold/10 mb-8">
          <span className="text-gold-light text-sm font-medium tracking-wide">
            ✦ Quase duas décadas de excelência
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-cream leading-tight mb-6">
          Excelência em Odontologia de Alto Padrão
        </h1>

        <p className="text-lg md:text-xl text-cream/80 mb-10 max-w-2xl mx-auto font-light">
          Transformando sorrisos em Goiânia com tecnologia de ponta e cuidado personalizado
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5562999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient px-8 py-4 rounded-full text-accent-foreground font-semibold text-base hover:opacity-90 transition-opacity shadow-xl"
          >
            Agende sua Avaliação →
          </a>
          <a
            href="#sobre"
            className="px-8 py-4 rounded-full border-2 border-cream/30 text-cream font-semibold text-base hover:bg-cream/10 transition-colors"
          >
            Conheça a Clínica
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-cream/40 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-cream/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
