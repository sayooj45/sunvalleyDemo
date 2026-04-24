import React from "react";
import { motion } from "framer-motion";

const ActivityCard = ({ activity, variants }) => {
  return (
    <motion.div
      variants={variants}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 group"
    >
      {/* IMAGE */}
      <div className="overflow-hidden">
        <img
          src={activity.img}
          alt={activity.title}
          className="w-full h-40 object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <h3 className="text-base font-semibold text-gray-900 mb-2">
          {activity.title}
        </h3>

        <p className="text-xs text-gray-500 leading-relaxed">{activity.desc}</p>
      </div>
    </motion.div>
  );
};

export default ActivityCard;
