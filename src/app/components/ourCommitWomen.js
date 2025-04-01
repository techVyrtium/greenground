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
          <h2 className="text-[60px] font-bold text-[#008638] mb-12 leading-[0.8]">
            Nuestro compromiso es con las mujeres
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
    <section className="mt-20 w-full h-full">
      <div className="px-4 sm:px-6 lg:px-20 flex flex-row h-full">
        <div className="flex flex-col lg:flex-row w-full h-full">
          <div className="lg:w-1/2 flex items-start">
            <div className="flex flex-row order-last lg:order-none items-center justify-evenly w-full mt-4 lg:mt-0">
              <div className="">
                <img
                  src="/home/arrowsL.png"
                  alt="Descripción de la imagen"
                  className="mt-4 w-[8rem] md:w-[3rem]"
                  onClick={() => handlePrev()}
                />
              </div>
              <div className="">
                <img
                  src={dataimg[activeIndex].image}
                  className="md:w-[750px] md:h-[400px] w-[65rem] h-[15rem] rounded-b-2xl rounded-r-2xl"
                />
              </div>
              <div className="">
                <img
                  src="/home/arrowsR.png"
                  alt="Descripción de la imagen"
                  className="mt-4 w-[8rem] md:w-[3rem]"
                  onClick={() => handleNext()}
                />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 md:ml-12 flex flex-col order-first lg:order-none items-center justify-center">
            {data[0].title}
            <p className="text-lg text-[#4A4A4A] leading-relaxed lg:mt-4 text-justify">
              {data[0].text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
