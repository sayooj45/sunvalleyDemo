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
      title: "Tiffin Items",
      items: [
        { name: "Idly (1 set)", price: "₹130" },
        { name: "Plain Dosa", price: "₹50" },
        { name: "Variety Dosa", price: "₹60" },
        { name: "Poori Masala / Bhatura", price: "₹150" },
        { name: "Uthappam", price: "₹60" },
      ],
    },
    {
      title: "Rice Items",
      items: [
        { name: "Chicken Fried Rice", price: "₹250" },
        { name: "Egg Fried Rice", price: "₹240" },
        { name: "Chicken Biriyani", price: "₹280" },
        { name: "Veg Peas Pulav/ Biriyani", price: "₹220" },
        { name: "Veg Meals", price: "₹250" },
      ],
    },
    {
      title: "Main Course",
      items: [
        { name: "Paneer Butter Masala", price: "₹240" },
        { name: "Aloo Jeera Fry", price: "₹160" },
        { name: "Butter Chicken Masala", price: "₹280" },
        { name: "Kerala Chicken Curry", price: "₹250" },
        { name: "Chicken Chettinad", price: "₹250" },
      ],
    },
    {
      title: "Beverage",
      items: [
        { name: "Tea", price: "₹40" },
        { name: "Masala Tea", price: "₹45" },
        { name: "Lemon tea", price: "₹45" },
        { name: "Mint Lemon ( Soda / Juice)", price: "₹150" },
        { name: "Milkshake", price: "₹180" },
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
          Homestyle Flavors. Freshly Served. Warmly Shared.
        </h2>

        <p className="text-gray-600 text-sm leading-relaxed">
          Every dish is freshly prepared with locally sourced ingredients and
          homemade care — bringing authentic flavors, comforting tastes, and a
          true homestay dining experience.
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
