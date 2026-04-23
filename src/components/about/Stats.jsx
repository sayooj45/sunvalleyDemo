import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// animation container
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// each stat animation
const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// custom counter
const Counter = ({ end, decimals = 0, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
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
  { num: 2, suffix: "", label: "Properties" },
  { num: 500, suffix: "+", label: "Happy Guests" },
  { num: 4.9, suffix: "", label: "Guest Rating", decimals: 1 },
  { num: 8, suffix: "+", label: "Years of Hosting" },
];

const Stats = () => {
  return (
    <section className="bg-white border-y">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x"
      >
        {stats.map((itemData, i) => (
          <motion.div
            key={i}
            variants={item}
            className="py-8 sm:py-10 md:py-12 px-4 flex flex-col items-center hover:bg-gray-50 transition"
          >
            {/* Number */}
            <p className="font-serif text-3xl sm:text-4xl md:text-5xl text-green-900">
              <Counter
                end={itemData.num}
                decimals={itemData.decimals || 0}
                suffix={itemData.suffix}
              />
            </p>

            {/* Label */}
            <p className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gray-500 text-center">
              {itemData.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Stats;
