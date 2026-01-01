import React from "react";
import { assets } from "../assets/assets";

function OurPolicy() {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-10 sm:gap-56 p-6 max-w-7xl mx-auto">
      {/* Policy Card */}
      <div className="flex flex-col items-center text-center transition duration-300 sm:w-64 pb-1">
        <img
          src={assets.exchange}
          alt="exchange-icon"
          className="w-12 h-12 sm:w-16 sm:h-16 mb-3"
        />
        <p className="text-gray-700 font-semibold text-lg mb-1">
          Easy Exchange Policy
        </p>
        <p className="text-gray-500 text-sm sm:text-base">
          We offer hassle free exchange policy
        </p>
      </div>

      <div className="flex flex-col items-center text-center p-4 transition duration-300 sm:w-64">
        <img
          src={assets.check}
          alt="check-icon"
          className="w-12 h-12 sm:w-16 sm:h-16 mb-3"
        />
        <p className="text-gray-700 font-semibold text-lg mb-1">
          7 Days Return Policy
        </p>
        <p className="text-gray-500 text-sm sm:text-base">
          We provide 7 days free return policy
        </p>
      </div>

      <div className="flex flex-col items-center text-center p-6 transition duration-300 sm:w-64">
        <img
          src={assets.support}
          alt="support-icon"
          className="w-12 h-12 sm:w-16 sm:h-16 mb-3"
        />
        <p className="text-gray-700 font-semibold text-lg mb-1">
          Best Customer Support
        </p>
        <p className="text-gray-500 text-sm sm:text-base">
          We provide 24/7 customer support
        </p>
      </div>
    </div>
  );
}

export default OurPolicy;
