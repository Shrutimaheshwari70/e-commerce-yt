import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

function Navbar() {
  const [visible, setVisible] = useState(false);
  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };
  return (
    <nav className="w-full h-16 md:h-20 bg-gray-50 shadow-lg fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img
            src={assets.foreverlogo}
            alt="Forever Logo"
            className="w-28 md:w-36"
          />
        </Link>
        {/* Desktop Menu */}
        <ul className="md:flex items-center gap-8 font-medium text-base text-gray-700 hidden">
          <NavLink
            to="/"
            className="hover:text-black flex-col flex items-center gap-1"
          >
            <p>HOME</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink
            to="/collection"
            className="hover:text-black flex-col flex items-center gap-1"
          >
            <p> COLLECTION</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink
            to="/about"
            className="hover:text-black flex-col flex items-center gap-1"
          >
            <p> ABOUT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:text-black flex-col flex items-center gap-1"
          >
            <p> CONTACT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </ul>
        <div className="flex">
          {/* search icon  */}

          <img
            onClick={() => setShowSearch(true)}
            src={assets.searchIcon}
            alt="Search-icon"
            className="h-6 mr-4 cursor-pointer"
          />
          {/* dropdown menu on profile  */}
          <div className="group relative">
            {/* <Link to="/login"> */}
            <img
              onClick={() => (token ? null : navigate("/login"))}
              src={assets.profile}
              alt="Profile-icon"
              className="h-6 cursor-pointer"
            />
            {/* dropdown menu  */}
            {token && 
              <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 border-radius rounded">
                  <p onClick={()=>navigate('/profile')}className="cursor-pointer  hover:text-black">My Profile</p>
                  <p onClick={()=>navigate('/orders')}className="cursor-pointer  hover:text-black">Orders</p>
                  <p
                    onClick={logout}
                    className="cursor-pointer  hover:text-black"
                  >
                    Logout
                  </p>
                </div>
              </div>
            }
            {/* </Link> */}
          </div>
          {/* cart icon  */}
          <Link to="/cart" className="relative">
            <img src={assets.cart} alt="Cart-icon" className="h-6 ml-3" />
            <p className="absolute right-[-4px] bottom-[12px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              {getCartCount()}
            </p>
          </Link>
          {/* menu  */}
          <img
            onClick={() => setVisible(true)}
            src={assets.menu}
            alt="menu"
            className="h-6 cursor-pointer sm:hidden ml-4"
          />
        </div>
        {/* sidebar menu for small screen */}
        {/* sidebar menu for small screen */}
        <div
          className={`fixed top-0 right-0 h-full z-50 bg-white shadow-xl transition-all duration-300 ease-in-out ${
            visible ? "w-72" : "w-0"
          }`}
        >
          <div
            className={`overflow-hidden ${
              visible ? "opacity-100" : "opacity-0"
            } transition-opacity duration-300`}
          >
            {/* Back Button */}
            <div
              onClick={() => setVisible(false)}
              className="flex items-center gap-3 p-4 border-b cursor-pointer"
            >
              <img src={assets.back} alt="back" className="h-5" />
              <p className="text-black font-medium">Back</p>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col text-gray-700 font-medium">
              <NavLink
                className="py-4 pl-6 border-b hover:bg-gray-50 text-sm"
                to="/"
              >
                HOME
              </NavLink>
              <NavLink
                className="py-4 pl-6 border-b hover:bg-gray-50 text-sm"
                to="/collection"
              >
                COLLECTION
              </NavLink>
              <NavLink
                className="py-4 pl-6 border-b hover:bg-gray-50 text-sm"
                to="/about"
              >
                ABOUT
              </NavLink>
              <NavLink
                className="py-4 pl-6 border-b hover:bg-gray-50 text-sm"
                to="/contact"
              >
                CONTACT
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
