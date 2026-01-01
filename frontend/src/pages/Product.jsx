import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

function Product() {
  const { productId } = useParams();
  const { products, currency ,addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        // console.log(item); 
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="max-w-7xl mx-auto p-6 space-y-10">
      {/* Product Data */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Product Images */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex lg:flex-col gap-2">
            {productData.image.map((item, index) => (
              <img
                key={index}
                onClick={() => setImage(item)}
                src={item}
                alt=""
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  item === image ? "border-orange-500" : "border-gray-200"
                }`}
              />
            ))}
          </div>
          {/* Main Image */}
          <div className="flex-1">
            <img
              src={image}
              alt=""
              className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{productData.name}</h1>
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <img src={assets.star} alt="" className="w-5 h-5" />
              <img src={assets.star} alt="" className="w-5 h-5" />
              <img src={assets.star} alt="" className="w-5 h-5" />
              <img src={assets.star} alt="" className="w-5 h-5" />
              <img src={assets.star_dull} alt="" className="w-5 h-5" />
            </div>
            <p className="text-gray-500">(122)</p>
          </div>

          {/* Price */}
          <p className="text-2xl font-semibold text-orange-500">
            {currency}
            {productData.price}
          </p>

          {/* Description */}
          <p className="text-gray-700">{productData.description}</p>

          {/* Size Selection */}
          <div>
            <p className="font-medium mb-2">Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`px-4 py-2 border rounded-lg font-medium ${
                    item === size
                      ? "border-orange-500 text-orange-500"
                      : "border-gray-300 text-gray-700 hover:border-gray-500"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button onClick={()=>addToCart(productData._id,size)}className="mt-4 w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
            ADD TO CART
          </button>

          {/* Additional Info */}
          <div className="mt-6 space-y-2 text-gray-600 text-sm">
            <p>✅ 100% Original product</p>
            <p>💵 Cash on delivery is available</p>
            <p>↩️ Easy return & exchange within 7 days</p>
          </div>
        </div>
      </div>

      {/* Description & Reviews */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm space-y-4">
        <div className="flex justify-between items-center border-b pb-2">
          <b className="text-lg">Description</b>
          <p className="text-gray-500">Reviews (122)</p>
        </div>
        <div className="space-y-2 text-gray-700">
          <p>
            E-commerce, or electronic commerce, refers to the buying and selling
            of goods and services over the internet. It involves online
            transactions where customers can browse products, compare prices,
            place orders, make payments, and track deliveries without visiting a
            physical store.
          </p>
          <p>
            E-commerce can be B2C, B2B, C2C, or C2B, depending on who is selling
            and who is buying. Modern e-commerce platforms often include
            features like online catalogs, secure payments, customer reviews,
            and personalized recommendations. It provides convenience, global
            reach, cost savings, and better customer engagement for businesses
            while giving consumers a faster, easier, and more flexible shopping
            experience.
          </p>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="text-center py-20 text-gray-500">Loading...</div>
  );
}

export default Product;
