import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 35, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Counter = ({ end, decimals = 0, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1800;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Number(start.toFixed(decimals)));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, decimals]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const stats = [
  { num: 2, suffix: "", label: "Premium Properties" },
  { num: 500, suffix: "+", label: "Happy Guests" },
  { num: 4.9, suffix: "", label: "Guest Rating", decimals: 1 },
  { num: 8, suffix: "+", label: "Years Experience" },
];

const Stats = () => {
  return (
    <section className="py-14 md:py-20 bg-gradient-to-b from-[#f8f8f4] via-white to-[#f8f8f4]">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 grid grid-cols-2 xl:grid-cols-4 gap-5"
      >
        {stats.map((itemData, i) => (
          <motion.div
            key={i}
            variants={item}
            whileHover={{ y: -8 }}
            className="relative overflow-hidden rounded-3xl bg-white border border-[#ece9df] shadow-sm hover:shadow-2xl transition-all duration-500 px-6 py-10 text-center"
          >
            {/* glow */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-800 via-yellow-600 to-green-800" />

            {/* number */}
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#16351f] leading-none">
              <Counter
                end={itemData.num}
                decimals={itemData.decimals || 0}
                suffix={itemData.suffix}
              />
            </h3>

            {/* divider */}
            <div className="w-12 h-[2px] bg-yellow-600 mx-auto my-5 rounded-full" />

            {/* label */}
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-gray-500 leading-relaxed">
              {itemData.label}
            </p>

            {/* bg number */}
            {/* <span className="absolute -bottom-5 right-3 text-7xl font-serif text-black/[0.03] select-none">
              0{i + 1}
            </span> */}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Stats;
