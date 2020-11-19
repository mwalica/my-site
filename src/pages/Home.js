import React from 'react';

import Hero from '../components/Hero';
import About from './About';
import Photostock from './Photostock';
import ButtonTop from '../components/ButtonTop';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Photostock />
      <ButtonTop />
    </>
  );
};

export default Home;
