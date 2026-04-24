import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Contact = () => {
  return (
    <div className="bg-[#eef2ee] text-gray-900">
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-16 grid md:grid-cols-2 gap-12">
        {/* LEFT SIDE */}
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.p
            variants={fadeUp}
            className="text-xs tracking-[0.25em] text-yellow-600 font-semibold mb-3 uppercase"
          >
            Get in Touch
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-serif text-3xl md:text-4xl mb-10 text-greenDark"
          >
            Contact Sun Valley
          </motion.h1>

          {/* INFO BLOCKS */}
          <motion.div className="space-y-6" variants={stagger}>
            {[
              {
                icon: "📞",
                title: "Phone",
                content: (
                  <>
                    <a href="tel:+919582598568">+91 95825 98568</a>
                    <a href="tel:+919496295590">+91 9496295590</a>
                  </>
                ),
              },
              {
                icon: "💬",
                title: "WhatsApp",
                content: (
                  <a href="https://wa.me/919629795590">+91 96297 95590</a>
                ),
              },
              {
                icon: "✉️",
                title: "Email",
                content: (
                  <>
                    <a href="mailto:sunvalleyhomestay@gmail.com">
                      sunvalleyhomestay@gmail.com
                    </a>
                    <a href="mailto:info@sunvalley.co.in">
                      info@sunvalley.co.in
                    </a>
                  </>
                ),
              },
              {
                icon: "📍",
                title: "Locations",
                content: (
                  <p>
                    Coonoor, Tamil Nadu <br />
                    Palakkad, Kerala
                  </p>
                ),
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="flex gap-4"
              >
                <div className="w-11 h-11 flex items-center justify-center border rounded bg-white shadow-sm">
                  {item.icon}
                </div>

                <div>
                  <p className="text-xs tracking-widest text-gray-400 mb-1 uppercase">
                    {item.title}
                  </p>
                  <div className="text-sm text-gray-700 space-y-1">
                    {item.content}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* MAP */}
          <motion.div
            variants={fadeUp}
            className="mt-8 rounded overflow-hidden"
          >
            <iframe
              className="w-full h-[200px] rounded"
              src="https://www.google.com/maps?q=Coonoor,TamilNadu&output=embed"
              loading="lazy"
              title="map"
            ></iframe>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-xl shadow-md p-6 md:p-8 md:sticky md:top-24 h-fit"
        >
          <h2 className="font-serif text-2xl mb-6">Send us a Message</h2>

          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full border p-2.5 rounded bg-[#faf7f2] focus:outline-none focus:border-green-700"
              />
              <input
                type="tel"
                placeholder="+91 00000 00000"
                className="w-full border p-2.5 rounded bg-[#faf7f2]"
              />
            </div>

            <select className="w-full border p-2.5 rounded bg-[#faf7f2]">
              <option>Stay Preference</option>
              <option>Homestay — Coonoor</option>
              <option>Farmstay — Palakkad</option>
              <option>Restaurant Reservation</option>
            </select>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="date"
                className="w-full border p-2.5 rounded bg-[#faf7f2]"
              />
              <select className="w-full border p-2.5 rounded bg-[#faf7f2]">
                <option>Guests</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>

            <textarea
              placeholder="Your message..."
              className="w-full border p-3 rounded bg-[#faf7f2] min-h-[120px]"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-green-900 text-white py-3 text-xs tracking-widest uppercase hover:bg-green-800 transition"
            >
              Send Enquiry
            </motion.button>

            <p className="text-center text-sm text-gray-500">
              Or contact via{" "}
              <a
                href="https://wa.me/919629795590"
                className="text-green-900 hover:underline"
              >
                WhatsApp →
              </a>
            </p>
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
