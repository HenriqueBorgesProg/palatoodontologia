const LaserSection = () => {
  return (
    <section className="py-20 md:py-32 terracotta-gradient text-cream">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-light">
              Inovação na Odontologia
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight mt-3 text-cream">
              Laser LiteTouch Odontológico
            </h2>
            <p className="text-lg text-cream/80 mt-6 leading-relaxed">
              A Palato Odontologia inova mais uma vez e traz para Goiânia o Laser LiteTouch, a melhor tecnologia a laser do mundo.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Tratamentos mais rápidos e indolores",
                "Minimamente invasivo",
                "Diversos procedimentos sem anestesia",
                "Sem o clássico barulho de dentista",
                "O melhor laser para todas as especialidades",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-cream/90">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://www.palatoodontologia.com.br/laser-litetouch"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-10 px-8 py-4 rounded-full gold-gradient text-accent-foreground font-semibold hover:opacity-90 transition-opacity shadow-xl"
            >
              Saiba Mais →
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/laser-litetouch.jpeg"
              alt="Laser LiteTouch"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaserSection;
