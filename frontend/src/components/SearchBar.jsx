import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

function SearchBar() {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const[visible,setVisible] = useState(false)
  const location = useLocation()
  useEffect(()=>{
    if(location.pathname.includes("collection")){
        setVisible(true)
    }else{
        setVisible(false)
    }
  },[location])
  return showSearch && visible ? (
    <div className="fixed top-16 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-4xl mx-auto px-4 py-2 flex items-center gap-3">
        
        {/* Search Box */}
        <div className="flex items-center flex-1 border rounded-full px-4 py-2 bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
          <img
            src={assets.searchIcon}
            alt="search"
            className="w-4 sm:w-5 opacity-60"
          />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search products..."
            className="w-full ml-3 outline-none text-sm sm:text-base placeholder-gray-400"
          />
        </div>

        {/* Close Button */}
        <button
          onClick={() => setShowSearch(false)}
          className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition"
        >
          <img
            src={assets.cross}
            alt="close"
            className="w-3 sm:w-4 h-3 sm:h-4"
          />
        </button>

      </div>
    </div>
  ) : null;
}

export default SearchBar;
