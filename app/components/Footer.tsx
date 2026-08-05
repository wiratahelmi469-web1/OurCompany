import Image from "next/image";
import Link from "next/link";
import { socialMedia } from "@/app/data/social";

export default function Footer() {
  return (
    <footer className="bg-[#061710] border-t border-white/10 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <Image
            src="/logos/bioplant.jpeg"
            alt="BioPlant Project"
            width={90}
            height={90}
            className="rounded-full border-4 border-green-500 object-cover"
          />

          <h2 className="mt-6 text-3xl font-bold">BioPlant Project</h2>

          <p className="mt-4 max-w-xl text-center leading-7 text-gray-400">
            BioPlant Project menyediakan tanaman hias premium, jasa landscape,
            serta solusi penghijauan untuk rumah, kantor, dan area komersial.
          </p>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm">
          <Link href="/" className="transition hover:text-green-400">
            Beranda
          </Link>

          <Link
            href="/our-company"
            className="transition hover:text-green-400"
          >
            Tentang Kami
          </Link>

          <Link href="/products" className="transition hover:text-green-400">
            Produk
          </Link>

          <Link href="/services" className="transition hover:text-green-400">
            Layanan
          </Link>

          <Link href="/gallery" className="transition hover:text-green-400">
            Galeri
          </Link>

          <Link href="/contact" className="transition hover:text-green-400">
            Kontak
          </Link>
        </div>

        {/* Social Media */}
        <div className="mt-12 flex justify-center gap-6">
          {socialMedia.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className="group rounded-full bg-[#132A22] p-3 transition-all duration-300 hover:scale-110 hover:bg-green-600"
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={28}
                height={28}
                className="object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} BioPlant Project. Semua hak
            dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}