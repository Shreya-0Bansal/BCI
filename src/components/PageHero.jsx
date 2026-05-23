import { Cog, Factory, Mail, MapPin, Phone, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  breadcrumb,
  variant = "gradient",
}) {
  const headerClassName = `page-hero page-hero--${variant}`;
  const iconNodes = [Factory, Cog, Wrench, Phone, Mail, MapPin];

  return (
    <section className={headerClassName}>
      {variant === "image" && image ? (
        <div className="page-hero__media">
          <img src={image} alt={title} loading="eager" decoding="async" />
        </div>
      ) : null}
      {variant === "icons" ? (
        <div className="page-hero__icons" aria-hidden="true">
          {iconNodes.map((Icon, index) => (
            <span
              key={index}
              className={`page-hero__icon page-hero__icon--${index + 1}`}
            >
              <Icon size={26} strokeWidth={1.8} />
            </span>
          ))}
        </div>
      ) : null}
      <div className="page-hero__overlay" />
      <div className="container page-hero__content">
        {breadcrumb ? (
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            {breadcrumb.href ? <Link to={breadcrumb.href}>{breadcrumb.label}</Link> : <span>{breadcrumb.label}</span>}
          </div>
        ) : null}
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lead">{description}</p>
      </div>
    </section>
  );
}
