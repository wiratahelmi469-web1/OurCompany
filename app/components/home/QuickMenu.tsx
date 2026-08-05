import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { quickMenus } from "@/app/data/home";
import FadeUp from "../animation/FadeUp";

export default function QuickMenu() {
  return (
    <section className="bg-[#081C15] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp delay={0.05}>
          <div className="mb-14 text-center">
            <span className="text-sm font-semibold uppercase tracking-[4px] text-green-400">
              Jelajahi
            </span>

            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              Temukan BioPlant Project
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-300">
              Jelajahi perusahaan, produk, layanan, galeri, artikel, dan semua
              yang membuat BioPlant Project menjadi mitra tanaman terpercaya
              Anda.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {quickMenus.map((menu, idx) => (
            <FadeUp key={menu.href} delay={0.06 * idx}>
              <Link
                href={menu.href}
                className={menu.size === "large" ? "md:col-span-2" : ""}
              >
                <div className="group relative h-80 overflow-hidden rounded-3xl shadow-xl">
                  <Image
                    src={menu.image}
                    alt={menu.title}
                    fill
                    priority
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <span className="mb-3 inline-flex w-fit rounded-full bg-green-600/90 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white">
                      BioPlant
                    </span>

                    <h3 className="text-3xl font-bold text-white">
                      {menu.title}
                    </h3>

                    <p className="mt-3 max-w-md text-gray-200">
                      {menu.subtitle}
                    </p>

                    <div className="mt-8 flex items-center gap-3 font-semibold text-green-400">
                      Lihat Detail
                      <ArrowRight className="transition duration-300 group-hover:translate-x-2" />
                    </div>
                  </div>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
