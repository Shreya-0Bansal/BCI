import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageIntro from "../components/PageIntro";
import { productFamilies, products } from "../data/products";
import { productCategories } from "../data/productCategories";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const familyImages = {
  "conveyor-chains": products.find((item) => item.slug === "conveyor-chains")?.heroImage,
  "industrial-chains": products.find((item) => item.slug === "industrial-chains")?.heroImage,
  "bottling-plant-chains": products.find((item) => item.slug === "bottling-plant-chains")?.heroImage,
  "gear-sprockets": products.find((item) => item.slug === "gear-sprockets")?.heroImage,
  fastners: products.find((item) => item.slug === "fastners")?.heroImage,
};

export default function ProductsPage() {
  const familyProducts = products.reduce((acc, product) => {
    acc[product.familySlug] = product;
    return acc;
  }, {});

  useDocumentMeta(
    "Products | Bansal Chain Industries",
    "Browse conveyor chains, industrial chains, bottling plant chains, sprockets, and fastners from Bansal Chain Industries.",
  );

  const getCategoryHighlights = (familySlug, product) => {
    const sizeCount = product?.sizeChart?.length || 0;

    switch (familySlug) {
      case "conveyor-chains":
        return [`${sizeCount} Size Codes`, `${product.attachmentSpecifications.length} Attachment Types`];
      case "industrial-chains":
        return [`${sizeCount} Size Codes`, `${product.operatingConditions.length} Duty Profiles`];
      case "bottling-plant-chains":
        return [`${sizeCount} Build Options`, `${product.hygieneAndCompliance.length} Line Scenarios`];
      case "gear-sprockets":
        return [`${sizeCount} Bore Variants`, `${product.machiningBoreSpecs.length} Machining Options`];
      case "fastners":
        return [`${sizeCount} Size Ranges`, `${product.mechanicalPropertyGrades.length} Strength Grades`];
      default:
        return [`${sizeCount} Product Variants`, "Industrial Applications"];
    }
  };

  return (
    <>
      <section className="about-page home-section products-family">
        <div className="container">
          <PageIntro
            eyebrow="Product Architecture"
            title="Precision"
            accent="Product Range"
            description="Explore each category by application, load profile, and manufacturing focus to find the right industrial solution quickly."
          />
          <div className="products-family__grid">
            {productFamilies.map((family, index) => {
              const category = productCategories.find((item) => item.slug === family.slug) || {
                name: family.name,
                description: family.name,
                badge: "Industrial Range",
                highlights: ["Multiple Sizes", "Custom Manufacturing Available"],
                note: "Manufacturing-focused product family.",
              };
              const product = familyProducts[family.slug] || products[0];
              const highlights = getCategoryHighlights(family.slug, product);

              return (
                <Link
                  key={family.slug}
                  className="products-family__card"
                  to={`/products/${family.slug}`}
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
                      fetchPriority="low"
                    />
                    <span className="products-family__card-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="products-family__card-badge">{category.badge}</span>
                  </div>

                  <div className="products-family__content">
                    <div className="products-family__meta">
                      <span className="products-family__category-chip">{highlights[0]}</span>
                      <span className="products-family__count-chip">{highlights[1]}</span>
                    </div>

                    <div className="products-family__copy">
                      <h3>{category.name}</h3>
                      <p>{category.description}</p>
                    </div>
                  </div>

                  <div className="products-family__action">
                    <span className="products-family__link">
                      Explore category
                      <ArrowUpRight size={16} />
                    </span>
                    <span className="products-family__action-note">{category.note}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
