import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

function Collection() {
  const { products, search, showSearch } = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  // UI state for mobile filter drawer
  const [showFilter, setShowFilter] = useState(false);

  // TOGGLE CATEGORY
  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((i) => i !== value) : [...prev, value]
    );
  };

  // TOGGLE SUBCATEGORY
  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value) ? prev.filter((i) => i !== value) : [...prev, value]
    );
  };

  // APPLY FILTER
  const applyFilter = () => {
    let productsCopy = products.slice();
    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category.length > 0)
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    if (subCategory.length > 0)
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    setFilterProducts(productsCopy);
  };

  // SORT PRODUCTS
  const sortProduct = () => {
    let copy = filterProducts.slice();
    if (sortType === "low-high")
      setFilterProducts(copy.sort((a, b) => a.price - b.price));
    else if (sortType === "high-low")
      setFilterProducts(copy.sort((a, b) => b.price - a.price));
    else applyFilter();
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch,products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="max-w-7xl mx-auto px-4 pt-10">
      {/* MOBILE FILTER BUTTON */}
      <div className="md:hidden flex justify-between items-center mb-6">
        <Title text1="All" text2="COLLECTIONS" />
        <button
          onClick={() => setShowFilter(true)}
          className="border px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition"
        >
          Filters
        </button>
      </div>

      <div className="flex gap-8">
        {/* DESKTOP FILTER */}
        <div className="hidden md:block w-64 bg-white border rounded-xl p-5 shadow-sm h-fit sticky top-24">
          <h2 className="font-semibold text-lg mb-5">Filters</h2>

          {/* CATEGORY */}
          <div className="mb-6">
            <p className="text-sm font-semibold mb-3">Category</p>
            {["Men", "Women", "Kids"].map((item) => (
              <label
                key={item}
                className="flex items-center gap-3 mb-2 text-sm cursor-pointer hover:text-black transition"
              >
                <input
                  type="checkbox"
                  value={item}
                  onChange={toggleCategory}
                  className="accent-black w-4 h-4"
                />
                {item}
              </label>
            ))}
          </div>

          {/* TYPE */}
          <div>
            <p className="text-sm font-semibold mb-3">Type</p>
            {["Topwear", "Bottomwear", "Winterwear"].map((item) => (
              <label
                key={item}
                className="flex items-center gap-3 mb-2 text-sm cursor-pointer hover:text-black transition"
              >
                <input
                  type="checkbox"
                  value={item}
                  onChange={toggleSubCategory}
                  className="accent-black w-4 h-4"
                />
                {item}
              </label>
            ))}
          </div>
        </div>

        {/* PRODUCTS SECTION */}
        <div className="flex-1">
          {/* DESKTOP HEADER */}
          <div className="hidden md:flex justify-between items-center border-b pb-4 mb-6">
            <Title text1="All" text2="COLLECTIONS" />
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="border px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-black"
            >
              <option value="relavent">Relevant</option>
              <option value="low-high">Low to High</option>
              <option value="high-low">High to Low</option>
            </select>
          </div>

          {/* PRODUCT GRID */}
          {/* PRODUCT GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {filterProducts.length > 0 ? (
              filterProducts.map((item, index) => (
                <ProductItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                />
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500 py-10">
                No products found
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE FILTER DRAWER */}
      {showFilter && (
        <div className="fixed inset-0 z-50 bg-black/40">
          <div className="absolute bottom-0 w-full bg-white rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-lg">Filters</h2>
              <button
                onClick={() => setShowFilter(false)}
                className="text-xl font-medium"
              >
                ✕
              </button>
            </div>

            {/* CATEGORY */}
            <div className="mb-5">
              <p className="text-sm font-semibold mb-3">Category</p>
              {["Men", "Women", "Kids"].map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-3 mb-2 text-sm cursor-pointer hover:text-black transition"
                >
                  <input
                    type="checkbox"
                    value={item}
                    onChange={toggleCategory}
                    className="accent-black w-4 h-4"
                  />
                  {item}
                </label>
              ))}
            </div>

            {/* TYPE */}
            <div className="mb-6">
              <p className="text-sm font-semibold mb-3">Type</p>
              {["Topwear", "Bottomwear", "Winterwear"].map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-3 mb-2 text-sm cursor-pointer hover:text-black transition"
                >
                  <input
                    type="checkbox"
                    value={item}
                    onChange={toggleSubCategory}
                    className="accent-black w-4 h-4"
                  />
                  {item}
                </label>
              ))}
            </div>

            <button
              onClick={() => setShowFilter(false)}
              className="w-full bg-black text-white py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Collection;
