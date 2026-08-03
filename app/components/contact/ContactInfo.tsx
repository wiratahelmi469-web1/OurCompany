import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

import { contactInfo } from "@/app/data/contact";

export default function ContactInfo() {
  return (
    <section className="bg-[#081C15] py-24 lg:py-32">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[5px] text-green-400">
            Contact Information
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Let's Get In Touch
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Hubungi BioPlant Project untuk konsultasi, pemesanan,
            maupun informasi mengenai tanaman dan layanan kami.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {/* Address */}

          <div className="rounded-3xl bg-[#132A22] p-8 text-center transition hover:-translate-y-2">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-600/20">

              <MapPin
                size={32}
                className="text-green-400"
              />

            </div>

            <h3 className="mt-6 text-2xl font-bold text-white">
              Address
            </h3>

            <p className="mt-4 leading-7 text-gray-300">
              {contactInfo.address}
            </p>

          </div>

          {/* Phone */}

          <div className="rounded-3xl bg-[#132A22] p-8 text-center transition hover:-translate-y-2">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-600/20">

              <Phone
                size={32}
                className="text-green-400"
              />

            </div>

            <h3 className="mt-6 text-2xl font-bold text-white">
              Phone
            </h3>

            <p className="mt-4 text-gray-300">
              {contactInfo.phone}
            </p>

          </div>

          {/* Email */}

          <div className="rounded-3xl bg-[#132A22] p-8 text-center transition hover:-translate-y-2">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-600/20">

              <Mail
                size={32}
                className="text-green-400"
              />

            </div>

            <h3 className="mt-6 text-2xl font-bold text-white">
              Email
            </h3>

            <p className="mt-4 text-gray-300 break-all">
              {contactInfo.email}
            </p>

          </div>

          {/* Hours */}

          <div className="rounded-3xl bg-[#132A22] p-8 text-center transition hover:-translate-y-2">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-600/20">

              <Clock
                size={32}
                className="text-green-400"
              />

            </div>

            <h3 className="mt-6 text-2xl font-bold text-white">
              Business Hours
            </h3>

            <p className="mt-4 text-gray-300">
              Monday - Saturday
            </p>

            <p className="text-green-400">
              08:00 - 17:00
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}