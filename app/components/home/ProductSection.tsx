import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeUp from "../animation/FadeUp";

const products = [
  {
    title: "Indoor Plants",
    description: "Tanaman hias yang cocok untuk mempercantik ruangan.",
    image: "/images/products/indoor.jpg",
  },
  {
    title: "Outdoor Plants",
    description: "Pilihan tanaman untuk taman dan area outdoor.",
    image: "/images/products/outdoor.jpg",
  },
  {
    title: "Pots & Accessories",
    description: "Pot, media tanam, dan aksesoris pendukung tanaman.",
    image: "/images/products/pot.jpg",
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
              Our Products
            </span>

            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              Discover Our Collection
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
              <div className="group overflow-hidden rounded-3xl bg-[#132A22] shadow-xl">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white">
                    {product.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-300">
                    {product.description}
                  </p>

                  <Link
                    href="/products"
                    className="mt-8 inline-flex items-center gap-2 font-semibold text-green-400 transition hover:gap-4"
                  >
                    Explore Collection
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
