import React from "react";

const images = [
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
  "https://images.unsplash.com/photo-1506368249639-73a05d6f6488",
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
  "https://images.unsplash.com/photo-1448375240586-882707db888b",
  "https://images.unsplash.com/photo-1448375240586-882707db888b",
];

const Gallery = () => {
  return (
    <section className="bg-cream py-16 sm:py-20 px-4 sm:px-8 md:px-16">
      {/* Heading */}
      <p className="text-[10px] tracking-[0.25em] uppercase text-gold mb-3">
        Gallery
      </p>

      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-greenDark mb-10">
        A Glimpse of Sun Valley
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 h-[350px] sm:h-[400px] md:h-[420px]">
        {/* Big Image */}
        <div className="col-span-2 row-span-2 overflow-hidden rounded-lg h-full">
          <img
            src={images[0]}
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </div>

        {/* Small Images */}
        {images.slice(1).map((img, i) => (
          <div key={i} className="overflow-hidden rounded-lg h-full">
            <img
              src={img}
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
