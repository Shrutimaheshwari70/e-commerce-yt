import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

function Orders({ token }) {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) return null;
    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );
      if (response.data.success) setOrders(response.data.orders);
      else toast.error(response.data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  const statusHandler = async (event, orderId) => {
    const newStatus = event.target.value;

    try {
      const response = await axios.post(
        backendUrl + "/api/order/status",
        { orderId, status: newStatus }, // ✅ now orderId exists
        { headers: { token } }
      );
      if (response.data.success) {
        await fetchAllOrders();
        toast.success("Order status updated");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  const statusColors = {
    "Order Placed": "bg-yellow-100 text-yellow-800",
    Packing: "bg-orange-100 text-orange-800",
    Shipped: "bg-blue-100 text-blue-800",
    "Out for delivery": "bg-purple-100 text-purple-800",
    Delivered: "bg-green-100 text-green-800",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h3 className="text-3xl font-bold text-gray-800 mb-6">My Orders</h3>

      {orders.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No orders found...</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row gap-6 md:items-center hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Order Image */}
              <img
                src={assets.order}
                alt="Order"
                className="w-28 h-28 object-cover rounded-lg border flex-shrink-0"
              />

              {/* Order Items & Address */}
              <div className="flex-1 flex flex-col gap-2">
                <div>
                  {order.items.map((item, idx) => (
                    <p key={idx} className="text-gray-700 text-sm md:text-base">
                      <span className="font-semibold">{item.name}</span> x{" "}
                      {item.quantity}{" "}
                      <span className="text-gray-500">{item.size}</span>
                    </p>
                  ))}
                </div>

                <div className="mt-2 text-gray-600 text-sm md:text-base">
                  <p className="font-semibold">
                    {order.address.firstName} {order.address.lastName}
                  </p>
                  <p>
                    {order.address.street}, {order.address.city},{" "}
                    {order.address.state}, {order.address.country},{" "}
                    {order.address.zipcode}
                  </p>
                  <p>Phone: {order.address.phone}</p>
                </div>
              </div>

              {/* Order Details */}
              <div className="flex flex-col gap-1 text-gray-700 min-w-[200px] md:min-w-[250px] mt-4 md:mt-0">
                <p>Items: {order.items.length}</p>
                <p>Method: {order.paymentMethod}</p>
                <p>
                  Payment:{" "}
                  <span
                    className={
                      order.payment
                        ? "text-green-600 font-semibold"
                        : "text-red-600 font-semibold"
                    }
                  >
                    {order.payment ? "Done" : "Pending"}
                  </span>
                </p>
                <p>Date: {new Date(order.date).toLocaleDateString()}</p>
                <p className="font-semibold text-lg">
                  Total: {currency}
                  {order.amount}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      statusColors[order.status]
                    }`}
                  >
                    {order.status}
                  </span>
                  <select
                    value={order.status}
                    onChange={(event) => statusHandler(event, order._id)}
                    className="ml-auto border rounded-lg px-3 py-1 bg-gray-50 focus:ring-2 focus:ring-orange-400 text-sm md:text-base"
                  >
                    <option value="Order Placed">Order Placed</option>
                    <option value="Packing">Packing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Out for delivery">Out for delivery</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Orders;
