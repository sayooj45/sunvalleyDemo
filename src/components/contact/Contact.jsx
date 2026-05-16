import React from "react";
import { motion } from "framer-motion";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiSend,
  FiClock,
} from "react-icons/fi";

/* animations */
const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

/* INFO DATA */
const infoData = [
  {
    icon: <FiPhone />,
    title: "Call Us",
    desc: "Speak directly with our team",
    content: (
      <div className="space-y-2">
        <a href="tel:+919400514510" className="block hover:text-[#b58a2b]">
          🌿 Farmstay — +91 94005 14510
        </a>
        <a href="tel:+919629795590" className="block hover:text-[#b58a2b]">
          🏡 Homestay — +91 88258 77432
        </a>
      </div>
    ),
  },

  {
    icon: <FiMessageCircle />,
    title: "WhatsApp",
    desc: "Instant chat & quick booking",
    content: (
      <div className="space-y-2">
        <a
          href="https://wa.me/919400514510?text=Hi%20I%20am%20interested%20in%20Farmstay%20booking"
          target="_blank"
          rel="noreferrer"
          className="block hover:text-[#b58a2b]"
        >
          🌿 Farmstay Chat
        </a>

        <a
          href="https://wa.me/919629795590?text=Hi%20I%20am%20interested%20in%20Homestay%20booking"
          target="_blank"
          rel="noreferrer"
          className="block hover:text-[#b58a2b]"
        >
          🏡 Homestay Chat
        </a>
      </div>
    ),
  },

  {
    icon: <FiMapPin />,
    title: "Locations",
    desc: "Two beautiful destinations",
    content: (
      <div className="space-y-1 text-sm">
        <p>🏡 Coonoor, Tamil Nadu</p>
        <p>🌿 Palakkad, Kerala</p>
      </div>
    ),
  },
];

const Contact = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#edf3ee] via-[#f7faf6] to-white">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#d4af37]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#1d3b2a]/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-16 md:py-24">
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-[11px] uppercase tracking-[0.35em] text-[#b58a2b] font-semibold mb-4">
            Get In Touch
          </p>

          <h1 className="text-4xl md:text-6xl font-serif tracking-tight text-[#173321] leading-tight mb-5">
            Contact Sunvalley
          </h1>

          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            Plan your perfect escape — whether it’s misty hills or peaceful
            farmlands, we’re here to help.
          </p>
        </motion.div>

        {/* MAIN */}
        <div className="grid lg:grid-cols-[1fr_0.95fr] gap-10 xl:gap-14 items-start">
          {/* LEFT */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-6"
          >
            {/* INFO CARDS */}
            <div className="grid sm:grid-cols-2 gap-5">
              {infoData.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="bg-white/90 backdrop-blur rounded-3xl p-6 border border-white shadow-md hover:shadow-2xl transition duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#eef5ef] to-[#f8faf7] text-[#173321] flex items-center justify-center text-xl mb-4">
                    {item.icon}
                  </div>

                  <p className="text-xs uppercase tracking-[0.28em] text-gray-400 mb-1">
                    {item.title}
                  </p>

                  <p className="text-xs text-gray-500 mb-3">{item.desc}</p>

                  <div className="text-sm text-gray-800 space-y-1 font-medium">
                    {item.content}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* EXTRA CARD */}
            <motion.div
              variants={fadeUp}
              className="bg-[#173321] text-white rounded-3xl p-7 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <FiClock className="text-[#d4af37]" />
                <p className="uppercase tracking-[0.25em] text-xs text-white/70">
                  Availability
                </p>
              </div>

              <h3 className="font-serif text-2xl mb-3">
                We reply quickly every day
              </h3>

              <p className="text-white/70 text-sm leading-relaxed">
                Contact us for availability, pricing, group bookings, or special
                packages.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-[28px] p-6 md:p-8 border border-white shadow-2xl lg:sticky lg:top-24"
          >
            <p className="text-[11px] uppercase tracking-[0.35em] text-[#b58a2b] mb-3">
              Quick Enquiry
            </p>

            <h2 className="text-3xl font-serif text-[#173321] mb-2">
              Send a Message
            </h2>

            <p className="text-sm text-gray-500 mb-7">
              Fill your details and we’ll get back shortly.
            </p>

            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-2xl border border-gray-200 px-4 py-3 bg-[#fafaf7] focus:ring-2 focus:ring-[#173321] outline-none"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-2xl border border-gray-200 px-4 py-3 bg-[#fafaf7] focus:ring-2 focus:ring-[#173321] outline-none"
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 bg-[#fafaf7] focus:ring-2 focus:ring-[#173321] outline-none"
              />

              <select className="w-full rounded-2xl border border-gray-200 px-4 py-3 bg-[#fafaf7]">
                <option>Select Stay Preference</option>
                <option>Homestay — Coonoor</option>
                <option>Farmstay — Palakkad</option>
                <option>Family Booking</option>
              </select>

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="date"
                  className="w-full rounded-2xl border border-gray-200 px-4 py-3 bg-[#fafaf7]"
                />

                <select className="w-full rounded-2xl border border-gray-200 px-4 py-3 bg-[#fafaf7]">
                  <option>Guests</option>
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4+ Guests</option>
                </select>
              </div>

              <textarea
                rows="5"
                placeholder="Tell us your travel plan..."
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 bg-[#fafaf7] resize-none"
              />

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-[#173321] text-white py-3.5 rounded-2xl flex items-center justify-center gap-2 uppercase tracking-[0.22em] text-xs hover:bg-[#0f2417] transition shadow-lg"
              >
                Send Message <FiSend />
              </motion.button>

              <a
                href="https://wa.me/919400514510?text=Hi%20I%20want%20to%20book%20a%20stay"
                target="_blank"
                rel="noreferrer"
                className="block text-center text-sm font-semibold text-[#173321] hover:text-[#25D366] transition"
              >
                💬 Chat on WhatsApp for instant booking
              </a>
            </form>
          </motion.div>
        </div>
      </div>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/919400514510"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 transition z-50"
      >
        <FiMessageCircle size={22} />
      </a>
    </section>
  );
};

export default Contact;
