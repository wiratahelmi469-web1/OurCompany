import Image from "next/image";
import PageHero from "../components/PageHero";

const gallery = [
  "/images/gallery/1.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/6.jpg",
  "/images/gallery/7.jpg",
  "/images/gallery/8.jpg",
];

const categories = [
  "Indoor Plants",
  "Outdoor Plants",
  "Greenhouse",
  "Packaging",
  "Customer Project",
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="Discover our nursery, plants, and customer projects."
        image="/images/banners/gallery.jpg"
      />

      {/* Category */}

      <section className="py-16">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-4 px-6">
          {categories.map((item) => (
            <button
              key={item}
              className="rounded-full border border-green-600 px-6 py-3 transition hover:bg-green-600 hover:text-white"
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery */}

      <section className="pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 lg:grid-cols-4">
          {gallery.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-3xl shadow-lg">
              <Image
                src={image}
                alt="Gallery"
                width={500}
                height={500}
                className="h-72 w-full object-cover transition duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Video */}

      <section className="bg-green-900 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-4xl font-bold text-white">
            Nursery Tour
          </h2>

          <div className="mt-14 overflow-hidden rounded-3xl">
            <video controls className="w-full">
              <source src="/videos/nursery.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    </>
  );
}
