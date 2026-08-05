import Image from "next/image";
import { projectGallery } from "@/app/data/gallery";

export default function ProjectGallery() {
  return (
    <section className="bg-[#081C15] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[5px] text-green-400">
            Proyek Kami
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Proyek yang Telah Selesai
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Dokumentasi beberapa proyek landscape dan dekorasi tanaman yang
            telah dikerjakan oleh BioPlant Project.
          </p>
        </div>

        <div className="space-y-24">
          {projectGallery.map((project, index) => (
            <div
              key={project.title}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}

              <div className="group overflow-hidden rounded-3xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={900}
                  height={700}
                  className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}

              <div>
                <span className="rounded-full bg-green-600/20 px-4 py-2 text-sm font-semibold text-green-300">
                  BioPlant Project
                </span>

                <h3 className="mt-6 text-3xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-300">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
