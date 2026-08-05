import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Supplier Tanaman berkualitas",
  "Jasa Pembuatan Taman Vertikal & Lanskap",
  "Perawatan Taman",
];

export default function AboutSection() {
  return (
    <section className="bg-[#081C15] py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        {/* Image */}
        <div className="overflow-hidden rounded-3xl">
          <Image
            src="/images/company/about.jpg"
            alt="About BioPlant Project"
            width={900}
            height={700}
            className="h-[380px] w-full rounded-3xl object-cover transition duration-700 hover:scale-105 lg:h-[620px]"
          />
        </div>

        {/* Content */}
        <div>
          <span className="text-sm font-semibold uppercase tracking-[4px] text-green-400">
            tentang kami
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
            Your One-Stop Garden Solution.
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-300">
            BioPlant Project adalah supplier tanaman hias terpercaya yang
            melayani pembuatan taman vertikal dan lanskap, serta jasa perawatan
            taman profesional. Kami menyediakan berbagai jenis tanaman indoor
            dan outdoor berkualitas untuk hunian maupun area komersial. Bagi
            kami, tanaman bukan sekadar dekorasi, melainkan bagian dari gaya
            hidup yang menghadirkan kenyamanan, kesegaran, dan keasrian di
            setiap sudut ruang Anda. Keunggulan Kami:
            
          </p>

          <div className="mt-10 space-y-5">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-4">
                <CheckCircle2 className="text-green-500" size={24} />

                <span className="text-lg text-gray-200">{feature}</span>
              </div>
            ))}
          </div>

          <Link
            href="/products"
            className="mt-12 inline-flex rounded-full bg-green-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl hover:shadow-green-600/30"
          >
            Jelajahi Tanaman Kami
          </Link>
        </div>
      </div>
    </section>
  );
}
