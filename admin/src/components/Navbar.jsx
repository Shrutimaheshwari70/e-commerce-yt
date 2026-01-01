import React from "react";
import { assets } from "../assets/assets";

function Navbar({setToken}) {
  return (
    <nav className="bg-white shadow-md px-2 py-0 flex items-center justify-between h-16">
      {/* Left side: Logo + Admin Panel */}
      <div className="flex items-center space-x-1">
        <img
          src={assets.foreverlogo}
          alt="Logo"
          className="w-28 object-contain"
        />
        <span className="font-bold text-lg">Admin Panel</span>
      </div>

      {/* Right side: Logout button */}
      <button onClick={()=>setToken('')}className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-red-600 transition">
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
