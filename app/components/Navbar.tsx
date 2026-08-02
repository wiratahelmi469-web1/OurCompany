"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const menus = [
  {
    name: "Our Company",
    href: "/our-company",
  },
  {
    name: "Products",
    href: "/products",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
  {
    name: "Articles",
    href: "/articles",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-black/25 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Link
          href="/"
          className="text-2xl font-bold text-white"
        >
          BioPlant Project
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">

          {menus.map((menu) => (
            <Link
              key={menu.href}
              href={menu.href}
              className="text-white transition hover:text-green-300"
            >
              {menu.name}
            </Link>
          ))}

        </nav>

        <Link
          href="/contact"
          className="hidden rounded-full bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700 lg:block"
        >
          Contact
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="text-white lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>

      {open && (
        <div className="border-t border-white/10 bg-black/80 backdrop-blur-xl lg:hidden">
          {menus.map((menu) => (
            <Link
              key={menu.href}
              href={menu.href}
              className="block px-6 py-4 text-white hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              {menu.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}