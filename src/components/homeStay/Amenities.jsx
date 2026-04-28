import React from "react";
import { motion } from "framer-motion";

/* animations */
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const amenities = [
  {
    icon: "❄️",
    label: "Climate",
    title: "Air Conditioned",
    desc: "All rooms fully AC — cool restful sleep guaranteed.",
  },
  {
    icon: "🦟",
    label: "Protection",
    title: "Insect Proofed",
    desc: "Mosquito protection on all windows and doors.",
  },
  {
    icon: "📶",
    label: "Connectivity",
    title: "Free Wi-Fi + TV",
    desc: "Stay connected or completely unplug.",
  },
  {
    icon: "🏊",
    label: "Recreation",
    title: "Spring Pool",
    desc: "Natural underground spring-fed pool.",
  },
  {
    icon: "🍳",
    label: "Dining",
    title: "Farm Kitchen",
    desc: "Fresh organic Kerala meals daily.",
  },
  {
    icon: "🏸",
    label: "Sports",
    title: "Sports Court",
    desc: "Indoor & outdoor games for families.",
  },
  {
    icon: "🌿",
    label: "Nature",
    title: "10-Acre Farm",
    desc: "A living biodiversity experience.",
  },
  {
    icon: "🛕",
    label: "Culture",
    title: "Temple Visits",
    desc: "Explore Kerala–Tamil Nadu traditions.",
  },
];

const Amenities = () => {
  return (
    <section className="relative bg-sand py-16 md:py-24 px-6 overflow-hidden">
      {/* background glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 
        bg-[radial-gradient(circle_at_80%_20%,rgba(212,175,55,0.15),transparent_60%)]"
      />

      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">
          Facilities
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mt-2">
          Everything You{" "}
          <span className="italic text-ga font-display">Need</span>
        </h2>

        <div className="w-12 h-[2px] bg-gradient-to-r from-gold to-[#e2c06a] mx-auto mt-4"></div>

        <p className="mt-4 text-tm text-sm md:text-base">
          Comfort without compromise, right in the heart of nature.
        </p>
      </div>

      {/* GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid 
        sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
      >
        {amenities.map((itemData, i) => (
          <motion.div
            key={i}
            variants={item}
            whileHover={{ y: -8 }}
            className="group relative bg-white/70 backdrop-blur-md 
            border border-white/40 rounded-xl p-6 
            shadow-[0_8px_30px_rgba(0,0,0,0.05)] 
            hover:shadow-xl transition-all duration-500 overflow-hidden"
          >
            {/* glow on hover */}
            <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition duration-500" />

            {/* ICON */}
            <div
              className="w-12 h-12 flex items-center justify-center 
              rounded-full bg-gradient-to-br from-gold/20 to-gold/10 
              text-2xl mb-4 group-hover:scale-110 transition duration-300"
            >
              {itemData.icon}
            </div>

            {/* LABEL */}
            <p className="text-[10px] uppercase tracking-[0.2em] text-gold mb-1">
              {itemData.label}
            </p>

            {/* TITLE */}
            <h3 className="font-serif text-lg text-gd">{itemData.title}</h3>

            {/* DESC */}
            <p className="text-sm text-tm mt-2 leading-relaxed">
              {itemData.desc}
            </p>

            {/* bottom accent line */}
            <div
              className="absolute bottom-0 left-0 w-0 h-[2px] 
              bg-gradient-to-r from-gold to-[#e2c06a] 
              group-hover:w-full transition-all duration-500"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Amenities;
