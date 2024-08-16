import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
const Card = ({ bg_url }) => {
  return (
    <div className="w-full h-[400px] fl5ex flex-col font-apercu justify-between  overflow-hidden ">
      <div className="overflow-hidden w-full h-3/4 ">
      <div
        className={` font-bold w-full h-full card-image bg-cover ${bg_url} flex justify-end p-4 items-start overflow-hidden hover:scale-125 transition-all duration-500`}
      >
        <FaRegHeart />
      </div></div>
      <div className="details flex flex-col justify-center items-center pt-1">
        <h2 className="py-0.5">Mens Product Name </h2>
        <p className="py-0.5">Rs. 579</p>
      
      <div className="stars flex py-0.5">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="star" />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Card;
