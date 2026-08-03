import PageHero from "../components/PageHero";

import FeaturedArticle from "../components/articles/FeaturedArticle";
import LatestArticles from "../components/articles/LatestArticles";
import Categories from "../components/articles/Categories";
import Newsletter from "../components/articles/Newsletter";
import FAQ from "../components/articles/FAQ";
import CTA from "../components/articles/CTA";

export default function ArticlesPage() {
  return (
    <>
      <PageHero
        title="Articles"
        subtitle="Explore articles, tips, and inspiration from BioPlant Project."
        image="/images/articles/hero.jpg"
      />

      <FeaturedArticle />

      <LatestArticles />

      <Categories />

      <Newsletter />

      <FAQ />

      <CTA />
    </>
  );
}