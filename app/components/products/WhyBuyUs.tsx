import {
  CheckCircle2,
  Truck,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";

import { whyBuyUs } from "@/app/data/products";

const icons = [
  CheckCircle2,
  ShieldCheck,
  Truck,
  HeartHandshake,
];

export default function WhyBuyUs() {
  return (
    <section className="bg-[#0B221A] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[5px] text-green-400">
            Why Buy Us
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Why Customers Choose BioPlant
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Kami selalu berkomitmen menghadirkan tanaman hias berkualitas,
            pelayanan terbaik, dan pengalaman belanja yang terpercaya.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {whyBuyUs.map((item, index) => {
            const Icon = icons[index];

            return (
              <div
                key={item.title}
                className="
                  rounded-3xl
                  bg-[#132A22]
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:bg-[#183528]
                "
              >

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-600/20">

                  <Icon
                    size={28}
                    className="text-green-400"
                  />

                </div>

                <h3 className="text-2xl font-bold text-white">
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