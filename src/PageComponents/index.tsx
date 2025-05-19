import React from 'react';

import Header from './Header';
import Hero from './Hero';
import About from './About';
import SpecialMenuOffers from './SpecialOffer';
import SpecialMenu from './SpecialMenu';
import RestaurantVideo from './RestaurantVideo';
import AppAnnounce from './Announce';
import Newsletter from './Newsletter';
import Footer from './Footer';

const Main = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <SpecialMenuOffers />
      <SpecialMenu />
      <RestaurantVideo />
      <AppAnnounce />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Main;
