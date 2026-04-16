import doutorasJuntas from "@/assets/doutoras-juntas.jpg";
import doutorasMicroscopia from "@/assets/doutora-microscopia.jpg";

const doctors = [
  {
    name: "Dra. Priscilla Santos",
    specialty: "Especialista em Prótese Dentária",
    image: doutorasJuntas,
  },
  {
    name: "Dra. Juliana do Nascimento",
    specialty: "Especialista em Endodontia e Dentística Restauradora (Estética)",
    image: doutorasMicroscopia,
  },
];

const DoctorsSection = () => {
  return (
    <section className="py-28 md:py-40 section-alt-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="section-label">Corpo Clínico</span>
          <h2 className="section-title mt-4">Nossas Profissionais</h2>
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
              <div className="aspect-[3/4] overflow-hidden">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
