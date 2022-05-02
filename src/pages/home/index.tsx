import type { NextPage } from 'next';
import { parse } from 'rss-to-json';
import { ArticleProps } from 'src/components/Article';

import AboutSection from './sections/About';
import ArticlesSection from './sections/Articles';
import ContactUsSection from './sections/ContactUs';
import MainSection from './sections/Main';

export interface HomePageProps {
  articles: ArticleProps[];
}

const Home: NextPage<HomePageProps> = ({ articles }) => {
  return (
    <>
      <MainSection />
      <AboutSection />
      <ArticlesSection articles={articles} />
      <ContactUsSection />
    </>
  );
};

export const getStaticProps = async () => {
  const articles = (await parse('https://medium.com/feed/navalia', {})).items;
  return {
    props: {
      articles: articles.map((article) => ({
        title: article.title,
        author: article.author,
        link: article.link,
        content: article.content,
        categories: article.category,
        published: article.published,
      })),
    },
  };
};

export default Home;
