import React, { useState } from "react";
import { assets } from "../assets/assets"; // path verify karo
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

function Add({ token }) {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));
      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { token } }
      );
      if(response.data.success){
        toast.success(response.data.message)
        setName('')
        setDescription('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice('')
      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  };
  return (
   <form
  onSubmit={onSubmitHandler}
  className="p-6 max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl space-y-10"
>
  {/* Image Upload */}
  <div className="space-y-3">
    <p className="font-bold text-xl text-gray-700">Upload Product Images</p>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {[image1, image2, image3, image4].map((img, index) => (
        <label key={index} htmlFor={`image${index + 1}`} className="cursor-pointer">
          <div className="w-full aspect-square border-2 border-dashed rounded-xl flex items-center justify-center overflow-hidden hover:border-pink-500 transition relative">
            {!img && <p className="text-gray-400 absolute">Click to upload</p>}
            <img
              src={!img ? assets.upload : URL.createObjectURL(img)}
              alt="Upload"
              className="w-full h-full object-cover"
            />
          </div>
          <input
            onChange={(e) => {
              if (index === 0) setImage1(e.target.files[0]);
              if (index === 1) setImage2(e.target.files[0]);
              if (index === 2) setImage3(e.target.files[0]);
              if (index === 3) setImage4(e.target.files[0]);
            }}
            type="file"
            id={`image${index + 1}`}
            hidden
          />
        </label>
      ))}
    </div>
  </div>

  {/* Product Details */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="space-y-2">
      <label className="font-semibold text-gray-700">Product Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter product name"
        required
        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
      />
    </div>
    <div className="space-y-2">
      <label className="font-semibold text-gray-700">Product Description</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter product description"
        required
        rows={3}
        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 transition resize-none"
      />
    </div>
  </div>

  {/* Category & Price */}
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
    <div className="space-y-2">
      <label className="font-semibold text-gray-700">Category</label>
      <select
        onChange={(e) => setCategory(e.target.value)}
        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
      >
        <option value="Men">Men</option>
        <option value="Women">Women</option>
        <option value="Kids">Kids</option>
      </select>
    </div>
    <div className="space-y-2">
      <label className="font-semibold text-gray-700">Subcategory</label>
      <select
        onChange={(e) => setSubCategory(e.target.value)}
        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
      >
        <option value="Topwear">Topwear</option>
        <option value="Bottomwear">Bottomwear</option>
        <option value="Winterwear">Winterwear</option>
      </select>
    </div>
    <div className="space-y-2">
      <label className="font-semibold text-gray-700">Price</label>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter price"
        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
      />
    </div>
  </div>

  {/* Sizes */}
  <div>
    <label className="font-semibold text-gray-700 mb-2 block">Available Sizes</label>
    <div className="flex flex-wrap gap-3">
      {["S", "M", "L", "XL", "XXL"].map((size) => (
        <div
          key={size}
          onClick={() =>
            setSizes((prev) =>
              prev.includes(size) ? prev.filter((i) => i !== size) : [...prev, size]
            )
          }
          className={`cursor-pointer px-5 py-2 rounded-xl border font-medium transition ${
            sizes.includes(size)
              ? "bg-pink-400 text-white border-pink-500"
              : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
          }`}
        >
          {size}
        </div>
      ))}
    </div>
  </div>

  {/* Bestseller */}
  <div className="flex items-center gap-3">
    <input
      type="checkbox"
      id="bestseller"
      checked={bestseller}
      onChange={() => setBestseller(!bestseller)}
      className="w-6 h-6 accent-pink-400"
    />
    <label htmlFor="bestseller" className="text-gray-700 font-medium">
      Add to Bestseller
    </label>
  </div>

  {/* Submit */}
  <button
    type="submit"
    className="w-full py-3 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-2xl transition text-lg shadow-md"
  >
    ADD PRODUCT
  </button>
</form>

  );
}

export default Add;
