import { Truck, Leaf, MessageCircle, Package } from "lucide-react";

import PageHero from "../components/PageHero";

const services = [
  {
    icon: Leaf,
    title: "Plant Sales",
    description:
      "Menyediakan berbagai tanaman hias indoor maupun outdoor berkualitas.",
  },
  {
    icon: Package,
    title: "Plant Packaging",
    description:
      "Packing aman menggunakan material khusus agar tanaman tetap sehat selama pengiriman.",
  },
  {
    icon: Truck,
    title: "Delivery",
    description: "Pengiriman cepat dan aman ke berbagai wilayah Indonesia.",
  },
  {
    icon: MessageCircle,
    title: "Plant Consultation",
    description:
      "Konsultasi gratis untuk memilih tanaman yang sesuai dengan kebutuhan Anda.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services"
        subtitle="Professional plant services for homes and businesses."
        image="/images/banners/services.jpg"
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold">Our Services</h2>

            <p className="mt-4 text-gray-600">
              Kami menghadirkan layanan terbaik untuk memastikan pengalaman
              berbelanja tanaman menjadi mudah, aman, dan menyenangkan.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">
                    <Icon className="h-8 w-8 text-green-700" />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-7">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-green-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-4xl font-bold">How We Work</h2>

          <div className="mt-16 grid gap-10 md:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white">
                1
              </div>

              <h3 className="mt-5 text-xl font-semibold">Choose Plants</h3>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white">
                2
              </div>

              <h3 className="mt-5 text-xl font-semibold">Consultation</h3>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white">
                3
              </div>

              <h3 className="mt-5 text-xl font-semibold">Payment</h3>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white">
                4
              </div>

              <h3 className="mt-5 text-xl font-semibold">Delivery</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl font-bold">
            Why Customers Trust Us
          </h2>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl border p-8">
              <h3 className="text-2xl font-semibold">Healthy Plants</h3>

              <p className="mt-4 text-gray-600">
                Seluruh tanaman dirawat dengan baik sebelum dikirim kepada
                pelanggan.
              </p>
            </div>

            <div className="rounded-3xl border p-8">
              <h3 className="text-2xl font-semibold">Professional Service</h3>

              <p className="mt-4 text-gray-600">
                Tim kami siap membantu memilih tanaman yang sesuai dengan
                kebutuhan Anda.
              </p>
            </div>

            <div className="rounded-3xl border p-8">
              <h3 className="text-2xl font-semibold">Secure Delivery</h3>

              <p className="mt-4 text-gray-600">
                Setiap pesanan dipacking dengan aman agar tanaman tiba dalam
                kondisi terbaik.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
