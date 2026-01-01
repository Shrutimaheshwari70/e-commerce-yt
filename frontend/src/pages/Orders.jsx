import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-toastify";

function Orders() {
  const { backendUrl,token, currency } = useContext(ShopContext);
  const [orderData,setOrderData] = useState([])
  const loadOrderData = async () =>{
    try {
      if(!token){
        return null;
      }
      const response = await axios.post(backendUrl + '/api/order/userorders',{},{headers:{token}})
      if(response.data.success){
        let allOrdersItem = []
        response.data.orders.map((order)=>{
          order.items.map((item)=>{
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            allOrdersItem.push(item)
            
          })
        })
        setOrderData(allOrdersItem.reverse())
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
  
  useEffect(() => {
    loadOrderData();
  }, [token]);
  return (
  <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-10">
        <Title text1="MY" text2="ORDERS" />
      </div>

      {orderData.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Loading orders...</p>
      ) : (
        <div className="space-y-6">
          {orderData.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Product Image */}
              <img
                src={item.image?.[0]}
                alt={item.name}
                className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-lg border border-gray-300 shadow-sm"
              />

              {/* Product Info */}
              <div className="flex-1 flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-10">
                <div className="flex-1">
                  <p className="font-semibold text-lg sm:text-xl">{item.name}</p>
                  <p className="text-orange-500 font-semibold text-md sm:text-lg mt-1">
                    {currency}{item.price}
                  </p>
                  <div className="flex flex-wrap gap-3 mt-2 text-gray-600 text-sm">
                    <span>Qty: {item.quantity}</span>
                    <span>Size: {item.size}</span>
                    <span>
                      {new Date(item.date).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span>Payment: {item.paymentMethod}</span>
                  </div>
                </div>

                {/* Status & Track Button */}
                <div className="flex flex-col sm:items-end gap-2 mt-4 sm:mt-0">
                  <span
                    className={`text-xs font-semibold px-4 py-1 rounded-full ${
                      item.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : item.status === "Cancelled"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {item.status}
                  </span>
                  <button
                    onClick={loadOrderData}
                    className="mt-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded-xl text-sm transition-colors shadow-sm hover:shadow-md"
                  >
                    Track Order
                  </button>
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
