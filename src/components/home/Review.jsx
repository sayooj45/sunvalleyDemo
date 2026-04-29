import React from "react";
import { motion } from "framer-motion";
import VideoCard from "./VideoCard";
import { useNavigate } from "react-router-dom";

const data = [
  {
    video: "https://www.youtube.com/watch?v=82LyxDqcx6I",
    preview: "/videos/first.mp4",
  },
  {
    video: "https://www.youtube.com/watch?v=cUWVwRUufZo",
    preview: "/videos/second.mp4",
  },
  {
    video: "https://www.youtube.com/watch?v=VjMAYdKbjMw",
    preview: "/videos/third.mp4",
  },
  {
    video: "https://www.youtube.com/watch?v=jNsOBDYSHwY",
    preview: "/videos/four.mp4",
  },
  {
    video: "https://www.youtube.com/watch?v=ty-y4f7D3ik",
    preview: "/videos/five.mp4",
  },
  {
    video: "https://www.youtube.com/watch?v=aptgMkijO6g",
    preview: "/videos/six.mp4",
  },
];

const Review = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#f7f5f2] py-20 md:py-24 overflow-hidden">
      {/* Header */}
      <div className="max-w-8xl mx-auto px-4 sm:px-8 md:px-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[11px] tracking-[0.35em] uppercase text-gold mb-4 font-medium"
        >
          Their Words, Our Pride
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl text-greenDark leading-tight mb-5"
        >
          Don&apos;t just take our word for it — hear directly from our happy
          guests.
        </motion.h2>
      </div>

      {/* Slider */}
      <div className="relative mt-14 overflow-hidden">
        {/* Fade */}
        {/* <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#f7f5f2] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#f7f5f2] to-transparent z-10 pointer-events-none" /> */}

        <div className="marquee">
          <div className="marquee-track">
            {[...data, ...data].map((item, i) => (
              <motion.div
                key={i}
                // whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="min-w-[260px] sm:min-w-[320px] md:min-w-[360px]"
              >
                <VideoCard item={item} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-16 px-4">
        <p className="text-gray-500 text-sm sm:text-base mb-5">
          Ready to create your own unforgettable stay?
        </p>

        <button
          onClick={() => navigate("/contact")}
          className="px-7 py-3 rounded-full border border-greenDark text-greenDark text-[11px] tracking-[0.25em] uppercase hover:bg-greenDark hover:text-white transition duration-300"
        >
          Book Your Experience
        </button>
      </div>

      {/* CSS */}
      <style>
        {`
          .marquee {
            overflow: hidden;
            width: 100%;
          }

          .marquee-track {
            display: flex;
            gap: 1.5rem;
            width: max-content;
            animation: scroll 28s linear infinite;
          }

          .marquee-track:hover {
            animation-play-state: paused;
          }

          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Review;
