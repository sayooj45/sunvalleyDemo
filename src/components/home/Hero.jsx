import React from "react";
import { motion } from "framer-motion";
import hero from "../images/home/home.jpeg";
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-end pb-20 text-white overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
      >
        <img src={hero} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-16">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.2}
          className="text-xs tracking-[0.2em] opacity-80 mb-4"
        >
          Coonoor · Palakkad
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.4}
          className="font-serif text-4xl md:text-6xl leading-tight mb-4"
        >
          Where Nature <span className="italic text-green-300">Breathes</span>
          <br />
          and You Belong
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.6}
          className="text-xs tracking-widest mb-6"
        >
          Homestay · Farmstay · Restaurant
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.8}
          className="flex gap-4"
        >
          <button className="border border-white px-6 py-2 text-xs uppercase hover:bg-white hover:text-black transition">
            Explore
          </button>
          <button className="border border-white px-6 py-2 text-xs uppercase hover:bg-white hover:text-black transition">
            Contact
          </button>
        </motion.div>
      </div>

      {/* Rating */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute right-6 bottom-10 bg-white/20 backdrop-blur p-4 text-center"
      >
        <div>★</div>
        <div className="text-2xl font-serif">4.9</div>
        <p className="text-xs">Rating</p>
      </motion.div>
    </section>
  );
};

export default Hero;
