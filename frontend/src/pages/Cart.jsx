import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

function Cart() {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];

      for (const productId in cartItems) {
        for (const size in cartItems[productId]) {
          if (cartItems[productId][size] > 0) {
            tempData.push({
              _id: productId,
              size,
              quantity: cartItems[productId][size],
            });
          }
        }
      }

      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Title text1="YOUR" text2="CART" />

      {cartData.length === 0 ? (
        <p className="text-gray-500 text-center py-20 text-lg">
          Your cart is empty 🛒
        </p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* LEFT SIDE – CART ITEMS */}
          <div className="lg:col-span-2 space-y-6">
            {cartData.map((item) => {
              const productData = products.find(
                (product) => product._id === item._id
              );

              if (!productData) return null;

              return (
                <div
                  key={`${item._id}-${item.size}`}
                  className="flex gap-4 p-5 border rounded-2xl bg-white shadow-sm hover:shadow-md transition"
                >
                  {/* Image */}
                  <img
                    src={productData.image[0]}
                    alt={productData.name}
                    className="w-24 h-24 object-cover rounded-xl"
                  />

                  {/* Product Details */}
                  <div className="flex-1">
                    <p className="font-semibold text-lg">{productData.name}</p>
                    <p className="text-sm text-gray-500">Size: {item.size}</p>
                    <p className="text-orange-500 font-semibold mt-1">
                      {currency}
                      {productData.price}
                    </p>

                    {/* Quantity & Remove */}
                    <div className="flex items-center gap-4 mt-4">
                      <input
                        type="number"
                        min={1}
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(
                            item._id,
                            item.size,
                            Number(e.target.value)
                          )
                        }
                        className="w-16 text-center border rounded-md py-1 focus:ring-1 focus:ring-orange-500"
                      />

                      <button
                        onClick={() => updateQuantity(item._id, item.size, 0)}
                        className="flex items-center gap-1 text-sm text-red-500 hover:underline"
                      >
                        <img
                          src={assets.bin}
                          alt="Remove"
                          className="w-4 h-4"
                        />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE – CART SUMMARY */}
          <div className="space-y-4 lg:sticky lg:top-24 h-fit">
            <CartTotal />

            <button
              onClick={() => navigate("/place-order")}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition"
            >
              PROCEED TO CHECKOUT
            </button>

            <p className="text-center text-sm text-gray-500">
              Secure checkout 🔒
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
