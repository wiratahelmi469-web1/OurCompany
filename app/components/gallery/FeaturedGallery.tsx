import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FeaturedGallery() {
  return (
    <section className="bg-[#081C15] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[5px] text-green-400">
            Galeri Unggulan
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Membawa Alam ke Setiap Ruang
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Jelajahi koleksi tanaman hias, proyek landscape, dan suasana nursery
            BioPlant Project melalui galeri pilihan kami.
          </p>
        </div>

        {/* Featured Image */}
        <div className="group relative overflow-hidden rounded-3xl shadow-2xl">
          <div className="relative h-[650px]">
            <Image
              src="/images/gallery/featured.jpg"
              alt="Galeri Unggulan"
              className="object-cover transition duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 p-10 md:p-16">
              <span className="rounded-full bg-green-600/20 px-4 py-2 text-sm font-semibold text-green-300 backdrop-blur">
                BioPlant Project
              </span>

              <h3 className="mt-6 text-4xl font-bold text-white md:text-5xl">
                Jelajahi Perjalanan Hijau Kami
              </h3>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200">
                Setiap tanaman memiliki cerita. Kami percaya ruang hijau mampu
                menghadirkan kenyamanan, kesejukan, dan inspirasi bagi setiap
                orang.
              </p>

              <Link
                href="/products"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-green-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-green-700 hover:gap-4"
              >
                Lihat Produk
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
