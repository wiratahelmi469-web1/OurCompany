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
    <section className="relative h-[420px] overflow-hidden lg:h-[500px]">
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[6px] text-green-300">
            BioPlant Project
          </span>

          <h1 className="mt-5 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            {title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-200 md:text-xl">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}