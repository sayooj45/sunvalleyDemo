import React from "react";
import { motion } from "framer-motion";
import travel from "../images/home/travel.jpg";
import sunNMore from "../images/home/sunNMore.jpg";
const data = [
  {
    title: "Sunvalley Transit",
    desc: "Your gateway to the Nilgiris and South India. Enjoy seamless airport and railway transfers, Ooty & Coonoor sightseeing, and fully customized travel packages with safe, reliable service.",
    image: travel,
    link: "https://www.sunvalleytransit.com/",
  },
  {
    title: "Sun 'N' More Palgap",
    desc: "Inspired by the Palakkad Gap, Palgap brings authentic, nutrient-rich meals crafted with modern food safety and responsible practices you can trust.",
    image: sunNMore,
    link: "https://sunnmore.palgap.com/",
  },
];

const FeaturedBrands = () => {
  return (
    <section className="bg-[#f7f5f2] py-20 px-4 sm:px-8 md:px-16">
      {/* Heading */}
      <div className="max-w-8xl mx-auto mb-14">
        <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-3">
          Our Ventures
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-greenDark">
          Explore Our Other Experiences
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-10">
        {data.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition bg-white"
          >
            {/* Image */}
            <div className="relative h-[260px] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-serif text-2xl text-greenDark mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                {item.desc}
              </p>

              {/* CTA */}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm tracking-widest uppercase border-b border-green-900 text-green-900 hover:text-green-700 transition"
              >
                Visit Website →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBrands;
