import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/products/hero1.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#081C15]/90 to-black/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <span className="text-sm font-semibold uppercase tracking-[5px] text-green-400">
          Lets Grow Together
        </span>

        <h2 className="mt-6 text-4xl font-bold text-white md:text-6xl">
          Ready to Find
          <br />
          Your Dream Plant?
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-300">
          Temukan berbagai koleksi tanaman hias premium yang siap mempercantik
          rumah, kantor, maupun area komersial Anda.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
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
            Contact Us
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/gallery"
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
            View Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
