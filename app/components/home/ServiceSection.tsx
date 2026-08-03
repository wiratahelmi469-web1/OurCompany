import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import FadeUp from "../animation/FadeUp";

const services = [
  "Plant Consultation",
  "Secure Packaging",
  "Fast Delivery",
  "After Sales Support",
];

export default function ServiceSection() {
  return (
    <section className="bg-[#081C15] py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        {/* Content */}

        <FadeUp delay={0.06}>
          <div>
            <span className="text-sm uppercase tracking-[4px] text-green-400 font-semibold">
              Our Services
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white leading-tight">
              More Than
              <br />
              Just Selling Plants
            </h2>

            <p className="mt-8 text-lg text-gray-300 leading-8">
              BioPlant Project memberikan pelayanan terbaik mulai dari
              konsultasi tanaman, pengemasan aman hingga pengiriman agar tanaman
              tiba dalam kondisi terbaik.
            </p>

            <div className="mt-10 space-y-5">
              {services.map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <CheckCircle2 className="text-green-500" size={24} />

                  <span className="text-lg text-gray-200">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/services"
              className="mt-12 inline-flex rounded-full bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700"
            >
              Explore Services
            </Link>
          </div>
        </FadeUp>

        {/* Image */}

        <FadeUp delay={0.18}>
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/images/services/team.jpg"
              alt="Services"
              width={900}
              height={700}
              className="h-[350px] lg:h-[600px] w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
