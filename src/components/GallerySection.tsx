const images = [
  "/images/gallery-1.jpeg",
  "/images/gallery-2.jpeg",
  "/images/gallery-3.jpeg",
  "/images/gallery-4.jpeg",
  "/images/gallery-5.jpeg",
  "/images/gallery-6.jpeg",
];

const GallerySection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="section-label">Clínica Odontológica em Goiânia</span>
          <h2 className="section-title mt-3">Galeria de Imagens</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div
              key={i}
              className="aspect-square rounded-xl overflow-hidden group cursor-pointer"
            >
              <img
                src={src}
                alt={`Palato Odontologia - Foto ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
