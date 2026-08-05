import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import FadeUp from "../animation/FadeUp";

const features = [
  "Tanaman Sehat & Berkualitas Premium",
  "Perawatan Tanaman Profesional",
  "Nursery Terpercaya di Indonesia",
];

export default function AboutSection() {
  return (
    <section className="bg-[#081C15] py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        {/* Image */}
        <FadeUp delay={0.1}>
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="/images/about/greenhouse.jpg"
              alt="BioPlant Nursery"
              width={900}
              height={700}
              className="h-[350px] w-full object-cover transition duration-700 hover:scale-105 lg:h-[600px]"
            />
          </div>
        </FadeUp>

        {/* Content */}
        <FadeUp delay={0.18}>
          <div>
            <span className="text-sm font-semibold uppercase tracking-[4px] text-green-400">
              Tentang Kami
            </span>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
              Bringing Nature
              <br />
              Into Every Space
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-300">
              BioPlant Project menyediakan berbagai tanaman hias berkualitas,
              mulai dari tanaman indoor, outdoor, hingga kebutuhan landscape.
              Kami percaya bahwa tanaman bukan hanya dekorasi, tetapi bagian
              dari gaya hidup yang menghadirkan kenyamanan dan kesegaran.
            </p>

            <div className="mt-10 space-y-5">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-4">
                  <CheckCircle2 className="text-green-500" size={24} />

                  <span className="text-lg text-gray-200">{feature}</span>
                </div>
              ))}
            </div>

            <Link
              href="/our-company"
              className="mt-12 inline-flex rounded-full bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700"
            >
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
