import draPriscilla from "@/assets/dra-priscilla-clean.jpg";
import draJuliana from "@/assets/dra-juliana-clean.jpg";

const doctors = [
  {
    name: "Dra. Priscilla Santos",
    specialty: "Especialista em Prótese Dentária",
    cro: "CROGO 11318",
    image: draPriscilla,
  },
  {
    name: "Dra. Juliana do Nascimento",
    specialty: "Especialista em Endodontia e Dentística Restauradora",
    cro: "CROGO 6035",
    image: draJuliana,
  },
];

const DoctorsSection = () => {
  return (
    <section className="py-28 md:py-40 section-alt-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="section-label">Sócias Fundadoras</span>
          <h2 className="section-title mt-4">Especialistas Responsáveis</h2>
          <p className="section-subtitle mx-auto mt-5">
            Dedicação, formação de excelência e paixão pela odontologia.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-10 max-w-3xl mx-auto">
          {doctors.map((doc) => (
            <div
              key={doc.name}
              className="group bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-xl font-bold text-foreground">{doc.name}</h3>
                <p className="text-sm text-muted-foreground mt-2 font-light leading-relaxed">
                  {doc.specialty}
                </p>
                <p className="text-xs text-muted-foreground/60 mt-1 tracking-wide">
                  {doc.cro}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
