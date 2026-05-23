import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { company } from "../../data/company";
import { buildWhatsAppUrl } from "../../utils/inquiry";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-section__backdrop" />
      <div className="container hero-section__grid">
        <div>
          <p className="eyebrow">{company.tagline}</p>
          <h1>Engineered chain systems for modern manufacturing lines.</h1>
          <p className="lead">
            Bansal Chain Industries manufactures conveyor chains, roller chains,
            bottling plant chains, sprockets, and industrial fastners with a
            premium catalog-first presentation for B2B buyers.
          </p>
          <div className="hero-section__actions">
            <Link className="button button--solid" to="/products">
              Explore Catalog
              <ArrowRight size={16} />
            </Link>
            <a
              className="button button--ghost"
              href={buildWhatsAppUrl(
                company.whatsapp,
                "Hello, I need technical details for your industrial product range.",
              )}
              target="_blank"
              rel="noreferrer"
            >
              Request Consultation
            </a>
          </div>
        </div>

        <div className="hero-panel">
          <div className="hero-panel__metric">
            <strong>30+</strong>
            <span>Years in chain manufacturing</span>
          </div>
          <div className="hero-panel__metric">
  <strong>Pan India</strong>
  <span>Industrial supply & distribution network</span>
</div>
          <div className="hero-panel__metric">
  <strong>Heavy Duty</strong>
  <span>Built for continuous industrial operations</span>
</div>
          <div className="hero-panel__meta">
            <span>Factory base</span>
            <strong>{company.shortAddress}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
