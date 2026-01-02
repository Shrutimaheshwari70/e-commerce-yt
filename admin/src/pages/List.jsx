import axios from "axios";
import React, { useEffect, useState } from "react";
import {currency } from "../App";
import { toast } from "react-toastify";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

function List({ token }) {
  const [list, setList] = useState([]);
  
  const fetchList = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`);
      if (response.data.success) setList(response.data.products);
      else toast.error(response.data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/product/remove`,
        { id },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        fetchList();
      } else toast.error(response.data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => { fetchList(); }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Products List</h1>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border-b">Image</th>
              <th className="p-3 border-b">Name</th>
              <th className="p-3 border-b">Category</th>
              <th className="p-3 border-b">Price</th>
              <th className="p-3 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="p-3 border-b">
                  <img src={item.image[0]} alt="" className="h-12 w-12 object-cover rounded"/>
                </td>
                <td className="p-3 border-b">{item.name}</td>
                <td className="p-3 border-b">{item.category}</td>
                <td className="p-3 border-b">{currency}{item.price}</td>
                <td className="p-3 border-b">
                  <button
                    onClick={() => removeProduct(item._id)}
                    className="text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {list.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center p-4 text-gray-500">
                  No Products Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default List;
