import { Send } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="bg-[#0B221A] py-24 lg:py-32">

      <div className="mx-auto max-w-5xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[5px] text-green-400">
            Contact Form
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Send Us a Message
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Isi formulir berikut dan tim BioPlant akan segera menghubungi Anda.
          </p>

        </div>

        {/* Form */}

        <form className="rounded-3xl bg-[#132A22] p-8 md:p-12 shadow-xl">

          <div className="grid gap-6 md:grid-cols-2">

            {/* Name */}

            <div>

              <label className="mb-3 block text-sm font-medium text-white">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Your full name"
                className="w-full rounded-xl border border-white/10 bg-[#081C15] px-5 py-4 text-white outline-none transition focus:border-green-500"
              />

            </div>

            {/* Email */}

            <div>

              <label className="mb-3 block text-sm font-medium text-white">
                Email Address
              </label>

              <input
                type="email"
                placeholder="example@email.com"
                className="w-full rounded-xl border border-white/10 bg-[#081C15] px-5 py-4 text-white outline-none transition focus:border-green-500"
              />

            </div>

            {/* WhatsApp */}

            <div>

              <label className="mb-3 block text-sm font-medium text-white">
                WhatsApp Number
              </label>

              <input
                type="text"
                placeholder="+62 812 xxxx xxxx"
                className="w-full rounded-xl border border-white/10 bg-[#081C15] px-5 py-4 text-white outline-none transition focus:border-green-500"
              />

            </div>

            {/* Subject */}

            <div>

              <label className="mb-3 block text-sm font-medium text-white">
                Subject
              </label>

              <input
                type="text"
                placeholder="Landscape Consultation"
                className="w-full rounded-xl border border-white/10 bg-[#081C15] px-5 py-4 text-white outline-none transition focus:border-green-500"
              />

            </div>

          </div>

          {/* Message */}

          <div className="mt-6">

            <label className="mb-3 block text-sm font-medium text-white">
              Message
            </label>

            <textarea
              rows={6}
              placeholder="Write your message..."
              className="w-full rounded-xl border border-white/10 bg-[#081C15] px-5 py-4 text-white outline-none transition focus:border-green-500"
            />

          </div>

          {/* Button */}

          <button
            type="submit"
            className="
              mt-8
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-green-600
              px-8
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-green-700
              hover:-translate-y-1
              hover:shadow-xl
              hover:shadow-green-700/30
            "
          >

            Send Message

            <Send size={18} />

          </button>

        </form>

      </div>

    </section>
  );
}