import React from "react";
import Hero from "../components/about/Hero";
import Stats from "../components/about/Stats";
import Founders from "../components/about/Founders";
import Philosophy from "../components/about/Philosophy";
import Location from "../components/about/Location";

const About = () => {
  return (
    <div className="font-[Jost]  pt-16">
      <Hero />
      <Stats />
      <Founders />
      <Location />
      <Philosophy />
    </div>
  );
};

export default About;
