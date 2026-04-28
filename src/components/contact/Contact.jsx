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
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const infoData = [
  {
    icon: <FiPhone />,
    title: "Call Us",
    desc: "Speak directly with our team",
    content: (
      <>
        <a href="tel:+919582598568" className="block hover:text-[#b58a2b]">
          +91 95825 98568
        </a>
        <a href="tel:+919496295590" className="block hover:text-[#b58a2b]">
          +91 94962 95590
        </a>
      </>
    ),
  },
  {
    icon: <FiMessageCircle />,
    title: "WhatsApp",
    desc: "Quick bookings & enquiries",
    content: (
      <a
        href="https://wa.me/919629795590"
        target="_blank"
        rel="noreferrer"
        className="hover:text-[#b58a2b]"
      >
        +91 96297 95590
      </a>
    ),
  },
  {
    icon: <FiMail />,
    title: "Email",
    desc: "Write to us anytime",
    content: (
      <>
        <a
          href="mailto:sunvalleyhomestay@gmail.com"
          className="block hover:text-[#b58a2b]"
        >
          sunvalleyhomestay@gmail.com
        </a>
        <a
          href="mailto:info@sunvalley.co.in"
          className="block hover:text-[#b58a2b]"
        >
          info@sunvalley.co.in
        </a>
      </>
    ),
  },
  {
    icon: <FiMapPin />,
    title: "Locations",
    desc: "Two beautiful destinations",
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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#edf3ee] via-[#f7faf6] to-white">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#d4af37]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#1d3b2a]/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-16 md:py-24">
        {/* Header */}
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

          <h1 className="text-4xl md:text-6xl font-serif text-[#173321] leading-tight mb-5">
            Contact Sunvalley
          </h1>

          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            Whether you're dreaming of misty mountain mornings or peaceful farm
            sunsets, our team is ready to help you plan the perfect stay.
          </p>
        </motion.div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-[1fr_0.95fr] gap-10 xl:gap-14 items-start">
          {/* Left Side */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-6"
          >
            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-5">
              {infoData.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                  className="bg-white/90 backdrop-blur rounded-3xl p-6 border border-white shadow-md hover:shadow-xl transition"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#eef5ef] text-[#173321] flex items-center justify-center text-xl mb-4">
                    {item.icon}
                  </div>

                  <p className="text-xs uppercase tracking-[0.28em] text-gray-400 mb-1">
                    {item.title}
                  </p>

                  <p className="text-xs text-gray-500 mb-3">{item.desc}</p>

                  <div className="text-sm text-gray-800 space-y-1 leading-relaxed font-medium">
                    {item.content}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Extra Card */}
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
                Contact us for room availability, rates, special packages,
                family bookings, or long-stay offers.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Form */}
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
              Fill in your details and our team will contact you shortly.
            </p>

            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-2xl border border-gray-200 px-4 py-3 bg-[#fafaf7] focus:outline-none focus:ring-2 focus:ring-[#173321]"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-2xl border border-gray-200 px-4 py-3 bg-[#fafaf7] focus:outline-none focus:ring-2 focus:ring-[#173321]"
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 bg-[#fafaf7] focus:outline-none focus:ring-2 focus:ring-[#173321]"
              />

              <select className="w-full rounded-2xl border border-gray-200 px-4 py-3 bg-[#fafaf7] focus:outline-none">
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
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#173321] text-white py-3.5 rounded-2xl flex items-center justify-center gap-2 uppercase tracking-[0.22em] text-xs hover:bg-[#0f2417] transition"
              >
                Send Message <FiSend />
              </motion.button>

              <a
                href="https://wa.me/919629795590"
                target="_blank"
                rel="noreferrer"
                className="block text-center text-sm font-medium text-[#173321] hover:text-[#b58a2b] transition"
              >
                Or contact instantly via WhatsApp →
              </a>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
