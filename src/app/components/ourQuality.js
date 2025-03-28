"use client";
import React, { useState } from "react";

export default function OurQuality() {
  const [activeIndex, setActiveIndex] = useState(0);
  const data = [
    {
      title: (
        <>
          <h2 className="text-[60px] font-bold text-white mb-12 leading-[0.8]">
            Nuestra
            <br /> calidad
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
    <section className="mt-24 w-full h-[40rem]">
      <div className=" h-[20rem] bg-[url(/home/bg-orange.png)] bg-cover bg-no-repeat">
        <div className="flex flex-row max-w-7xl mx-auto h-full">
          <div className="relative flex h-full w-2/3 py-8 ">
            {/* Imagen a la izquierda */}
            <div className="w-1/3 h-full">
              <img
                src="/home/sheetWhite.png"
                alt="Descripción de la imagen"
                className="w-[100px] h-[120px]"
              />
            </div>

            {/* Texto encima de la imagen */}
            <div className="absolute left-16 top-[70px]  w-full text-left">
              {data[0].title}
            </div>
          </div>
          <div className="flex items-center justify-center h-[16rem]">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-white leading-relaxed">
                {data[0].text}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-20 flex flex-row h-[10rem]">
        <div className="flex flex-row w-full">
          <div className="w-2/3 flex items-center justify-center">
            <div className="flex flex-row items-center justify-evenly w-full">
              <div className="">
                <img
                  src="/home/arrowsRedL.png"
                  alt="Descripción de la imagen"
                  className="mt-4 w-[3rem]"
                  onClick={() => handlePrev()}
                />
              </div>
              <div className="">
                <img
                  src={dataimg[activeIndex].image}
                  className="w-[750px] h-[400px]"
                />
              </div>
              <div className="">
                <img
                  src="/home/arrowsRedR.png"
                  alt="Descripción de la imagen"
                  className="mt-4 w-[3rem]"
                  onClick={() => handleNext()}
                />
              </div>
            </div>
          </div>
          <div className="w-1/3 flex">
            <p className="text-lg text-[#4A4A4A] leading-relaxed mt-10 text-justify">
              {data[0].text2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
