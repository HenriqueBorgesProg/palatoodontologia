import draPriscilla from "@/assets/dra-priscilla-clean.jpg";
import draJuliana from "@/assets/dra-juliana-clean.jpg";

const doctors = [
  {
    name: "Dra. Juliana do Nascimento",
    specialty: "Especialista em Endodontia e Dentística Restauradora",
    cro: "CROGO 6035",
    image: draJuliana,
  },
  {
    name: "Dra. Priscilla Santos",
    specialty: "Especialista em Prótese Dentária",
    cro: "CROGO 11318",
    image: draPriscilla,
  },
];

const DoctorsSection = () => {
  return (
    <section className="py-32 md:py-48 section-alt-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="section-label">Sócias Fundadoras</span>
          <h2 className="section-title mt-4">Especialistas Responsáveis</h2>
          <p className="section-subtitle mx-auto mt-5">Dedicação, formação de excelência e paixão pela odontologia.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-12 max-w-3xl mx-auto">
          {doctors.map((doc) => (
            <div
              key={doc.name}
              className="group bg-card rounded-2xl overflow-hidden border border-border shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-10 text-center">
                <h3 className="text-xl font-bold text-foreground tracking-tight">{doc.name}</h3>
                <p className="text-sm text-muted-foreground mt-3 font-light leading-relaxed">{doc.specialty}</p>
                <p className="text-[11px] text-muted-foreground/50 mt-2 tracking-widest uppercase">{doc.cro}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
