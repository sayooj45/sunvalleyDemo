import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-end pb-20 text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-16">
        <p className="text-xs tracking-[0.2em] opacity-80 mb-4">
          Coonoor · Palakkad
        </p>

        <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-4">
          Where Nature <span className="italic text-green-300">Breathes</span>
          <br />
          and You Belong
        </h1>

        <p className="text-xs tracking-widest mb-6">
          Homestay · Farmstay · Restaurant
        </p>

        <div className="flex gap-4">
          <button className="border border-white px-6 py-2 text-xs uppercase">
            Explore
          </button>
          <button className="border border-white px-6 py-2 text-xs uppercase">
            Contact
          </button>
        </div>
      </div>

      {/* Rating */}
      <div className="absolute right-6 bottom-10 bg-white/20 backdrop-blur p-4 text-center">
        <div>★</div>
        <div className="text-2xl font-serif">4.9</div>
        <p className="text-xs">Rating</p>
      </div>
    </section>
  );
};

export default Hero;
