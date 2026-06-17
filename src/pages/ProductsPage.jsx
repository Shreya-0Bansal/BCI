import { Layers } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { productFamilies, products } from "../data/products";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const familyDescriptions = {
  "conveyor-chains": "Material handling chains for continuous-duty conveying lines.",
  "industrial-chains": "Heavy-use chain assemblies for engineered plant applications.",
  "bottling-plant-chains": "Smooth-running chains for packaging and bottling lines.",
  "gear-sprockets": "Precision machined drive components with reliable engagement.",
  fastners: "High-strength fastening systems for industrial assembly work.",
};

const familyImages = {
  "conveyor-chains": products.find((item) => item.slug === "conveyor-chains")?.heroImage,
  "industrial-chains": products.find((item) => item.slug === "industrial-chains")?.heroImage,
  "bottling-plant-chains": products.find((item) => item.slug === "bottling-plant-chains")?.heroImage,
  "gear-sprockets": products.find((item) => item.slug === "gear-sprockets")?.heroImage,
  fastners: products.find((item) => item.slug === "fastners")?.heroImage,
};

export default function ProductsPage() {
  const navigate = useNavigate();

  useDocumentMeta(
    "Products | Bansal Chain Industries",
    "Browse conveyor chains, industrial chains, bottling plant chains, sprockets, and fastners from Bansal Chain Industries.",
  );

  return (
    <>
      <section className="section home-section products-family">
        <div className="container">
          <div className="products-family__head">
            <div className="products-family__eyebrow-row">
              <span className="products-family__dot" />
              <span className="products-family__eyebrow">Product Architecture</span>
            </div>
            <h2>
              Precision Product <span>Range</span>
            </h2>
            <p>
              Each category represents a dedicated manufacturing system designed for load-specific, industrial-grade transmission requirements.
            </p>
          </div>

          <div className="products-family__grid">
            <button
              type="button"
              onClick={() => navigate("/products")}
              className="products-family__card products-family__card--all"
            >
              <div className="products-family__overlay" />
              <div className="products-family__content">
                <div className="products-family__icon-box products-family__icon-box--gold">
                  <Layers size={22} />
                </div>
                <h3>All Products</h3>
                <p>Complete industrial catalog system</p>
                <div className="products-family__line" />
              </div>
            </button>

            {productFamilies.map((family) => (
              <button
                type="button"
                key={family.slug}
                onClick={() => navigate(`/products/${family.slug}`)}
                className="products-family__card"
              >
                <img
                  src={familyImages[family.slug] || products[0].heroImage}
                  alt={family.name}
                  className="products-family__image"
                />
                <div className="products-family__overlay" />
                <div className="products-family__content">
                  <div className="products-family__icon-box">
                    <Layers size={20} />
                  </div>
                  <h3>{family.name}</h3>
                  <p>{familyDescriptions[family.slug]}</p>
                  <div className="products-family__line" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
