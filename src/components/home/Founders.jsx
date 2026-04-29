import React from "react";
import { motion } from "framer-motion";
import founder from "../images/home/founders.jpeg";
const founders = [
  {
    name: "Ayyavu Dhinesh",
    role: "Founder & Vision Lead",
    desc: "Leads the vision of Sunvalley with dedication, growth planning, and premium guest experiences.",
    letter: "A",
    color: "bg-[#17351f]",
  },
  {
    name: "Deepthi Dhinesh",
    role: "Co-Founder & Guest Experience",
    desc: "Creates a warm, elegant, and welcoming atmosphere that makes every stay memorable.",
    letter: "D",
    color: "bg-yellow-600",
  },
  {
    name: "Shyma Dhinesh",
    role: "Co-Founder & Host",
    desc: "The heart of hospitality. She ensures every guest feels at home with care and comfort.",
    letter: "S",
    color: "bg-[#234d2c]",
  },
];

const Founders = () => {
  return (
    <section className="py-16 md:py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.35em] text-yellow-700 mb-3">
            The People Behind Sunvalley
          </p>

          <h2 className="text-3xl md:text-5xl font-serif text-[#17351f]">
            Meet the Founders
          </h2>

          <div className="w-20 h-[2px] bg-yellow-600 mx-auto mt-5 rounded-full" />
        </div>

        {/* Top Layout */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
          {/* Group Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={founder}
              alt="Sunvalley Founders"
              className="w-full h-[520px] object-cover rounded-3xl shadow-xl"
            />

            <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-md px-5 py-4 rounded-2xl shadow-lg">
              <p className="text-xs uppercase tracking-[0.3em] text-yellow-700">
                Sunvalley Team
              </p>
              <p className="font-serif text-xl text-[#17351f] mt-1">
                Built With Passion
              </p>
            </div>
          </motion.div>

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-serif text-3xl md:text-4xl text-[#17351f] leading-snug">
              Hospitality, Nature & Family Values
            </h3>

            <p className="mt-5 text-gray-600 leading-relaxed text-base md:text-lg">
              Sunvalley is shaped by passionate founders who combine comfort,
              personalized hosting, and sustainable living to create unique
              experiences across every property.
            </p>

            <p className="mt-5 italic text-gray-500">
              “More than a stay — it’s a family experience.”
            </p>
          </motion.div>
        </div>

        {/* Founder Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {founders.map((person, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white border border-[#ece6da] rounded-3xl p-6 shadow-sm hover:shadow-xl transition duration-500 flex gap-5"
            >
              <div
                className={`w-16 h-16 rounded-full ${person.color} text-white flex items-center justify-center text-xl font-semibold shrink-0`}
              >
                {person.letter}
              </div>

              <div>
                <h3 className="font-serif text-2xl text-[#17351f]">
                  {person.name}
                </h3>

                <p className="text-xs uppercase tracking-[0.3em] text-yellow-700 mt-1 mb-3">
                  {person.role}
                </p>

                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {person.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
