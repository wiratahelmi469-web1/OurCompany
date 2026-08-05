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
    <section className="relative h-[420px]">
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative mx-auto flex h-full max-w-7xl items-center px-6">
        <div>
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