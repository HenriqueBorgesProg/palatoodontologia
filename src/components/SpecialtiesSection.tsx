const specialties = [
  { title: "Buco-Maxilo e Ortognática", image: "https://www.palatoodontologia.com.br/upload/service/Q0N9h99WMMG0jDN6J5J7FFpB4PUDfOn1Kwo7Ar2x.png", link: "https://www.palatoodontologia.com.br/buco-maxilo-e-ortognatica", description: "Cirurgias corretivas faciais e procedimentos buco-maxilares." },
  { title: "Odontopediatria", image: "https://www.palatoodontologia.com.br/upload/service/31lxZCoFgp6PRqIb7iJ8tf8dW9cu0zRFnmu1Ocv2.png", link: "https://www.palatoodontologia.com.br/odontopediatria", description: "Cuidados odontológicos especializados para crianças." },
  { title: "Periodontia", image: "https://www.palatoodontologia.com.br/upload/service/OfR3LibJF1qUVai5Q4wdas9HtSBgfKH3kIQZ3N70.png", link: "https://www.palatoodontologia.com.br/periodontia", description: "Tratamento de gengivas e tecidos de suporte dos dentes." },
  { title: "Ortodontia e Ortopedia Facial", image: "https://www.palatoodontologia.com.br/upload/service/64u3K3xjbXLLPGTgGOi5XybsMOYZeLOeIy6Flwen.png", link: "https://www.palatoodontologia.com.br/ortodontia-e-ortopedia-facial", description: "Alinhamento dentário e correção de problemas esqueléticos." },
  { title: "Prótese", image: "https://www.palatoodontologia.com.br/upload/service/XgGRIQXTFuxV9jAsliorHsYUJmvMNvsj6eSkER89.png", link: "https://www.palatoodontologia.com.br/protese", description: "Reabilitação oral com próteses fixas e removíveis." },
  { title: "Dentística", image: "https://www.palatoodontologia.com.br/upload/service/1mM3HKrBxhksv75QiGdUiEAJGM6b49pGEXOxoSAy.jpeg", link: "https://www.palatoodontologia.com.br/dentistica", description: "Restaurações estéticas e funcionais dos dentes." },
];

const SpecialtiesSection = () => {
  return (
    <section id="especialidades" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="section-label">Clínica Odontológica em Goiânia</span>
          <h2 className="section-title mt-3">Especialidades Odontológicas</h2>
          <p className="section-subtitle mx-auto mt-4">
            Nossas especialidades abrangem desde ortodontia de última geração até procedimentos cirúrgicos avançados.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((s) => (
            <a
              key={s.title}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card p-8 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-20 h-20 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <img src={s.image} alt={s.title} className="w-12 h-12 object-contain" loading="lazy" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-2">{s.description}</p>
              <span className="mt-4 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Saiba Mais →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
