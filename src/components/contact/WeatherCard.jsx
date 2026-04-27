import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const WeatherCard = ({ city }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const API_KEY = "af1c4c5149ef2b4814e93e7936222261";

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );

      const data = await res.json();
      setWeather(data);
    };

    fetchWeather();
  }, [city]);

  if (!weather) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-sm p-4 flex items-center justify-between"
    >
      <div>
        <p className="text-xs uppercase tracking-widest text-gray-400">
          Current Weather
        </p>
        <p className="text-lg font-semibold text-greenDark">{city}</p>
        <p className="text-sm text-gray-500 capitalize">
          {weather.weather[0].description}
        </p>
      </div>

      <div className="text-right">
        <p className="text-2xl font-bold text-greenDark">
          {Math.round(weather.main.temp)}°C
        </p>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="weather"
          className="w-10 ml-auto"
        />
      </div>
    </motion.div>
  );
};

export default WeatherCard;
