"use client";
import React, { useState } from "react";

export default function OurCommitWomen() {
  const [activeIndex, setActiveIndex] = useState(0);

  const dataimg = [
    {
      id: 1,
      image: "/home/women1.png",
    },
    {
      id: 2,
      image: "/home/women2.png",
    },
    {
      id: 3,
      image: "/home/women3.png",
    },
  ];

  const data = [
    {
      title: (
        <>
          <h2
            className={`text-[clamp(40px,6vw,70px)] font-bold text-[#008638] mb-12 leading-[0.98] font-itcGBold`}
          >
            Nuestro compromiso
            <span className="inline-block">es con las mujeres</span>
          </h2>
        </>
      ),
      text: "Queremos retribuir a la sociedad apoyando diferentes comunidades y fundaciones, además nuestra política de empleo se basa en la contratación de mujeres cabeza de hogar equivalente a un 80% de nuestro personal.",
    },
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % dataimg.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + dataimg.length) % dataimg.length
    );
  };

  return (
    <section className="pt-[96px] md:mt-[96px] w-full h-full">
      <div className="px-[clamp(1rem,5vw,6rem)] flex flex-row h-full ">
        <div className="flex flex-col lg:flex-row w-full h-full justify-start">
          <div className="w-full flex items-start justify-start">
            <div className="flex flex-row order-last gap-[0.4rem] md:gap-4 lg:order-none items-center justify-start w-full mt-4 lg:mt-0">

              <img
                src="/home/arrowsL.png"
                alt="Descripción de la imagen"
                className="mt-4 w-[3rem] cursor-pointer"
                onClick={() => handlePrev()}
              />


              <img
                src={dataimg[activeIndex].image}
                className="md:w-[750px] md:h-[400px] lg:max-w-full lg:w-[82%] w-[82%] lg:h-[550px] h-full rounded-b-2xl rounded-r-2xl"
              />

              <img
                src="/home/arrowsR.png"
                alt="Descripción de la imagen"
                className="mt-4 w-[3rem] cursor-pointer"
                onClick={() => handleNext()}
              />

            </div>
          </div>
          <div className="md:ml-12 flex flex-col order-first lg:order-none items-center justify-center lg:w-[49%]">
            {data[0].title}
            <p className="text-[clamp(1.2rem,1.75vw,1.75rem)]  text-[#4A4A4A] leading-[1.3] lg:mt-4 text-left">
              {data[0].text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
