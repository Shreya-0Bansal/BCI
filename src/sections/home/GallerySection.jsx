import SectionIntro from "../../components/SectionIntro";
import galleryImages from "../../data/gallery";

export default function GallerySection() {
  return (
    <section className="section home-section home-section--deferred gallery-section">
      <div className="container">
        <SectionIntro
          eyebrow="Gallery"
          title="Separate workshop and plant imagery for a larger visual story."
          description="This section is intentionally independent from the product catalog, so you can add 10-15 gallery images here without changing catalog cards or product detail visuals."
          align="center"
        />

        <div className="gallery-grid">
          {galleryImages.map((item) => (
            <figure className="gallery-grid__card" key={item.image}>
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                decoding="async"
        
                fetchpriority="low"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
