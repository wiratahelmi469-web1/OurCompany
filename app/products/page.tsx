import PageHero from "../components/PageHero";

import Categories from "../components/products/Categories";
import FeaturedProducts from "../components/products/FeaturedProducts";
// import PlantCare from "../components/products/PlantCare";
import WhyBuyUs from "../components/products/WhyBuyUs";
import FAQ from "../components/products/FAQ";
import CTA from "../components/products/CTA";

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Produk Kami"
        subtitle="Temukan tanaman hias premium dan aksesoris untuk rumah serta bisnis Anda."
        image="/images/products/hero.jpg"
      />

      <Categories />

      <FeaturedProducts />

      {/* <PlantCare /> */}

      <WhyBuyUs />

      <FAQ />

      <CTA />
    </>
  );
}
