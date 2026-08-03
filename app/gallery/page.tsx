import PageHero from "../components/PageHero";

import FeaturedGallery from "../components/gallery/FeaturedGallery";
import PlantCollection from "../components/gallery/PlantCollection";
import ProjectGallery from "../components/gallery/ProjectGallery";
import NurseryGallery from "../components/gallery/NurseryGallery";
import FAQ from "../components/gallery/FAQ";
import CTA from "../components/gallery/CTA";

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="Explore our plant collections, nursery, and completed projects."
        image="/images/gallery/hero.jpg"
      />

      <FeaturedGallery />

      <PlantCollection />

      <ProjectGallery />

      <NurseryGallery />

      <FAQ />

      <CTA />
    </>
  );
}