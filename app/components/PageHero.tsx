import Image from "next/image";

type PageHeroProps = {
  title: string;
  subtitle: string;
  image: string;
};

export default function PageHero({
  title,
  subtitle,
  image,
}: PageHeroProps) {
  return (
    <section className="relative h-[420px] overflow-hidden">

      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6">

          <span className="text-sm uppercase tracking-[6px] text-green-300">
            BioPlant Project
          </span>

          <h1 className="mt-5 text-5xl font-bold text-white md:text-7xl">
            {title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-200 md:text-xl">
            {subtitle}
          </p>

        </div>
      </div>
    </section>
  );
}