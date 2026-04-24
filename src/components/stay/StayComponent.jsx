import React from "react";
import { motion } from "framer-motion";
import main from "../images/stay/main.jpg";
import garden from "../images/stay/garden.jpg";
const stays = [
  {
    location: "Coonoor · Nilgiris · Tamil Nadu",
    name: "Sunvalley Homestay",
    tagline: "A peaceful mountain retreat in the tea-garden hills of Coonoor",
    btn: "Enquire for Homestay",
    rooms: [
      {
        name: "Main Block",
        img: main,
        tags: ["En-suite Bath", "Mountain View", "Hot Water"],
      },
      {
        name: "Garden Room",
        img: garden,
        tags: ["Private Garden", "WiFi", "Breakfast"],
      },
    ],
    highlights: [
      "Organic Dining",
      "Nature Walks",
      "Tea Garden",
      "Bonfire",
      "Parking",
      "Family Rooms",
    ],
    highlightBg: "bg-green-50",
  },
  {
    location: "Chittur · Palakkad · Kerala",
    name: "Sunvalley Farmstay",
    tagline: "Rural tranquility and organic farm life in Palakkad",
    btn: "Enquire for Farmstay",
    rooms: [
      {
        name: "Farm Cottage",
        img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=80",
        tags: ["Farm View", "Open Verandah", "AC / Fan"],
      },
      {
        name: "Garden Hut",
        img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=700&q=80",
        tags: ["Eco Design", "Farm Access", "Organic Meals"],
      },
    ],
    highlights: [
      "Paddy Farm Walk",
      "Veg Picking",
      "Cooking Class",
      "Bird Watching",
    ],
    highlightBg: "bg-orange-50",
  },
];

const StayComponent = () => {
  return (
    <section className=" py-12 md:py-16 px-4 md:px-10 lg:px-16 space-y-10">
      {stays.map((stay, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden"
        >
          {/* HEADER */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 px-6 md:px-10 py-6 border-b border-gray-200">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-2">
                {stay.location}
              </p>

              <h2 className="font-serif text-2xl md:text-3xl text-gray-900">
                {stay.name}
              </h2>

              <p className="text-sm text-gray-600 mt-2 max-w-xl">
                {stay.tagline}
              </p>
            </div>

            <button className="relative overflow-hidden group border border-green-900 text-green-900 px-6 py-2 text-xs tracking-[0.18em] uppercase">
              <span className="relative z-10 group-hover:text-white transition">
                {stay.btn}
              </span>
              <span className="absolute inset-0 bg-green-900 translate-y-full group-hover:translate-y-0 transition duration-300"></span>
            </button>
          </div>

          {/* BODY */}
          <div className="grid lg:grid-cols-3 p-5 gap-6">
            {/* ROOMS */}
            {stay.rooms.map((room, idx) => (
              <div key={idx} className="group ">
                <div className="overflow-hidden">
                  <img
                    src={room.img}
                    alt={room.name}
                    className="w-full h-[220px] object-cover group-hover:scale-105 transition duration-500  rounded-xl"
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                    {room.name}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {room.tags.map((tag, t) => (
                      <span
                        key={t}
                        className="text-xs border border-gray-300 px-3 py-1 rounded-full text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* HIGHLIGHTS */}
            <div
              className={`${stay.highlightBg} p-6 md:p-8 flex flex-col justify-center`}
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-yellow-600 mb-5">
                Property Highlights
              </p>

              <div className="flex flex-wrap gap-3">
                {stay.highlights.map((h, idx) => (
                  <span
                    key={idx}
                    className="text-sm px-4 py-1.5 rounded-full bg-white/80 border text-gray-700"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default StayComponent;
