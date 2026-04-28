import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const panels = [
    {
      img: "https://sunvalleyhomestay.com/wp-content/uploads/2023/07/sunvalley-homestay-mainblock-1920x1440.jpg",
      location: "Ottupattarai, Coonoor - 643105",
      tag: "Nilgiris · Tamil Nadu",
    },
    {
      img: "https://sunvalleyhomestay.com/wp-content/uploads/2023/07/sunvalley-view-1920x1386.jpg",
      location: "Tea Garden Views",
      tag: "Nature · Stay",
    },
    {
      img: "https://sunvalleyhomestay.com/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-08-at-13.20.16-scaled.jpeg",
      location: "Private Retreat",
      tag: "Peaceful · Luxury",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#1A2E1C]">
      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden relative min-h-screen">
        <img
          src={panels[0].img}
          alt="Homestay"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        {/* FIXED TOP SPACE */}
        <div className="relative z-10 px-5 pt-36 pb-10 text-center flex flex-col min-h-screen justify-between">
          <div>
            <motion.span
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              className="block text-[10px] tracking-[0.35em] uppercase text-white/70 mb-4"
            >
              Stay · Coonoor — Ooty
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="font-serif text-4xl leading-tight text-white"
            >
              Our <span className="italic font-light">HomeStay</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-white/70 text-sm leading-relaxed mt-5 max-w-sm mx-auto"
            >
              Enjoy luxury rooms with modern comfort at Sunvalley Homestay
              Coonoor. Peaceful stay for couples & families.
            </motion.p>

            <div className="grid grid-cols-3 gap-3 mt-8">
              <Stat value="21" label="Guests" />
              <Stat value="06" label="Rooms" />
              <Stat value="₹15k+" label="Start" />
            </div>
          </div>

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
        {/* FIXED TOP SPACE */}
        <div className="absolute inset-x-0 top-32 lg:top-36 z-20 px-8 lg:px-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="block text-xs tracking-[0.35em] uppercase text-white/70 mb-4"
          >
            Stay · Coonoor — Ooty
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-serif text-6xl lg:text-8xl text-white"
          >
            Our <span className="italic font-light">HomeStay</span>
          </motion.h1>

          <p className="max-w-2xl mx-auto mt-5 text-white/70 text-base">
            Enjoy luxury rooms with modern comfort at Sunvalley Homestay
            Coonoor. A peaceful stay perfect for solo travelers and families.
          </p>

          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto mt-8">
            <Stat value="21" label="Guests" />
            <Stat value="06" label="Rooms" />
            <Stat value="₹15k+" label="Start" />
          </div>
        </div>

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
