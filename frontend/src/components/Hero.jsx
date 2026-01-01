import React from "react";
import { assets } from "../assets/assets";

function Hero() {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 pt-24 ">
      {/* Left Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="space-y-6 max-w-lg">
          <div className="flex items-center gap-3 text-gray-500">
            <span className="w-10 h-[2px] bg-gray-400"></span>
            <p className="tracking-widest text-sm font-medium">
              OUR BESTSELLERS
            </p>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight prata-regular">
            Latest Arrivals
          </h1>

          <div className="flex items-center gap-3 cursor-pointer group w-fit">
            <p className="font-medium text-gray-800 group-hover:text-black">
              SHOP NOW
            </p>
            <span className="w-8 h-[2px] bg-gray-800 group-hover:w-12 transition-all"></span>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center items-center mt-10 md:mt-0">
        <img
          src={assets.Hero}
          alt="Hero"
          className="w-full h-[300px] max-w-md md:max-w-lg object-cover"
        />
      </div>
    </div>
  );
}

export default Hero;
