import React from "react";
import { motion } from "framer-motion";
import WeatherCard from "../WeatherCard";

const CTA = () => {
  return (
    <section className="relative bg-[#1A2E1C] py-20 md:py-32 px-6 overflow-hidden">
      {/* Decorative Brand Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[15rem] font-serif text-white/[0.02] pointer-events-none select-none">
        HomeStay
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE: Information & Concierge */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-10 bg-gold"></span>
            <p className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold">
              Guest Concierge
            </p>
          </div>

          <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight mb-8">
            Your journey starts <br />
            <span className="italic font-light text-gold">with a hello.</span>
          </h2>

          {/* New Integrated Weather Section */}
          <div className="flex flex-wrap gap-4 mb-10">
            <WeatherCard city="Coonoor" />
          </div>

          <div className="space-y-6 max-w-md">
            <p className="text-white/50 text-sm leading-relaxed border-l border-gold/30 pl-6">
              Our team is available 24/7 to help you plan your perfect escape,
              provide local directions, or customize your farm-to-table dining
              experience.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href="https://api.whatsapp.com/send?phone=919582598568"
                whileHover={{ y: -3 }}
                className="bg-gold text-[#1A2E1C] px-8 py-4 rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] shadow-xl"
              >
                WhatsApp Inquiry
              </motion.a>

              <motion.a
                href="tel:+919582598568"
                whileHover={{ y: -3 }}
                className="border border-white/20 text-white px-8 py-4 rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all"
              >
                Direct Call
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: Styled Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Map Frame Decoration */}
          <div className="absolute -inset-4 border border-gold/20 rounded-2xl -z-10 group-hover:inset-0 transition-all duration-700"></div>

          <div className="bg-[#242424] rounded-xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/5">
            {/* Map Header/Location Bar */}
            <div className="bg-[#1A2E1C] px-6 py-4 flex justify-between items-center border-b border-white/10">
              <div>
                <p className="text-[10px] text-gold uppercase tracking-widest font-bold">
                  Location Hub
                </p>
                <p className="text-xs text-white/60">
                  Navigate to Sunvalley Estates
                </p>
              </div>
              <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
            </div>

            {/* Map Iframe */}
            <div className="relative h-[450px] w-full grayscale-[0.3] contrast-[1.1] hover:grayscale-0 transition-all duration-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.8539003153064!2d76.7784939!3d11.3453801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba894855b51b8dd%3A0xd3f2319b2917333a!2sSunvalley%20Homestay!5e0!3m2!1sen!2sin!4v1777374875771!5m2!1sen!2sin"
                className="w-full h-full"
                loading="lazy"
                title="Sunvalley Map"
                style={{
                  border: 0,
                  filter:
                    "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)",
                }} // Suble "Silver/Dark" map hack
              />

              {/* "View on Google Maps" Overlay Label */}
              <div className="absolute bottom-6 left-6 bg-[#1A2E1C]/90 backdrop-blur px-4 py-2 rounded-sm border border-white/10 text-[10px] text-white uppercase tracking-tighter">
                Click to expand directions
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
