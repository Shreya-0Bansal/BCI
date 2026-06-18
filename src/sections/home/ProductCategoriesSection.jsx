import { Link } from "react-router-dom";
import SectionIntro from "../../components/SectionIntro";

const categories = [
  {
    title: "Conveyor Chains",
    desc: "Heavy-duty chains for material handling and conveying systems.",
  },
  {
    title: "Industrial Chains",
    desc: "Engineered chain solutions for demanding industrial operations.",
  },
  {
    title: "Bottling Plant Chains",
    desc: "Reliable chains designed for beverage and packaging lines.",
  },
  {
    title: "Sprockets & Fasteners",
    desc: "Precision drive components and industrial fastening systems.",
  },
];

export default function ProductCategoriesSection() {
  return (
    <section className="section home-section home-section--deferred products-family products-family--overview">
      <div className="container">
        <SectionIntro
          eyebrow="Product Categories"
          title="Engineered components built for industrial reliability."
          description="Explore precision-manufactured chains, sprockets, and fastners designed for performance, durability, and scale."
          align="center"
        />

        <div className="products-family__preview-grid">
          {categories.map((item) => (
            <article key={item.title} className="products-family__preview-card">
              <div className="products-family__preview-title">{item.title}</div>
              <div className="products-family__preview-desc">{item.desc}</div>
            </article>
          ))}
        </div>

        <div className="products-family__preview-action">
          <Link className="button button--solid" to="/products">
            View Full Product Catalog
          </Link>
        </div>
      </div>
    </section>
  );
}
