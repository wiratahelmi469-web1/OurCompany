import { companyStats } from "@/app/data/company";

export default function StatsSection() {
  return (
    <section className="bg-[#0B221A] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[4px] text-green-400">
            Our Impact
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            BioPlant in Numbers
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Kami terus berkembang bersama pelanggan dengan menghadirkan
            tanaman berkualitas dan pelayanan terbaik.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">

          {companyStats.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-green-500 hover:bg-white/10"
            >
              <h3 className="text-5xl font-bold text-green-400">
                {item.number}
              </h3>

              <p className="mt-4 text-lg text-gray-300">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}