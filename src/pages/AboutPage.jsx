import { useDocumentMeta } from "../hooks/useDocumentMeta";

const productionSpecs = [
  { metric: "Materials Used", value: "High-grade carbon, alloy, and stainless steel" },
  { metric: "Core Offerings", value: "Continuous-duty chain systems, precision sprockets, fasteners" },
  { metric: "Custom Options", value: "Bespoke bore sizes, specialized attachments, pitch alterations" },
  { metric: "Target Lines", value: "Heavy industrial setups, corrosive/wet processing environments" },
  { metric: "Client Portfolio", value: "Direct OEM supply streams, regional distributors, and plant maintenance" },
  { metric: "Supply Model", value: "Procurement-aligned sequencing with custom batch processing" },
];

export default function AboutPage() {
  useDocumentMeta(
    "About | Bansal Chain Industries",
    "Technical manufacturing parameters, material capabilities, and industrial chain and sprocket systems from BCI.",
  );

  return (
    <>

      <section className="about-page about-page--immersive">
        <div className="container about-page__grid">

          {/* LEFT SIDE CONTENT SECTION */}
          <div className="about-page__content">
            <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
              
              {/* Header Identity Core */}
              <div>
                <span 
                  style={{ 
                    fontSize: "11px", 
                    letterSpacing: "0.2em", 
                    textTransform: "uppercase", 
                    fontWeight: "700", 
                    color: "var(--color-primary)", 
                    display: "block", 
                    marginBottom: "16px" 
                  }}
                >
                  Est. 1992 | Ludhiana, Punjab
                </span>
                
                <h1 style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.25rem)", fontWeight: "900", color: "var(--color-primary)", marginBottom: "24px", lineHeight: "1.15", letterSpacing: "-0.03em" }}>
                  Engineering <span style={{ color: "var(--color-secondary)" }}>Reliability</span> <br />
                  Since 1992
                </h1>
              </div>

              <p className="about-page__hero-description">
                India's leading manufacturer and supplier of heavy-duty Conveyor Chains,
                Precision Sprockets, and industrial transmission systems engineered
                for demanding production environments.
              </p>
            </div>

            <div className="about-page__copy">
              <p>
                Established as an <strong className="about-page__chip">Individual - Proprietor</strong> firm in the industrial hub of
                <span className="about-page__underlined"> Ludhiana</span>,
                Bansal Chain Industries has spent decades mastering
                the art of metal transmission components.
              </p>

              <p>
                We manufacture high-performance
                <strong className="about-page__emphasis"> Conveyor Chains</strong>,
                <strong className="about-page__emphasis"> Industrial Chains</strong>,
                and precision-engineered
                <span className="about-page__chip about-page__chip--secondary"> Industrial Sprockets</span> designed for long operational life cycles.
              </p>
            </div>

            <div className="about-page__protocol">
              <h4>Production Protocol</h4>
              <ul>
                <li>
                  Application-based material selection logic eliminates premature wear.
                </li>
                <li>
                  Controlled manufacturing paths preserve dimensional tolerances.
                </li>
                <li>
                  Streamlined procurement workflows simplify industrial bulk supply.
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE ASIDE PARAMETERS SECTION */}
          <div className="about-page__aside">
            <div className="about-page__panel">
              <div className="about-page__panel-head">
                <h3>Manufacturing Capabilities</h3>
                <p>
                  Verified engineering boundaries & industrial supply readiness.
                </p>
              </div>

              <div className="about-page__specs">
                {productionSpecs.map((spec, index) => (
                  <div
                    key={spec.metric}
                    className={`about-page__spec-row${
                      index === productionSpecs.length - 1 ? " is-last" : ""
                    }`}
                  >
                    <span className="about-page__spec-label">
                      {spec.metric}
                    </span>
                    <span className="about-page__spec-value">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div> {/* FIXED: Closed container about-page__grid div cleanly here */}
      </section>
    </>
  );
}
