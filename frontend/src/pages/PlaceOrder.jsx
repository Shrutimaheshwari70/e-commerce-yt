  import React, { useState, useContext } from "react";
  import Title from "../components/Title";
  import CartTotal from "../components/CartTotal";
  import { assets } from "../assets/assets";
  import { ShopContext } from "../context/ShopContext";
  import axios from "axios";
  import { toast } from "react-toastify";

  function PlaceOrder() {
    const [method, setMethod] = useState("cod");
    const {
      navigate,
      backendUrl,
      token,
      cartItems,
      setCartItems,
      getCartAmount,
      delivery_fee,
      products,
    } = useContext(ShopContext);

    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      street: "",
      city: "",
      state: "",
      zipcode: "",
      country: "",
      phone: "",
    });
    const onChangeHandler = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setFormData((data) => ({ ...data, [name]: value }));
    };
    const onSubmitHandler = async (event) => {
      event.preventDefault();
      try {
        let orderItems = [];
        for (const items in cartItems) {
          for (const item in cartItems[items]) {
            if (cartItems[items][item] > 0) {
              const itemInfo = structuredClone(
                products.find((product) => product._id === items)
              );

              if (itemInfo) {
                itemInfo.size = item;
                itemInfo.quantity = cartItems[items][item];
                orderItems.push(itemInfo);
              }
            }
          }
        }
        let orderData={
          address:formData,
          items:orderItems,
          amount:getCartAmount() + delivery_fee
        }
        switch(method){
          // api calls for cod
          case 'cod':
            const response = await axios.post(backendUrl + '/api/order/place',orderData,{headers:{token}})
            console.log(response.data)
            if(response.data.success){
              setCartItems({})
              navigate('/orders')
            }else{
              toast.error(response.data.message)
            }
            break;
            case 'stripe':
              const responseStripe = await axios.post(backendUrl+ '/api/order/stripe',orderData,{headers:{token}})
              if(responseStripe.data.success){
                const {session_url} = responseStripe.data
                window.location.replace(session_url)
              }else{
                toast.error(responseStripe.data.message)
              }
            default:
              break;
        }
      } catch (error) {
          console.log("ORDER PLACE ERROR ❌", error);
    toast.error("Order failed");
      }
    };

    const inputStyle =
      "w-full border border-gray-300 rounded-xl px-4 py-3 text-sm " +
      "focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 " +
      "placeholder-gray-400 transition";

    return (
      <form onSubmit={onSubmitHandler}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* LEFT – DELIVERY INFO */}
            <div className="lg:col-span-2 bg-white border rounded-2xl p-6 sm:p-8 shadow-sm">
              <Title text1="DELIVERY" text2="INFORMATION" />

              <div className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    required
                    onChange={onChangeHandler}
                    name="firstName"
                    value={formData.firstName}
                    className={inputStyle}
                    type="text"
                    placeholder="First name"
                  />
                  <input
                    required
                    onChange={onChangeHandler}
                    name="lastName"
                    value={formData.lastName}
                    className={inputStyle}
                    type="text"
                    placeholder="Last name"
                  />
                </div>

                <input
                  required
                  onChange={onChangeHandler}
                  name="email"
                  value={formData.email}
                  className={inputStyle}
                  type="email"
                  placeholder="Email address"
                />
                <input
                  required
                  onChange={onChangeHandler}
                  name="street"
                  value={formData.street}
                  className={inputStyle}
                  type="text"
                  placeholder="Street address"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    required
                    onChange={onChangeHandler}
                    name="city"
                    value={formData.city}
                    className={inputStyle}
                    type="text"
                    placeholder="City"
                  />
                  <input
                    required
                    onChange={onChangeHandler}
                    name="state"
                    value={formData.state}
                    className={inputStyle}
                    type="text"
                    placeholder="State"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    required
                    onChange={onChangeHandler}
                    name="zipcode"
                    value={formData.zipcode}
                    className={inputStyle}
                    type="text"
                    placeholder="Zip code"
                  />
                  <input
                    required
                    onChange={onChangeHandler}
                    name="country"
                    value={formData.country}
                    className={inputStyle}
                    type="text"
                    placeholder="Country"
                  />
                </div>

                <input
                  required
                  onChange={onChangeHandler}
                  name="phone"
                  value={formData.phone}
                  className={inputStyle}
                  type="number"
                  placeholder="Phone number"
                />
              </div>
            </div>

            {/* RIGHT – SUMMARY & PAYMENT */}
            <div className="space-y-6">
              <CartTotal />

              <div className="bg-white border rounded-2xl p-6 shadow-sm">
                <Title text1="PAYMENT" text2="METHOD" />

                <div className="mt-4 space-y-3">
                  {/* Stripe */}
                  <div
                    onClick={() => setMethod("stripe")}
                    className={`flex items-center gap-4 p-4 border rounded-xl cursor-pointer transition
                  ${
                    method === "stripe"
                      ? "border-green-500 ring-2 ring-green-300"
                      : "hover:bg-gray-50"
                  }`}
                  >
                    <span
                      className={`w-4 h-4 rounded-full border
                    ${
                      method === "stripe" ? "bg-green-500 border-green-500" : ""
                    }`}
                    />
                    <img src={assets.stripe} alt="Stripe" className="h-6" />
                  </div>

                  {/* Razorpay */}
                  {/* <div
                    onClick={() => setMethod("razorpay")}
                    className={`flex items-center gap-4 p-4 border rounded-xl cursor-pointer transition
                  ${
                    method === "razorpay"
                      ? "border-green-500 ring-2 ring-green-300"
                      : "hover:bg-gray-50"
                  }`}
                  >
                    <span
                      className={`w-4 h-4 rounded-full border
                    ${
                      method === "razorpay" ? "bg-green-500 border-green-500" : ""
                    }`}
                    />
                    <img src={assets.razorpay} alt="Razorpay" className="h-6" />
                  </div> */}

                  {/* COD */}
                  <div
                    onClick={() => setMethod("cod")}
                    className={`flex items-center gap-4 p-4 border rounded-xl cursor-pointer transition
                  ${
                    method === "cod"
                      ? "border-green-500 ring-2 ring-green-300"
                      : "hover:bg-gray-50"
                  }`}
                  >
                    <span
                      className={`w-4 h-4 rounded-full border
                    ${method === "cod" ? "bg-green-500 border-green-500" : ""}`}
                    />
                    <p className="font-medium text-sm sm:text-base">
                      Cash on Delivery
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  // onClick={() => navigate("/orders")}
                  className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition"
                >
                  PLACE ORDER
                </button>

                <p className="text-center text-xs text-gray-500 mt-2">
                  🔒 Secure checkout
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }

  export default PlaceOrder;
