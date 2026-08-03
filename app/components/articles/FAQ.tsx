"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { articleFaq } from "@/app/data/articles";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#081C15] py-24 lg:py-32">

      <div className="mx-auto max-w-4xl px-6">

        {/* Heading */}

        <div className="mb-16 text-center">

          <span className="text-sm font-semibold uppercase tracking-[5px] text-green-400">
            FAQ
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Temukan jawaban dari pertanyaan yang paling sering diajukan
            mengenai artikel dan konten BioPlant Project.
          </p>

        </div>

        <div className="space-y-5">

          {articleFaq.map((item, index) => {

            const open = activeIndex === index;

            return (

              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#132A22]"
              >

                <button
                  onClick={() =>
                    setActiveIndex(open ? null : index)
                  }
                  className="flex w-full items-center justify-between p-6 text-left"
                >

                  <span className="text-lg font-semibold text-white">
                    {item.question}
                  </span>

                  <ChevronDown
                    className={`transition duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />

                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    open
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >

                  <div className="overflow-hidden">

                    <p className="px-6 pb-6 leading-8 text-gray-300">
                      {item.answer}
                    </p>

                  </div>

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}