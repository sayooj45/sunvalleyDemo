import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import error from "../components/images/home/error.jpg";
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

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={error} alt="Nature" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.1}
          className="text-xs tracking-[0.35em] uppercase text-white/70 mb-4"
        >
          404 · Page Not Found
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.3}
          className="text-4xl md:text-6xl font-serif leading-tight mb-4"
        >
          Lost in the <span className="italic text-green-300">Wilderness</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.5}
          className="text-white/70 text-sm md:text-base leading-relaxed mb-8"
        >
          The page you're looking for seems to have wandered off into the hills.
          Let’s guide you back to a peaceful place.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.7}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => navigate("/")}
            className="border border-white px-6 py-2 text-xs uppercase hover:bg-white hover:text-black transition"
          >
            Go Home
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ErrorPage;
