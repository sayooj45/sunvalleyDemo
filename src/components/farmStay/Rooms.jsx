import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Rooms = () => {
  const rooms = [
    {
      name: "Mithila Room",
      img: "https://sunvalleyfarmstay.com/images/mithila2.png",
      desc: "Warm and earthy, perfect for couples seeking a peaceful retreat.",
    },
    {
      name: "Dwarka Room",
      img: "https://sunvalleyfarmstay.com/images/Dwaraka2.png",
      desc: "Spacious comfort with serene farm views and natural light.",
    },
    {
      name: "Dwarka Deluxe Room",
      img: "https://sunvalleyfarmstay.com/images/204.png",
      desc: "Premium stay with enhanced comfort, privacy, and elegance.",
    },
  ];

  return (
    <section className="bg-gd text-white py-16 md:py-24 px-6">
      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-xs tracking-[0.3em] text-gl uppercase mb-3">
          Stay Experience
        </p>

        <h2 className="text-3xl md:text-5xl font-serif leading-tight">
          Our <span className="italic text-gl">Rooms</span>
        </h2>

        <p className="text-white/60 mt-4 text-sm md:text-base">
          Thoughtfully designed spaces blending comfort, nature, and simplicity.
        </p>
      </div>

      {/* ROOMS */}
      <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
        {rooms.map((room, i) => (
          <RoomRow key={i} room={room} reverse={i % 2 !== 0} />
        ))}
      </div>
    </section>
  );
};

/* ROW (ALTERNATING LAYOUT) */
const RoomRow = ({ room, reverse }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
        reverse ? "md:grid-flow-dense" : ""
      }`}
    >
      {/* IMAGE */}
      <div className={`${reverse ? "md:col-start-2" : ""}`}>
        <div className="overflow-hidden rounded-xl">
          <img
            src={room.img}
            alt={room.name}
            className="w-full h-[260px] sm:h-[320px] md:h-[400px] object-cover 
            hover:scale-105 transition duration-700"
          />
        </div>
      </div>

      {/* TEXT */}
      <div className="max-w-md">
        <h3 className="text-2xl md:text-3xl font-serif mb-3">{room.name}</h3>

        <div className="w-10 h-[2px] bg-gl mb-4"></div>

        <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6">
          {room.desc}
        </p>
        {/* 
        <button
          className="text-gl text-sm uppercase tracking-widest border-b border-gl/50 pb-1 hover:opacity-80 transition"
          onClick={() => {
            navigate("/contact");
          }}
        >
          Book Now →
        </button> */}
      </div>
    </motion.div>
  );
};

export default Rooms;
