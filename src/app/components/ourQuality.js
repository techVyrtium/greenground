"use client";
import React, { useState } from "react";

export default function OurQuality() {
  const [activeIndex, setActiveIndex] = useState(0);
  const data = [
    {
      title: (
        <>
          <h2 className="text-[clamp(40px,6vw,96px)] xl:text-[clamp(70px,4.5vw,96px)] font-bold text-white mb-12 leading-[0.9]">
            Nuestra calidad
          </h2>
        </>
      ),
      text: "Contamos con una planta física adecuada para el almacenamiento y distribución. Nuestro personal esta capacitado en localizar aquellos productos que sean de su interés , bajo un plan logístico de excelencia.",
      text2:
        "Nuestro éxito radica en atender nuestras operaciones desde la compra hasta la comercialización internacional. Trabajamos con proveedores que cumplen con buenas prácticas de manufactura y agrícola para obtener una materia prima, insumos y servicios con altos estándares, lo cual nos asegure alimentos de alta calidad ",
    },
  ];

  const dataimg = [
    {
      id: 1,
      image: "/home/ourQuality1.png",
    },
    {
      id: 2,
      image: "/home/ourQuality2.png",
    },
    {
      id: 3,
      image: "/home/ourQuality3.png",
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
    <section className="pt-[96px] w-full h-full " id="ourQuality">
      <div className="bg-[url(/home/bg-orange.png)] bg-cover bg-no-repeat px-[clamp(1rem,5vw,6rem)] pt-4 pb-20">
        <div className="flex flex-col xl:flex-row w-full mx-auto h-full pt-6 px-4 md:px-0">
          {/* Bloque: Imagen + Título */}
          <div className="relative w-full xl:w-1/3">
            {/* Imagen de fondo */}
            <img
              src="/home/sheetWhite.png"
              alt="Decoración"
              className="w-[6rem] md:w-[10rem] h-auto"
            />

            {/* Título encima de la imagen */}
            <span className="absolute top-10 md:top-20 lg:top-20 xl:top-12 md:left-20 left-10 text-white  leading-[1] font-itcGBold">
              {data[0].title}
            </span>
          </div>

          {/* Texto descriptivo */}
          <div className="mt-14 xl:mt-0 xl:ml-8 flex items-center lg:w-2/3">
            <p className="text-[clamp(20px,1.75vw,28px)] text-white font-[600] leading-[1.1]">
              {data[0].text}
            </p>
          </div>
        </div>
      </div>

      <div className="px-[clamp(1rem,5vw,6rem)] flex flex-row  -mt-8 md:-mt-12">
        <div className=" mx-auto flex flex-col lg:flex-row w-full">
          <div className="lg:w-1/2 w-full flex items-center justify-center">
            <div className="flex flex-row gap-4 items-center justify-evenly w-full">
              <div className="">
                <img
                  src="/home/arrowsRedL.png"
                  alt="Descripción de la imagen"
                  className="mt-4 md:w-[3rem] w-[6rem] cursor-pointer"
                  onClick={() => handlePrev()}
                />
              </div>
              <div className="">
                <img
                  src={dataimg[activeIndex].image}
                  className="md:w-[750px] md:h-[400px] w-[950px] h-[200px] rounded-tr-[20px] rounded-bl-[20px]"
                />
              </div>
              <div className="">
                <img
                  src="/home/arrowsRedR.png"
                  alt="Descripción de la imagen"
                  className="mt-4 md:w-[3rem] w-[6rem] cursor-pointer"
                  onClick={() => handleNext()}
                />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full flex md:ml-4 md:w-fit">
            <p className="text-[clamp(22px,1.75vw,28px)] text-[#4A4A4A] leading-[1.1] mt-8 md:mt-32 text-left">
              {data[0].text2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
