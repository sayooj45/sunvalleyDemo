import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const data = [
  {
    rating: 5,
    review:
      "Woke up every morning to mist over the tea gardens. The food was the best part — everything fresh from the farm.",
    name: "Rajesh K",
    location: "Bangalore",
  },
  {
    rating: 5,
    review:
      "The farmstay in Palakkad was a completely different experience — kids loved the organic farm tour. Highly recommend.",
    name: "Ananya M",
    location: "Kochi",
  },
  {
    rating: 5,
    review:
      "Stayed for 4 nights in Coonoor. Shyma and Dhinesh are incredible hosts. Felt like coming home.",
    name: "Priya S",
    location: "Chennai",
  },
];

// stagger container
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// card animation
const card = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Review = () => {
  return (
    <section className="bg-cream py-16 sm:py-20 px-4 sm:px-8 md:px-16 overflow-hidden">
      {/* Heading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-[11px] tracking-[0.25em] uppercase text-gold mb-3"
      >
        Guest Voices
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="font-serif text-3xl sm:text-4xl md:text-5xl text-greenDark mb-12 leading-tight"
      >
        What Our Guests Say
      </motion.h2>

      {/* Cards */}
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
            className="bg-white rounded-xl shadow-sm hover:shadow-lg transition duration-300 p-6 flex flex-col"
          >
            {/* Stars */}
            <div className="flex gap-1 text-gold mb-4">
              {[...Array(item.rating)].map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: i * 0.2 + index * 0.05,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  <FaStar className="text-sm" />
                </motion.div>
              ))}
            </div>

            {/* Review */}
            <p className="text-sm text-gray-600 leading-relaxed italic mb-6 flex-grow">
              "{item.review}"
            </p>

            {/* Reviewer */}
            <div className="flex items-center gap-3">
              {/* Avatar */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-greenLight text-white flex items-center justify-center text-sm font-semibold"
              >
                {item.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </motion.div>

              {/* Name + Location */}
              <div>
                <p className="text-sm font-medium text-greenDark">
                  {item.name}
                </p>
                <p className="text-xs text-gray-500">{item.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Review;
