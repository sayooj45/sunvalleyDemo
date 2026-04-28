import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const WeatherCard = ({ city }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const API_KEY = "af1c4c5149ef2b4814e93e7936222261";
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        const data = await res.json();
        setWeather(data);
      } catch (err) {
        console.error("Failed to fetch weather:", err);
      }
    };

    fetchWeather();
  }, [city]);

  if (!weather) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="relative flex items-center justify-between bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-sm min-w-[280px]"
    >
      {/* Brand Accent Bar */}
      <div className="absolute left-0 top-0 h-full w-[2px] bg-gold" />

      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">
            Live {city}
          </p>
          <div className="h-1 w-1 rounded-full bg-gold animate-pulse" />
        </div>

        <p className="text-white text-lg font-serif">
          {weather.weather[0].description}
        </p>
      </div>

      <div className="flex flex-col items-end">
        <div className="flex items-start">
          <span className="text-3xl font-light text-white leading-none">
            {Math.round(weather.main.temp)}
          </span>
          <span className="text-gold text-sm font-light">°C</span>
        </div>

        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          alt="weather icon"
          className="w-10 h-10 brightness-125 grayscale-[0.5] contrast-125"
        />
      </div>
    </motion.div>
  );
};

export default WeatherCard;
