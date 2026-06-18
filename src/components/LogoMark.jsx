export default function LogoMark({ compact = false }) {
  return (
    <span className={`logo-mark${compact ? " logo-mark--compact" : ""}`}>
      <img
        src="/Logo.png"
        alt="Bansal Chain Industries"
        width="56"
        height="56"
        loading="eager"
        fetchpriority="high"
        decoding="async"
      />
      <span className="logo-mark__text">
        <strong>Bansal Chain</strong>
        <small>Industries</small>
      </span>
    </span>
  );
}
