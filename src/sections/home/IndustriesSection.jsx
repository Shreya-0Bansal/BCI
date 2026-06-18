const industries = [
  "Food & Grain Handling",
  "Cement & Aggregates",
  "Packaging & Bottling",
  "Sugar & Agro Processing",
  "Automotive Ancillaries",
  "General Engineering",
  "Oil Mills & solvent Plants"
];

export default function IndustriesSection() {
  return (
    <section className="section home-section home-section--deferred industries-marquee">
      <div className="container">
        <div className="industries-marquee__head">
          <p className="eyebrow">Industries Served</p>
          <h2 className="industries-marquee__title">Industries We Power</h2>
        </div>

        <div className="industries-marquee__track-wrap">
          <div className="industries-marquee__track">
            {[...industries, ...industries].map((item, index) => (
              <span key={index} className="industries-marquee__item">
                {item} <span className="industries-marquee__dot">•</span>
              </span>
            ))}
          </div>
        </div>

        <div className="industries-marquee__note">
          Designed for continuous production environments where mechanical reliability
          and uptime are critical performance metrics.
        </div>
      </div>
    </section>
  );
}
