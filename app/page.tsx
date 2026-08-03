import Hero from "./components/home/HeroSection";
import AboutSection from "./components/home/AboutSection";
import ProductSection from "./components/home/ProductSection";
import ServiceSection from "./components/home/ServiceSection";
import GallerySection from "./components/home/GallerySection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProductSection />
      <ServiceSection />
      <GallerySection />
    </>
  );
}