import Link from "next/link";
import { ArrowRight, Images } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      {/* Background Image */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/gallery/cta.jpg')",
        }}
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/70" />

      {/* Gradient */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#081C15]/90 via-[#081C15]/70 to-black/50" />

      {/* Content */}

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-600/20 backdrop-blur">
          <Images size={42} className="text-green-400" />
        </div>

        <span className="mt-8 inline-block text-sm font-semibold uppercase tracking-[5px] text-green-400">
          Mari Bekerja Sama
        </span>

        <h2 className="mt-6 text-4xl font-bold text-white md:text-6xl leading-tight">
          Siap Membawa Alam
          <br />
          ke Ruang Anda?
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">
          Temukan berbagai koleksi tanaman hias premium atau konsultasikan
          kebutuhan landscape Anda bersama BioPlant Project.
        </p>

        {/* Buttons */}

        <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">
          <Link
            href="/contact"
            className="
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-full
              bg-green-600
              px-8
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-green-700
              hover:shadow-xl
              hover:shadow-green-700/30
            "
          >
            Hubungi Kami
            <ArrowRight size={20} />
          </Link>

          <Link
            href="/products"
            className="
              inline-flex
              items-center
              justify-center
              rounded-full
              border
              border-white
              px-8
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-white
              hover:text-black
            "
          >
            Jelajahi Produk
          </Link>
        </div>
      </div>
    </section>
  );
}
