"use client";
import React, { useState, useEffect } from "react";

export default function CaptureWorldOur() {
  const [activeIndex, setActiveIndex] = useState(0);
  //const [duration, setDuration] = useState(0);

  const dataVideo = [
    {
      id: 1,
      texto: "Nuestra marca ha logrado llegar a la quinta avenida en New York",
      video: "/home/quintaAve.mov",
    },
    {
      id: 2,
      texto: "Feria de productos colombianos Frankfurt Alemania",
      video: "/home/feria.mov",
    },
    {
      id: 3,
      texto: "Celebrando nuestra llegada al mercado suizo",
      video: "/home/suiza.mov",
    },
  ];

  const data = [
    {
      title: "Conquista el mundo con Nosotros",
      text: (
        <>
          <p className="text-[25px] text-[#5C6E79] leading-relaxed font-[500]">
            Está es tu oportunidad de llegar con tu negocio a todos los rincones
            del globo, con nuestros{" "}
            <span className={` font-[700] font-itcGBold`}>
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
          <p className={`text-[25px] text-[#5C6E79] font-[700] font-itcGBold`}>
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

  /* const videoTime = (e) => {
    console.log(e.target.duration);
  }; */

  const handleVideoEnd = () => {
    if (activeIndex <= dataVideo.length) handleNext();
  };
  return (
    <section className="px-4 sm:px-6 lg:px-20 w-full h-fit mt-20">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row ">
        <div className="md:w-1/4 w-full h-full flex flex-col md:flex-col lg:flex-col items-start">
          <div className="flex items-start h-fit">
            <video
              src={dataVideo[activeIndex].video}
              autoPlay={true}
              //loop
              muted={true}
              //controls={true}
              //onLoadedMetadata={videoTime}
              onEnded={handleVideoEnd}
              className="md:w-[300px] h-auto rounded-lg transition ease-in-out"
            >
            </video>
          </div>
          <div className="md:w-[20rem] w-fit mt-4">
            <p className="text-[24px] lg:text-[20px] text-gray-700">
              {dataVideo[activeIndex].texto}
            </p>
          </div>
          <div className="md:w-[19rem] w-full flex flex-row items-center justify-center md:-ml-6">
            <img
              src="/home/arrowsL.png"
              alt="Descripción de la imagen"
              className="mt-4 mr-2"
              onClick={() => handlePrev()}
            />
            <div className="flex felx-row gap-2">
              <div
                className={`mt-4 p-1.5 rounded-full ${activeIndex == 0 ? "bg-[#008E4A]" : "bg-[#E1FAEE]"
                  }`}
              ></div>
              <div
                className={`mt-4 p-1.5 rounded-full ${activeIndex == 1 ? "bg-[#008E4A]" : "bg-[#E1FAEE]"
                  }`}
              ></div>
              <div
                className={`mt-4 p-1.5 rounded-full ${activeIndex == 2 ? "bg-[#008E4A]" : "bg-[#E1FAEE]"
                  }`}
              ></div>
            </div>

            <img
              src="/home/arrowsR.png"
              alt="Descripción de la imagen"
              className="mt-4 ml-2"
              onClick={() => handleNext()}
            />
          </div>
        </div>
        {/* Sector 2 */}
        <div className=" w-full h-full flex flex-col md:mt-18 lg:mt-6 md:ml-10">
          <div className="relative">
            <div className="w-1/3">
              <img
                src="/home/sheetGreen.png"
                alt="Descripción de la imagen"
                className="w-[70px] h-[90px]"
              />
            </div>
            <div className="absolute left-12 md:left-14 top-[36px] w-full text-left">
              <h2 className={`text-[48px] font-bold text-[#008638] mb-12 leading-[0.8] font-itcGBold`}>
                {data[0].title}
              </h2>
            </div>
          </div>
          <div className="items-center mt-12 md:mt-0">
            <div className={`space-y-6 mt-12 text-left font-itcGBook`}>{data[0].text}</div>
          </div>
          <div className={`hidden lg:grid`}>
            <div className="items-center flex flex-col lg:flex-row lg:mt-10 ">
              <div className="w-1/4">
                <img src="/home/soup.png" className="w-auto h-[251px]" />
              </div>
              <div className="lg:w-1/2 flex items-center justify-center">
                <img src="/home/Frame171.png" className="w-auto h-[251px]" />
              </div>
              <div className="w-1/3 h-full flex flex-col justify-end ml-4">
                <div className={`flex items-end justify-end font-itcGBook`}>
                  {data[0].text2}
                </div>

                <button className="bg-[#FFB000] text-[20px] text-white px-6 mt-4 rounded-md">
                  {data[0].button}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center lg:mt-10 visible lg:hidden ">
        <div className="md:w-1/2 w-full flex items-center justify-center">
          <img src="/home/Frame171.png" className="w-auto h-[251px]" />
        </div>
        <div className="lg:w-1/3 md:w-1/2 h-full flex flex-col justify-end ml-4">
          <div className="flex items-end justify-end">{data[0].text2}</div>

          <button className="bg-[#FFB000] text-[20px] text-white px-6 mt-4 rounded-md">
            {data[0].button}
          </button>
        </div>
      </div>
    </section>
  );
}
