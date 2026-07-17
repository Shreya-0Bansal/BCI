export default function PageIntro({
  eyebrow,
  title,
  accent,
  description,
  align = "left",
}) {
  return (
    <div className={`page-intro page-intro--${align}`}>
      <div className="page-intro__eyebrow-row">
        <span className="page-intro__dot" />
        <span className="page-intro__eyebrow">{eyebrow}</span>
      </div>
      <h1 className="page-intro__title">
        {title} {accent ? <span className="page-intro__title-accent">{accent}</span> : null}
      </h1>
      {description ? <p className="page-intro__lead">{description}</p> : null}
    </div>
  );
}
