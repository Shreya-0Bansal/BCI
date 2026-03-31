import { useState } from "react";
import { useParams, Link } from "react-router";
import { products, companyInfo } from "../data/products";
import { ArrowLeft, CheckCircle2, Package } from "lucide-react";

export function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState<"meter" | "piece">("piece");

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-secondary mb-4">
            Product Not Found
          </h2>
          <Link to="/products" className="text-primary hover:underline">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.categoryId === product.categoryId && p.id !== product.id)
    .slice(0, 3);

  const handleSendInquiry = () => {
    const message = `I am interested in ${product.name}.\n\nQuantity: ${quantity} ${unit}(s)\n\nPlease share:\n- Technical specifications\n- Pricing details\n- Delivery timeline\n- Availability`;
    const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link
              to="/products"
              className="text-muted-foreground hover:text-primary"
            >
              Products
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-secondary font-medium">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Link
            to="/products"
            className="inline-flex items-center text-primary hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div>
              <div
                className="h-[500px] rounded-lg shadow-lg bg-cover bg-center"
                style={{
                  backgroundImage: `url("${product.image}")`,
                }}
              ></div>
            </div>

            {/* Product Info */}
            <div>
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                {product.category}
              </div>
              <h1 className="text-4xl font-bold text-secondary mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                {product.description}
              </p>

              {/* Quick Specs */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-lg text-secondary mb-4">
                  Quick Specifications
                </h3>
                <div className="space-y-3">
                  {product.pitch && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Pitch Range:</span>
                      <span className="font-medium text-secondary">
                        {product.pitch}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Material:</span>
                    <span className="font-medium text-secondary">
                      {product.material}
                    </span>
                  </div>
                </div>
              </div>

              {/* Features */}
              {product.features && product.features.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-bold text-lg text-secondary mb-4">
                    Key Features
                  </h3>
                  <div className="space-y-2">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-lg text-secondary mb-4">
                  Request Inquiry
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Quantity
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) =>
                        setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Unit
                    </label>
                    <select
                      value={unit}
                      onChange={(e) => setUnit(e.target.value as "meter" | "piece")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="piece">Piece</option>
                      <option value="meter">Meter</option>
                    </select>
                  </div>
                </div>
                <button
                  onClick={handleSendInquiry}
                  className="w-full bg-[#075E54] hover:bg-[#20BA59] text-white px-6 py-4 rounded-md font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <Package className="w-5 h-5" />
                  <span>Send Inquiry on WhatsApp</span>
                </button>
                <p className="text-xs text-muted-foreground mt-3 text-center">
                  Get instant quotation and technical details via WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-secondary mb-8">
            Technical Specifications
          </h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-secondary text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-medium">
                      Specification
                    </th>
                    <th className="px-6 py-4 text-left font-medium">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {product.specifications.map((spec, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-secondary">
                        {spec.label}
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-secondary mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
                >
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{
                      backgroundImage: `url("${relatedProduct.image}")`,
                    }}
                  ></div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-secondary mb-2 line-clamp-1">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {relatedProduct.description}
                    </p>
                    <Link
                      to={`/products/${relatedProduct.id}`}
                      className="block text-center bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md font-medium transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Technical Consultation?
          </h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Our technical team is ready to help you select the right product for your application
          </p>
          <a
            href={`https://wa.me/${companyInfo.whatsapp}?text=Hello, I need technical consultation for ${product.name}. Can you help?`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-primary px-8 py-4 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            Chat with Technical Team
          </a>
        </div>
      </section>
    </div>
  );
}
