import Link from "next/link";
import PageHero from "../components/PageHero";

const articles = [
  {
    title: "Tips Merawat Monstera",
    date: "10 Agustus 2026",
    description:
      "Pelajari cara merawat Monstera agar tetap sehat dan tumbuh subur.",
  },
  {
    title: "5 Tanaman Indoor Terbaik",
    date: "5 Agustus 2026",
    description: "Rekomendasi tanaman indoor yang cocok untuk rumah minimalis.",
  },
  {
    title: "Cara Memilih Pot Tanaman",
    date: "1 Agustus 2026",
    description: "Panduan memilih pot yang sesuai dengan jenis tanaman Anda.",
  },
];

export default function ArticlesPage() {
  return (
    <>
      <PageHero
        title="Articles"
        subtitle="Plant care tips, news, and inspiration."
        image="/images/banners/articles.jpg"
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-8 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.title}
              className="rounded-3xl border bg-white p-8 shadow-sm transition hover:shadow-xl"
            >
              <p className="text-sm text-green-700">{article.date}</p>

              <h2 className="mt-3 text-2xl font-bold">{article.title}</h2>

              <p className="mt-4 text-gray-600 leading-7">
                {article.description}
              </p>

              <Link
                href="#"
                className="mt-6 inline-block font-semibold text-green-700 hover:underline"
              >
                Read More →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
