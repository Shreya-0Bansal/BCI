import { Link } from "react-router-dom"; // Use react-router-dom for consistency
import { companyInfo } from "../data/products";
import { Phone, Mail, MapPin, MessageCircle, ExternalLink, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white border-t border-white/5">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="text-white font-black italic text-xl tracking-tighter">BCI</span>
              </div>
              <div>
                <div className="font-black text-xl uppercase tracking-tighter leading-none">
                  Bansal Chain
                </div>
                <div className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mt-1">
                  Industries
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-medium">
              {companyInfo.tagline}. Leading the market in heavy-duty conveyor solutions since 1992.
            </p>
            <div className="flex items-center gap-2 text-gray-500 bg-white/5 w-fit px-3 py-2 rounded-lg border border-white/10">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span className="text-[10px] font-black uppercase tracking-widest">IndiaMART Verified Exporter</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white mb-6 border-l-2 border-primary pl-3">
              Navigation
            </h3>
            <ul className="space-y-4">
              {["Home", "About Us", "Products", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`} 
                    className="text-gray-400 hover:text-primary transition-colors text-sm font-bold flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-[2px] bg-primary mr-0 group-hover:mr-2 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Catalog Segments */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white mb-6 border-l-2 border-primary pl-3">
              Catalog
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Conveyor Chains", slug: "conveyor-chains" },
                { name: "Roller Chains", slug: "industrial-roller-chains" },
                { name: "Sprockets & Gears", slug: "sprockets-gears" },
                { name: "Custom Solutions", slug: "elevator-custom-solutions" },
              ].map((cat) => (
                <li key={cat.slug}>
                  <Link
                    to={`/products?category=${cat.slug}`}
                    className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & RFQ */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white mb-6 border-l-2 border-primary pl-3">
              Quick Connect
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="text-gray-400 text-xs leading-relaxed font-medium">
                  {companyInfo.address}
                </span>
              </li>
              <li>
                <a href={`tel:${companyInfo.phone}`} className="flex items-center space-x-3 group">
                  <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-gray-400 text-sm font-bold group-hover:text-white">{companyInfo.phone}</span>
                </a>
              </li>
              <li>
                <a 
                  href={`https://wa.me/${companyInfo.whatsapp}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 group"
                >
                  <div className="w-8 h-8 bg-[#075E54]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#075E54] transition-all">
                    <MessageCircle className="w-4 h-4 text-[#075E54] group-hover:text-white" />
                  </div>
                  <span className="text-gray-400 text-sm font-bold group-hover:text-white underline underline-offset-4 decoration-[#075E54]">WhatsApp Inquiry</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
            <p>© {new Date().getFullYear()} Bansal Chain Industries</p>
            <p className="flex items-center gap-1">
              GST: <span className="text-gray-300">{companyInfo.gst}</span>
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://www.indiamart.com/bansal-chain-industries/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-primary flex items-center gap-2"
            >
              IndiaMART Profile <ExternalLink className="w-3 h-3" />
            </a>
            <div className="h-4 w-px bg-white/10" />
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-600">
              Made in Ludhiana
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}