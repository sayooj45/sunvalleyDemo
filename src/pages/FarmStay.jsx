import React from "react";
import Hero from "../components/farmStay/Hero";
import Overview from "../components/farmStay/Overview";
import Rooms from "../components/farmStay/Rooms";
import Amenities from "../components/farmStay/Amenities";
import CTA from "../components/farmStay/CTA";

const FarmStay = () => {
  return (
    <>
      <Hero />
      <Overview />
      <Rooms />
      <Amenities />
      <CTA />
    </>
  );
};

export default FarmStay;
