import Image from "next/image";
import PageHero from "../components/PageHero";

const categories = [
  {
    title: "Indoor Plants",
    image: "/images/products/indoor.jpg",
    desc: "Tanaman untuk ruangan.",
  },
  {
    title: "Outdoor Plants",
    image: "/images/products/outdoor.jpg",
    desc: "Tanaman untuk taman.",
  },
  {
    title: "Aroid Collection",
    image: "/images/products/aroid.jpg",
    desc: "Koleksi tanaman premium.",
  },
  {
    title: "Pots & Accessories",
    image: "/images/products/pot.jpg",
    desc: "Pot dan aksesoris.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Products"
        subtitle="Explore our premium ornamental plant collection."
        image="/images/banners/products.jpg"
      />

      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center">Product Categories</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {categories.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl overflow-hidden shadow-lg bg-white hover:-translate-y-2 transition"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">{item.title}</h3>

                <p className="text-gray-600 mt-3">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center">Featured Products</h2>

          <div className="grid lg:grid-cols-3 gap-10 mt-14">
            <div className="rounded-3xl border p-10">
              <h3 className="text-2xl font-bold">Monstera Deliciosa</h3>

              <p className="mt-5">Tanaman indoor favorit dengan daun besar.</p>
            </div>

            <div className="rounded-3xl border p-10">
              <h3 className="text-2xl font-bold">Philodendron</h3>

              <p className="mt-5">Mudah dirawat dan cocok untuk dekorasi.</p>
            </div>

            <div className="rounded-3xl border p-10">
              <h3 className="text-2xl font-bold">Aglaonema</h3>

              <p className="mt-5">Warna daun cantik dan elegan.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-4xl font-bold">
            Why Choose Our Plants?
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">
            <div>
              <h3 className="text-2xl font-bold">Healthy Plants</h3>
              <p className="mt-4">Seluruh tanaman dirawat sebelum dijual.</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">Premium Quality</h3>
              <p className="mt-4">Kualitas terbaik dari nursery terpercaya.</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">Secure Packaging</h3>
              <p className="mt-4">
                Packing aman untuk menjaga kondisi tanaman.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
