import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  MessageCircle,
  ShoppingBag,
} from "lucide-react";

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

          <h2 className="mt-6 text-3xl font-bold">
            BioPlant Project
          </h2>

          <p className="mt-4 max-w-xl text-center leading-7 text-gray-400">
            BioPlant Project menyediakan tanaman hias premium,
            jasa landscape, serta solusi penghijauan untuk rumah,
            kantor, dan area komersial.
          </p>

        </div>

        {/* Navigation */}

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm">

          <Link href="/" className="transition hover:text-green-400">
            Home
          </Link>

          <Link
            href="/our-company"
            className="transition hover:text-green-400"
          >
            Our Company
          </Link>

          <Link
            href="/products"
            className="transition hover:text-green-400"
          >
            Products
          </Link>

          <Link
            href="/services"
            className="transition hover:text-green-400"
          >
            Services
          </Link>

          <Link
            href="/gallery"
            className="transition hover:text-green-400"
          >
            Gallery
          </Link>

          <Link
            href="/articles"
            className="transition hover:text-green-400"
          >
            Articles
          </Link>

          <Link
            href="/contact"
            className="transition hover:text-green-400"
          >
            Contact
          </Link>

        </div>

        {/* Social Media */}

        <div className="mt-12 flex justify-center gap-5">

          <Link
            href="https://wa.me/6281234567890"
            target="_blank"
            className="rounded-full bg-[#132A22] p-3 transition hover:bg-green-600"
          >
            <MessageCircle size={22} />
          </Link>

          <Link
            href="https://instagram.com/bioplantproject"
            target="_blank"
            className="rounded-full bg-[#132A22] p-3 transition hover:bg-pink-600"
          >
            <Camera size={22} />
          </Link>

          <Link
            href="https://www.tokopedia.com/"
            target="_blank"
            className="rounded-full bg-[#132A22] p-3 transition hover:bg-green-500"
          >
            <ShoppingBag size={22} />
          </Link>

        </div>

      </div>

      {/* Copyright */}

      <div className="border-t border-white/10">

        <div className="mx-auto max-w-7xl px-6 py-6 text-center">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} BioPlant Project. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}