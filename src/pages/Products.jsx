import React from "react";
import productimage from "../assets/images.png";
import Button from "../components/Button";

const Products = () => {
  return (
    <section className="h-screen bg-gradient-to-r from-green-500 via-blue-200 to-red-500 p-[50px]">
      <div className=" flex flex-col bg-white w-[350px] h-fit p-4 rounded-lg shadow-lg">
        <div className="w-full ">
          <div className="bg-purple-300 text-black mb-3 px-2 py-1 w-fit font-bold">
            Nearest Seller
          </div>
          <img
            className="size-[200px] m-auto"
            src={productimage}
            alt="images"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-2xl mb-3 mt-3">
            wireless bluetooth headset
          </h3>
          <small className="text-gray-300 font-extrabold">shipped in 3-4 days</small>
          <bold className="font-extrabold">$39.99</bold>
          <div className="flex gap-3">
            <Button label="Add to cart" classname="bg-gray-200 text-gray-400" />
            <Button label="Buy Now " classname="bg-purple-400 w-full text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
