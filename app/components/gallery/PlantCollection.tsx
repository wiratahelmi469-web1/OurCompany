import Image from "next/image";
import { plantCollection } from "@/app/data/gallery";

export default function PlantCollection() {
  return (
    <section className="bg-[#0B221A] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[5px] text-green-400">
            Koleksi Tanaman
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Jelajahi Koleksi Tanaman Kami
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Koleksi tanaman hias pilihan yang dirawat dengan standar terbaik
            untuk mempercantik rumah, kantor, maupun taman Anda.
          </p>
        </div>

        {/* Grid */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plantCollection.map((plant) => (
            <div
              key={plant.title}
              className="group overflow-hidden rounded-3xl bg-[#132A22]"
            >
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={plant.image}
                  alt={plant.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 p-6">
                  <span className="rounded-full bg-green-600/20 px-3 py-1 text-xs font-semibold text-green-300 backdrop-blur">
                    {plant.category}
                  </span>

                  <h3 className="mt-4 text-2xl font-bold text-white">
                    {plant.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
