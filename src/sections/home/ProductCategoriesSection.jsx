import { Link } from "react-router-dom";
import SectionIntro from "../../components/SectionIntro";
import { ArrowUpRight } from "lucide-react";
import { productCategories } from "../../data/productCategories";

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
          {productCategories.map((item, index) => (
            <Link
              key={item.slug}
              className="products-family__preview-card"
              to={`/products/${item.slug}`}
            >
              <div className="products-family__preview-kicker">
                <span className="products-family__preview-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="products-family__preview-label">Category</span>
              </div>
              <div className="products-family__preview-title">{item.name}</div>
              <div className="products-family__preview-desc">{item.summary}</div>
              <div className="products-family__preview-link">
                Explore family
                <ArrowUpRight size={16} />
              </div>
            </Link>
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
