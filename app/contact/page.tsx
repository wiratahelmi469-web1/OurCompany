import PageHero from "../components/PageHero";

import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import MapSection from "../components/contact/MapSection";
import BusinessHours from "../components/contact/BusinessHours";
import FAQ from "../components/contact/FAQ";
import CTA from "../components/contact/CTA";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        subtitle="We'd love to hear from you. Get in touch with BioPlant Project."
        image="/images/contact/hero.jpg"
      />

      <ContactInfo />

      <ContactForm />

      <MapSection />

      <BusinessHours />

      <FAQ />

      <CTA />
    </>
  );
}