import { Leaf, Truck, ShieldCheck, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: Leaf,
    title: "Tanaman Sehat",
    description: "Tanaman dirawat dengan standar terbaik sebelum dikirim.",
  },
  {
    icon: Truck,
    title: "Pengiriman Cepat",
    description: "Pengiriman aman dengan packing khusus.",
  },
  {
    icon: ShieldCheck,
    title: "Kualitas Terjamin",
    description: "Setiap tanaman dipilih dan diperiksa sebelum dijual.",
  },
  {
    icon: HeartHandshake,
    title: "Dukungan Pelanggan",
    description: "Siap membantu konsultasi sebelum maupun sesudah pembelian.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#0B221A] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="text-sm uppercase tracking-[4px] text-green-400">
            Mengapa Memilih Kami
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Mengapa Pelanggan Mempercayai BioPlant
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl bg-[#132A22] p-8 transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <Icon size={42} className="text-green-400" />

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-300">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
