import { CheckCircle2, Award, Users, Factory, Globe, ShieldCheck, Zap, Cog, Microscope } from "lucide-react";
import { companyInfo } from "../data/products";

export function About() {
  return (
    <div className="pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative h-[500px] flex items-center bg-cover bg-fixed bg-center"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url("https://images.unsplash.com/photo-1701788607416-f1b5dd5a09ec?auto=format&fit=crop&q=80&w=1920")',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-white">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md border border-primary/30 px-4 py-2 rounded-full mb-6">
              <span className="text-xs md:text-sm font-bold tracking-widest uppercase">Est. 1972 | Ludhiana, Punjab</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Engineering <span className="text-primary">Reliability</span> Since 1972
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              India's leading manufacturer and supplier of heavy-duty Conveyor Chains and Precision Sprockets.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story - IndiaMART Content Integration */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
  {/* Decorative Background Element */}
  <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10" />
  
  <h2 className="text-4xl md:text-5xl font-black text-secondary mb-8 leading-tight">
    Quality that <span className="text-primary">Moves</span> <br /> 
    Modern Industry
  </h2>

  <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
    <p>
      Established as an <span className="px-1.5 py-0.5 bg-primary/10 text-secondary font-bold rounded">Individual - Proprietor</span> firm in the industrial hub of <span className="text-secondary font-bold border-b-2 border-primary/30">Ludhiana</span>, Bansal Chain Industries has spent over five decades mastering the art of metal transmission components.
    </p>

    <p>
      We specialize in a massive array of industrial products, ranging from 
      <span className="text-secondary font-semibold"> Mild Steel Conveyor Chains </span> 
      and <span className="text-secondary font-semibold"> Transmission Roller Chains </span> 
      to high-precision <span className="px-1.5 py-0.5 bg-secondary/5 text-primary font-bold rounded"> Industrial Sprockets</span>. 
      Every component we manufacture is designed to withstand the most demanding operational environments.
    </p>

    <div className="relative mt-8">
    <p className="bg-gray-50 p-6 border-l-4 border-primary italic rounded-r-xl">
                  "Our goal is simple: to provide robust, zero-maintenance solutions that keep production lines moving without interruption."
                </p>
    </div>
  </div>
</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1759159091728-e2c87b9d9315?auto=format&fit=crop&q=80&w=600" alt="Machining" className="rounded-2xl shadow-lg h-64 w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                <div className="bg-secondary p-8 rounded-2xl text-white">
                  <h4 className="text-3xl font-bold mb-1">30+</h4>
                  <p className="text-gray-400 text-sm uppercase tracking-wider">Years of Trust</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-primary p-8 rounded-2xl text-white">
                  <Factory className="w-8 h-8 mb-4" />
                  <p className="font-bold">Proprietorship Firm</p>
                </div>
                <img src="https://images.unsplash.com/photo-1767739791246-9f832345f8f1?auto=format&fit=crop&q=80&w=600" alt="Product" className="rounded-2xl shadow-lg h-64 w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section - Bento Style */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-secondary mb-4">Industrial Mastery</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">Built on a foundation of premium materials and rigorous quality control.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Microscope className="w-7 h-7 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-secondary">Quality Testing</h3>
              <p className="text-gray-600 leading-relaxed">Our infrastructure includes a dedicated quality testing unit where we inspect raw material grades (EN8, C45, SS304) and dimensional accuracy before dispatch.</p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Cog className="w-7 h-7 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-secondary">Advanced Hardening</h3>
              <p className="text-gray-600 leading-relaxed">Specialized in induction and case-hardening processes, reaching **HRC 40-52** levels to ensure extreme wear resistance and longevity.</p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Users className="w-7 h-7 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-secondary">Customer-Centric</h3>
              <p className="text-gray-600 leading-relaxed">Under the proficient guidance of our management, we have garnered a vast clientele by offering customized chain pitches and sprocket sizes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Table Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-secondary rounded-[2.5rem] overflow-hidden shadow-2xl relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px]" />
            <div className="p-12 md:p-20 relative z-10">
              <h2 className="text-4xl font-bold text-white mb-12 text-center">Technical Specifications</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 text-white/80">
                <div className="space-y-4">
                  <h4 className="text-primary font-black text-xl mb-6 uppercase tracking-widest border-b border-white/10 pb-4">Core Materials</h4>
                  {["EN8 & EN19 Alloy Steel", "C45 Carbon Steel", "SS304 / SS316 Stainless", "Cast Iron & Forged Steel"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <ShieldCheck className="w-5 h-5 text-primary" />
                      <span className="font-medium text-white">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <h4 className="text-primary font-black text-xl mb-6 uppercase tracking-widest border-b border-white/10 pb-4">Hardening Tech</h4>
                  {["Case Hardening", "Induction Hardening", "Tempering & Quenching", "Surface Nitriding"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-primary" />
                      <span className="font-medium text-white">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <h4 className="text-primary font-black text-xl mb-6 uppercase tracking-widest border-b border-white/10 pb-4">Compliance</h4>
                  {["ISO Certified Plant", "ANSI Compliant Designs", "DIN Standard Pitches", "Proprietorship Assurance"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-primary" />
                      <span className="font-medium text-white">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Dark & Heavy Duty */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter italic uppercase">
            Let's Scale Your Production
          </h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Discuss your technical requirements for Conveyor Chains and Sprockets with our engineering experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href={`https://wa.me/${companyInfo.whatsapp}?text=Hi, I am looking for custom industrial chains and sprockets.`}
              className="bg-secondary text-white px-12 py-5 rounded-full font-black uppercase hover:scale-105 transition-all shadow-2xl flex items-center gap-3"
            >
              Get a Free Quote
            </a>
            <div className="text-white/50 font-bold uppercase tracking-widest text-sm">Or call us at {companyInfo.phone}</div>
          </div>
        </div>
      </section>
    </div>
  );
}