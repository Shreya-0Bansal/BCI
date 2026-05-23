import { Link } from "react-router-dom";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export default function NotFoundPage() {
  useDocumentMeta("404 | Bansal Chain Industries", "Page not found.");

  return (
    <section className="section">
      <div className="container empty-state">
        <p className="eyebrow">404</p>
        <h1>Requested page not found</h1>
        <p>Return to the home page or browse the product catalog.</p>
        <div className="empty-state__actions">
          <Link className="button button--solid" to="/">
            Go Home
          </Link>
          <Link className="button button--ghost" to="/products">
            View Catalog
          </Link>
        </div>
      </div>
    </section>
  );
}
