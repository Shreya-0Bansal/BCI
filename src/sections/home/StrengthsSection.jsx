import { CheckCircle2, Factory } from "lucide-react";
import SectionIntro from "../../components/SectionIntro";

const strengths = [
  "Reference size charts inspired by established industrial chain standards",
  "Single design language with controlled color palette and typography hierarchy",
  "Responsive catalog layout optimized for desktop buyers and mobile inquiry flows",
  "Lean frontend architecture with reusable components and lazy-loaded routes",
];

export default function StrengthsSection() {
  return (
    <section className="section home-section home-section--deferred strengths-showcase">
      <div className="container strengths-showcase__grid">
        <div className="strengths-showcase__content">
          <SectionIntro
            eyebrow="Quality & Strengths"
            title="A production-ready frontend built for industrial credibility."
            description="The redesign prioritizes readability, strong spacing, fast navigation, and a restrained premium tone."
          />

          <div className="strengths-showcase__list">
            {strengths.map((item) => (
              <div className="strengths-showcase__item" key={item}>
                <div className="strengths-showcase__check">
                  <CheckCircle2 size={18} />
                </div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="strengths-showcase__media">
          <div className="strengths-showcase__column">
            <img
              src="/machinery.jpg"
              alt="Industrial machining facility"
              className="strengths-showcase__image"
              loading="lazy"
              decoding="async"
              width="960"
              height="720"
              fetchpriority="low"
            />
            <div className="strengths-showcase__metric">
              <h4>30+</h4>
              <p>Years of Trust</p>
            </div>
          </div>

          <div className="strengths-showcase__column strengths-showcase__column--offset">
            <div className="strengths-showcase__panel">
              <Factory size={28} className="strengths-showcase__panel-icon" />
              <p>Proprietorship Firm</p>
            </div>
            <img
              src="/head.jpg"
              alt="Precision engineered components"
              className="strengths-showcase__image"
              loading="lazy"
              decoding="async"
              width="960"
              height="720"
              fetchpriority="low"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
