import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

import { featuredArticle } from "@/app/data/articles";

export default function FeaturedArticle() {
  return (
    <section className="bg-[#081C15] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[5px] text-green-400">
            Featured Article
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Learn More About Plants
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Artikel pilihan dari BioPlant Project yang berisi tips,
            inspirasi, dan edukasi seputar tanaman hias.
          </p>

        </div>

        {/* Featured Card */}

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Image */}

          <div className="group overflow-hidden rounded-3xl">

            <Image
              src={featuredArticle.image}
              alt={featuredArticle.title}
              width={900}
              height={650}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

          </div>

          {/* Content */}

          <div>

            <span className="rounded-full bg-green-600/20 px-4 py-2 text-sm font-semibold text-green-300">
              {featuredArticle.category}
            </span>

            <div className="mt-6 flex items-center gap-3 text-gray-400">

              <CalendarDays size={18} />

              <span>{featuredArticle.date}</span>

            </div>

            <h3 className="mt-6 text-4xl font-bold leading-tight text-white">
              {featuredArticle.title}
            </h3>

            <p className="mt-8 text-lg leading-8 text-gray-300">
              {featuredArticle.description}
            </p>

            <Link
              href="/articles"
              className="
                mt-10
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-green-600
                px-8
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-green-700
              "
            >
              Read Article

              <ArrowRight size={18} />

            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}