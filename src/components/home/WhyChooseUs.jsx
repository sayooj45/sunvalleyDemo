import React from "react";
import { motion } from "framer-motion";

const data = [
  {
    icon: "🌿",
    title: "Organic Farm",
    desc: "Fresh produce grown on our own land, served at your table every meal.",
  },
  {
    icon: "⛰️",
    title: "Peaceful Location",
    desc: "Away from crowds — tea gardens, open farms, and mountain air.",
  },
  {
    icon: "🍲",
    title: "Authentic Food",
    desc: "Home-cooked regional recipes using seasonal, local ingredients.",
  },
  {
    icon: "🌳",
    title: "Sustainable Living",
    desc: "Eco-conscious practices at the core of everything we do.",
  },
  {
    icon: "👪",
    title: "Warm Hospitality",
    desc: "Family-run with personal attention and genuine care for every guest.",
  },
  {
    icon: "🌅",
    title: "Nature Activities",
    desc: "Trekking, farm walks, yoga, bird watching — all at your doorstep.",
  },
];

// container stagger
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// card animation (blur + fade + slide)
const card = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const WhyChooseUs = () => {
  return (
    <section className="bg-greenDark py-16 sm:py-20 px-4 sm:px-8 md:px-16 overflow-hidden">
      {/* Heading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-[11px] tracking-[0.25em] uppercase text-gold mb-3"
      >
        Why Choose Us
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-12 leading-tight"
      >
        The Sun Valley Difference
      </motion.h2>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {data.map((item, i) => (
          <motion.div
            key={i}
            variants={card}
            whileHover={{ y: -6 }}
            className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 hover:bg-white/10 transition duration-300"
          >
            {/* Icon */}
            <motion.div
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-xl mb-4"
            >
              {item.icon}
            </motion.div>

            {/* Title */}
            <h3 className="font-medium text-white text-lg mb-2">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
