import React from "react";
import { FaCar } from "react-icons/fa";

const HomeCard = () => {
  return (
    <div className="w-[332px] p-6 bg-white rounded-lg shadow-md flex flex-col items-center">
      <FaCar className="text-red-500 text-4xl mb-4" />
      <h2 className="text-xl font-bold text-gray-900 mb-2">
        Top Buy & Sell Car
      </h2>
      <p className="text-gray-700 text-center">
        We Provide Many Of The Best Services For You And You Will Get The Best
        Benefits Here
      </p>
    </div>
  );
};

export default HomeCard;
