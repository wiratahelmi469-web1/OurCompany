import { Leaf, ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Quality",
    description: "Tanaman berkualitas terbaik dengan perawatan maksimal.",
  },
  {
    icon: ShieldCheck,
    title: "Trust",
    description: "Kepercayaan pelanggan adalah prioritas utama kami.",
  },
  {
    icon: HeartHandshake,
    title: "Sustainability",
    description: "Mendukung gaya hidup yang lebih hijau dan berkelanjutan.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "Selalu menghadirkan produk dan layanan terbaik.",
  },
];

export default function CoreValues() {
  return (
    <section className="bg-[#0B221A] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Core Values
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="rounded-3xl bg-[#132A22] p-8 transition hover:-translate-y-2"
              >
                <Icon size={42} className="text-green-400" />

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {value.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-300">
                  {value.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}