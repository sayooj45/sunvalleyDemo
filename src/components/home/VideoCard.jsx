import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

const getYouTubeId = (url) => {
  const match = url.match(/v=([^&]+)/);
  return match ? match[1] : null;
};

const VideoCard = ({ item }) => {
  const videoRef = useRef(null);
  const [isHover, setIsHover] = useState(false);

  const id = getYouTubeId(item.video);

  const handleEnter = () => {
    setIsHover(true);
    videoRef.current?.play();
  };

  const handleLeave = () => {
    setIsHover(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.a
      href={item.video}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      whileHover={{ y: -6 }}
      className="relative h-[380px] rounded-2xl overflow-hidden group cursor-pointer"
    >
      {/* 🎬 Video Preview */}
      {item.preview && (
        <video
          ref={videoRef}
          src={item.preview}
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition duration-500 ${
            isHover ? "opacity-100 scale-105" : "opacity-0"
          }`}
        />
      )}

      {/* 🖼 Thumbnail */}
      <img
        src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
        alt="review"
        className={`w-full h-full object-cover transition duration-700 ${
          isHover ? "opacity-0 scale-110 blur-sm" : "opacity-100 scale-100"
        }`}
      />

      {/* 🌑 Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* ▶️ Center Play */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white/90 backdrop-blur-md p-4 rounded-full shadow-lg group-hover:scale-110 transition">
          <FaPlay className="text-greenDark text-lg" />
        </div>
      </div>

      {/* ✨ Bottom CTA */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHover ? 1 : 0.8, y: 0 }}
          className="text-white text-sm tracking-wide"
        >
          {isHover ? "Watch Story →" : "Guest Story"}
        </motion.p>
      </div>
    </motion.a>
  );
};

export default VideoCard;
