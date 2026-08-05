import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeUp from "../animation/FadeUp";

const gallery = [
  "/images/gallery/homegarden.jpeg",
  "/images/gallery/office.jpeg",
  "/images/gallery/caffelandscape.jpeg",
];

export default function GallerySection() {
  return (
    <section className="bg-[#0B221A] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <FadeUp delay={0.05}>
          <div className="mb-16 text-center">
            <span className="text-sm font-semibold uppercase tracking-[4px] text-green-400">
              Galeri
            </span>

            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              Jelajahi Nursery Kami
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
              Lihat koleksi tanaman, greenhouse, proses perawatan, dan aktivitas
              BioPlant Project.
            </p>
          </div>
        </FadeUp>

        {/* Hero Image */}

        <FadeUp delay={0.12}>
          <div className="group relative overflow-hidden rounded-3xl">
            <Image
              src="/images/gallery/hero1.jpeg"
              alt="Gallery"
              width={1600}
              height={900}
              className="h-[350px] lg:h-[600px] w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
          </div>
        </FadeUp>

        {/* Small Gallery */}

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {gallery.map((image, idx) => (
            <FadeUp key={image} delay={0.06 * idx}>
              <div className="group overflow-hidden rounded-3xl">
                <Image
                  src={image}
                  alt="Gallery"
                  width={700}
                  height={500}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Button */}

        <FadeUp delay={0.3}>
          <div className="mt-14 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-3 rounded-full bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700"
            >
              Lihat Galeri
              <ArrowRight />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
