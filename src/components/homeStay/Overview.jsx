import React from "react";
import jeep from "../images/homeStay/jeep.jpg";
import night from "../images/homeStay/night.jpg";
import view3 from "../images/homeStay/view3.jpg";
import playing from "../images/homeStay/playing.jpg";
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
          {[jeep, view3, playing, night].map((img, i) => (
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
            <span className="italic text-ga font-display">
              Rooted in Nature
            </span>
          </motion.h2>

          <motion.div variants={item} className="w-12 h-[3px] bg-gold mt-4" />

          <motion.p
            variants={item}
            className="mt-6 text-tb text-sm md:text-base leading-relaxed"
          >
            Sunvalley Homestay is nestled in the serene landscapes of
            Ottupattarai, near Coonoor–Ooty in Tamil Nadu, offering a perfect
            blend of comfort, nature, and peaceful living. Surrounded by lush
            green hills, misty valleys, and fresh mountain air, our homestay is
            an ideal retreat for travelers looking to escape the noise and
            stress of city life.
          </motion.p>

          <motion.p
            variants={item}
            className="mt-4 text-tb text-sm md:text-base leading-relaxed"
          >
            Our property is thoughtfully designed to provide a relaxing and
            memorable stay experience. With well-maintained luxury rooms, modern
            amenities, and spacious interiors, guests can enjoy both comfort and
            elegance in the heart of nature. Large windows and balconies open up
            to breathtaking views, allowing you to wake up to the beauty of the
            hills every day.
          </motion.p>

          <motion.p
            variants={item}
            className="mt-4 text-tb text-sm md:text-base leading-relaxed"
          >
            Sunvalley Homestay is perfect for families, couples, and groups
            seeking a calm and refreshing getaway. Whether you're planning a
            peaceful vacation, a short weekend break, or a nature-filled
            holiday, our location offers easy access to nearby attractions while
            still maintaining complete privacy and tranquility.
          </motion.p>

          <motion.p
            variants={item}
            className="mt-4 text-tb text-sm md:text-base leading-relaxed"
          >
            From the moment you arrive, you’ll be welcomed with warm hospitality
            and a homely atmosphere. Our dedicated team ensures personalized
            service, making sure every guest feels comfortable, relaxed, and
            well taken care of throughout their stay.
          </motion.p>

          <motion.p
            variants={item}
            className="mt-4 text-tb text-sm md:text-base leading-relaxed"
          >
            Enjoy the calmness of nature, the charm of hill station living, and
            the comfort of a home away from home at Sunvalley Homestay.
          </motion.p>

          {/* STATS */}
          <motion.div
            variants={item}
            className="grid grid-cols-1 sm:grid-cols-3 mt-8 border border-gd/20 rounded-lg overflow-hidden divide-y sm:divide-y-0 sm:divide-x divide-gd/20"
          >
            <Stat num="22" label="Luxury Rooms" />
            <Stat num="96" label="Guests Stay" />
            <Stat num="₹6k+" label="Packages Start" />
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
