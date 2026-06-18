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
      <section className="about-page home-section products-family">
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
  {productFamilies.map((family) => (
    <button
      key={family.slug}
      type="button"
      className="products-family__card"
      onClick={() => navigate(`/products/${family.slug}`)}
    >
      <div className="products-family__image-wrap">
        <img
          src={familyImages[family.slug] || products[0].heroImage}
          alt={family.name}
          className="products-family__image"
          loading="lazy"
          decoding="async"
          width="720"
          height="540"
          fetchpriority="low"
        />
      </div>

  <div className="products-family__content">
    <h3>{family.name}</h3>
    <p>{familyDescriptions[family.slug]}</p>

    <span className="products-family__link">
      Explore Category
    </span>
  </div>
</button>
))}

</div>


        </div>
      </section>
    </>
  );
}
