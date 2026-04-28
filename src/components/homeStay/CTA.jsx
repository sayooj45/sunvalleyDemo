import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="relative bg-gd text-center py-16 sm:py-20 md:py-28 px-6 overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 
        bg-[radial-gradient(circle_at_50%_30%,rgba(212,175,55,0.15),transparent_60%)]"
      />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-2xl mx-auto"
      >
        {/* HEADING */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-cream leading-tight">
          Ready to <span className="italic text-gl font-display">Escape?</span>
        </h2>

        {/* SUBTEXT */}
        <p className="text-white/60 mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed">
          Call or WhatsApp us directly to check availability and plan your
          perfect farmstay getaway.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 sm:mt-10">
          {/* WHATSAPP */}
          <motion.a
            href="https://api.whatsapp.com/send?phone=919582598568"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto text-center 
            bg-gradient-to-r from-gold to-[#e2c06a] 
            px-6 py-3 rounded-md 
            text-white text-sm uppercase tracking-wider 
            shadow-md hover:shadow-xl transition-all duration-300"
          >
            WhatsApp Us
          </motion.a>

          {/* CALL */}
          <motion.a
            href="tel:+919582598568"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto text-center 
            bg-white/10 backdrop-blur 
            border border-white/20 
            px-6 py-3 rounded-md 
            text-white text-sm uppercase tracking-wider 
            hover:bg-white hover:text-gd 
            transition-all duration-300"
          >
            +91 95825 98568
          </motion.a>

          {/* HOME */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto text-center 
            border border-white/30 
            px-6 py-3 rounded-md 
            text-white text-sm uppercase tracking-wider 
            hover:bg-white hover:text-gd 
            transition-all duration-300"
          >
            Back to Home
          </motion.a>
        </div>
      </motion.div>

      {/* FLOATING DECOR (optional luxury touch) */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute w-72 h-72 bg-gold/10 blur-[120px] rounded-full -bottom-20 -right-20"
      />
    </section>
  );
};

export default CTA;
