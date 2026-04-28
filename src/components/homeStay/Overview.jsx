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
            src="https://sunvalleyhomestay.com/wp-content/uploads/2023/07/lambrock2.jpg"
            className="col-span-2 rounded-lg aspect-video object-cover 
            hover:scale-[1.03] transition duration-700"
          />

          {/* others */}
          {[
            "https://sunvalleyhomestay.com/wp-content/uploads/2021/12/valley-view-executive4-1920x1280.jpg",
            "https://sunvalleyhomestay.com/wp-content/uploads/2023/07/IMG20230227111353.jpg",
            "https://sunvalleyhomestay.com/wp-content/uploads/2023/07/valley-view-pent-house2.jpg",
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
            <span className="italic text-ga font-display">in the Hills</span>
          </motion.h2>

          <motion.div variants={item} className="w-12 h-[3px] bg-gold mt-4" />

          <motion.p
            variants={item}
            className="mt-6 text-tb text-sm md:text-base leading-relaxed"
          >
            Sunvalley Homestay is located in Ottupattarai, Coonoor-Ooty, Tamil
            Nadu - 643105, India. Our holiday home is ideal for nature lovers
            seeking a peaceful escape away from city pollution and crowds,
            surrounded by breathtaking views and refreshing natural beauty.
          </motion.p>

          <motion.p
            variants={item}
            className="mt-4 text-tb text-sm md:text-base leading-relaxed"
          >
            As you arrive, you’ll be welcomed with warm hospitality and a homely
            ambiance. Our dedicated staff ensures your stay is comfortable,
            relaxing, and truly memorable.
          </motion.p>

          {/* STATS */}
          <motion.div
            variants={item}
            className="grid grid-cols-2 sm:grid-cols-4 mt-8 border border-gd/20 rounded-lg overflow-hidden"
          >
            <Stat num="6" label="Luxury Rooms" />
            <Stat num="21" label="Guests Stay" />
            <Stat num="40m" label="From Main Block" />
            <Stat num="₹15k+" label="Packages Start" />
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
