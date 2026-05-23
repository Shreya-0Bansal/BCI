import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-card__image">
        <img
          src={product.heroImage}
          alt={product.name}
          loading="lazy"
          decoding="async"
          width="720"
          height="540"
        />
      </div>
      <div className="product-card__body">
        <p className="product-card__category">{product.category}</p>
        <h3>{product.name}</h3>
        <p>{product.summary}</p>
        <div className="product-card__specs">
          <span>{product.specHighlights[0]}</span>
          <span>{product.specHighlights[1]}</span>
        </div>
        <Link className="button button--ghost" to={`/products/${product.slug}`}>
          View Product
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}
