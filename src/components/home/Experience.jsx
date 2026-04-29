import React from "react";
import { motion } from "framer-motion";
import homestay from "../images/home/homestay.jpg";
import farmstay from "../images/home/farmstay.png";
import { useNavigate } from "react-router-dom";

const data = [
  {
    title: "Homestay",
    location: "COONOOR · NILGIRIS",
    img: homestay,
    desc: "A serene retreat in the hills of Coonoor, surrounded by tea gardens and misty mountains.",
    button: "View Rooms",
    link: "/home-stay",
  },
  {
    title: "Farmstay",
    location: "PALAKKAD · KERALA",
    img: farmstay,
    desc: "Authentic rural life in Chittur, Palakkad — organic farming, open skies, warm hospitality.",
    button: "View Rooms",
    link: "/farm-stay",
  },
];

// Container for stagger effect
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Card animation
const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Experience = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[#f7f5f2] py-16 sm:py-20 px-4 sm:px-8 md:px-16">
      {/* Heading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-[10px] tracking-[0.25em] uppercase text-[#c9922a] mb-3"
      >
        What We Offer
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="font-serif text-3xl sm:text-4xl md:text-5xl text-green-900 mb-4 leading-tight"
      >
        The Sunvalley Experience
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-gray-500 max-w-xl mb-14 text-sm sm:text-base"
      >
        Two unique destinations, one philosophy — nature, sustainability, and
        warmth.
      </motion.p>

      {/* Cards Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8"
      >
        {data.map((item, i) => (
          <motion.div
            key={i}
            variants={cardVariant}
            whileHover={{ y: -8 }}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <motion.img
                src={item.img}
                alt={item.title}
                className="w-full h-[200px] sm:h-[220px] object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6 flex flex-col flex-grow">
              <span className="text-[10px] tracking-[0.18em] uppercase bg-gray-100 text-gray-600 px-3 py-1 rounded-full inline-block mb-4 w-fit">
                {item.location}
              </span>

              <h3 className="font-serif text-lg sm:text-xl text-green-900 mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed flex-grow">
                {item.desc}
              </p>

              <button
                className="mt-5 w-fit text-[11px] tracking-[0.18em] uppercase border border-green-900 text-green-900 px-4 py-2 hover:bg-green-900 hover:text-white transition"
                onClick={() => navigate(item.link)}
              >
                {item.button}
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
