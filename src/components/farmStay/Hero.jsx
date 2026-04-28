import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const panels = [
    {
      img: "https://www.sunvalleyfarmstay.com/images/gallery/51.jpg",
      location: "Chittur, Palakkad - Kerala",
      tag: "10 Acres · Kerala",
    },
    {
      img: "https://www.sunvalleyfarmstay.com/images/gallery/2024-aug-6.png",
      location: "Organic Farm Views",
      tag: "Nature · Farmstay",
    },
    {
      img: "https://www.sunvalleyfarmstay.com/images/paddy-field-work.jpg",
      location: "Peaceful Farm Houses",
      tag: "Relax · Retreat",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#1A2E1C]">
      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden relative min-h-screen">
        {/* Background */}
        <img
          src={panels[0].img}
          alt="Farmstay"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="relative z-10 px-5 pt-36 pb-10 text-center flex flex-col min-h-screen justify-between">
          <div>
            <motion.span
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              className="block text-[10px] tracking-[0.35em] uppercase text-white/70 mb-4"
            >
              Stay · Palakkad — Kerala
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="font-serif text-4xl leading-tight text-white"
            >
              Our <span className="italic font-light">FarmStay</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-white/70 text-sm leading-relaxed mt-5 max-w-sm mx-auto"
            >
              Wake up to birdsong, fresh air, organic farms and peaceful
              countryside living at Sunvalley Farmstay.
            </motion.p>

            <div className="grid grid-cols-3 gap-3 mt-8">
              <Stat value="2" label="Houses" />
              <Stat value="6" label="Rooms" />
              <Stat value="10" label="Acres" />
            </div>
          </div>

          {/* Bottom Cards */}
          <div className="space-y-3 mt-10">
            {panels.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl px-4 py-4 text-left"
              >
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 mb-1">
                  {item.tag}
                </p>

                <h3 className="text-white font-serif text-lg">
                  {item.location}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden md:flex relative min-h-screen">
        {/* Top Content */}
        <div className="absolute inset-x-0 top-32 lg:top-36 z-20 px-8 lg:px-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="block text-xs tracking-[0.35em] uppercase text-white/70 mb-4"
          >
            Stay · Palakkad — Kerala
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-serif text-6xl lg:text-8xl text-white"
          >
            Our <span className="italic font-light">FarmStay</span>
          </motion.h1>

          <p className="max-w-2xl mx-auto mt-5 text-white/70 text-base">
            Two charming farmhouses surrounded by greenery, birdsong and open
            skies — a peaceful rural escape in Palakkad.
          </p>

          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto mt-8">
            <Stat value="2" label="Houses" />
            <Stat value="6" label="Rooms" />
            <Stat value="10" label="Acres" />
          </div>
        </div>

        {/* Accordion Panels */}
        <div className="flex w-full h-screen">
          {panels.map((panel, idx) => (
            <div
              key={idx}
              className="relative flex-1 h-full transition-all duration-700 hover:flex-[2.4] group overflow-hidden border-r border-white/10"
            >
              <img
                src={panel.img}
                alt={panel.location}
                className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/35 group-hover:bg-black/15 transition" />

              <div className="absolute bottom-10 left-8 group-hover:translate-x-3 transition duration-500">
                <p className="text-[10px] tracking-[0.35em] uppercase text-white/60 mb-2">
                  {panel.tag}
                </p>

                <h3 className="text-white font-serif text-2xl opacity-0 group-hover:opacity-100 transition">
                  {panel.location}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Stat = ({ value, label }) => (
  <div className="text-center backdrop-blur-md bg-white/10 rounded-xl py-3">
    <p className="text-xl sm:text-2xl md:text-3xl font-serif text-white">
      {value}
    </p>

    <p className="text-[9px] tracking-[0.25em] uppercase text-white/50 mt-1">
      {label}
    </p>
  </div>
);

export default Hero;
