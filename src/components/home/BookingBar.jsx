import React from "react";

const BookingBar = () => {
  return (
    <div className=" border-y border-gray-200 px-6 md:px-16 py-6">
      <form className="flex flex-wrap md:flex-nowrap items-end gap-4">
        {/* Stay Type */}
        <div className="flex flex-col flex-1 min-w-[180px]">
          <label className="text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-2">
            Stay Type
          </label>
          <select className="h-[44px] border border-gray-300 bg-white px-3 text-sm focus:outline-none">
            <option>Homestay — Coonoor</option>
            <option>Farmstay — Palakkad</option>
          </select>
        </div>

        {/* Check-in */}
        <div className="flex flex-col flex-1 min-w-[160px]">
          <label className="text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-2">
            Check-In
          </label>
          <input
            type="date"
            className="h-[44px] border border-gray-300 bg-white px-3 text-sm focus:outline-none"
          />
        </div>

        {/* Check-out */}
        <div className="flex flex-col flex-1 min-w-[160px]">
          <label className="text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-2">
            Check-Out
          </label>
          <input
            type="date"
            className="h-[44px] border border-gray-300 bg-white px-3 text-sm focus:outline-none"
          />
        </div>

        {/* Guests */}
        <div className="flex flex-col flex-1 min-w-[140px]">
          <label className="text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-2">
            Guests
          </label>
          <select className="h-[44px] border border-gray-300 bg-white px-3 text-sm focus:outline-none">
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4+ Guests</option>
          </select>
        </div>

        {/* Button */}
        <div className="flex items-end">
          <button
            type="submit"
            className="h-[44px] px-8 bg-[#c9922a] hover:bg-[#b07f1e] text-white text-xs tracking-[0.15em] uppercase font-medium"
          >
            Check Availability
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingBar;
