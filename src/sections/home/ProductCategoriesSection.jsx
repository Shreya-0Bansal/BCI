import { Link } from "react-router-dom";
import SectionIntro from "../../components/SectionIntro";

const categories = [
  {
    title: "Chains",
    desc: "Industrial power transmission chains for heavy-duty applications.",
  },
  {
    title: "Sprockets",
    desc: "Precision-engineered sprockets for smooth mechanical performance.",
  },
  {
    title: "Fastners",
    desc: "High-strength bolts, nuts, and custom fastening solutions.",
  },
  {
    title: "Custom Engineering",
    desc: "Tailor-made mechanical components as per drawings and specs.",
  },
];

export default function ProductCategoriesSection() {
  return (
    <section className="section home-section products-family products-family--overview">
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
