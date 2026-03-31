import { companyInfo } from "../data/products";
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";

export function Contact() {
  const contactMethods = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Factory Address",
      value: companyInfo.address,
      link: companyInfo.mapUrl,
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Number",
      value: companyInfo.phone,
      link: `tel:${companyInfo.phone}`,
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Address",
      value: companyInfo.email,
      link: `mailto:${companyInfo.email}`,
    },
  ];

  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1759159091728-e2c87b9d9315?q=80&w=1080")',
          }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block px-4 py-1 mb-4 text-xs font-semibold tracking-widest text-primary uppercase bg-white/10 backdrop-blur-sm rounded-full text-white">
            Get in touch
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Let's Build Something <br /> <span className="text-primary-foreground opacity-90">Stronger Together</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Whether you need custom chain solutions or bulk industrial supplies, our technical team is ready to assist you.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Contact Cards */}
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              {contactMethods.map((method, idx) => (
                <a 
                  key={idx}
                  href={method.link}
                  target={method.title === "Factory Address" ? "_blank" : "_self"}
                  rel="noreferrer"
                  className="group p-8 bg-gray-50 rounded-2xl border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-2">{method.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{method.value}</p>
                </a>
              ))}

              {/* Hours Card */}
              <div className="p-8 bg-secondary text-white rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span>Mon - Sat</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span>Sunday</span>
                    <span className="text-red-400">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Sticky-style Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-gradient-to-br from-[#075E54] to-[#128C7E] rounded-2xl p-8 text-white shadow-2xl">
                <MessageCircle className="w-10 h-10 mb-6 opacity-80" />
                <h2 className="text-2xl font-bold mb-4">Instant Support</h2>
                <p className="mb-8 text-white/80 leading-relaxed">
                  Skip the wait. Chat directly with our sales engineers for technical specs and instant quotes.
                </p>
                <ul className="space-y-4 mb-8">
                  {["Custom Specifications", "Bulk Pricing", "Order Tracking"].map((item, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <ShieldCheck className="w-4 h-4 mr-2 text-green-400" /> {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/${companyInfo.whatsapp}`}
                  className="flex items-center justify-center bg-white text-[#075E54] py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg group"
                >
                  Message on WhatsApp
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Full Width Design */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Visit Our Facility</h2>
            <p className="text-muted-foreground">Transparency is key to our manufacturing process.</p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white h-[500px]">
             <iframe
                src={companyInfo.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Location Map"
              ></iframe>
          </div>
        </div>
      </section>

      {/* Service Areas - Badge Layout */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold text-secondary mb-4">Pan-India Presence</h2>
              <p className="text-muted-foreground">Providing seamless logistics and support to major industrial hubs across the country.</p>
            </div>
            <div className="flex gap-2">
              <div className="h-1 w-12 bg-primary rounded-full" />
              <div className="h-1 w-4 bg-primary/30 rounded-full" />
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              "Punjab", "Haryana", "Delhi NCR", "Uttar Pradesh", 
              "Rajasthan", "Gujarat", "Maharashtra", "Karnataka", 
              "Tamil Nadu", "West Bengal", "Madhya Pradesh"
            ].map((state) => (
              <span key={state} className="px-6 py-3 bg-white border border-gray-200 rounded-full text-secondary font-medium hover:border-primary hover:text-primary transition-colors cursor-default shadow-sm">
                {state}
              </span>
            ))}
            <span className="px-6 py-3 bg-primary/5 border border-dashed border-primary/30 rounded-full text-primary font-bold">
              And More...
            </span>
          </div>
        </div>
      </section>

      {/* Final CTA - Professional & Clean */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-[2rem] p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to secure your supply chain?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <a
                href={`tel:${companyInfo.phone}`}
                className="inline-flex items-center justify-center bg-white text-primary px-10 py-4 rounded-xl font-bold hover:shadow-xl transition-all"
              >
                Call Support
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="inline-flex items-center justify-center bg-secondary text-white px-10 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all border border-white/10"
              >
                Request Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}