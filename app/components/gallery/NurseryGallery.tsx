import Image from "next/image";
import { nurseryGallery } from "@/app/data/gallery";

export default function NurseryGallery() {
  return (
    <section className="bg-[#0B221A] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[5px] text-green-400">
            Our Nursery
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Inside BioPlant Nursery
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Lihat bagaimana kami merawat tanaman dengan penuh perhatian
            sebelum sampai ke tangan pelanggan.
          </p>

        </div>

        {/* Gallery */}

        <div className="grid gap-8 md:grid-cols-3">

          {nurseryGallery.map((item) => (

            <div
              key={item.title}
              className="group overflow-hidden rounded-3xl bg-[#132A22]"
            >

              <div className="relative h-96 overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 p-6">

                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
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