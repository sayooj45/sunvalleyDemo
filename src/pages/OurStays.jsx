import React from "react";
import StayComponent from "../components/stay/StayComponent";

const OurStays = () => {
  return (
    <div className="bg-[#eef2ee] pt-20 pb-10">
      {/* PAGE HEADER */}
      <div className="px-6 md:px-16 mb-10">
        <p className="text-[11px] tracking-[0.25em] uppercase text-yellow-600 mb-2">
          Our Stays
        </p>
        <h1 className="font-serif text-3xl md:text-5xl text-greenDark">
          Two Destinations, One Experience
        </h1>
      </div>

      {/* STAYS */}
      <StayComponent />
    </div>
  );
};

export default OurStays;
