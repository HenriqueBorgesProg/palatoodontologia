import doutorasJuntas from "@/assets/doutoras-juntas.jpg";

const InstitutionalSection = () => {
  return (
    <section className="py-28 md:py-40 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="overflow-hidden rounded-xl">
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
            <p className="text-muted-foreground mt-6 leading-relaxed font-light text-base md:text-lg">
              A Palato Odontologia nasceu do sonho de duas profissionais apaixonadas pela odontologia de alto padrão.
              Com mais de duas décadas de experiência, unimos tecnologia de ponta, formação contínua e um cuidado
              genuíno com cada paciente.
            </p>
            <p className="text-muted-foreground mt-4 leading-relaxed font-light text-base md:text-lg">
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
