"use client";
import React, { useState, useRef, useEffect } from "react";

export default function CaptureWorldOur() {
  const [activeIndex, setActiveIndex] = useState(0);

  const dataVideo = [
    {
      id: 1,
      texto: "Nuestra marca ha logrado llegar a la quinta avenida en New York",
      video: "/home/suiza.mov",
    },
    {
      id: 2,
      texto: "Feria de productos colombianos Frankfurt Alemania",
      video: "/home/suiza.mov",
    },
    {
      id: 3,
      texto: "Celebrando nuestra llegada al mercado suizo",
      video: "/home/suiza.mov",
    },
  ];

  const data = [
    {
      title: "Conquiste el mundo con Nosotros",
      text: (
        <>
          <p className="text-[20px] text-gray-700 leading-relaxed">
            Está es tu oportunidad de llegar con tu negocio a todos los rincones
            del globo, con nuestros{" "}
            <span className=" font-bold">
              productos de alta calidad y 100% Colombianos
            </span>
            , además puedes expandir tu marca con nuestra alianza de Maquila,
            donde puedes adquirir nuestros productos y llegar así a más
            clientes.
          </p>
        </>
      ),
      text2: (
        <>
          <p className="text-[20px] text-gray-700 leading-relaxed font-bold">
            Pon tu logo en nuestros productos, o distribúyelos alrededor del
            mundo
          </p>
        </>
      ),
      button: "Distribuye con nosotros",
    },
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % dataVideo.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + dataVideo.length) % dataVideo.length
    );
  };
  return (
    <section className=" px-4 sm:px-6 lg:px-20 w-full h-full">
      <div className="max-w-7xl mx-auto flex flex-row ">
        <div className="w-1/3 h-full flex flex-col items-start">
          <div className="flex items-start">
            <video
              src="/home/suiza.mov"
              autoPlay={true}
              className="w-[290px] h-auto rounded-lg"
            />
          </div>
          <div className="w-[19rem]">
            <p className="text-[14px] text-gray-700 leading-relaxed">
              {dataVideo[activeIndex].texto}
            </p>
          </div>
          <div className="w-[19rem] flex flex-row items-center justify-center">
            <img
              src="/home/arrowsL.png"
              alt="Descripción de la imagen"
              className="mt-4"
              onClick={() => handlePrev()}
            />
            <img
              src="/home/arrowsR.png"
              alt="Descripción de la imagen"
              className="mt-4"
              onClick={() => handleNext()}
            />
          </div>
        </div>

        {/* Sector 2 */}
        <div className="w-2/3 flex flex-col mt-6">
          <div className="relative flex items-center">
            <div className="w-1/3">
              <img
                src="/home/sheetGreen.png"
                alt="Descripción de la imagen"
                className="w-[70px] h-[90px]"
              />
            </div>
            <div className="absolute left-8 top-[38px] w-full text-left">
              <h2 className="text-[50px] font-bold text-green-800 mb-12 leading-[0.8]">
                {data[0].title}
              </h2>
            </div>
          </div>
          <div className="items-center">
            {/* Text Content */}
            <div className="space-y-6 mt-12 text-justify ">{data[0].text}</div>
          </div>
          <div className="items-center flex flex-row mt-12">
            <div className="w-1/4">
              <img src="/home/soup.png" className="w-auto h-[251px]" />
            </div>
            <div className="w-1/2 flex items-center justify-center">
              <img src="/home/Frame171.png" className="w-auto h-[251px]" />
            </div>
            <div className="w-1/3 h-full flex flex-col justify-end ml-4">
              <div className="flex items-end justify-end">{data[0].text2}</div>

              <button className="bg-[#FFB000] text-[20px] text-white px-6 mt-4 rounded-md">
                {data[0].button}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
