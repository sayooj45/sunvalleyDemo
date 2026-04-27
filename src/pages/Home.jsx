import React from "react";

import Hero from "../components/home/Hero";
import BookingBar from "../components/home/BookingBar";
import Experience from "../components/home/Experience";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Review from "../components/home/Review";
import Gallery from "../components/home/Gallery";
import HeroAbout from "../components/about/Hero";
import Stats from "../components/about/Stats";
import Founders from "../components/about/Founders";
import Philosophy from "../components/about/Philosophy";
import Location from "../components/about/Location";
import FeaturedBrands from "../components/home/FeaturedBrands";

const Home = () => {
  return (
    <div className="font-jost">
      <Hero />
      <BookingBar />
      <HeroAbout />
      <Stats />
      <Founders />
      <Experience />
      <Philosophy />
      <Location />
      <WhyChooseUs />
      <Review />
      <Gallery />
      <FeaturedBrands />
    </div>
  );
};

export default Home;
