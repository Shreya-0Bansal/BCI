import { Link } from "react-router-dom";
import SectionIntro from "../../components/SectionIntro";

export default function ProductCategoriesSection() {
  // Brand color references
  const colors = {
    primary: "#350b0f",
    secondary: "rgb(210, 159, 91)",
    surface: "#f6f3ee",
    surfaceSoft: "#fbf9f6",
  };

  const containerStyle = {
    padding: "80px 0",
    backgroundColor: colors.surface, 
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "24px",
    marginTop: "40px",
  };

  const cardStyle = {
    background: colors.surfaceSoft, // Softer inner body color
    border: "1px solid rgba(53, 11, 15, 0.1)", // Light tint of primary color
    borderRadius: "14px",
    padding: "26px 22px",
    transition: "all 0.3s cubic-bezier(0.25, 1, 0.5, 1)",
    cursor: "pointer",
    boxShadow: "0 2px 12px rgba(53, 11, 15, 0.02)",
  };

  const cardHover = {
    transform: "translateY(-6px)",
    boxShadow: "0 12px 30px rgba(53, 11, 15, 0.08)",
    borderColor: colors.secondary, // Uses secondary gold color on highlight
    background: "#ffffff",
  };

  const titleStyle = {
    fontSize: "18px",
    fontWeight: "600",
    color: colors.primary, 
    marginBottom: "8px",
  };

  const descStyle = {
    fontSize: "14px",
    color: "#5c504f", // Softened gray-brown tone matching your theme palette
    lineHeight: "1.6",
  };

  const actionStyle = {
    marginTop: "40px",
    display: "flex",
    justifyContent: "center",
  };

  const buttonStyle = {
    padding: "14px 28px",
    background: colors.primary, // Primary brand color background
    color: colors.surfaceSoft, // High-contrast clean text color
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "500",
    letterSpacing: "0.5px",
    transition: "background-color 0.2s ease",
  };

  const categories = [
    {
      title: "Chains",
      desc: "Industrial power transmission chains for heavy-duty applications.",
    },
    {
      title: "Sprockets",
      desc: "Precision-engineered sprockets for smooth mechanical performance.",
    },
    {
      title: "Fastners",
      desc: "High-strength bolts, nuts, and custom fastening solutions.",
    },
    {
      title: "Custom Engineering",
      desc: "Tailor-made mechanical components as per drawings & specs.",
    },
  ];

  return (
    <section style={containerStyle}>
      <div className="container">
        <SectionIntro
          eyebrow="Product Categories"
          title="Engineered components built for industrial reliability."
          description="Explore precision-manufactured chains, sprockets, and fastners designed for performance, durability, and scale."
          align="center"
        />

        {/* Category Grid */}
        <div style={gridStyle}>
          {categories.map((item, idx) => (
            <div
              key={idx}
              style={cardStyle}
              onMouseEnter={(e) => {
                Object.assign(e.currentTarget.style, cardHover);
              }}
              onMouseLeave={(e) => {
                Object.assign(e.currentTarget.style, cardStyle);
              }}
            >
              <div style={titleStyle}>{item.title}</div>
              <div style={descStyle}>{item.desc}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={actionStyle}>
          <Link 
            style={buttonStyle} 
            to="/products"
          >
            View Full Product Catalog →
          </Link>
        </div>
      </div>
    </section>
  );
}
