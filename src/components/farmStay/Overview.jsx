import React from "react";
import { motion } from "framer-motion";

/* animation system */
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imgAnim = {
  hidden: { opacity: 0, scale: 1.05 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const Overview = () => {
  return (
    <section className="relative bg-sand py-16 md:py-24 px-6 overflow-hidden">
      {/* subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 
        bg-[radial-gradient(circle_at_20%_30%,rgba(212,175,55,0.12),transparent_60%)]"
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center"
      >
        {/* IMAGES */}
        <motion.div
          variants={container}
          className="grid grid-cols-2 gap-2 md:gap-3"
        >
          {/* main */}
          <motion.img
            variants={imgAnim}
            src="https://sunvalleyfarmstay.com/images/sunvalley-farms-palakkad.jpg"
            className="col-span-2 rounded-lg aspect-video object-cover 
            hover:scale-[1.03] transition duration-700"
          />

          {/* others */}
          {[
            "https://sunvalleyfarmstay.com/images/farmstay-in-palakkad.jpg",
            "https://sunvalleyfarmstay.com/images/deluxe-room-at-palakkad.jpg",
            "https://sunvalleyfarmstay.com/images/mithila2.png",
          ].map((img, i) => (
            <motion.img
              key={i}
              variants={imgAnim}
              src={img}
              className="rounded-lg object-cover h-full w-full 
              hover:scale-105 transition duration-700"
            />
          ))}
        </motion.div>

        {/* TEXT */}
        <motion.div variants={container}>
          <motion.p
            variants={item}
            className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-gold mb-3"
          >
            About the Stay
          </motion.p>

          <motion.h2
            variants={item}
            className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight"
          >
            A Home{" "}
            <span className="italic text-ga font-display">on the Farm</span>
          </motion.h2>

          <motion.div variants={item} className="w-12 h-[3px] bg-gold mt-4" />

          <motion.p
            variants={item}
            className="mt-6 text-tb text-sm md:text-base leading-relaxed"
          >
            About 20 km from Palakkad city, on the Kerala–Tamil Nadu border,
            Sunvalley Farmstay is a family-owned farm spanning 10 acres of
            living biodiversity.
          </motion.p>

          <motion.p
            variants={item}
            className="mt-4 text-tb text-sm md:text-base leading-relaxed"
          >
            Both houses are fully independent — ideal for families or groups
            wanting privacy with all home comforts: AC rooms, insect-proofed
            windows, free Wi-Fi, and authentic Kerala farm food.
          </motion.p>

          {/* STATS */}
          <motion.div
            variants={item}
            className="grid grid-cols-2 sm:grid-cols-4 mt-8 border border-gd/20 rounded-lg overflow-hidden"
          >
            <Stat num="2" label="Houses" />
            <Stat num="6" label="Rooms" />
            <Stat num="10" label="Acres" />
            <Stat num="20km" label="From City" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

/* STAT */
const Stat = ({ num, label }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="text-center py-4 md:py-5 border-r last:border-r-0 border-gd/20"
  >
    <div className="text-xl md:text-2xl font-serif text-gd">{num}</div>
    <div className="text-[10px] md:text-xs uppercase tracking-widest text-tm mt-1">
      {label}
    </div>
  </motion.div>
);

export default Overview;
