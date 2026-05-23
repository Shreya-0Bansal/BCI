import { useState } from "react";
import SectionIntro from "../../components/SectionIntro";

const principles = [
  {
    number: "01",
    title: "Vision",
    text: "To be a trusted leader in industrial chain manufacturing.",
  },
  {
    number: "02",
    title: "Mission",
    text: "To deliver reliable, high-performance chain solutions with consistent quality.",
  },
  {
    number: "03",
    title: "Approach",
    text: "Focused on engineering consistency, durability, and industrial trust.",
  },
];

export default function CompanyPrinciplesSection() {
  const [active, setActive] = useState(principles[0]);

  return (
    <section className="principles">
      <div className="container principles__container">

        <div className="principles__list">
          {principles.map((item) => {
            const isActive = active.number === item.number;

            return (
              <button
                key={item.number}
                className={`principle ${isActive ? "is-active" : ""}`}
                onMouseEnter={() => setActive(item)}
                onClick={() => setActive(item)}
              >
                <span className="principle__number">
                  {item.number}
                </span>

                <div className="principle__content">
                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}