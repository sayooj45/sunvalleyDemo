import React from "react";
import { motion } from "framer-motion";
import WeatherCard from "./WeatherCard";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiSend,
} from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const infoData = [
  {
    icon: <FiPhone />,
    title: "Call Us",
    content: (
      <>
        <a href="tel:+919582598568" className="block hover:text-green-800">
          +91 95825 98568
        </a>
        <a href="tel:+919496295590" className="block hover:text-green-800">
          +91 94962 95590
        </a>
      </>
    ),
  },
  {
    icon: <FiMessageCircle />,
    title: "WhatsApp",
    content: (
      <a
        href="https://wa.me/919629795590"
        target="_blank"
        rel="noreferrer"
        className="hover:text-green-800"
      >
        +91 96297 95590
      </a>
    ),
  },
  {
    icon: <FiMail />,
    title: "Email",
    content: (
      <>
        <a
          href="mailto:sunvalleyhomestay@gmail.com"
          className="block hover:text-green-800"
        >
          sunvalleyhomestay@gmail.com
        </a>
        <a
          href="mailto:info@sunvalley.co.in"
          className="block hover:text-green-800"
        >
          info@sunvalley.co.in
        </a>
      </>
    ),
  },
  {
    icon: <FiMapPin />,
    title: "Locations",
    content: (
      <>
        <p>Coonoor, Tamil Nadu</p>
        <p>Palakkad, Kerala</p>
      </>
    ),
  },
];

const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-[#edf3ee] via-[#f8faf7] to-white text-gray-900">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-16 md:py-24">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-xs tracking-[0.35em] uppercase text-yellow-600 font-semibold mb-3">
            Get In Touch
          </p>

          <h1 className="text-4xl md:text-5xl font-serif text-green-950 mb-4 leading-tight">
            Contact Sun Valley
          </h1>

          <p className="text-gray-600 leading-relaxed">
            Planning a peaceful stay in the hills or a relaxing farm retreat?
            Reach out anytime — we’d love to host you.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
          {/* LEFT */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-5">
              {infoData.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#eef5ef] text-green-900 flex items-center justify-center text-lg mb-4">
                    {item.icon}
                  </div>

                  <p className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-2">
                    {item.title}
                  </p>

                  <div className="text-sm text-gray-700 space-y-1 leading-relaxed">
                    {item.content}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Maps */}
            <motion.div
              variants={fadeUp}
              className="grid md:grid-cols-2 gap-5 mt-8"
            >
              <div className="rounded-2xl overflow-hidden bg-white border shadow-sm">
                <div className="px-4 py-3 border-b">
                  <p className="font-semibold text-green-950">Coonoor</p>
                  <p className="text-xs text-gray-500">Sun Valley Homestay</p>
                </div>

                <iframe
                  title="Coonoor"
                  src="https://www.google.com/maps?q=Coonoor,TamilNadu&output=embed"
                  className="w-full h-[240px]"
                  loading="lazy"
                />
              </div>

              <div className="rounded-2xl overflow-hidden bg-white border shadow-sm">
                <div className="px-4 py-3 border-b">
                  <p className="font-semibold text-green-950">Palakkad</p>
                  <p className="text-xs text-gray-500">Sun Valley Farmstay</p>
                </div>

                <iframe
                  title="Palakkad"
                  src="https://www.google.com/maps?q=Palakkad,Kerala&output=embed"
                  className="w-full h-[240px]"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Weather */}
            <motion.div
              variants={fadeUp}
              className="grid sm:grid-cols-2 gap-5 mt-8"
            >
              <WeatherCard city="Coonoor" />
              <WeatherCard city="Palakkad" />
            </motion.div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-8 lg:sticky lg:top-24"
          >
            <h2 className="text-2xl md:text-3xl font-serif text-green-950 mb-2">
              Send Enquiry
            </h2>

            <p className="text-sm text-gray-500 mb-6">
              Fill the form and we’ll get back shortly.
            </p>

            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-xl border px-4 py-3 bg-[#faf8f3] focus:outline-none focus:ring-2 focus:ring-green-900"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-xl border px-4 py-3 bg-[#faf8f3] focus:outline-none focus:ring-2 focus:ring-green-900"
                />
              </div>

              <select className="w-full rounded-xl border px-4 py-3 bg-[#faf8f3] focus:outline-none">
                <option>Stay Preference</option>
                <option>Homestay — Coonoor</option>
                <option>Farmstay — Palakkad</option>
                <option>Restaurant Reservation</option>
              </select>

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="date"
                  className="w-full rounded-xl border px-4 py-3 bg-[#faf8f3]"
                />

                <select className="w-full rounded-xl border px-4 py-3 bg-[#faf8f3]">
                  <option>Guests</option>
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4+ Guests</option>
                </select>
              </div>

              <textarea
                placeholder="Your message..."
                className="w-full rounded-xl border px-4 py-3 bg-[#faf8f3] min-h-[130px]"
              />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-green-950 text-white py-3 rounded-xl flex items-center justify-center gap-2 tracking-widest text-xs uppercase hover:bg-green-900 transition"
              >
                Send Message <FiSend />
              </motion.button>

              <a
                href="https://wa.me/919629795590"
                target="_blank"
                rel="noreferrer"
                className="block text-center text-sm text-green-900 font-medium hover:underline"
              >
                Or Contact via WhatsApp →
              </a>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
