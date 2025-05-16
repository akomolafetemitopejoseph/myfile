import React, { useEffect, useState } from "react";
import userCardpic from "../assets/pic.jpg";
import axios from "axios";

const UserCard = () => {
  const [userCard, setuserCard] = useState([]);

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/users");
        setuserCard(response.data.userCards);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchCard();
  }, []);

  return (
    <>
      {userCard.map((p) => (
        <div className="bg-gradient-to-r from-gray-500 via-yellow-500 to-red-300 h-screen">
          {/* This part is for the image */}

          <div className="flex justify-center">
            <div className="flex justify-center bg-white w-[700px] rounded-md">
              <div>
                <div>
                  <img
                    className="w-[200px] h-[200px] rounded-full p-1 m-4"
                    src={p.image}
                    alt="pic"
                  />
                </div>

                {/* This part is for the borders  */}
                <div className="flex gap-1 p-2 m-4">
                  <div className="bg-green-300 w-[20px] h-[5px]"></div>
                  <div className="bg-green-300 w-[20px] h-[5px]"></div>
                  <div className="bg-green-300 w-[20px] h-[5px]"></div>
                  <div className="bg-green-300 w-[20px] h-[5px]"></div>
                  <div className="bg-green-300 w-[20px] h-[5px]"></div>
                  <div className="bg-gray-300 w-[20px] h-[5px]"></div>
                  <div className="bg-gray-300 w-[20px] h-[5px]"></div>
                  <div className="bg-gray-300 w-[20px] h-[5px]"></div>
                  <div className="bg-gray-300 w-[20px] h-[5px]"></div>
                  <div className="bg-gray-300 w-[20px] h-[5px]"></div>
                </div>

                <div className="flex gap-10 p-2 m-4">
                  <div>
                    <span className="text-gray-300 font-semibold">
                      YOUR RATING
                    </span>
                    <h3 className="text-black font-bold">53%</h3>
                  </div>

                  <div>
                    <span className="text-gray-300 font-semibold">
                      ACTIVITY
                    </span>
                    <h3 className="ext-black font-bold">90%</h3>
                  </div>
                </div>
              </div>

              <div className="m-2">
                <div className="flex gap-5 p-1 m-4">
                  <div>
                    <h3 className="text-[2rem] font-extrabold ">Kenya West</h3>
                    <span className="text-gray-300 font-[1rem]">
                      San Francisco, CA
                    </span>
                  </div>

                  <div className="bg-green-400 insert-0 w-[150px] h-[50px]">
                    <h3 className="text-white font-extrabold text-end mr-[15px] mt-[11px]">
                      EDIT
                    </h3>
                    <div className="bg-gray-200 w-[50%] h-1"></div>
                  </div>
                </div>
                <div className="bg-gray-200 w-[100%] h-1 mr-10"></div>

                <div className="p-4">
                  <h1 className="text-gray-300 font-semibold m-2">
                    Email:
                    <span className="text-black font-bold">{p.email}</span>
                  </h1>
                  <h1 className="text-gray-300 font-semibold m-2">
                    City:
                    <span className="text-black font-bold">{p.city}</span>
                  </h1>

                  <h1 className="text-gray-300 font-semibold m-2">
                    state:{" "}
                    <span className="text-black font-bold">{p.state}</span>
                  </h1>

                  <h1 className="text-gray-300 font-semibold m-2">
                    Country:{" "}
                    <span className="text-black font-bold">{p.country}</span>
                  </h1>

                  <h1 className="text-gray-300 font-semibold m-2">
                    Phone Number:{" "}
                    <span className="text-black font-bold">{p.phone}</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default UserCard;
