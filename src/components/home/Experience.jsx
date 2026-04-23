import React from "react";

const data = [
  {
    title: "Homestay",
    location: "COONOOR · NILGIRIS",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    desc: "A serene retreat in the hills of Coonoor, surrounded by tea gardens and misty mountains.",
    link: "View Rooms",
  },
  {
    title: "Farmstay",
    location: "PALAKKAD · KERALA",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
    desc: "Authentic rural life in Chittur, Palakkad — organic farming, open skies, warm hospitality.",
    link: "View Cottages",
  },
  {
    title: "Restaurant",
    location: "FARM TO TABLE",
    img: "https://images.unsplash.com/photo-1562967916-eb82221dfb36",
    desc: "Fresh, organic food grown on-site. Traditional Kerala and Nilgiri flavours served with love.",
    link: "View Menu",
  },
];

const Experience = () => {
  return (
    <section className="bg-[#f7f5f2] py-16 sm:py-20 px-4 sm:px-8 md:px-16">
      {/* Heading */}
      <p className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-[#c9922a] mb-2 sm:mb-3">
        What We Offer
      </p>

      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-green-900 mb-3 sm:mb-4 leading-tight">
        The Sun Valley Experience
      </h2>

      <p className="text-gray-500 max-w-xl mb-10 sm:mb-14 text-sm sm:text-base">
        Two unique destinations, one philosophy — nature, sustainability, and
        warmth.
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[200px] sm:h-[220px] object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6 flex flex-col flex-grow">
              {/* Tag */}
              <span className="text-[9px] sm:text-[10px] tracking-[0.18em] uppercase bg-gray-100 text-gray-600 px-3 py-1 rounded-full inline-block mb-3 sm:mb-4 w-fit">
                {item.location}
              </span>

              {/* Title */}
              <h3 className="font-serif text-lg sm:text-xl text-green-900 mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed flex-grow">
                {item.desc}
              </p>

              {/* Button */}
              <button className="mt-5 w-fit text-[10px] sm:text-[11px] tracking-[0.18em] uppercase border border-green-900 text-green-900 px-4 py-2 hover:bg-green-900 hover:text-white transition">
                {item.link}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
