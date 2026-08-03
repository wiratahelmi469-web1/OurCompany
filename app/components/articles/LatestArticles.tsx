import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";

import { latestArticles } from "@/app/data/articles";

export default function LatestArticles() {
  return (
    <section className="bg-[#0B221A] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[5px] text-green-400">
            Latest Articles
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Explore Our Latest Insights
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Temukan berbagai artikel terbaru mengenai tanaman hias,
            inspirasi dekorasi, hingga tips perawatan dari BioPlant Project.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {latestArticles.map((article) => (

            <div
              key={article.title}
              className="
                group
                overflow-hidden
                rounded-3xl
                bg-[#132A22]
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-2
              "
            >

              {/* Image */}

              <div className="relative h-64 overflow-hidden">

                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              {/* Content */}

              <div className="p-8">

                <span className="rounded-full bg-green-600/20 px-3 py-1 text-xs font-semibold text-green-300">
                  {article.category}
                </span>

                <div className="mt-5 flex items-center gap-2 text-sm text-gray-400">

                  <CalendarDays size={16} />

                  {article.date}

                </div>

                <h3 className="mt-5 text-2xl font-bold text-white">
                  {article.title}
                </h3>

                <Link
                  href="/articles"
                  className="
                    mt-8
                    inline-flex
                    items-center
                    gap-2
                    font-semibold
                    text-green-400
                    transition-all
                    hover:gap-4
                  "
                >

                  Read More

                  <ArrowRight size={18} />

                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}