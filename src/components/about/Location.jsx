import React from "react";
import homestay from "../images/about/homestay.jpg";
import farmstay from "../images/about/farmstay.jpg";
const Location = () => {
  return (
    <section className="px-6 md:px-16 py-16 bg-cream">
      <p className="text-xs tracking-widest text-yellow-600 mb-4 uppercase">
        Where We Are
      </p>

      <h2 className="font-serif text-3xl mb-10 text-greenDark">
        Our Two Destinations
      </h2>

      <div className="grid md:grid-cols-2 gap-6 ">
        <div className="bg-white shadow rounded overflow-hidden ">
          <div className="aspect-[4/2] w-full overflow-hidden">
            <img src={homestay} className="w-full h-full object-cover" />
          </div>
          <div className="p-6">
            <h3 className="font-serif text-xl mb-2">Homestay — Coonoor</h3>
            <p className="text-sm text-gray-600 mb-4">
              Misty hills, tea gardens, and peaceful views.
            </p>
          </div>
        </div>

        <div className="bg-white shadow rounded overflow-hidden ">
          <div className="aspect-[4/2] w-full overflow-hidden">
            <img src={farmstay} className="w-full h-full object-cover" />
          </div>
          <div className="p-6">
            <h3 className="font-serif text-xl mb-2">Farmstay — Palakkad</h3>
            <p className="text-sm text-gray-600 mb-4">
              Rural Kerala life with paddy fields and open skies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
