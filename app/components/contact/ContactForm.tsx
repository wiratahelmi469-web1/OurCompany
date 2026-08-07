"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    whatsapp: "",
    subjek: "",
    pesan: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !form.nama ||
      !form.email ||
      !form.whatsapp ||
      !form.subjek ||
      !form.pesan
    ) {
      alert("Mohon lengkapi semua data terlebih dahulu.");
      return;
    }

    // Ganti dengan nomor WhatsApp BioPlant Project
    const nomor = "6285286197108";

    const pesan = `Halo BioPlant Project,

Nama Lengkap : ${form.nama}
Email         : ${form.email}
WhatsApp      : ${form.whatsapp}
Subjek        : ${form.subjek}

Pesan:
${form.pesan}`;

    const url = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;

    window.open(url, "_blank");
  };

  return (
    <section className="bg-[#0B221A] py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[5px] text-green-400">
            Form Kontak
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Kirim Pesan
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Isi formulir berikut dan tim Greenovative akan segera
            menghubungi Anda.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl bg-[#132A22] p-8 shadow-xl md:p-12"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {/* Nama */}
            <div>
              <label className="mb-3 block text-sm font-medium text-white">
                Nama Lengkap
              </label>

              <input
                type="text"
                placeholder="Nama lengkap Anda"
                value={form.nama}
                onChange={(e) =>
                  setForm({ ...form, nama: e.target.value })
                }
                className="w-full rounded-xl border border-white/10 bg-[#081C15] px-5 py-4 text-white outline-none transition focus:border-green-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-3 block text-sm font-medium text-white">
                Alamat Email
              </label>

              <input
                type="email"
                placeholder="contoh@email.com"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full rounded-xl border border-white/10 bg-[#081C15] px-5 py-4 text-white outline-none transition focus:border-green-500"
              />
            </div>

            {/* WhatsApp */}
            <div>
              <label className="mb-3 block text-sm font-medium text-white">
                Nomor WhatsApp
              </label>

              <input
                type="text"
                placeholder="+62 812 xxxx xxxx"
                value={form.whatsapp}
                onChange={(e) =>
                  setForm({ ...form, whatsapp: e.target.value })
                }
                className="w-full rounded-xl border border-white/10 bg-[#081C15] px-5 py-4 text-white outline-none transition focus:border-green-500"
              />
            </div>

            {/* Subjek */}
            <div>
              <label className="mb-3 block text-sm font-medium text-white">
                Subjek
              </label>

              <input
                type="text"
                placeholder="Contoh: Konsultasi Landscape"
                value={form.subjek}
                onChange={(e) =>
                  setForm({ ...form, subjek: e.target.value })
                }
                className="w-full rounded-xl border border-white/10 bg-[#081C15] px-5 py-4 text-white outline-none transition focus:border-green-500"
              />
            </div>
          </div>

          {/* Pesan */}
          <div className="mt-6">
            <label className="mb-3 block text-sm font-medium text-white">
              Pesan
            </label>

            <textarea
              rows={6}
              placeholder="Tulis pesan Anda..."
              value={form.pesan}
              onChange={(e) =>
                setForm({ ...form, pesan: e.target.value })
              }
              className="w-full rounded-xl border border-white/10 bg-[#081C15] px-5 py-4 text-white outline-none transition focus:border-green-500"
            />
          </div>

          {/* Tombol */}
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
              hover:-translate-y-1
              hover:bg-green-700
              hover:shadow-xl
              hover:shadow-green-700/30
            "
          >
            Kirim Pesan
            <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}