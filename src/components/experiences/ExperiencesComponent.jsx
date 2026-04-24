import React from "react";
import { motion } from "framer-motion";
import ActivityCard from "./ActivityCard";

const activities = [
  {
    title: "Nature Trekking",
    desc: "Guided trails through tea gardens, forests, and hilltops of Coonoor.",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
  },
  {
    title: "Farm Walk & Harvest",
    desc: "Explore the organic farm and learn sustainable farming.",
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
  },
  {
    title: "Yoga & Meditation",
    desc: "Morning sessions guided by our wellness practitioner.",
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80",
  },
  {
    title: "Cooking Class",
    desc: "Learn authentic Kerala recipes using fresh ingredients.",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
  },
  {
    title: "Bird Watching",
    desc: "Spot Nilgiri and Palakkad birds with expert guidance.",
    img: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=600&q=80",
  },
  {
    title: "Bonfire Evenings",
    desc: "Music, stories, and starlit nights around the fire.",
    img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const ExperiencesComponent = () => {
  return (
    <div className="bg-[#faf7f2] pt-16">
      {/* HEADER */}
      <section className="px-6 md:px-16 py-16">
        <p className="text-xs tracking-[0.3em] text-yellow-600 uppercase font-semibold mb-3">
          Experiences
        </p>

        <h1 className="font-serif text-4xl md:text-5xl mb-4 text-greenDark">
          Activities & Adventures
        </h1>

        <p className="text-gray-500 max-w-xl text-sm leading-relaxed">
          Immerse yourself in nature, farm life, and local culture at Sun
          Valley.
        </p>
      </section>

      {/* ACTIVITIES GRID */}
      <section className="px-6 md:px-16 pb-16">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {activities.map((activity, i) => (
            <ActivityCard key={i} activity={activity} variants={item} />
          ))}
        </motion.div>
      </section>

      {/* PACKAGE BANNER */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mx-6 md:mx-16 mb-16 bg-green-900 text-white rounded-xl p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
      >
        <div>
          <h2 className="font-serif text-2xl md:text-3xl mb-2">
            Weekend & Weekday Packages
          </h2>
          <p className="text-white/70 text-sm">
            Curated packages combining stay, meals & activities.
          </p>
        </div>

        <a
          href="https://wa.me/919582598568"
          className="border border-white/70 px-6 py-3 text-xs tracking-widest uppercase hover:bg-white/10 transition"
        >
          Enquire for Packages
        </a>
      </motion.section>
    </div>
  );
};

export default ExperiencesComponent;
