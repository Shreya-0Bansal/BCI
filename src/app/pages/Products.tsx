import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom"; // Ensure consistency with your router package
import { products, categories, companyInfo } from "../data/products";
import { Filter, Search, ArrowRight, Settings2, X, MessageSquare, Zap } from "lucide-react";

export function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(
    searchParams.get("category") || "all"
  );

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.categoryId === selectedCategory;
    const matchesSearch =
      searchTerm === "" ||
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.material.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    if (categoryId !== "all") {
      setSearchParams({ category: categoryId });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero Section - Bold & Industrial */}
      <section
        className="relative h-[300px] flex items-center bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1750601455222-d2566db36f7e?auto=format&fit=crop&q=80&w=1920")',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">
              Our <span className="text-primary">Catalog</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-medium">
              Precision-engineered industrial components for high-demand environments.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Filter Bar - Glassmorphism */}
      <section className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full lg:w-96 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors w-5 h-5" />
              <input
                type="text"
                placeholder="Search specs, materials, or parts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-3 w-full lg:w-auto overflow-x-auto no-scrollbar pb-2 lg:pb-0">
              <div className="flex items-center gap-2 pr-4 border-r border-gray-200 mr-2 text-gray-400">
                <Filter className="w-4 h-4" />
                <span className="text-xs font-black uppercase tracking-widest">Filter</span>
              </div>
              <button
                onClick={() => handleCategoryChange("all")}
                className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                  selectedCategory === "all"
                    ? "bg-secondary text-white shadow-lg"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                All Products
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                    selectedCategory === category.id
                      ? "bg-secondary text-white shadow-lg"
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-gray-50 pt-4">
             <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
                Displaying {filteredProducts.length} Heavy-Duty Components
             </span>
             {(searchTerm || selectedCategory !== "all") && (
               <button 
                onClick={() => {setSearchTerm(""); handleCategoryChange("all");}}
                className="text-[10px] font-black text-primary uppercase tracking-widest flex items-center gap-1 hover:opacity-70"
               >
                 Clear Filters <X className="w-3 h-3" />
               </button>
             )}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-32 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200">
              <Settings2 className="w-16 h-16 text-gray-300 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-secondary mb-2">No matching components found</h3>
              <p className="text-gray-500">Try adjusting your search terms or category selection.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-[2rem] border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 flex flex-col"
                >
                  {/* Image Container */}
                  <div className="relative h-72 overflow-hidden bg-gray-100">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="bg-primary text-white text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-widest">
                        {product.material}
                      </span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="mb-6">
                      <span className="text-primary font-black text-[10px] uppercase tracking-[0.2em] mb-2 block">
                        {product.category}
                      </span>
                      <h3 className="text-2xl font-black text-secondary group-hover:text-primary transition-colors leading-tight">
                        {product.name}
                      </h3>
                    </div>

                    {/* Technical Specs Mini-Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-8 py-5 border-y border-gray-50">
                      <div>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Standard Pitch</p>
                        <p className="text-sm font-bold text-secondary">{product.pitch || "Custom"}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Durability</p>
                        <p className="text-sm font-bold text-secondary">High-Strength</p>
                      </div>
                    </div>

                    <p className="text-gray-500 text-sm italic leading-relaxed line-clamp-2 mb-8">
                      {product.description}
                    </p>

                    {/* Actions */}
                    <div className="mt-auto flex gap-3">
                      <Link
                        to={`/products/${product.id}`}
                        className="flex-1 bg-secondary text-white py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center group/btn hover:bg-secondary/90 transition-all"
                      >
                        View Specs <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                      <a
                        href={`https://wa.me/${companyInfo.whatsapp}?text=RFQ for ${product.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#075E54] text-white p-4 rounded-xl hover:bg-[#20BA59] transition-all flex items-center justify-center"
                        title="Quick Inquiry"
                      >
                        <MessageSquare className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Custom Solution CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-secondary rounded-[2.5rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 overflow-hidden relative">
            <Zap className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 rotate-12" />
            <div className="lg:flex-1 text-center lg:text-left z-10">
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                Need a Custom <span className="text-primary">Pitch?</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-xl">
                We specialize in manufacturing custom conveyor chains and non-standard sprockets tailored to your machinery.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 z-10">
              <a
                href={`https://wa.me/${companyInfo.whatsapp}`}
                className="bg-primary text-white px-8 py-4 rounded-xl font-bold uppercase text-[11px] tracking-widest hover:translate-y-[-2px] transition-all shadow-xl shadow-primary/20"
              >
                Consult Our Engineers
              </a>
              <Link
                to="/contact"
                className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold uppercase text-[11px] tracking-widest hover:bg-white/10 transition-all"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}