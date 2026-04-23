import React from "react";

const data = [
  {
    icon: "🌿",
    title: "Organic Farm",
    desc: "Fresh produce grown on our own land, served at your table every meal.",
  },
  {
    icon: "⛰️",
    title: "Peaceful Location",
    desc: "Away from crowds — tea gardens, open farms, and mountain air.",
  },
  {
    icon: "🍲",
    title: "Authentic Food",
    desc: "Home-cooked regional recipes using seasonal, local ingredients.",
  },
  {
    icon: "🌳",
    title: "Sustainable Living",
    desc: "Eco-conscious practices at the core of everything we do.",
  },
  {
    icon: "👪",
    title: "Warm Hospitality",
    desc: "Family-run with personal attention and genuine care for every guest.",
  },
  {
    icon: "🌅",
    title: "Nature Activities",
    desc: "Trekking, farm walks, yoga, bird watching — all at your doorstep.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-greenDark py-16 sm:py-20 px-4 sm:px-8 md:px-16">
      {/* Heading */}
      <p className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-gold mb-3">
        Why Choose Us
      </p>

      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-12 leading-tight">
        The Sun Valley Difference
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 hover:bg-white/10 transition duration-300"
          >
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-xl mb-4">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="font-medium text-white text-lg mb-2">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
