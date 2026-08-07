import { Clock3 } from "lucide-react";
import { businessHours } from "@/app/data/contact";

export default function BusinessHours() {
  return (
    <section className="bg-[#0B221A] py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6">
        {/* Heading */}

        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[5px] text-green-400">
            Jam Operasional
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Jam Buka Kami
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Berikut adalah jam operasional Greenovative. Kami siap melayani
            Anda pada waktu berikut.
          </p>
        </div>

        {/* Card */}

        <div className="overflow-hidden rounded-3xl bg-[#132A22] shadow-xl">
          {businessHours.map((item, index) => (
            <div
              key={item.day}
              className={`flex items-center justify-between px-8 py-6 ${
                index !== businessHours.length - 1
                  ? "border-b border-white/10"
                  : ""
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600/20">
                  <Clock3 size={22} className="text-green-400" />
                </div>

                <span className="text-lg font-semibold text-white">
                  {item.day}
                </span>
              </div>

              <span
                className={`font-semibold ${
                  item.time === "Closed" ? "text-red-400" : "text-green-400"
                }`}
              >
                {item.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
