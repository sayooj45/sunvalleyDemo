import React from "react";
import { FaStar } from "react-icons/fa";

const data = [
  {
    rating: 5,
    review:
      "Woke up every morning to mist over the tea gardens. The food was the best part — everything fresh from the farm.",
    name: "Rajesh K",
    location: "Bangalore",
  },
  {
    rating: 5,
    review:
      "The farmstay in Palakkad was a completely different experience — kids loved the organic farm tour. Highly recommend.",
    name: "Ananya M",
    location: "Kochi",
  },
  {
    rating: 5,
    review:
      "Stayed for 4 nights in Coonoor. Shyma and Dhinesh are incredible hosts. Felt like coming home.",
    name: "Priya S",
    location: "Chennai",
  },
];

const Review = () => {
  return (
    <section className="bg-cream py-16 sm:py-20 px-4 sm:px-8 md:px-16">
      {/* Heading */}
      <p className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-gold mb-3">
        Guest Voices
      </p>

      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-greenDark mb-12 leading-tight">
        What Our Guests Say
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 p-6 flex flex-col"
          >
            {/* Stars */}
            <div className="flex gap-1 text-gold mb-4">
              {[...Array(item.rating)].map((_, index) => (
                <FaStar key={index} className="text-sm" />
              ))}
            </div>

            {/* Review */}
            <p className="text-sm text-gray-600 leading-relaxed italic mb-6 flex-grow">
              "{item.review}"
            </p>

            {/* Reviewer */}
            <div className="flex items-center gap-3">
              {/* Avatar */}
              <div className="w-10 h-10 rounded-full bg-greenLight text-white flex items-center justify-center text-sm font-semibold">
                {item.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>

              {/* Name + Location */}
              <div>
                <p className="text-sm font-medium text-greenDark">
                  {item.name}
                </p>
                <p className="text-xs text-gray-500">{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
