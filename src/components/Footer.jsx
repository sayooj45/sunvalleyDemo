import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const navLinks = [
  { name: "Home", path: "/" },
  // { name: "About Us", path: "/about" },
  { name: "Retreat", path: "/retreat" },
  // { name: "Restaurant", path: "/restaurant" },
  // { name: "Experiences", path: "/experiences" },
  { name: "Contact", path: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-greenDark text-white px-6 md:px-16 pt-16 pb-8">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12"
      >
        {/* BRAND */}
        <motion.div variants={item}>
          <img src="/logo.png" alt="Sunvalley" className="h-10 mb-4" />

          <p className="text-sm text-white/70 leading-relaxed">
            A sustainable hospitality brand with two distinct stays — Homestay
            in Coonoor, Nilgiris and Farmstay in Chittur, Palakkad.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-3 mt-6">
            {[FaFacebookF, FaInstagram, FaEnvelope].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-9 h-9 flex items-center justify-center border border-white/30 rounded-md hover:bg-white/10 transition"
              >
                <Icon size={14} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* PAGES */}
        <motion.div variants={item}>
          <h4 className="text-sm font-semibold mb-4 tracking-wider text-white">
            Pages
          </h4>

          <ul className="space-y-2 text-sm text-white/70">
            {navLinks.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.path}
                  className="hover:text-white transition relative group"
                >
                  {link.name}
                  <span className="block h-[1px] w-0 bg-white transition-all group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* STAYS */}
        <motion.div variants={item}>
          <h4 className="text-sm font-semibold mb-4 tracking-wider text-white">
            Our Stays
          </h4>

          <ul className="space-y-2 text-sm text-white/70">
            {[
              { name: "Homestay — Coonoor", path: "/home-stay" },
              { name: "Farmstay — Palakkad", path: "/farm-stay" },
            ].map((link, i) => (
              <li
                key={i}
                className="hover:text-white transition cursor-pointer hover:underline"
              >
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* CONTACT */}
        <motion.div variants={item}>
          <h4 className="text-sm font-semibold mb-4 tracking-wider text-white">
            Contact
          </h4>

          <ul className="space-y-2 text-sm text-white/70">
            <li className="hover:text-white transition">📞 +91 95825 98568</li>
            <li className="hover:text-white transition cursor-pointer">
              WhatsApp Us
            </li>
            <li className="hover:text-white transition">
              ✉ info@sunvalley.co.in
            </li>
            <li>Coonoor, Tamil Nadu</li>
            <li>Palakkad, Kerala</li>
          </ul>
        </motion.div>
      </motion.div>

      {/* BOTTOM */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-white/50 gap-2"
      >
        <p>© 2025 Sunvalley. All rights reserved.</p>
        <p>Creating Sustainable Living Concepts</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
