import { Leaf, Trees, Flower2, BookOpen, Sprout, BadgeHelp } from "lucide-react";

const categories = [
  {
    title: "Plant Care",
    icon: Leaf,
  },
  {
    title: "Indoor Plants",
    icon: Flower2,
  },
  {
    title: "Landscape",
    icon: Trees,
  },
  {
    title: "Tips & Tricks",
    icon: BookOpen,
  },
  {
    title: "Plant Guide",
    icon: Sprout,
  },
  {
    title: "FAQ",
    icon: BadgeHelp,
  },
];

export default function Categories() {
  return (
    <section className="bg-[#081C15] py-24 lg:py-32">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[5px] text-green-400">
            Categories
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Browse by Category
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Temukan artikel sesuai topik yang Anda minati, mulai dari
            perawatan tanaman hingga inspirasi desain landscape.
          </p>

        </div>

        {/* Categories */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {categories.map((item) => {

            const Icon = item.icon;

            return (

              <button
                key={item.title}
                className="
                  group
                  flex
                  items-center
                  gap-5
                  rounded-3xl
                  bg-[#132A22]
                  p-6
                  text-left
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:bg-green-700
                "
              >

                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-green-600/20
                    transition
                    group-hover:bg-white/20
                  "
                >

                  <Icon
                    size={32}
                    className="text-green-400 group-hover:text-white"
                  />

                </div>

                <div>

                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-300">
                    Explore articles
                  </p>

                </div>

              </button>

            );

          })}

        </div>

      </div>

    </section>
  );
}