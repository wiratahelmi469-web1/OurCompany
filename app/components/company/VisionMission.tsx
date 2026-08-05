export default function VisionMission() {
  return (
    <section className="bg-[#081C15] py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2">

        <div className="rounded-3xl bg-[#132A22] p-10 shadow-xl">
          <span className="text-sm font-semibold uppercase tracking-[4px] text-green-400">
            Vision
          </span>

          <h2 className="mt-5 text-3xl font-bold text-white">
            Visi Kami
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Menjadi supplier tanaman hias dan penyedia jasa 
            pembuatan taman terpercaya di Indonesia yang memberikan 
            hasil rapi, sehat, dan berkualitas.
          </p>
        </div>

        <div className="rounded-3xl bg-[#132A22] p-10 shadow-xl">
          <span className="text-sm font-semibold uppercase tracking-[4px] text-green-400">
            Mission
          </span>

          <h2 className="mt-5 text-3xl font-bold text-white">
            Misi Kami
          </h2>

          <ul className="mt-6 space-y-5 text-lg text-gray-300">
            <li>✓ Produk Berkualitas: Menyediakan tanaman indoor 
              dan outdoor yang sehat dan terawat dengan baik.</li>
            <li>✓ Layanan Profesional: Melayani pembuatan taman vertikal, 
              lanskap, dan perawatan taman secara rapi dan tepat waktu.</li>
            <li>✓ Solusi Lengkap: Menjadi supplier dan penyedia jasa 
              taman terpercaya untuk rumah maupun area komersial.</li>
            <li>✓ Lingkungan Asri: Membantu pelanggan menciptakan 
              suasana yang segar, nyaman, dan hijau di setiap ruang.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}