export default function VisionMission() {
  return (
    <section className="bg-[#081C15] py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2">

        <div className="rounded-3xl bg-[#132A22] p-10 shadow-xl">
          <span className="text-sm font-semibold uppercase tracking-[4px] text-green-400">
            Vision
          </span>

          <h2 className="mt-5 text-3xl font-bold text-white">
            Our Vision
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Menjadi perusahaan tanaman hias terpercaya yang menghadirkan
            solusi penghijauan berkualitas serta menginspirasi masyarakat
            untuk hidup lebih dekat dengan alam.
          </p>
        </div>

        <div className="rounded-3xl bg-[#132A22] p-10 shadow-xl">
          <span className="text-sm font-semibold uppercase tracking-[4px] text-green-400">
            Mission
          </span>

          <h2 className="mt-5 text-3xl font-bold text-white">
            Our Mission
          </h2>

          <ul className="mt-6 space-y-5 text-lg text-gray-300">
            <li>✓ Menyediakan tanaman berkualitas premium.</li>
            <li>✓ Memberikan pelayanan terbaik.</li>
            <li>✓ Mengembangkan solusi penghijauan.</li>
            <li>✓ Menjaga kepuasan pelanggan.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}