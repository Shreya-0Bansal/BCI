import HeroSection from "../sections/home/HeroSection";
import AboutPreviewSection from "../sections/home/AboutPreviewSection";
import ProductCategoriesSection from "../sections/home/ProductCategoriesSection";
import IndustriesSection from "../sections/home/IndustriesSection";
import StrengthsSection from "../sections/home/StrengthsSection";
import GallerySection from "../sections/home/GallerySection";
import ContactStripSection from "../sections/home/ContactStripSection";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export default function HomePage() {
  useDocumentMeta(
    "Bansal Chain Industries | Premium Industrial Chains & Sprockets",
    "Bansal Chain Industries manufactures conveyor chains, roller chains, bottling plant chains, sprockets, and industrial fastners.",
  );

  return (
    <>
      <HeroSection />
      <AboutPreviewSection />
      <StrengthsSection />
      <ProductCategoriesSection />
      <IndustriesSection />
      
      <GallerySection />
      <ContactStripSection />
    </>
  );
}
