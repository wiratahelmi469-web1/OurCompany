import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#081C15] py-32">
      <div className="absolute inset-0 bg-[url('/images/company/nursery.jpg')] bg-cover bg-center opacity-20" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <span className="text-sm uppercase tracking-[4px] text-green-400">
          Mari Tumbuh Bersama
        </span>

        <h2 className="mt-6 text-4xl font-bold text-white md:text-6xl">
          Siap Membawa Alam ke Ruang Anda?
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-300">
          Temukan berbagai koleksi tanaman hias berkualitas serta layanan
          terbaik dari Greenovative.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/products"
            className="rounded-full bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700"
          >
            Jelajahi Produk
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </section>
  );
}
