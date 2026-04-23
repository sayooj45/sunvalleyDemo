import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/home/Hero";
import BookingBar from "../components/home/BookingBar";
import Experience from "../components/home/Experience";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Review from "../components/home/Review";
import Gallery from "../components/home/Gallery";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="font-jost">
      <Hero />
      <BookingBar />
      <Experience />
      <WhyChooseUs />
      <Review />
      <Gallery />
    </div>
  );
};

export default Home;
