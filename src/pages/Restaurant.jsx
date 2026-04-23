import React from "react";
import Hero from "../components/restaurant/Hero";
import Menu from "../components/restaurant/Menu";
import Info from "../components/restaurant/Info";

function Restaurant() {
  return (
    <div className="bg-[#faf7f2] text-gray-900 font-[Jost]">
      <div className="pt-16">
        <Hero />
        <Menu />
        <Info />
      </div>
    </div>
  );
}

export default Restaurant;
