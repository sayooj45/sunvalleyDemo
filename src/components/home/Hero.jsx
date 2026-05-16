import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const Hero = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  const [currentVideo, setCurrentVideo] = useState(0);

  const videos = [
    "https://sunvalley.blr1.cdn.digitaloceanspaces.com/contents/WhatsApp%20Video%202026-04-30%20at%201.37.51%20PM.mp4",
    "https://sunvalley.blr1.cdn.digitaloceanspaces.com/contents/0429.mp4",
  ];

  const handleVideoEnd = () => {
    if (currentVideo < videos.length - 1) {
      setCurrentVideo((prev) => prev + 1);
    }
  };

  return (
    <section className="relative h-screen flex items-end pb-20 text-white overflow-hidden">
      {/* VIDEO BACKGROUND */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.video
            key={currentVideo}
            ref={videoRef}
            src={videos[currentVideo]}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 px-6 md:px-16">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.2}
          className="text-xs tracking-[0.2em] opacity-80 mb-4"
        >
          Coonoor · Palakkad
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.4}
          className="font-serif text-4xl md:text-6xl leading-tight mb-4"
        >
          Where Nature <span className="italic text-green-300">Breathes</span>
          <br />
          and You Belong
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.6}
          className="text-xs tracking-widest mb-6"
        >
          Homestay · Farmstay
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.8}
          className="flex gap-4"
        >
          <button
            className="border border-white px-6 py-2 text-xs uppercase hover:bg-white hover:text-black transition"
            onClick={() => navigate("/retreat")}
          >
            Explore
          </button>

          <button
            className="border border-white px-6 py-2 text-xs uppercase hover:bg-white hover:text-black transition"
            onClick={() => navigate("/contact")}
          >
            Contact
          </button>
        </motion.div>
      </div>

      {/* RATING */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute right-6 bottom-10 bg-white/20 backdrop-blur p-4 text-center"
      >
        <div>★</div>
        <div className="text-2xl font-serif">4.9</div>
        <p className="text-xs">Rating</p>
      </motion.div>
    </section>
  );
};

export default Hero;
