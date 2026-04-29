import React from "react";

import Hero from "../components/home/Hero";
import Experience from "../components/home/Experience";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Review from "../components/home/Review";
import Gallery from "../components/home/Gallery";
import HeroAbout from "../components/home/AboutHero";
import Stats from "../components/home/Stats";
import Founders from "../components/home/Founders";
import Philosophy from "../components/home/Philosophy";
import FeaturedBrands from "../components/home/FeaturedBrands";

const Home = () => {
  return (
    <div className="font-jost">
      <Hero />
      <HeroAbout />
      <Stats />
      <Founders />
      <Experience />
      <Philosophy />
      <WhyChooseUs />
      <Review />
      <Gallery />
      <FeaturedBrands />
    </div>
  );
};

export default Home;
