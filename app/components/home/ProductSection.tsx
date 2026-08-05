import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeUp from "../animation/FadeUp";

const products = [
  {
    title: "Indoor Plants",
    description:
      "Tanaman Indoor Tanaman hias berkualitas untuk menciptakan suasana ruangan yang lebih segar, nyaman, dan elegan.",
    image: "/images/products/indoor.jpeg",
  },
  {
    title: "Outdoor Plants",
    description:
      "Tanaman Outdoor Beragam tanaman outdoor pilihan untuk mempercantik taman, halaman, dan area komersial Anda.",
    image: "/images/products/outdoor.jpeg",
  },
  {
    title: "Tanaman Kamboja Fosil & pule",
    description:
      "Koleksi Kamboja Fosil dan Pule berkualitas dengan bentuk unik untuk taman yang lebih berkarakter.",
    image: "/images/products/kamboja&pule.jpeg",
  },
];

export default function ProductSection() {
  return (
    <section className="bg-[#0B221A] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <FadeUp delay={0.05}>
          <div className="mb-16 text-center">
            <span className="text-sm font-semibold uppercase tracking-[4px] text-green-400">
              Produk Kami
            </span>

            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              Temukan Koleksi Kami
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
              Kami menyediakan berbagai jenis tanaman hias berkualitas beserta
              perlengkapan yang mendukung hobi dan kebutuhan dekorasi Anda.
            </p>
          </div>
        </FadeUp>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, idx) => (
            <FadeUp key={product.title} delay={0.06 * idx}>
              <div className="group flex h-full flex-col overflow-hidden rounded-3xl bg-[#132A22] shadow-xl">
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="min-h-[72px] text-2xl font-bold leading-tight text-white">
                    {product.title}
                  </h3>

                  <p className="mt-4 flex-1 leading-7 text-gray-300">
                    {product.description}
                  </p>

                  <Link
                    href="/products"
                    className="mt-8 inline-flex items-center gap-2 font-semibold text-green-400 transition hover:gap-4"
                  >
                    Jelajahi Koleksi
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
