import PageHero from "../components/PageHero";

import OurServices from "../components/services/OurServices";
import WorkProcess from "../components/services/WorkProcess";
import WhyChooseService from "../components/services/WhyChooseService";
import ServiceGallery from "../components/services/ServiceGallery";
import FAQ from "../components/services/FAQ";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Layanan Kami"
        subtitle="Layanan tanaman profesional untuk rumah, kantor, dan ruang komersial."
        image="/images/services/hero.jpg"
      />

      <OurServices />
      <WorkProcess />
      <WhyChooseService />
      <ServiceGallery />
      <FAQ />
    </>
  );
}
