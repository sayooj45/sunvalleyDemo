import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const stays = [
  {
    location: "Coonoor · Nilgiris · Tamil Nadu",
    name: "Sunvalley Homestay",
    description:
      "Nestled in the misty hills of Coonoor, Sunvalley Homestay offers elegantly furnished rooms with modern amenities in a clean, serene environment. Surrounded by tea gardens and mountain air, it's the perfect retreat for solo travelers, couples, and families seeking a genuine hill-station escape.",
    btn: "Enquire for Homestay",
    link: "/home-stay",
    contactEmail: "sunvalleyhomestay@gmail.com",
    contactPhone: "+91 95825 98568",
    quote: "Where every morning begins with mountain mist.",
    rooms: [
      {
        name: "Valley View Pent House",
        img: "https://sunvalleyhomestay.com/wp-content/uploads/2023/07/valley-view-pent-house2.jpg",
      },
      {
        name: "Valley View Deluxe Room",
        img: "https://sunvalleyhomestay.com/wp-content/uploads/2021/12/valley-view-deluxe-family3-1920x1280.jpg",
      },
      {
        name: "Earthly Living Valley Room",
        img: "https://sunvalleyhomestay.com/wp-content/uploads/2023/07/EarthyLivingDeluxe4.jpg",
      },
      {
        name: "Valley View Executive Room",
        img: "https://sunvalleyhomestay.com/wp-content/uploads/2021/12/valley-view-executive4-1920x1280.jpg",
      },
    ],
    highlights: [
      "Picnic Spot",
      "Hill-station",
      "Lamb's Rock",
      "View Point",
      "Boating",
      "Swimming",
      "Tea Plantation",
      "Ketti Valley",
    ],
  },
  {
    location: "Chittur · Palakkad · Kerala",
    name: "Sunvalley Farmstay",
    description:
      "Spread across 10 acres in Chittur, Palakkad, Sunvalley Farmstay is a family-owned sustainable farm with 25-year-old twin farmhouses. Feed lambs, calves, ducks and emus, taste farm-fresh organic food, and reconnect with authentic Kerala rural life — a perfect getaway for the young and young at heart.",
    btn: "Enquire for Farmstay",
    link: "/farm-stay",
    contactEmail: "sunvalleyfarmstay@gmail.com",
    contactPhone: "+91 88258 77432",
    quote: "Where farm life meets heartfelt hospitality.",
    rooms: [
      {
        name: "Mithila Room",
        img: "https://sunvalleyfarmstay.com/images/mithila2.png",
      },
      {
        name: "Dwarka Room",
        img: "https://sunvalleyfarmstay.com/images/Dwaraka2.png",
      },
      {
        name: "Dwarka Deluxe Room",
        img: "https://sunvalleyfarmstay.com/images/204.png",
      },
      {
        name: "Farm View",
        img: "https://www.sunvalleyfarmstay.com/images/gallery/53.jpg",
      },
    ],
    highlights: [
      "Natural Pool",
      "Animal Feeding",
      "Petting Zoo",
      "Farm Activities",
      "Hammock Relaxing",
      "Peaceful Escape",
      "Jeep Safari",
      "Village Visits",
      "Mango Orchards",
      "Temple Tours",
      "Cultural Festivals",
      "Farm Life",
      "Bonfire Nights",
      "Barbecue Evenings",
      "Kids Fun",
      "Nature Living",
    ],
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 45 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const StayComponent = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#eef2ee] py-12 md:py-16 space-y-16 md:space-y-24 px-4 sm:px-6 md:px-10">
      {stays.map((stay, i) => (
        <motion.div
          key={i}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-7xl mx-auto grid lg:grid-cols-[2fr_1fr] rounded-2xl overflow-hidden shadow-xl"
        >
          {/* LEFT CONTENT */}
          <div className="bg-white p-6 sm:p-8 md:p-12 lg:p-14 flex flex-col justify-between">
            <div>
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap items-center gap-2 text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-gray-400 mb-5 font-medium"
              >
                <span className="text-red-500">✦</span>
                {stay.location}
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2D3E2E] mb-5 leading-tight"
              >
                {stay.name}
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="text-gray-600 leading-relaxed text-sm sm:text-base mb-10 max-w-3xl"
              >
                {stay.description}
              </motion.p>

              {/* Rooms */}
              <motion.div
                variants={container}
                className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6"
              >
                {stay.rooms.map((room, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeUp}
                    whileHover={{ y: -6 }}
                    className="space-y-3"
                  >
                    <div className="relative h-52 sm:h-56 overflow-hidden rounded-xl group">
                      <img
                        src={room.img}
                        alt={room.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                      />
                    </div>

                    <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] font-semibold text-[#2D3E2E] border-b border-gray-100 pb-2">
                      {room.name}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.button
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => navigate(stay.link)}
              className="mt-10 bg-[#1A2E1C] text-white px-7 py-4 text-[11px] tracking-[0.22em] uppercase rounded-full w-full sm:w-fit hover:bg-black transition"
            >
              {stay.btn}
            </motion.button>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="bg-[#1A2E1C] text-white p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between">
            <div>
              <motion.p
                variants={fadeUp}
                className="text-[10px] tracking-[0.22em] uppercase text-gray-400 mb-8 opacity-70 font-bold"
              >
                Property Highlights
              </motion.p>

              <motion.h3
                variants={fadeUp}
                className="font-serif italic text-2xl md:text-3xl leading-snug mb-8 text-gray-100"
              >
                "{stay.quote}"
              </motion.h3>

              <motion.div
                variants={container}
                className="grid grid-cols-2 gap-3"
              >
                {stay.highlights.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeUp}
                    whileHover={{ scale: 1.04 }}
                    className="border border-white/15 rounded-full px-3 py-2 text-[10px] sm:text-[11px] text-center hover:bg-white/10 transition"
                  >
                    {item}
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Contact */}
            <motion.div
              variants={fadeUp}
              className="mt-12 pt-8 border-t border-white/10 space-y-3"
            >
              <p className="text-xs text-gray-400 break-all">
                ✉ {stay.contactEmail}
              </p>

              <p className="text-xs text-gray-400">📞 {stay.contactPhone}</p>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default StayComponent;
