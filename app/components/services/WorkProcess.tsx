import { workProcess } from "@/app/data/services";

export default function WorkProcess() {
  return (
    <section className="bg-[#081C15] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[5px] text-green-400">
            Work Process
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            How We Work
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Setiap layanan BioPlant dilakukan melalui proses yang
            terstruktur agar menghasilkan kualitas terbaik.
          </p>

        </div>

        {/* Process */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {workProcess.map((item) => (

            <div
              key={item.number}
              className="
                relative
                rounded-3xl
                bg-[#132A22]
                p-8
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
                hover:shadow-green-900/20
              "
            >

              <span className="text-6xl font-extrabold text-green-500/20">
                {item.number}
              </span>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-300">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}