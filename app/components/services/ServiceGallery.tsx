import Image from "next/image";
import { serviceGallery } from "@/app/data/services";

export default function ServiceGallery() {
  return (
    <section className="bg-[#081C15] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[5px] text-green-400">
            Portofolio Kami
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Galeri Layanan
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Dokumentasi beberapa proyek penghijauan dan penataan tanaman yang
            telah kami kerjakan.
          </p>
        </div>

        {/* Bento Grid */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Large Image */}

          <div className="relative overflow-hidden rounded-3xl md:col-span-2 md:row-span-2 h-[520px] group">
            <Image
              src={serviceGallery[0]}
              alt="Gallery 1"
              fill
              className="object-cover transition duration-700 group-hover:scale-110"
            />
          </div>

          {/* Small Images */}

          {serviceGallery.slice(1).map((image, index) => (
            <div
              key={index}
              className="relative h-60 overflow-hidden rounded-3xl group"
            >
              <Image
                src={image}
                alt={`Gallery ${index + 2}`}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
