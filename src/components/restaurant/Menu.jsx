import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Menu = () => {
  const menuData = [
    {
      title: "Breakfast",
      items: [
        { name: "Puttu & Kadala Curry", price: "₹120" },
        { name: "Idiyappam & Egg Curry", price: "₹130" },
        { name: "Farm Omelette Toast", price: "₹100" },
        { name: "Porridge & Fresh Fruits", price: "₹90" },
      ],
    },
    {
      title: "Lunch",
      items: [
        { name: "Kerala Sadya (Veg)", price: "₹250" },
        { name: "Rice & Fish Curry", price: "₹280" },
        { name: "Farm Veg Thali", price: "₹200" },
        { name: "Meen Pollichathu", price: "₹320" },
      ],
    },
    {
      title: "Dinner",
      items: [
        { name: "Karimeen Fry & Rice", price: "₹350" },
        { name: "Chicken Stew & Appam", price: "₹300" },
        { name: "Organic Veg Curry Set", price: "₹220" },
        { name: "Dal Tadka & Chapati", price: "₹180" },
      ],
    },
    {
      title: "Drinks & Snacks",
      items: [
        { name: "Fresh Coconut Water", price: "₹60" },
        { name: "Farm Lemonade", price: "₹70" },
        { name: "Masala Chai", price: "₹50" },
        { name: "Seasonal Juice", price: "₹80" },
      ],
    },
  ];

  return (
    <section className="bg-[#faf7f2] px-6 md:px-16 py-16">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mb-14"
      >
        <p className="text-xs tracking-[0.3em] text-yellow-600 uppercase font-semibold mb-3">
          Our Menu
        </p>

        <h2 className="font-serif text-3xl md:text-4xl text-greenDark mb-4 leading-tight">
          Fresh. Seasonal. Farm-Sourced.
        </h2>

        <p className="text-gray-600 text-sm leading-relaxed">
          Every dish is prepared using ingredients grown locally or sourced
          directly from our farm — ensuring authentic flavors and wholesome
          meals.
        </p>
      </motion.div>

      {/* GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {menuData.map((section, i) => (
          <motion.div
            key={i}
            variants={item}
            className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
          >
            {/* TITLE */}
            <h3 className="font-serif text-2xl text-gray-900 mb-6 border-b pb-3">
              {section.title}
            </h3>

            {/* ITEMS */}
            <div className="space-y-4">
              {section.items.map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-start gap-3">
                    <p className="text-gray-700 text-sm leading-snug group-hover:text-gray-900 transition">
                      {item.name}
                    </p>

                    <span className="text-yellow-600 text-sm font-medium whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>

                  <div className="border-b border-dashed border-gray-200 mt-2 group-hover:border-yellow-400 transition"></div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Menu;
