import PageHero from "../components/PageHero";

import AboutSection from "../components/company/AboutSection";
import StatsSection from "../components/company/StatsSection";
import VisionMission from "../components/company/VisionMission";
import CoreValues from "../components/company/CoreValues";
import JourneySection from "../components/company/JourneySection";
import WhyChooseUs from "../components/company/WhyChooseUs";
import CTASection from "../components/company/CTASection";

export default function OurCompanyPage() {
  return (
    <>
      <PageHero
        title="Our Company"
        subtitle="Get to know BioPlant Project and our commitment to bringing nature into every space."
        image="/images/company/hero.jpg"
      />

      <AboutSection />

      <StatsSection />

      <VisionMission />

      <CoreValues />

      <JourneySection />

      <WhyChooseUs />

      <CTASection />
    </>
  );
}
