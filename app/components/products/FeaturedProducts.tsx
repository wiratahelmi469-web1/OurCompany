import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredProducts } from "@/app/data/products";

export default function FeaturedProducts() {
  return (
    <section className="bg-[#0B221A] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[4px] text-green-400">
            Featured Products
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Our Best Collection
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Temukan tanaman unggulan BioPlant Project yang dipilih dengan
            kualitas terbaik untuk mempercantik rumah maupun ruang kerja Anda.
          </p>
        </div>

        {/* Product List */}
        <div className="space-y-16">
          {featuredProducts.map((product, index) => (
            <div
              key={product.name}
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="group overflow-hidden rounded-3xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={900}
                  height={700}
                  className="h-[350px] w-full object-cover transition duration-700 group-hover:scale-105 lg:h-[500px]"
                />
              </div>

              {/* Content */}
              <div>
                <span className="rounded-full bg-green-600/20 px-4 py-2 text-sm font-semibold text-green-400">
                  {product.category}
                </span>

                <h3 className="mt-6 text-3xl font-bold text-white md:text-4xl">
                  {product.name}
                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-300">
                  {product.description}
                </p>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-green-500 px-6 py-3 font-semibold text-green-400 transition-all duration-300 hover:bg-green-600 hover:text-white"
                >
                  Ask Availability
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
