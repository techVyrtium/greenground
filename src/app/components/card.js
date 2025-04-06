"use client";
import React, { useState, useEffect } from "react";

export default function Card({ card, wSize = 48, hSize = 52, imgW = 400, zone = 1 }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [nImg, setNImg] = useState(1)

  useEffect(() => {
    if(activeIndex == 0) {
      setTimeout(() => {
        setActiveIndex(1)
      }, 2500)
    } else if(activeIndex == 1) {
      setTimeout(() => {
        setActiveIndex(0)
      }, 2500)
    }
  },)
  return (
    <div
      className={`w-full items-center grid grid-cols-2 ${zone == 1 ? 'md:grid-cols-3 lg:gap-[2vw] 2xl:gap-[24px] ' : 'md:grid-cols-4 lg:gap-[3vw] xl:gap-[180px] 2xl:gap-[184px]'} md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-6 relative md:mt-[34px] gap-[16px]  `}
    >
      {card.map((data) => (
        <div className="md:w-48 w-full flex flex-col items-center justify-around lg:items-start " key={data.id}>
          <div className={`flex items-center justify-center w-[155px]  md:w-${wSize} md:h-${hSize} lg:h-${hSize} xl:md:h-${hSize} rounded-lg backdrop-blur-md shadow-md  shadow-gray-500 `}>
            <img src={activeIndex == 0  ? data.img1 : data.img2} className={`w-${imgW} ${zone == 1 ? 'h-36' : 'h-32'} transition-[blur] duration-[2s] ease-initial` } />
          </div>
          <div className={`flex w-[155px] md:w-${wSize} flex-row items-center justify-center gap-2`}>
            <div
              className={`mt-4 p-1.5 rounded-full ${
                activeIndex == 0 ? "bg-[#9E2714]" : "bg-[#C0c0c0]"
              }`}
            ></div>
             <div
              className={`mt-4 p-1.5 rounded-full ${
                activeIndex == 1 ? "bg-[#9E2714]" : "bg-[#C0c0c0]"
              }`}
            ></div>
          </div>
          <div className={`flex flex-col items-center justify-center w-[155px] md:w-${wSize} lg:w-${wSize} xl:w-${wSize}  h-fit mt-4 rounded-lg border ${zone == 1 ? 'bg-transparent' : 'bg-[#B52C17]'} border-[#008638] `}>
            <a className="text-[16px] text-[#4A4A4A]">{data.title}</a>

            <div className="w-[95%] text-[12px] flex items-center justify-center border border-b-0 border-l-0 border-r-0 border-t-amber-500">
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
