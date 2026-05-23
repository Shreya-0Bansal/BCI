import {
  ExternalLink,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { company } from "../data/company";

const navigationItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Contact", to: "/contact" },
];

const catalogItems = [
  { name: "Conveyor Chains", slug: "conveyor-chains" },
  { name: "Roller Chains", slug: "roller-chains" },
  { name: "Sprockets & Gears", slug: "gear-sprockets" },
  { name: "Custom Solutions", slug: "industrial-chains" },
];

export default function SiteFooter() {
  return (
    <footer className="footer-premium">
      <div className="container footer-premium__inner">
        <div className="footer-premium__grid">
          <div className="footer-premium__brand">
            <div className="footer-premium__brand-lockup">
              <div className="footer-premium__monogram">BCI</div>
              <div>
                <div className="footer-premium__brand-title">Bansal Chain</div>
                <div className="footer-premium__brand-subtitle">Industries</div>
              </div>
            </div>

            <p className="footer-premium__brand-copy">
              {company.tagline}. Leading the market in heavy-duty conveyor
              solutions and industrial transmission systems.
            </p>

            <div className="footer-premium__verified">
              <ShieldCheck size={16} />
              <span>IndiaMART Verified Exporter</span>
            </div>
          </div>

          <div className="footer-premium__column">
            <h3>Navigation</h3>
            <ul className="footer-premium__links">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="footer-premium__nav-link">
                    <span className="footer-premium__nav-line" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-premium__column">
            <h3>Catalog</h3>
            <ul className="footer-premium__links">
              {catalogItems.map((item) => (
                <li key={item.slug}>
                  <Link
                    to={`/products/${item.slug}`}
                    className="footer-premium__catalog-link"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-premium__column">
            <h3>Quick Connect</h3>
            <ul className="footer-premium__contact-list">
              <li className="footer-premium__contact-item">
                <div className="footer-premium__contact-icon">
                  <MapPin size={16} />
                </div>
                <span className="footer-premium__contact-text">
                  {company.address}
                </span>
              </li>

              <li>
                <a
                  href={`tel:${company.phone}`}
                  className="footer-premium__contact-link"
                >
                  <div className="footer-premium__contact-icon">
                    <Phone size={16} />
                  </div>
                  <span>{company.phone}</span>
                </a>
              </li>

              <li>
                <a
                  href={`https://wa.me/${company.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-premium__whatsapp-link"
                >
                  <div className="footer-premium__whatsapp-icon">
                    <MessageCircle size={16} />
                  </div>
                  <span>WhatsApp Inquiry</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-premium__bottom">
          <div className="footer-premium__bottom-meta">
            <p>© {new Date().getFullYear()} Bansal Chain Industries</p>
            <p>Made in Ludhiana</p>
          </div>

          <div className="footer-premium__bottom-links">
            <a
              href="https://www.indiamart.com/bansal-chain-industries/"
              target="_blank"
              rel="noopener noreferrer"
            >
              IndiaMART Profile
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
