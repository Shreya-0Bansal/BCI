import { Link } from "react-router-dom";
import { company } from "../../data/company";
import { buildWhatsAppUrl } from "../../utils/inquiry";

export default function ContactStripSection() {
  return (
    <section className="section home-section home-contact-strip">
      <div className="container contact-strip">
        <div>
          <p className="eyebrow">Contact Section</p>
          <h2>Send drawings, dimensions, or monthly demand to our team.</h2>
        </div>
        <div className="contact-strip__actions">
          <Link className="button button--solid" to="/contact">
            Visit Contact Page
          </Link>
          <a
            className="button button--ghost"
            href={buildWhatsAppUrl(
              company.whatsapp,
              "Hello, I need help selecting the right chain or sprocket for my application.",
            )}
            target="_blank"
            rel="noreferrer"
          >
            Start Inquiry
          </a>
        </div>
      </div>
    </section>
  );
}
