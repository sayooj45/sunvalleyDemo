import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import mithila from "../images/farmStay/mithila.jpg";
import dwaraka from "../images/farmStay/dwaraka.jpg";

const rooms = [
  {
    slug: "Mithila-villa",
    name: "Mithila Villa",
    img: mithila,
    desc: "Warm and earthy, perfect for couples seeking a peaceful retreat.",
    longDesc: [
      "Mithila Villa is a calm and intimate stay experience surrounded by lush greenery and peaceful farm landscapes. Designed with simplicity and warmth, the villa offers a cozy atmosphere perfect for couples and travelers looking to reconnect with nature.",
      "Wake up to the soothing sounds of birds, enjoy fresh countryside air, and unwind in a space thoughtfully created for relaxation. Natural textures, earthy interiors, and soft lighting create a warm and welcoming ambiance throughout your stay.",
      "The villa blends modern comfort with rustic charm, giving guests a refreshing escape from busy city life. Large windows invite natural light into the room while offering beautiful views of the surrounding farm environment.",
      "Whether you're enjoying a quiet morning coffee, reading a book indoors, or simply relaxing after exploring the property, Mithila Villa provides the perfect peaceful retreat.",
      "Guests can enjoy comfortable bedding, essential modern amenities, and serene outdoor surroundings that make every moment feel calm and refreshing.",
    ],
    size: "250 sq.ft",
    guests: "2 Adults",
    bed: "Queen Size Bed",
    view: "Garden & Farm View",
  },

  {
    slug: "Dwarka-villa",
    name: "Dwarka Villa",
    img: dwaraka,
    desc: "Spacious comfort with serene farm views and natural light.",
    longDesc: [
      "Dwarka Villa offers a spacious and refreshing stay experience surrounded by nature and open farm landscapes. The villa is designed for guests who appreciate comfort, simplicity, and peaceful countryside living.",
      "Filled with natural light and calming interiors, the villa creates a relaxing atmosphere ideal for families, couples, or small groups seeking a quiet getaway.",
      "Large windows frame beautiful views of the greenery outside, allowing guests to feel connected to nature throughout their stay. The open and airy design enhances comfort while maintaining a warm and elegant charm.",
      "Spend your mornings enjoying fresh air and scenic surroundings, and your evenings relaxing in the peaceful ambiance of the farm stay environment.",
      "Dwarka Villa combines modern convenience with natural beauty, offering a memorable stay experience where comfort and tranquility come together effortlessly.",
    ],
    size: "320 sq.ft",
    guests: "4 Adults",
    bed: "King Size Bed",
    view: "Farm & Landscape View",
  },
];

const section = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 45 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const FarmStayRoomDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const room = rooms.find((item) => item.slug === slug);

  /* ROOM NOT FOUND */
  if (!room) {
    return (
      <section className="min-h-screen bg-gd text-white flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-serif mb-4">
            Room Not Found
          </h1>

          <p className="text-white/60 max-w-md mx-auto">
            The room you are looking for does not exist.
          </p>

          <button
            onClick={() => navigate("/farm-stay")}
            className="mt-8 px-6 py-3 border border-gl text-gl rounded-lg hover:bg-gl hover:text-black transition"
          >
            Back to Rooms
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="bg-gd text-white overflow-hidden">
      {/* HERO */}
      <div className="relative h-[65vh] sm:h-[75vh] md:h-[85vh]">
        <img
          src={room.img}
          alt={room.name}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-6 pb-10 md:pb-16"
        >
          <p className="text-gl uppercase tracking-[0.35em] text-xs md:text-sm mb-3">
            Farm Stay Experience
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif max-w-4xl leading-tight">
            {room.name}
          </h1>

          <p className="mt-4 text-white/70 max-w-2xl text-sm md:text-base">
            Peaceful stays surrounded by nature, greenery, and comfort.
          </p>
        </motion.div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-3 gap-10 md:gap-14">
        {/* LEFT */}
        <motion.div
          variants={section}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-serif mb-6"
          >
            Relax, Reconnect & Recharge
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-white/75 leading-relaxed text-base md:text-lg mb-8"
          >
            {room.desc}
          </motion.p>

          <div className="space-y-6">
            {room.longDesc.map((para, index) => (
              <motion.p
                key={index}
                variants={fadeUp}
                className="text-white/60 text-sm md:text-base leading-relaxed"
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* INFO */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          >
            <Info title="Room Size" value={room.size} />
            <Info title="Guests" value={room.guests} />
            <Info title="Bed Type" value={room.bed} />
            <Info title="View" value={room.view} />
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:sticky top-28 h-fit"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-serif mb-6">
              Book Your Stay
            </h3>

            <ul className="space-y-4 text-sm md:text-base text-white/70 mb-8">
              <li>✓ Complimentary Wi-Fi</li>
              <li>✓ Farm View Experience</li>
              <li>✓ Comfortable Bedding</li>
              <li>✓ Nature Walk Access</li>
              <li>✓ Parking Available</li>
              <li>✓ Peaceful Environment</li>
            </ul>

            <button
              onClick={() => navigate("/contact")}
              className="w-full bg-gl text-black py-3 rounded-xl font-semibold hover:scale-[1.02] transition"
            >
              Reserve Now
            </button>

            <button
              onClick={() => navigate("/farm-stay")}
              className="w-full mt-3 border border-white/20 py-3 rounded-xl hover:bg-white/5 transition"
            >
              View All Rooms
            </button>
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="border-t border-white/10 py-16 px-6 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-serif">
          Experience the Beauty of{" "}
          <span className="text-gl italic">Farm Living</span>
        </h2>

        <p className="text-white/60 mt-4 max-w-xl mx-auto">
          Escape into nature and enjoy a peaceful farm stay experience crafted
          for relaxation and comfort.
        </p>

        <button
          onClick={() => navigate("/contact")}
          className="mt-8 px-8 py-3 bg-gl text-black rounded-xl font-semibold hover:scale-105 transition"
        >
          Contact Us
        </button>
      </motion.div>
    </section>
  );
};

/* INFO CARD */
const Info = ({ title, value }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="rounded-xl border border-white/10 bg-white/5 p-4"
    >
      <p className="text-[11px] uppercase tracking-[0.25em] text-gl mb-2">
        {title}
      </p>

      <p className="text-sm md:text-base text-white">{value}</p>
    </motion.div>
  );
};

export default FarmStayRoomDetails;
