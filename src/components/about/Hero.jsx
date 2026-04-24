import React from "react";
import { motion } from "framer-motion";
import about from "../images/about/about.jpg";
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const Hero = () => {
  return (
    <section className="bg-cream overflow-hidden ">
      <div
        className="grid lg:grid-cols-2 gap-10 items-center 
                      px-5 sm:px-8 md:px-12 lg:px-16 
                      py-12 sm:py-16 md:py-20 
                      min-h-[90vh]"
      >
        {/* LEFT CONTENT */}
        <div className="order-2 lg:order-1">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0}
            className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#c9922a] mb-3"
          >
            Our Story
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={1}
            className="font-serif 
                       text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] 
                       leading-tight mb-5 text-greenDark"
          >
            About Sun Valley
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={2}
            className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4"
          >
            Sun Valley was born from a belief that travel should reconnect
            people with nature, community, and authentic living. What began as a
            single homestay in the Nilgiris has grown into a two-property
            sustainable hospitality brand spanning Tamil Nadu and Kerala.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={3}
            className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6"
          >
            Founded by <strong>Shyma & Dhinesh</strong>, we work with local
            farmers, practise organic agriculture, and welcome every guest as
            family — not just a visitor.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={4}
            className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#c9922a] mb-3"
          >
            Our Values
          </motion.p>

          <motion.ul
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={5}
            className="space-y-3 text-sm sm:text-[15px] text-gray-600"
          >
            {[
              "Nature First — guided by respect for the land.",
              "Sustainability — organic farming & minimal waste.",
              "Authentic Hospitality — warm, personal stays.",
              "Community — supporting local livelihoods.",
            ].map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 6 }}
                className="leading-relaxed"
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="order-1 lg:order-2"
        >
          <motion.img
            src={about}
            alt="Sun Valley"
            className="w-full 
                       h-[260px] sm:h-[320px] md:h-[400px] lg:h-[520px] 
                       object-cover rounded-md"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
