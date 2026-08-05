import { CheckCircle2 } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="bg-[#081C15] py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2">
        {/* Vision */}
        <div className="rounded-3xl bg-[#132A22] p-10 shadow-xl">
          <span className="text-sm font-semibold uppercase tracking-[4px] text-green-400">
            Vision
          </span>

          <h2 className="mt-5 text-3xl font-bold text-white">
            Visi Kami
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Menjadi supplier tanaman hias dan penyedia jasa pembuatan taman
            terpercaya di Indonesia yang menghadirkan solusi penghijauan
            berkualitas dengan hasil yang rapi, sehat, estetis, dan
            berkelanjutan.
          </p>
        </div>

        {/* Mission */}
        <div className="rounded-3xl bg-[#132A22] p-10 shadow-xl">
          <span className="text-sm font-semibold uppercase tracking-[4px] text-green-400">
            Mission
          </span>

          <h2 className="mt-5 text-3xl font-bold text-white">
            Misi Kami
          </h2>

          <div className="mt-8 space-y-5">
            <div className="flex items-start gap-4 rounded-2xl bg-[#173128] p-5 transition duration-300 hover:bg-[#1B3B30]">
              <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-green-400" />

              <div>
                <h3 className="font-semibold text-white">
                  Produk Berkualitas
                </h3>

                <p className="mt-2 leading-7 text-gray-300">
                  Menyediakan berbagai tanaman indoor dan outdoor yang sehat,
                  terawat, serta memiliki kualitas terbaik untuk memenuhi
                  kebutuhan pelanggan.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-[#173128] p-5 transition duration-300 hover:bg-[#1B3B30]">
              <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-green-400" />

              <div>
                <h3 className="font-semibold text-white">
                  Layanan Profesional
                </h3>

                <p className="mt-2 leading-7 text-gray-300">
                  Memberikan layanan pembangunan taman vertikal, landscape,
                  serta perawatan taman dengan standar kerja profesional,
                  rapi, dan tepat waktu.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-[#173128] p-5 transition duration-300 hover:bg-[#1B3B30]">
              <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-green-400" />

              <div>
                <h3 className="font-semibold text-white">
                  Solusi Lengkap
                </h3>

                <p className="mt-2 leading-7 text-gray-300">
                  Menjadi mitra terpercaya dalam penyediaan tanaman, material,
                  serta jasa pembuatan taman untuk hunian, kantor, maupun area
                  komersial.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-[#173128] p-5 transition duration-300 hover:bg-[#1B3B30]">
              <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-green-400" />

              <div>
                <h3 className="font-semibold text-white">
                  Lingkungan Asri
                </h3>

                <p className="mt-2 leading-7 text-gray-300">
                  Membantu pelanggan menciptakan lingkungan yang hijau, nyaman,
                  sehat, dan bernilai estetika tinggi melalui solusi tanaman
                  yang tepat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}