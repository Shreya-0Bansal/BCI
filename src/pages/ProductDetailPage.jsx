import { Link, useParams } from "react-router-dom";
import InquiryPanel from "../components/InquiryPanel";
import PageHero from "../components/PageHero";
import SectionIntro from "../components/SectionIntro";
import SpecTable from "../components/SpecTable";
import { products } from "../data/products";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export default function ProductDetailPage() {
  const { productSlug } = useParams();
  const product = products.find((item) => item.slug === productSlug);

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
      <PageHero
        eyebrow={product.category}
        title={product.name}
        description={product.summary}
        image={product.heroImage}
        breadcrumb={{ label: "Products", href: "/products" }}
        variant="gradient"
      />

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
          <SectionIntro
            eyebrow="Technical Size Chart"
            title="Standard reference dimensions for preliminary selection."
            description="Reference sizes are inspired by common industrial chain and sprocket standards used across established brands. Final engineering can be customized."
          />
          <SpecTable rows={product.sizeChart} />
        </div>
      </section>
    </>
  );
}
