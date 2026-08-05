export default function MapSection() {
  return (
    <section className="bg-[#081C15] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[5px] text-green-400">
            Lokasi Kami
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Kunjungi BioPlant Project
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Kami dengan senang hati menyambut Anda untuk melihat koleksi tanaman
            secara langsung di lokasi kami.
          </p>
        </div>

        {/* Google Maps */}

        <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d253699.74484655837!2d106.78733249999999!3d-6.514278399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sid!2sid!4v1785914185040!5m2!1sid!2sid" 
            width="100%"
            height="550"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          />
        </div>
      </div>
    </section>
  );
}
