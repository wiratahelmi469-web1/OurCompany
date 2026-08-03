import { CheckCircle2, Truck, ShieldCheck, HeartHandshake } from "lucide-react";
import { whyBuyUs } from "@/app/data/products";

export default function WhyBuyUs() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <h3 className="text-sm font-semibold uppercase tracking-[4px] text-green-400">
            Why Buy Us
          </h3>
          <h2 className="mt-2 text-3xl font-bold text-white">
            Why Customers Choose BioPlant
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {whyBuyUs.map((item) => (
            <div key={item.title} className="rounded-3xl bg-[#132A22] p-6">
              <h4 className="text-lg font-semibold text-white">{item.title}</h4>
              <p className="mt-3 text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

