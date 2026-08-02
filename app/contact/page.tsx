import { Mail, Phone, MapPin, Clock } from "lucide-react";

import PageHero from "../components/PageHero";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        subtitle="We are ready to help you."
        image="/images/banners/contact.jpg"
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border p-8">
              <Phone className="text-green-700" size={36} />
              <h3 className="mt-5 text-xl font-bold">WhatsApp</h3>

              <p className="mt-3 text-gray-600">+62 812-3456-7890</p>
            </div>

            <div className="rounded-3xl border p-8">
              <Mail className="text-green-700" size={36} />
              <h3 className="mt-5 text-xl font-bold">Email</h3>

              <p className="mt-3 text-gray-600">hello@bioplant.id</p>
            </div>

            <div className="rounded-3xl border p-8">
              <MapPin className="text-green-700" size={36} />
              <h3 className="mt-5 text-xl font-bold">Address</h3>

              <p className="mt-3 text-gray-600">Bogor, Indonesia</p>
            </div>

            <div className="rounded-3xl border p-8">
              <Clock className="text-green-700" size={36} />
              <h3 className="mt-5 text-xl font-bold">Open Hours</h3>

              <p className="mt-3 text-gray-600">
                Monday - Saturday
                <br />
                08:00 - 17:00
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}

      <section className="bg-green-50 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-4xl font-bold">Send Message</h2>

          <form className="mt-12 space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-xl border p-4"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border p-4"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-xl border p-4"
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              className="w-full rounded-xl border p-4"
            />

            <button className="rounded-xl bg-green-700 px-8 py-4 text-white hover:bg-green-800">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Google Maps */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-center text-4xl font-bold">Find Us</h2>

          <div className="overflow-hidden rounded-3xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?..."
              width="100%"
              height="500"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
