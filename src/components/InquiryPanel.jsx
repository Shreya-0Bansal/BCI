import { ArrowRight, Mail, Phone } from "lucide-react";
import { company } from "../data/company";
import { buildWhatsAppUrl } from "../utils/inquiry";

export default function InquiryPanel({ productName }) {
  return (
    <aside className="inquiry-panel">
      <p className="eyebrow">Project Inquiry</p>
      <h3>Discuss {productName} with our engineering desk</h3>
      <p>
        Share your required size, application, material grade, and monthly volume.
        Our team will respond with a fitment recommendation and quotation.
      </p>
      <div className="inquiry-panel__actions">
        <a
          className="button button--solid"
          href={buildWhatsAppUrl(
            company.whatsapp,
            `Hello, I need a quotation and technical details for ${productName}.`,
          )}
          target="_blank"
          rel="noreferrer"
        >
          Send Inquiry
          <ArrowRight size={16} />
        </a>
        <a className="button button--ghost" href={`mailto:${company.email}`}>
          <Mail size={16} />
          Email Sales
        </a>
        <a className="button button--ghost" href={`tel:${company.phone}`}>
          <Phone size={16} />
          Call Now
        </a>
      </div>
    </aside>
  );
}
