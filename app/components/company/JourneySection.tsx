const journey = [
  {
    year: "2022",
    title: "BioPlant Project Started",
    description:
      "BioPlant Project didirikan dengan tujuan menghadirkan tanaman hias berkualitas bagi masyarakat.",
  },
  {
    year: "2023",
    title: "Growing Plant Collection",
    description:
      "Menambah koleksi tanaman indoor, outdoor, serta perlengkapan tanaman.",
  },
  {
    year: "2024",
    title: "Expanding Services",
    description:
      "Mengembangkan layanan konsultasi, pengemasan, dan pengiriman tanaman.",
  },
  {
    year: "Today",
    title: "Trusted Plant Partner",
    description:
      "Terus berkembang menjadi mitra terpercaya untuk kebutuhan tanaman dan penghijauan.",
  },
];

export default function JourneySection() {
  return (
    <section className="bg-[#081C15] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-20 text-center">
          <span className="text-sm font-semibold uppercase tracking-[4px] text-green-400">
            Company Journey
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Our Growth Story
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
            Perjalanan BioPlant Project dalam menghadirkan solusi tanaman
            hias berkualitas dan pelayanan terbaik untuk pelanggan.
          </p>
        </div>

        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-5 top-0 h-full w-1 rounded-full bg-green-700 lg:left-1/2 lg:-translate-x-1/2" />

          <div className="space-y-16">

            {journey.map((item, index) => (

              <div
                key={item.year}
                className={`relative flex flex-col lg:flex-row ${
                  index % 2 === 0
                    ? "lg:flex-row"
                    : "lg:flex-row-reverse"
                }`}
              >

                {/* Content */}

                <div className="w-full lg:w-1/2">

                  <div className="ml-16 rounded-3xl bg-[#132A22] p-8 shadow-xl lg:ml-0 lg:mx-8">

                    <span className="text-green-400 font-bold text-xl">
                      {item.year}
                    </span>

                    <h3 className="mt-4 text-2xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-8 text-gray-300">
                      {item.description}
                    </p>

                  </div>

                </div>

                {/* Dot */}

                <div className="absolute left-5 top-8 h-5 w-5 -translate-x-1/2 rounded-full border-4 border-[#081C15] bg-green-500 lg:left-1/2" />

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}