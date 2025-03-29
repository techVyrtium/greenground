"use client";
import React, { useState, useEffect } from "react";

export default function Card({ card }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div
      className={`w-full place-items-center  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 relative mt-[34px] gap-[16px] lg:gap-[32px] 2xl:gap-[24px]`}
    >
      {card.map((data) => (
        <div className="w-56 flex flex-col items-center" key={data.id}>
          <div className="flex items-center justify-center w-52 h-56 rounded-lg backdrop-blur-md shadow-md  shadow-gray-500 ">
            <img src={data.img1} className="w-[500px]" />
          </div>
          <div className="flex felx-row items-center justify-center gap-2">
            <div
              className={`mt-4 p-1.5 rounded-full ${
                activeIndex == 0 ? "bg-[#008E4A]" : "bg-[#E1FAEE]"
              }`}
            ></div>
          </div>
          <div className="flex flex-col items-center justify-center w-52 h-fit mt-4 rounded-lg border border-[#008638] ">
            <a className="text-[24px] text-[#4A4A4A]">{data.title}</a>

            <div className="w-[95%] text-[14px] flex items-center justify-center border border-b-0 border-l-0 border-r-0 border-t-amber-500">
              {data.weight}
            </div>
            <button className="hover:bg-[#FFB000] bg-[#F5B356] text-[14px] w-[95%] text-white px-6 rounded-md mb-2">
              {data.buttom}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
