import { companyStats } from "@/app/data/company";

export default function StatsSection() {
  return (
    <section className="bg-[#0B221A] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-14 text-center sm:mb-16">
          <span className="text-sm font-semibold uppercase tracking-[4px] text-green-400">
            Our Impact
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Greenovative in Numbers
          </h2>

          <p className="mx-auto mt-6 max-w-2xl px-2 text-base leading-8 text-gray-300 sm:text-lg">
            Kami terus berkembang bersama pelanggan dengan menghadirkan
            tanaman berkualitas dan pelayanan terbaik.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {companyStats.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:bg-white/10 sm:p-8 lg:p-10"
            >
              <h3 className="text-4xl font-bold text-green-400 sm:text-5xl">
                {item.number}
              </h3>

              <p className="mt-4 text-base leading-8 text-gray-300 sm:text-lg">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}