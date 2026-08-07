"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const menus = [
  {
    name: "Beranda",
    href: "/",
  },
  {
    name: "Tentang Kami",
    href: "/our-company",
  },
  {
    name: "Produk",
    href: "/products",
  },
  {
    name: "Layanan",
    href: "/services",
  },
  {
    name: "Galeri",
    href: "/gallery",
  },
  // {
  //   name: "Articles",
  //   href: "/articles",
  // },
  {
    name: "Kontak",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-black/30 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logos/greenovative.jpg"
            alt="Greenovative"
            width={48}
            height={48}
            className="rounded-full object-cover"
            priority
          />

          <div>
            <h1 className="text-xl font-bold text-white">Greenovative</h1>

            <p className="text-xs tracking-[3px] text-green-300">
              LANDSCAPE & PLANT SOLUTION
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 lg:flex">
          {menus.map((menu) => (
            <Link
              key={menu.href}
              href={menu.href}
              className={`relative py-2 text-sm font-medium transition duration-300 ${
                pathname === menu.href
                  ? "text-green-400"
                  : "text-white hover:text-green-300"
              }`}
            >
              {menu.name}

              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-green-400 transition-all duration-300 ${
                  pathname === menu.href ? "w-full" : "w-0"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Contact Button */}
        <Link
          href="https://wa.me/6285286197108"
          className="
            hidden
            lg:flex
            items-center
            rounded-full
            bg-green-600
            px-6
            py-3
            font-semibold
            text-white
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-green-700
            hover:shadow-lg
            hover:shadow-green-700/30
          "
        >
          Hubungi Kami
        </Link>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white transition lg:hidden"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          open ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="border-t border-white/10 bg-[#081C15]/95 backdrop-blur-xl py-4">
          {menus.map((menu) => (
            <Link
              key={menu.href}
              href={menu.href}
              onClick={() => setOpen(false)}
              className={`mx-4 my-2 block rounded-xl px-5 py-4 font-medium transition ${
                pathname === menu.href
                  ? "bg-green-600 text-white"
                  : "text-white hover:bg-green-700"
              }`}
            >
              {menu.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}