import React from "react";
import Hero from "../components/homeStay/Hero";
import Overview from "../components/homeStay/Overview";
import Rooms from "../components/homeStay/Rooms";
import Amenities from "../components/homeStay/Amenities";
import CTA from "../components/homeStay/CTA";
import Menu from "../components/homeStay/Menu";

const HomeStay = () => {
  return (
    <>
      <Hero />
      <Overview />
      <Rooms />
      <Menu />
      <Amenities />
      <CTA />
    </>
  );
};

export default HomeStay;
