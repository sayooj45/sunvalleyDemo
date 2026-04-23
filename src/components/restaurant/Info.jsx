import React from "react";
import { motion } from "framer-motion";
import { Clock, MapPin, Phone } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Info() {
  return (
    <section className="bg-green-900 text-white px-6 md:px-16 py-14">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8 text-center"
      >
        {/* Dining Hours */}
        <motion.div
          variants={item}
          className="p-6 rounded-xl hover:bg-white/5 transition duration-300"
        >
          <div className="flex justify-center mb-4">
            <Clock className="w-6 h-6 text-yellow-500" />
          </div>

          <p className="text-xs tracking-[0.25em] text-white/50 mb-3 uppercase">
            Dining Hours
          </p>

          <p className="text-sm leading-relaxed">
            Breakfast: 7:30 – 10:00 AM <br />
            Lunch: 12:30 – 2:30 PM <br />
            Dinner: 7:00 – 9:30 PM
          </p>
        </motion.div>

        {/* Location */}
        <motion.div
          variants={item}
          className="p-6 rounded-xl hover:bg-white/5 transition duration-300"
        >
          <div className="flex justify-center mb-4">
            <MapPin className="w-6 h-6 text-yellow-500" />
          </div>

          <p className="text-xs tracking-[0.25em] text-white/50 mb-3 uppercase">
            Location
          </p>

          <p className="text-sm leading-relaxed">
            Coonoor, Tamil Nadu <br />
            Palakkad, Kerala <br />
            Open to guests & visitors
          </p>
        </motion.div>

        {/* Reservations */}
        <motion.div
          variants={item}
          className="p-6 rounded-xl hover:bg-white/5 transition duration-300"
        >
          <div className="flex justify-center mb-4">
            <Phone className="w-6 h-6 text-yellow-500" />
          </div>

          <p className="text-xs tracking-[0.25em] text-white/50 mb-3 uppercase">
            Reservations
          </p>

          <p className="text-sm leading-relaxed">
            WhatsApp: +91 95825 98568 <br />
            Walk-ins welcome <br />
            Prior booking preferred
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Info;
