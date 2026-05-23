import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { company } from "../data/company";
import { buildWhatsAppUrl } from "../utils/inquiry";
import LogoMark from "./LogoMark";

const navigation = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Catalog", to: "/products" },
  { label: "Contact", to: "/contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container site-header__bar">
        <NavLink className="site-header__brand" to="/" aria-label="Bansal Chain Industries home">
          <LogoMark compact />
        </NavLink>

        <button
          className="site-header__toggle"
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className={`site-header__nav${open ? " is-open" : ""}`}>
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `site-header__link${isActive ? " is-active" : ""}`
              }
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <a
            className="button button--solid"
            href={buildWhatsAppUrl(
              company.whatsapp,
              "Hello, I would like a quotation for industrial chains and sprockets.",
            )}
            target="_blank"
            rel="noreferrer"
          >
            Request Quote
          </a>
        </nav>
      </div>
    </header>
  );
}
