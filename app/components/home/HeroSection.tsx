"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import FadeUp from "../animation/FadeUp";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-[#081C15]" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-center px-6 pt-24 pb-16">
        <div className="text-center">
          {/* Logo */}
          <FadeUp delay={0.05}>
            <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-white p-4 shadow-2xl ring-4 ring-white/20">
              <Image
                src="/logos/bioplant.jpeg"
                alt="BioPlant Project"
                width={120}
                height={120}
                className="rounded-full object-contain"
                priority
              />
            </div>
          </FadeUp>

          {/* Small Heading */}
          <FadeUp delay={0.12}>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[8px] text-green-300 md:text-sm">
              Quality Plants & Garden Build
            </p>
          </FadeUp>

          {/* Title */}
          <FadeUp delay={0.18}>
            <h1 className="mt-5 text-5xl font-extrabold leading-tight text-white md:text-7xl lg:text-8xl">
              BioPlant Project
            </h1>
          </FadeUp>

          {/* Description */}
          <FadeUp delay={0.24}>
            <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-gray-200 md:text-xl">
              Menghadirkan alam ke ruang Anda dengan tanaman hias premium,
              inspirasi landscape, dan perawatan tanaman profesional.
            </p>
          </FadeUp>

          {/* Buttons */}
          <FadeUp delay={0.3}>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/our-company"
                className="rounded-full bg-green-600 px-8 py-4 text-base font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl hover:shadow-green-700/30"
              >
                Jelajahi BioPlant
              </Link>

              <Link
                href="/products"
                className="rounded-full border border-white/70 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
              >
                Lihat Produk
              </Link>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#081C15] to-transparent" />

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs uppercase tracking-[4px] text-gray-300">
            Scroll
          </span>

          <ChevronDown size={32} />
        </div>
      </div>
    </section>
  );
}
