import Image from "next/image";
import PageHero from "../components/PageHero";

export default function OurCompanyPage() {
  return (
    <>
      <PageHero
        title="Our Company"
        subtitle="Mengenal BioPlant Project lebih dekat."
        image="/images/banners/company.jpg"
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <div>
            <Image
              src="/images/company/about.jpg"
              alt="About BioPlant"
              width={700}
              height={500}
              className="rounded-3xl object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-green-800">
              About BioPlant Project
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-700">
              BioPlant Project merupakan toko tanaman hias yang menghadirkan
              berbagai koleksi tanaman berkualitas untuk rumah, kantor, maupun
              area komersial. Kami percaya bahwa tanaman bukan hanya dekorasi,
              tetapi juga memberikan suasana yang lebih sehat, nyaman, dan
              menyenangkan.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="rounded-3xl bg-white p-10 shadow">
              <h3 className="text-3xl font-bold text-green-800">Vision</h3>

              <p className="mt-6 text-gray-700 leading-8">
                Menjadi toko tanaman hias terpercaya yang menghadirkan tanaman
                berkualitas dan pelayanan terbaik.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-10 shadow">
              <h3 className="text-3xl font-bold text-green-800">Mission</h3>

              <ul className="mt-6 space-y-4 text-gray-700">
                <li>✓ Menyediakan tanaman berkualitas.</li>

                <li>✓ Memberikan pelayanan terbaik.</li>

                <li>✓ Menawarkan harga kompetitif.</li>

                <li>✓ Mengutamakan kepuasan pelanggan.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl font-bold text-green-800">
            Core Values
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border p-8 text-center">
              🌱
              <h3 className="mt-4 text-xl font-bold">Quality</h3>
            </div>

            <div className="rounded-2xl border p-8 text-center">
              🤝
              <h3 className="mt-4 text-xl font-bold">Trust</h3>
            </div>

            <div className="rounded-2xl border p-8 text-center">
              💚
              <h3 className="mt-4 text-xl font-bold">Sustainability</h3>
            </div>

            <div className="rounded-2xl border p-8 text-center">
              ⭐<h3 className="mt-4 text-xl font-bold">Innovation</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
