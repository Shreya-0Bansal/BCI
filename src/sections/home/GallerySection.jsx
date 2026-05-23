import SectionIntro from "../../components/SectionIntro";
import { galleryVisuals } from "../../data/products";

export default function GallerySection() {
  return (
    <section className="section section--muted">
      <div className="container">
        <SectionIntro
          eyebrow="Gallery"
          title="Catalogue visuals across the full product range."
          description="The gallery now mirrors the same primary product images used in the catalogue."
          align="center"
        />
        <div className="gallery-grid">
          {galleryVisuals.map((visual) => (
            <figure className="gallery-card" key={visual.title}>
              <img src={visual.image} alt={visual.title} loading="lazy" decoding="async" />
              <figcaption>{visual.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
