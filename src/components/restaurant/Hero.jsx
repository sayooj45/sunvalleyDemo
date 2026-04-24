import React from "react";
import { motion } from "framer-motion";
import restaurant from "../images/restaurant/restaurant.jpg";
const textVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 1.05 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

const Hero = () => {
  return (
    <section className="bg-[#faf7f2] grid md:grid-cols-2 gap-10 items-center px-6 md:px-16 py-16 md:py-20 min-h-[85vh]">
      {/* LEFT CONTENT */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          show: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.p
          variants={textVariant}
          className="text-xs tracking-[0.3em] text-yellow-600 uppercase font-semibold mb-4"
        >
          Restaurant
        </motion.p>

        <motion.h1
          variants={textVariant}
          className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-greenDark"
        >
          Farm-to-Table Dining
        </motion.h1>

        <motion.p
          variants={textVariant}
          className="text-gray-600 leading-relaxed mb-4 max-w-lg"
        >
          Everything on our menu is sourced from our{" "}
          <span className="text-yellow-600 font-medium">
            own farm or local growers
          </span>
          . No preservatives, no processed ingredients — just real food, made
          the traditional way.
        </motion.p>

        <motion.p variants={textVariant} className="text-gray-400 italic mb-8">
          Grown here. Cooked fresh. Served with love.
        </motion.p>

        <motion.a
          variants={textVariant}
          href="https://wa.me/919582598568"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-900 hover:bg-green-800 text-white px-8 py-3 text-xs tracking-[0.2em] uppercase transition duration-300 rounded-sm"
        >
          Reserve via WhatsApp
        </motion.a>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={imageVariant}
        className="overflow-hidden rounded-xl"
      >
        <img
          src={restaurant}
          alt="Farm to table food"
          className="w-full h-[280px] sm:h-[350px] md:h-[450px] object-cover transition duration-700 hover:scale-105"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
