import PageHero from "../components/PageHero";

import Categories from "../components/products/Categories";
import FeaturedProducts from "../components/products/FeaturedProducts";
import PlantCare from "../components/products/PlantCare";
import WhyBuyUs from "../components/products/WhyBuyUs";
import FAQ from "../components/products/FAQ";
import CTA from "../components/products/CTA";

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Our Products"
        subtitle="Discover premium ornamental plants and accessories for your home and business."
        image="/images/products/hero.jpg"
      />

      <Categories />

      <FeaturedProducts />

      <PlantCare />

      <WhyBuyUs />

      <FAQ />

      <CTA />
    </>
  );
}