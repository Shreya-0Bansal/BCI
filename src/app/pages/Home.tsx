import { Link } from "react-router";
import { categories, companyInfo } from "../data/products";
import { Package, Cog, Settings, Wrench, ArrowRight, CheckCircle2, ShieldCheck, Factory, Globe, Zap } from "lucide-react";

const iconMap = {
  Package: Package,
  Cog: Cog,
  Settings: Settings,
  Wrench: Wrench,
};

export function Home() {
  return (
    <div className="pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative min-h-[85vh] flex items-center bg-cover bg-fixed bg-center"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url("https://images.unsplash.com/photo-1750601455222-d2566db36f7e?auto=format&fit=crop&q=80&w=1920")',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <ShieldCheck className="w-4 h-4 text-[#075E54]" />
              <span className="text-xs md:text-sm font-semibold tracking-wider uppercase">{companyInfo.tagline}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight">
              Forging the Strength of <span className="text-primary">Global Industry</span>
            </h1>
            <p className="text-lg md:text-xl mb-10 text-gray-300 leading-relaxed max-w-2xl">
              Precision-engineered conveyor chains and high-performance sprockets. Built for durability, trusted by industries across India and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                to="/products"
                className="group flex items-center justify-center bg-primary text-white px-10 py-4 rounded-lg font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                View Catalog
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`https://wa.me/${companyInfo.whatsapp}?text=Hi, I need technical details for your industrial products.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-[#075E54] text-white px-10 py-4 rounded-lg font-bold hover:bg-[#20BA59] transition-all"
              >
                Instant Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges - Simplified & Professional */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-3"><Factory className="w-6 h-6" /><span className="font-bold">MODERN PLANT</span></div>
            <div className="flex items-center gap-3"><Globe className="w-6 h-6" /><span className="font-bold">PAN-INDIA SUPPLY</span></div>
            <div className="flex items-center gap-3"><Zap className="w-6 h-6" /><span className="font-bold">FAST DELIVERY</span></div>
            <div className="flex items-center gap-3"><ShieldCheck className="w-6 h-6" /><span className="font-bold">ISO COMPLIANT</span></div>
          </div>
        </div>
      </section>

      {/* Product Categories - Modern Bento Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black text-secondary mb-4">Precision Product Range</h2>
              <p className="text-lg text-gray-600 font-medium">Engineered with high-grade carbon and stainless steel for extreme load environments.</p>
            </div>
            <Link to="/products" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all border-b-2 border-primary pb-1">
              Browse All Categories <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => {
              const Icon = iconMap[category.icon as keyof typeof iconMap];
              return (
                <Link
                  key={category.id}
                  to={`/products?category=${category.id}`}
                  className="group relative overflow-hidden rounded-2xl bg-white aspect-[4/5] shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-secondary via-secondary/20 to-transparent" />
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end text-white">
                    <div className="bg-primary p-3 rounded-xl w-fit mb-4 group-hover:rotate-12 transition-transform shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-black mb-2 leading-tight">{category.name}</h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {category.description}
                    </p>
                    <div className="w-10 h-1 bg-primary group-hover:w-full transition-all duration-500 rounded-full" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Strength Section */}
      <section className="py-24 bg-secondary overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-black uppercase tracking-[0.2em] text-sm mb-4 block">Manufacturing Excellence</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Quality that drives <br /> your production forward
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  "30+ Years Legacy",
                  "EN8 & EN19 Steel",
                  "SS304/316 Specialization",
                  "HRC 40-52 Case Hardening",
                  "ISO Certified Standards",
                  "24/7 Tech Support",
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-semibold">{point}</span>
                  </div>
                ))}
              </div>
              <div className="mt-12 p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                <p className="italic text-gray-400 text-lg">
                  "Our mission is to minimize downtime for industrial plants across the globe by providing zero-defect transmission products."
                </p>
                <div className="mt-4 font-bold text-white">— Management, Bansal Chain Industries</div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <img 
                src="https://images.unsplash.com/photo-1759159091728-e2c87b9d9315?auto=format&fit=crop&q=80&w=1000" 
                alt="Precision Machine" 
                className="relative rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Heavy Duty Style */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight italic">
            Engineered for Extremes
          </h2>
          <p className="text-primary-foreground/90 text-xl mb-10 max-w-2xl mx-auto font-medium">
            Ready to upgrade your machinery? Get a custom quote for your specific dimensions within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="bg-secondary text-white px-12 py-5 rounded-full font-black uppercase hover:scale-105 transition-all shadow-xl"
            >
              Get a Quote
            </Link>
            <a
              href={`https://wa.me/${companyInfo.whatsapp}`}
              className="bg-white text-primary px-12 py-5 rounded-full font-black uppercase hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2"
            >
              Consult an Expert
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}