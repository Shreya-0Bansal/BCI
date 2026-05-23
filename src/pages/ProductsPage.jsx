import { Layers } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageHero from "../components/PageHero";
import { productFamilies, products } from "../data/products";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const familyDescriptions = {
  // "roller-chains": "Industrial-grade transmission systems for rotating equipment.",
  "conveyor-chains": "Material handling chains for continuous-duty conveying lines.",
  "industrial-chains": "Heavy-use chain assemblies for engineered plant applications.",
  "bottling-plant-chains": "Smooth-running chains for packaging and bottling lines.",
  "gear-sprockets": "Precision machined drive components with reliable engagement.",
  fastners: "High-strength fastening systems for industrial assembly work.",
};

const familyImages = {
  // "roller-chains": products.find((item) => item.slug === "roller-chains")?.heroImage,
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
    "Industrial chains, sprockets and fastners catalog.",
  );

  return (
    <>
       <section className="products-family">
        <div className="container">
          
          {/* GRAND SECTION HEADING LOGIC (MATCHING THE ABOUT HERO LAYOUT) */}
          <div className="products-family__head" style={{ marginBottom: "56px" }}>
            <div className="products-family__eyebrow-row" style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
              <span className="products-family__dot" style={{ width: "6px", height: "6px", backgroundColor: "var(--color-primary)", borderRadius: "50%" }} />
              <span 
                className="products-family__eyebrow" 
                style={{ 
                  fontSize: "11px", 
                  letterSpacing: "0.2em", 
                  textTransform: "uppercase", 
                  fontWeight: "700", 
                  color: "var(--color-primary)" 
                }}
              >
                Product Architecture
              </span>
            </div>
            
            <h2 style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.25rem)", fontWeight: "900", color: "var(--color-primary)", marginBottom: "24px", lineHeight: "1.15", letterSpacing: "-0.03em" }}>
              Precision Product <span style={{ color: "var(--color-secondary)" }}>Range</span>
            </h2>
            
            <p style={{ fontSize: "18px", color: "#4b5563", fontWeight: "500", lineHeight: "1.6", margin: 0, maxWidth: "42rem" }}>
              Each category represents a dedicated manufacturing system designed for load-specific, industrial-grade transmission requirements.
            </p>
          </div>

          {/* CARDS FILTER MATRIX GRID */}
          <div className="products-family__grid">
            <button
              type="button"
              onClick={() => navigate("/products/roller-chains")}
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
