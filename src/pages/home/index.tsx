import { useContext } from 'react';

import type { NextPage } from 'next';

import AboutSection from './sections/About';
import ArticlesSection from './sections/Articles';
import ContactUsSection from './sections/ContactUs';
import MainSection from './sections/Main';

const Home: NextPage = () => (
  <>
    <MainSection />
    <AboutSection />
    <ArticlesSection />
    <ContactUsSection />
  </>
);

export default Home;
