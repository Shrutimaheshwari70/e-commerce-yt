import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

function Sidebar() {
  return (
    <div className="w-56 min-h-screen bg-orange-50 border-r border-orange-200 px-4 py-6">
      
      {/* Menu */}
      <div className="flex flex-col space-y-2">
        
        <NavLink
          to="/add"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-md transition
            ${isActive 
              ? "bg-orange-200 text-orange-700" 
              : "text-orange-600 hover:bg-orange-100"}`
          }
        >
          <img src={assets.add} alt="Add" className="w-5 h-5" />
          <p className="text-sm font-medium">Add Items</p>
        </NavLink>

        <NavLink
          to="/list"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-md transition
            ${isActive 
              ? "bg-orange-200 text-orange-700" 
              : "text-orange-600 hover:bg-orange-100"}`
          }
        >
          <img src={assets.list} alt="List" className="w-5 h-5" />
          <p className="text-sm font-medium">List Items</p>
        </NavLink>

        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-md transition
            ${isActive 
              ? "bg-orange-200 text-orange-700" 
              : "text-orange-600 hover:bg-orange-100"}`
          }
        >
          <img src={assets.purchase} alt="Orders" className="w-5 h-5" />
          <p className="text-sm font-medium">Orders</p>
        </NavLink>

      </div>
    </div>
  );
}

export default Sidebar;
