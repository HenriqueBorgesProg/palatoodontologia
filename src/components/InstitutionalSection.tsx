import doutorasJuntas from "@/assets/doutoras-juntas-enhanced.jpg";

const InstitutionalSection = () => {
  return (
    <section className="py-32 md:py-48 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="overflow-hidden rounded-2xl shadow-2xl shadow-foreground/10">
            <img
              src={doutorasJuntas}
              alt="Dra. Priscilla Santos e Dra. Juliana do Nascimento"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <span className="section-label">Quem Somos</span>
            <h2 className="section-title mt-4">
              Excelência em cada
              <br />
              <span className="gold-text">sorriso</span>
            </h2>
            <p className="text-muted-foreground mt-8 leading-relaxed font-light text-base md:text-lg">
              A Palato Odontologia nasceu do sonho de duas profissionais apaixonadas pela odontologia de alto padrão.
              Com mais de duas décadas de experiência, unimos tecnologia de ponta, formação contínua e um cuidado
              genuíno com cada paciente.
            </p>
            <p className="text-muted-foreground mt-5 leading-relaxed font-light text-base md:text-lg">
              Nossa clínica em Goiânia é referência em tratamentos estéticos e reabilitadores, oferecendo um ambiente
              acolhedor e uma equipe multidisciplinar dedicada a transformar sorrisos com excelência e humanização.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstitutionalSection;
