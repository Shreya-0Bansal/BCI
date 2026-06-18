import { ArrowRight, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import SectionIntro from "../components/SectionIntro";
import { company } from "../data/company";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { buildWhatsAppUrl } from "../utils/inquiry";

const contactCards = [
  { title: "Factory Address", value: company.address, href: company.mapUrl, icon: MapPin },
  { title: "Phone Number", value: company.phone, href: `tel:${company.phone}`, icon: Phone },
  { title: "Email Address", value: company.email, href: `mailto:${company.email}`, icon: Mail },
];

const states = [
  "Punjab", "Haryana", "Delhi NCR", "Uttar Pradesh", "Rajasthan", "Gujarat",
  "Maharashtra", "Karnataka", "Tamil Nadu", "West Bengal", "Madhya Pradesh",
];

export default function ContactPage() {
  useDocumentMeta(
    "Contact | Bansal Chain Industries",
    "Contact Bansal Chain Industries at E352 Focal Point Phase 6, Ludhiana, Punjab for industrial chain, sprocket, and fastener inquiries.",
  );

  return (
    <>
      <section className="contact-page">
        <div className="container contact-page__grid">
          <div>
            <div className="contact-page__intro">
              <div className="contact-page__eyebrow-row">
                <span className="contact-page__dot" />
                <span className="contact-page__eyebrow">
                  Get In Touch
                </span>
              </div>

              <h1 className="contact-page__title">
                Let's Build Something <span className="contact-page__title-accent">Stronger</span>{" "}
                Together
              </h1>

              <p className="contact-page__lead">
                Whether you need custom chain solutions or bulk industrial supplies, our technical team is ready to assist you.
              </p>
            </div>

            <div className="contact-page__cards">
              {contactCards.map((card) => {
                const Icon = card.icon;
                return (
                  <a
                    href={card.href}
                    key={card.title}
                    target={card.title === "Factory Address" ? "_blank" : "_self"}
                    rel="noreferrer"
                    className="contact-page__card"
                  >
                    <div className="contact-page__icon-box">
                      <Icon size={22} />
                    </div>
                    <h3>{card.title}</h3>
                    <p>{card.value}</p>
                  </a>
                );
              })}

              <div className="contact-page__hours">
                <div className="contact-page__hours-icon">
                  <Clock size={22} />
                </div>
                <h3>Business Hours</h3>
                <div className="contact-page__hours-list">
                  <div className="contact-page__hours-row">
                    <span>Mon - Sat</span>
                    <strong>9:00 AM - 6:00 PM</strong>
                  </div>
                  <div className="contact-page__hours-row contact-page__hours-row--last">
                    <span>Sunday</span>
                    <strong className="contact-page__hours-closed">Closed</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: INDUSTRIAL ACTION BOX */}
          <div className="contact-page__aside">
            <aside className="contact-page__cta">
              <MessageCircle size={28} className="contact-page__cta-icon" />
              <span className="contact-page__eyebrow">Quick Action</span>
              <h3>Need a faster response?</h3>
              <p>
                Send chain dimensions, sprocket bore specifications, or layout fastening details directly over WhatsApp to interface straight with our technical sales division.
              </p>
              <a
                href={buildWhatsAppUrl(
                  company.whatsapp,
                  "Hello, I need support with an industrial chain or sprocket requirement.",
                )}
                target="_blank"
                rel="noreferrer"
                className="contact-page__cta-link"
              >
                Start WhatsApp Inquiry
                <ArrowRight size={16} />
              </a>
            </aside>
          </div>
        </div>
      </section>

      <section className="contact-page__map-section">
        <div className="container">
          <div className="contact-page__map-head">
            <h2>Visit Our Facility</h2>
            <p>Transparency is core to our corporate engineering and production lifecycle.</p>
          </div>
          <div className="contact-page__map-frame">
            <iframe
              src={company.embedUrl}
              title="Bansal Chain Industries map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="contact-page__map-iframe"
            />
          </div>
        </div>
      </section>

      <section className="contact-page__states-section">
        <div className="container">
          <div className="contact-page__states-head">
            <div className="contact-page__states-copy">
              <h2>Pan-India Presence</h2>
              <p>
                Providing seamless logistics and technical deployment support to major industrial distribution nodes across the country.
              </p>
            </div>
            <div className="contact-page__states-lines">
              <span />
              <span />
            </div>
          </div>

          <div className="contact-page__states-grid">
            {states.map((state) => (
              <div key={state} className="contact-page__state-tile">
                <div className="contact-page__state-dot" />
                {state}
              </div>
            ))}
            <div className="contact-page__state-tile contact-page__state-tile--more">
              <div className="contact-page__state-dot contact-page__state-dot--gold" />
              And More...
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
