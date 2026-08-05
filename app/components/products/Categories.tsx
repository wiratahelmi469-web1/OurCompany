import Image from "next/image";
import Link from "next/link";

import { categories } from "@/app/data/products";

export default function Categories() {
  return (
    <section className="bg-[#081C15] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[4px] text-green-400">
            Kategori Produk
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Temukan Tanaman Favorit Anda
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Temukan tanaman hias dan aksesoris pilihan yang dirancang untuk
            mendekatkan alam ke kehidupan sehari-hari Anda.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <Link
              href="/products"
              key={category.title}
              className="group h-full"
            >
              <div
                className="
                  flex h-full flex-col
                  overflow-hidden rounded-3xl
                  bg-[#132A22]
                  shadow-xl
                  transition duration-300
                  hover:-translate-y-2
                  hover:shadow-green-900/30
                "
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="text-2xl font-bold text-white">
                    {category.title}
                  </h3>

                  <p className="mt-4 flex-1 leading-7 text-gray-300">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}