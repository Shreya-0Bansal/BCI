export default function SectionIntro({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={`section-intro section-intro--${align}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className="lead">{description}</p> : null}
    </div>
  );
}
