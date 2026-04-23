import React from "react";
import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
  "https://images.unsplash.com/photo-1506368249639-73a05d6f6488",
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
  "https://images.unsplash.com/photo-1448375240586-882707db888b",
  "https://images.unsplash.com/photo-1448375240586-882707db888b",
];

// container stagger
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// image animation
const imageAnim = {
  hidden: { opacity: 0, scale: 1.05 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Gallery = () => {
  return (
    <section className="bg-cream py-16 sm:py-20 px-4 sm:px-8 md:px-16 overflow-hidden">
      {/* Heading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-[10px] tracking-[0.25em] uppercase text-gold mb-3"
      >
        Gallery
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="font-serif text-3xl sm:text-4xl md:text-5xl text-greenDark mb-10"
      >
        A Glimpse of Sun Valley
      </motion.h2>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 h-[350px] sm:h-[400px] md:h-[420px]"
      >
        {/* Big Image */}
        <motion.div
          variants={imageAnim}
          whileHover={{ scale: 1.02 }}
          className="col-span-2 row-span-2 overflow-hidden rounded-lg h-full relative group"
        >
          <motion.img
            src={images[0]}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6 }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-500"></div>
        </motion.div>

        {/* Small Images */}
        {images.slice(1).map((img, i) => (
          <motion.div
            key={i}
            variants={imageAnim}
            whileHover={{ scale: 1.03 }}
            className="overflow-hidden rounded-lg h-full relative group"
          >
            <motion.img
              src={img}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-500"></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Gallery;
