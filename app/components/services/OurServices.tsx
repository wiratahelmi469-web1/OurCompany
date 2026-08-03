import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { services } from "@/app/data/services";

export default function OurServices() {
  return (
    <section className="bg-[#0B221A] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[5px] text-green-400">
            Our Services
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Professional Plant Services
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Kami menyediakan berbagai layanan profesional mulai dari
            konsultasi, desain landscape, hingga perawatan tanaman
            agar tetap sehat dan indah.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {services.map((service) => (

            <div
              key={service.title}
              className="group overflow-hidden rounded-3xl bg-[#132A22] shadow-xl transition duration-300 hover:-translate-y-2"
            >

              <div className="relative h-72 overflow-hidden">

                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              </div>

              <div className="p-8">

                <h3 className="text-2xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-300">
                  {service.description}
                </p>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-green-400 transition hover:gap-4"
                >
                  Consultation

                  <ArrowRight size={18} />

                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}