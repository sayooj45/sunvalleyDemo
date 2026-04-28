// RoomDetails.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const rooms = [
  {
    slug: "valley-view-penthouse",
    name: "Valley View Pent House",
    img: "https://sunvalleyhomestay.com/wp-content/uploads/2023/07/valley-view-pent-house2.jpg",
    desc: "Luxury penthouse retreat with panoramic valley views, elegant interiors, private balcony, premium comforts, and a serene unforgettable stay.",
    longDesc: [
      "Welcome to the Valley View Penthouse, an exquisite retreat perched high above with panoramic vistas that will take your breath away. Prepare to be captivated by the unparalleled beauty that unfolds before your eyes.",
      "As you step into the Valley View Penthouse, you'll be greeted by a luxurious and spacious living space. The contemporary design and tasteful decor create an atmosphere of refined elegance, providing the perfect setting for an indulgent getaway.",
      "The highlight of the penthouse is the awe-inspiring valley view that stretches as far as the eye can see. Floor-to-ceiling windows offer unobstructed views of the picturesque landscape, allowing you to immerse yourself in nature's grandeur from the comfort of your private sanctuary.",
      "Relax and unwind in the lavish living area, where plush seating invites you to sink in and savor the tranquil ambiance. Whether you're enjoying a quiet evening in or hosting guests, this sophisticated space provides the ideal backdrop for creating cherished memories.",
      "The Valley View Penthouse features a well-appointed master bedroom, where luxury meets comfort. Sink into the sumptuous bedding and let the soothing surroundings lull you into a restful sleep. Wake up to the gentle glow of the sunrise, casting its golden hues over the valley, promising another day of enchantment.",
      "Indulge in the opulent en-suite bathroom, complete with lavish amenities and a rejuvenating rain shower. Pamper yourself with high-quality toiletries and embrace the sensation of ultimate relaxation and well-being.",
      "As a guest of the Valley View Penthouse, you will have access to a range of modern amenities to enhance your stay. Stay connected with complimentary high-speed Wi-Fi, unwind with entertainment on the state-of-the-art entertainment system, or sip a glass of wine on your private balcony as you take in the breathtaking views.",
      "Experience the pinnacle of luxury and serenity in the Valley View Penthouse, where the beauty of nature converges with refined elegance. Let the panoramic valley views and lavish comforts transport you to a world of unparalleled tranquility and bliss.",
    ],
    size: "150 sq.ft",
    guests: "2 Adults",
    bed: "King Size Bed",
    view: "Mountain View",
  },
  {
    slug: "earthy-living-valley-room",
    name: "Earthy Living Valley Room",
    img: "https://sunvalleyhomestay.com/wp-content/uploads/2023/07/EarthyLivingDeluxe4.jpg",
    desc: "Cozy double room with earthy charm, natural décor, modern comforts, and a peaceful ambiance for a relaxing stay.",
    longDesc: [
      "Experience a harmonious blend of comfort and earthy charm during your stay. Step into the Earthy Living Double room and feel instantly embraced by its warm and tranquil ambiance. The earthy tones, natural textures, and rustic accents create a soothing atmosphere that allows you to reconnect with nature.",
      "Relax in the cozy seating area, where you can unwind with a good book or simply revel in the peacefulness of the space. The room is thoughtfully furnished with comfortable seating and tasteful decor, ensuring a comfortable and enjoyable stay.",
      "The Earthy Living Double room features a comfortable double bed adorned with soft linens, inviting you to sink into a restful slumber. Wake up refreshed and rejuvenated, ready to embrace the day ahead.",
      "Immerse yourself in the en-suite bathroom, designed with natural elements and eco-friendly amenities. Indulge in a refreshing shower or take a moment to pamper yourself with the provided bath products, allowing you to embrace a sense of well-being.",
      "Stay connected with complimentary Wi-Fi and make use of the room's modern amenities, including a flat-screen TV for entertainment and a well-equipped workspace if needed. The Earthy Living Double room offers a comfortable and functional space for both relaxation and productivity.",
      "Escape to the Earthy Living Double room, where the beauty of nature meets comfort and tranquility. Let the earthy ambiance and thoughtful details create a delightful experience, allowing you to unwind and recharge amidst a serene setting.",
    ],
    size: "240 sq.ft",
    guests: "2 Adults",
    bed: "King Size Bed",
    view: "Lawn Area View",
  },
  {
    slug: "valley-view-deluxe-room",
    name: "Valley View Deluxe Room",
    img: "https://sunvalleyhomestay.com/wp-content/uploads/2023/07/EarthyLivingDeluxe4.jpg",
    desc: "Elegant deluxe suite with panoramic valley views, luxurious interiors, private balcony, and premium comforts for a serene stay..",
    longDesc: [
      "Be captivated from the moment you step foot into the Valley View Deluxe suite. Immerse yourself in a realm of refined elegance and supreme comfort, designed to provide you with an unforgettable stay.",
      "Prepare to be mesmerized by the panoramic vistas that greet you from every angle. The floor-to-ceiling windows offer uninterrupted views of the picturesque valley, creating a sense of awe and tranquility that will leave you speechless.",
      "Unwind in the tastefully furnished living area, where plush seating invites you to relax and revel in the serenity of your surroundings. Whether you're admiring the stunning vistas or simply enjoying quiet moments of reflection, this space is a sanctuary of comfort and relaxation.",
      "The Valley View Deluxe suite boasts a luxurious bedroom, meticulously designed to ensure your utmost comfort. Sink into the sumptuous bedding and let the gentle embrace of tranquility lull you into a restful sleep. Wake up refreshed and rejuvenated, ready to embrace the new day that lies ahead.",
      "To enhance your stay, the suite offers a well-appointed en-suite bathroom, complete with indulgent amenities and a rejuvenating shower. Pamper yourself in this private oasis and let the stresses of the day melt away.",
      "Stay connected with complimentary Wi-Fi, indulge in your favorite entertainment on the state-of-the-art TV, or simply savor a cup of coffee on your private balcony, taking in the breathtaking vistas that surround you.",
      "Escape to the Valley View Deluxe suite, where opulence and natural beauty blend seamlessly to create a haven of tranquility. Let the stunning valley views and luxurious comforts envelop you, leaving you with memories to treasure long after your stay.",
    ],
    size: "240 sq.ft",
    guests: "2 Adults",
    bed: "King Size Bed",
    view: "Tea stall, Mountain View",
  },
  {
    slug: "valley-view-deluxe-family-room",
    name: "Valley View Deluxe Family Room",
    img: "https://sunvalleyhomestay.com/wp-content/uploads/2023/07/Sunvalley-valleyview-executive-family4.jpg",
    desc: "Spacious deluxe family room with stunning valley views, elegant décor, and cozy comforts perfect for unforgettable family stays.",
    longDesc: [
      "This magnificent accommodation has been specially crafted to provide you and your loved ones with the ultimate warmth and comfort during your stay. As you step into this luxurious abode, you will be greeted by a breathtaking view of the stunning valley below, which will undoubtedly leave you awe-inspired. The Valley View Deluxe Family room boasts of ample space to accommodate your entire family, making it an ideal option for family vacations. The decor is sophisticated, with tasteful furnishings and decor, and we guarantee that you will feel right at home. Our dedicated staff has ensured that every detail has been meticulously thought out to make your stay with us unforgettable. We invite you to make yourself comfortable and allow us to take care of you.",
    ],
    size: "240 sq.ft",
    guests: "4 Adults",
    bed: "Queen Size Bed",
    view: "Tea stall, Mountain view",
  },
  {
    slug: "valley-view-executive-room",
    name: "Valley view Executive Room",
    img: "https://sunvalleyhomestay.com/wp-content/uploads/2021/12/valley-view-executive4-1920x1280.jpg",
    desc: "Sophisticated executive suite with panoramic valley views, elegant interiors, private balcony, and luxurious comforts for a memorable stay.",
    longDesc: [
      "Step into the Valley View Executive suite and be greeted by a harmonious blend of elegance and comfort. The contemporary design and tasteful decor create an ambiance of sophistication, inviting you to relax and unwind in style.",
      "The focal point of this suite is the magnificent valley view that stretches as far as the eye can see. Expansive windows bathe the room in natural light, allowing you to immerse yourself in the picturesque surroundings. Whether it's the rolling hills, vibrant foliage, or serene sunsets, each moment spent gazing at the valley view is sure to leave you in awe.",
      "Indulge in the plush seating area, where you can bask in the tranquility of the surroundings or engage in stimulating conversations. The spacious layout provides ample room for relaxation, ensuring your comfort is prioritized throughout your stay.",
      "The Valley View Executive suite boasts a luxurious bedroom, where you can retreat and rejuvenate. Sink into the sumptuous bedding, designed to envelop you in blissful slumber. Wake up to the gentle glow of the morning sun, casting a golden hue over the valley, promising another day of splendor.",
      "The en-suite bathroom offers a sanctuary of indulgence, featuring high-end amenities and a rejuvenating rainfall shower. Pamper yourself with luxurious toiletries, and embrace the sensation of ultimate relaxation and well-being.",
      "As a guest of the Valley View Executive suite, you will have access to a range of modern amenities. Stay connected with complimentary high-speed Wi-Fi, enjoy entertainment on the flat-screen TV, or simply unwind on the private balcony, taking in the panoramic views and savoring moments of tranquility.",
      "Experience the epitome of luxury and natural beauty in the Valley View Executive suite, where every detail is meticulously crafted to provide an unforgettable stay. Let the captivating vistas and refined comforts envelop you, creating cherished memories that will last a lifetime.",
    ],
    size: "300 sq.ft",
    guests: "2 Adults",
    bed: "King Size Bed",
    view: "Valley View, Balcony View",
  },
  {
    slug: "valley-view-executive-family-room",
    name: "Valley view Executive Family Room",
    img: "https://sunvalleyhomestay.com/wp-content/uploads/2021/12/valley-view-executive-family5-1920x1280.jpg",
    desc: "Spacious executive family suite with panoramic valley views, stylish interiors, and modern comforts for memorable family stays.",
    longDesc: [
      "Welcome to the Valley View Executive Family suite, a haven of comfort and serenity designed with your family's needs in mind. Prepare to be captivated by the breathtaking vistas that unfold before you, creating an unforgettable experience for the whole family.",
      "As you enter the Valley View Executive Family suite, you'll be welcomed by a spacious and inviting living space. The contemporary design and stylish decor provide a modern yet cozy ambiance, ensuring a delightful stay for everyone.",
      "The suite's most remarkable feature is the expansive windows offering panoramic views of the picturesque valley. Immerse yourself in the beauty of nature as you witness the rolling hills, lush greenery, and the ever-changing colors of the landscape. It's a captivating backdrop that will leave you awe-inspired throughout your stay.",
      "Designed to accommodate families, the Valley View Executive Family suite offers ample space for relaxation and togetherness. The comfortable seating area provides the perfect setting for bonding moments, engaging conversations, or simply unwinding together after a day of exploration.",
      "The well-appointed bedrooms cater to both parents and children, ensuring a restful night's sleep for everyone. Sink into the cozy beds, enveloped in soft linens, and wake up refreshed and ready to embrace a new day of adventure.",
      "The suite features a modern and fully equipped en-suite bathroom, where you can rejuvenate and refresh at your leisure. Enjoy a revitalizing shower or indulge in a relaxing bath, surrounded by high-quality amenities that add an extra touch of luxury to your stay.",
      "Stay connected with complimentary Wi-Fi, catch up on your favorite shows on the flat-screen TV, or simply soak in the tranquility of the surroundings from the comfort of your private retreat.",
      "Create cherished memories with your family in the Valley View Executive Family suite, where stunning views and comfortable accommodations merge harmoniously. Let the natural beauty of the valley serve as a backdrop for unforgettable moments and joyful experiences that will be treasured for a lifetime.",
    ],
    size: "300 sq.ft",
    guests: "4 Adults",
    bed: "Queen Size Bed",
    view: "Tea Estate View",
  },
];

const section = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 45 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const RoomDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const room = rooms.find((item) => item.slug === slug);

  /* ---------- ROOM NOT FOUND ---------- */
  if (!room) {
    return (
      <section className="min-h-screen bg-gd text-white flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-serif mb-4">
            Room Not Found
          </h1>

          <p className="text-white/60 max-w-md mx-auto">
            The room you are looking for may have been moved or no longer
            exists.
          </p>

          <button
            onClick={() => navigate("/rooms")}
            className="mt-8 px-6 py-3 border border-gl text-gl rounded-lg hover:bg-gl hover:text-black transition"
          >
            Back to Rooms
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="bg-gd text-white overflow-hidden">
      <div className="relative h-[65vh] sm:h-[75vh] md:h-[85vh]">
        <img
          src={room.img}
          alt={room.name}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20 " />

        {/* content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-6 pb-10 md:pb-16"
        >
          <p className="text-gl uppercase tracking-[0.35em] text-xs md:text-sm mb-3">
            Premium Stay Experience
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif max-w-4xl leading-tight">
            {room.name}
          </h1>

          <p className="mt-4 text-white/70 max-w-2xl text-sm md:text-base">
            Crafted for comfort, surrounded by nature, designed for
            unforgettable moments.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-3 gap-10 md:gap-14">
        <motion.div
          variants={section}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-serif mb-6"
          >
            Elegant Comfort Meets Nature
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-white/75 leading-relaxed text-base md:text-lg mb-8"
          >
            {room.desc}
          </motion.p>

          {/* FULL LONG CONTENT KEPT */}
          <div className="space-y-6">
            {room.longDesc.map((para, index) => (
              <motion.p
                key={index}
                variants={fadeUp}
                className="text-white/60 text-sm md:text-base leading-relaxed"
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* ROOM INFO */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          >
            <Info title="Room Size" value={room.size} />
            <Info title="Guests" value={room.guests} />
            <Info title="Bed Type" value={room.bed} />
            <Info title="View" value={room.view} />
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:sticky top-28 h-fit"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-serif mb-6">
              Book This Room
            </h3>

            <ul className="space-y-4 text-sm md:text-base text-white/70 mb-8">
              <li>✓ Complimentary Wi-Fi</li>
              <li>✓ Breakfast Included</li>
              <li>✓ Scenic View Access</li>
              <li>✓ Premium Toiletries</li>
              <li>✓ Parking Available</li>
              <li>✓ Peaceful Nature Surroundings</li>
            </ul>

            <button
              onClick={() => navigate("/contact")}
              className="w-full bg-gl text-black py-3 rounded-xl font-semibold hover:scale-[1.02] transition"
            >
              Reserve Now
            </button>

            <button
              onClick={() => navigate("/home-stay")}
              className="w-full mt-3 border border-white/20 py-3 rounded-xl hover:bg-white/5 transition"
            >
              View All Rooms
            </button>
          </div>
        </motion.div>
      </div>

      {/* =========================================================
          RELATED CTA
      ========================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="border-t border-white/10 py-16 px-6 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-serif">
          Ready for Your <span className="text-gl italic">Perfect Stay?</span>
        </h2>

        <p className="text-white/60 mt-4 max-w-xl mx-auto">
          Contact us now to check availability and reserve your peaceful
          mountain getaway.
        </p>

        <button
          onClick={() => navigate("/contact")}
          className="mt-8 px-8 py-3 bg-gl text-black rounded-xl font-semibold hover:scale-105 transition"
        >
          Contact Us
        </button>
      </motion.div>
    </section>
  );
};

/* =========================================================
   INFO CARD
========================================================= */
const Info = ({ title, value }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="rounded-xl border border-white/10 bg-white/5 p-4"
    >
      <p className="text-[11px] uppercase tracking-[0.25em] text-gl mb-2">
        {title}
      </p>

      <p className="text-sm md:text-base text-white">{value}</p>
    </motion.div>
  );
};

export default RoomDetails;
