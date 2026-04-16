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
    <section className="py-28 md:py-40 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="section-label">Nossa Estrutura</span>
          <h2 className="section-title mt-4">Galeria</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 rounded-xl overflow-hidden">
          {images.map((src, i) => (
            <div key={i} className="aspect-square overflow-hidden group cursor-pointer">
              <img
                src={src}
                alt={`Palato Odontologia - Foto ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
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
