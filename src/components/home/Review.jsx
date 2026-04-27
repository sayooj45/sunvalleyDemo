import React from "react";
import VideoCard from "./VideoCard";
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
];

const Review = () => {
  return (
    <section className="bg-[#f7f5f2] py-20 px-4 sm:px-8 md:px-16">
      <div className="max-w-8xl mx-auto">
        <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-3">
          Guest Stories
        </p>

        <h2 className="font-serif text-4xl md:text-5xl text-greenDark mb-14 leading-tight">
          Hear From Our Guests
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, i) => (
            <VideoCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
