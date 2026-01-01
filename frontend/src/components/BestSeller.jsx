  import React, { useContext, useEffect, useState } from "react";
  import { ShopContext } from "../context/ShopContext";
  import Title from "./Title";
  import ProductItem from "./ProductItem";

  function BestSeller() {
    const { products } = useContext(ShopContext);
    const [bestseller, setBestSeller] = useState([]);
    useEffect(() => {
      const bestProduct = products.filter((item) => item.bestseller === true);
      setBestSeller(bestProduct.slice(0, 5));
    }, [products]);
    return (
      <div className="my-10">
        <div className="text-center text-3xl py-8 ">
          <Title text1={"BEST"} text2={"SELLERS"} />
          <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ea
            quisquam asperiores sint nostrum dolorem illo unde maiores nam maxime.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 gap-y-3 pl-3 pr-3 mt-7">
            {bestseller.map((item, index) => (
              <ProductItem
                key={index}
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  export default BestSeller;
