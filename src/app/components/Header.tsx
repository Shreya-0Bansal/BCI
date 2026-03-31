import { Link, useLocation } from "react-router";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { companyInfo } from "../data/products";

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xl">BCI</span>
            </div>
            <div className="hidden md:block">
              <div className="font-bold text-xl text-secondary">
                {companyInfo.name}
              </div>
              <div className="text-xs text-muted-foreground">
                Manufacturing Excellence Since 1992
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors ${
                  isActive(item.path)
                    ? "text-primary"
                    : "text-secondary hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Call Now Button */}
          <a
            href={`tel:${companyInfo.phone}`}
            className="hidden md:flex items-center space-x-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-secondary p-2"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-medium px-4 py-2 rounded-md ${
                    isActive(item.path)
                      ? "bg-primary text-white"
                      : "text-secondary hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center justify-center space-x-2 bg-primary text-white px-4 py-3 rounded-md mx-4"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
