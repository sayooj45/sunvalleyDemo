import React from "react";
import { motion } from "framer-motion";

/* animations */
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const float = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  return (
    <section className="relative min-h-[75vh] md:min-h-[85vh] flex items-center justify-center text-center bg-gd text-cream px-6 pt-28 md:pt-36 overflow-hidden">
      {/* background glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 
        bg-[radial-gradient(circle_at_50%_30%,rgba(212,175,55,0.15),transparent_60%)]"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl w-full"
      >
        {/* TAG */}
        <motion.span
          variants={item}
          className="inline-block text-[10px] md:text-xs tracking-[0.25em] 
          border border-gl/40 px-4 py-2 text-gl mb-6 
          backdrop-blur bg-white/5 rounded-full"
        >
          Stay · Palakkad · 10 Acres
        </motion.span>

        {/* TITLE */}
        <motion.h1
          variants={item}
          className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight"
        >
          Our{" "}
          <em className="text-gl italic font-display bg-gradient-to-r from-gl to-yellow-300 bg-clip-text text-transparent">
            Farm Houses
          </em>
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          variants={item}
          className="max-w-xl mx-auto mt-6 text-white/60 text-sm sm:text-base leading-relaxed"
        >
          Two 25-year-old farmhouses, lovingly converted. Wake up to birdsong
          and fresh air surrounded by nature and calm landscapes.
        </motion.p>

        {/* STATS */}
        <motion.div
          variants={item}
          className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-10"
        >
          <Stat value="2" label="Houses" />
          <Stat value="6" label="Rooms" />
          <Stat value="10" label="Acres" />
        </motion.div>
      </motion.div>

      {/* floating decorative card */}
      <motion.div
        variants={float}
        animate="animate"
        className="hidden md:block absolute bottom-10 right-10 
        bg-white/5 backdrop-blur-xl border border-gl/20 
        px-6 py-4 rounded-xl shadow-lg"
      >
        <p className="text-xs text-white/50">Nature · Stay</p>
        <p className="text-gl font-serif text-lg">Peaceful Retreat</p>
      </motion.div>
    </section>
  );
};

/* STAT COMPONENT */
const Stat = ({ value, label }) => (
  <motion.div whileHover={{ scale: 1.08 }} className="text-center">
    <div className="text-2xl sm:text-3xl md:text-4xl font-serif">{value}</div>
    <div className="text-[10px] sm:text-xs text-gl uppercase tracking-widest mt-1">
      {label}
    </div>

    {/* subtle underline animation */}
    <div className="h-[1px] w-0 bg-gl mx-auto mt-2 group-hover:w-full transition-all duration-300"></div>
  </motion.div>
);

export default Hero;
