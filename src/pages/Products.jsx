import React, { useEffect, useState } from "react";
import productimage from "../assets/images.png";
import Button from "../components/Button";
import axios from "axios";

const Products = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchpost = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProduct(response.data.products);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchpost();
  }, []);

  // first way to use API
  //fetch("https://dummyjson.com/products")
  //    .then((response) => response.json())
  //    .then((data) =>setProduct(console.log)(data.products)
  //     .catch((error) => console.log(error, error))
  //  );

  return (
    <>
      {product.map((p, index) => (
        <section className="h-screen bg-gradient-to-r from-green-500 via-blue-200 to-red-500 p-[50px]">
          <div
            key={index}
            className=" flex flex-col bg-white w-[350px] h-fit p-4 rounded-lg shadow-lg"
          >
            <div className="w-full ">
              <div className="bg-purple-300 text-black mb-3 px-2 py-1 w-fit font-bold">
                {p.availabilityStatus}
              </div>
              <img
                className="size-[200px] m-auto"
                src={p.images[0]}
                alt="images"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-2xl mb-3 mt-3">{p.title}</h3>
              <small className="text-gray-300 font-extrabold">
                shipped in 3-4 days
              </small>
              <bold className="font-extrabold">${p.price}</bold>
              <div className="flex gap-3">
                <Button
                  label="Add to cart"
                  classname="bg-gray-200 text-gray-400"
                />
                <Button
                  label="Buy Now "
                  classname="bg-purple-400 w-full text-white"
                />
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Products;
