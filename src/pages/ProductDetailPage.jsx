import { Link, useParams } from "react-router-dom";
import InquiryPanel from "../components/InquiryPanel";
import SectionIntro from "../components/SectionIntro";
import SpecTable from "../components/SpecTable";
import { products } from "../data/products";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

function isTableRow(row) {
  return row && typeof row === "object" && !Array.isArray(row);
}

function formatSectionLabel(key) {
  return key
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function getTableSections(product) {
  if (!product) {
    return [];
  }

  const entries = Object.entries(product).filter(([, value]) =>
    Array.isArray(value) && value.some(isTableRow),
  );

  const orderedEntries = [
    ...entries.filter(([key]) => key === "sizeChart"),
    ...entries.filter(([key]) => key !== "sizeChart"),
  ];

  return orderedEntries.map(([key, rows]) => ({
    key,
    title: formatSectionLabel(key),
    description:
      key === "sizeChart"
        ? "Reference sizes are inspired by common industrial chain and sprocket standards used across established brands. Final engineering can be customized."
        : `Technical data for ${formatSectionLabel(key).toLowerCase()}.`,
    rows,
  }));
}

export default function ProductDetailPage() {
  const { productSlug } = useParams();
  const product = products.find((item) => item.slug === productSlug);
  const tableSections = getTableSections(product);

  useDocumentMeta(
    product ? `${product.name} | Bansal Chain Industries` : "Product | Bansal Chain Industries",
    product
      ? `${product.name} from Bansal Chain Industries with technical size references, material information, and inquiry options.`
      : "Industrial product details from Bansal Chain Industries.",
  );

  if (!product) {
    return (
      <section className="section">
        <div className="container empty-state">
          <h1>Product not found</h1>
          <p>The requested catalog page is unavailable.</p>
          <Link className="button button--solid" to="/products">
            Back to Catalog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="section">
        <div className="container detail-grid">
          <div>
            <SectionIntro
              eyebrow="Product Overview"
              title={product.detailTitle}
              description={product.description}
            />
            <div className="info-grid">
              <article className="info-card">
                <h3>Material Information</h3>
                <ul>
                  {product.materials.map((material) => (
                    <li key={material}>{material}</li>
                  ))}
                </ul>
              </article>
              <article className="info-card">
                <h3>Customization</h3>
                <ul>
                  {product.customization.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
          <InquiryPanel productName={product.name} />
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <div className="product-detail-tables">
            {tableSections.map((section, index) => (
              <div key={section.key} className="product-detail-tables__item">
                <SectionIntro
                  eyebrow={index === 0 ? "Technical Size Chart" : "Technical Table"}
                  title={index === 0 ? "Standard reference dimensions for preliminary selection." : section.title}
                  description={section.description}
                />
                <SpecTable rows={section.rows} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
