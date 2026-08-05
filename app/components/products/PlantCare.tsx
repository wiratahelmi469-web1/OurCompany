import { Droplet, Sun, Sprout } from "lucide-react";
import { plantCareTips } from "@/app/data/products";

const icons = [Droplet, Sun, Sprout];

export default function PlantCare() {
  return (
    <section className="bg-[#081C15] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[4px] text-green-400">
            Perawatan Tanaman
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Jaga Tanaman Tetap Sehat
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Tips sederhana yang membantu tanaman tetap sehat dan tumbuh dengan
            baik.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {plantCareTips.map((tip, index) => {
            const Icon = icons[index % icons.length];

            return (
              <div
                key={tip.title}
                className="rounded-3xl bg-[#132A22] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-green-900/20"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-600/20">
                  <Icon size={32} className="text-green-400" />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {tip.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-300">
                  {tip.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
