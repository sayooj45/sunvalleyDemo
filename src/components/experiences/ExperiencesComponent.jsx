import React from "react";
import { motion } from "framer-motion";
import ActivityCard from "./ActivityCard";
import bird from "../images/experience/bird.jpg";
import walk from "../images/experience/walk.jpg";
import nature from "../images/experience/nature.jpg";
import evg from "../images/experience/evg.jpg";
import kidsRoom from "../images/experience/kidsRoom.jpg";
import gym from "../images/experience/gym.jpg";
const activities = [
  {
    title: "Nature Trekking",
    desc: "Guided trails through tea gardens, forests, and hilltops of Coonoor.",
    img: nature,
  },
  {
    title: "Farm Walk & Harvest",
    desc: "Explore the organic farm and learn sustainable farming.",
    img: walk,
  },
  {
    title: "Kids Play Room",
    desc: "A cheerful and safe indoor space where children can play, learn, and have fun while parents relax.",
    img: kidsRoom,
  },
  {
    title: "Gym & Fitness",
    desc: "A well-equipped space to maintain your workout routine during your stay.",
    img: gym,
  },
  {
    title: "Bird Watching",
    desc: "Spot Nilgiri and Palakkad birds with expert guidance.",
    img: bird,
  },
  {
    title: "Bonfire Evenings",
    desc: "Music, stories, and starlit nights around the fire.",
    img: evg,
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
