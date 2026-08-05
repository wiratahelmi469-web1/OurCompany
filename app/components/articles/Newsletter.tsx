import { Mail, Send } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="bg-[#0B221A] py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#132A22] p-10 md:p-16">
          {/* Heading */}

          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-600/20">
              <Mail size={42} className="text-green-400" />
            </div>

            <span className="mt-8 inline-block text-sm font-semibold uppercase tracking-[5px] text-green-400">
              Newsletter
            </span>

            <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
              Tetap Terhubung
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              Dapatkan artikel terbaru, tips merawat tanaman, inspirasi
              landscape, dan informasi menarik lainnya langsung melalui email
              Anda.
            </p>
          </div>

          {/* Newsletter */}

          <form
            action="mailto:bioplantproject@gmail.com"
            method="post"
            encType="text/plain"
            className="mx-auto mt-14 max-w-2xl"
          >
            <div className="grid gap-5 md:grid-cols-[1fr_auto]">
              <input
                type="email"
                name="email"
                required
                placeholder="Masukkan email Anda..."
                className="
                  h-14
                  rounded-full
                  border
                  border-white/10
                  bg-[#081C15]
                  px-6
                  text-white
                  outline-none
                  placeholder:text-gray-500
                  focus:border-green-500
                "
              />

              <button
                type="submit"
                className="
                  inline-flex
                  h-14
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-green-600
                  px-8
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-green-700
                  hover:shadow-lg
                  hover:shadow-green-700/30
                "
              >
                Berlangganan
                <Send size={18} />
              </button>
            </div>
          </form>

          {/* Contact Email */}

          <p className="mt-8 text-center text-sm text-gray-400">
            Punya pertanyaan? Hubungi kami di
            <a
              href="mailto:bioplantproject@gmail.com"
              className="font-semibold text-green-400 transition hover:underline"
            >
              bioplantproject@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
