import React from "react";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <div className="mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-gray-600 items-start">
        
        {/* Logo & Description */}
        <div className="md:col-span-2 self-start">
          <img
            src={assets.foreverlogo}
            alt="logo"
            className="
              block 
              h-[140px] sm:h-[180px] md:h-[160px]
              mt-[-40px] 
            "
          />

          <p className="text-sm leading-tight max-w-md mt-[-30px] ml-[7px]" >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam,
            atque. Assumenda iure explicabo ipsa, sapiente adipisci hic sunt
            est, quia fugiat magnam tenetur quae maiores reiciendis vel totam
            voluptate voluptatum!
          </p>
        </div>

        {/* Company */}
        <div className="self-start">
          <p className="text-gray-800 font-semibold mb-4">COMPANY</p>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">About us</li>
            <li className="hover:text-black cursor-pointer">Delivery</li>
            <li className="hover:text-black cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div className="self-start">
          <p className="text-gray-800 font-semibold mb-4">GET IN TOUCH</p>
          <ul className="space-y-2 text-sm">
            <li>+1-212-456-7890</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-300">
        <p className="text-center text-sm text-gray-500 py-4">
          © 2024 forever.com — All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
