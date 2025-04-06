"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CaptureWorldOur() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Variables para la duración de las animaciones
  const videoAnimationDuration = 0.5; // Duración en segundos
  const videoAnimationEase = "easeInOut"; // Tipo de transición
  
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
          <p className="text-[16px] text-[#5C6E79] font-[700] md:text-[18px]  xl:text-[32px]">
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
          <p className={`text-[12px] text-[#5C6E79] font-[700] font-itcGBold md:text-[20px]  2xl:text-[25px]`}>
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
      <div className="w-full flex flex-col md:flex-row gap-10">
        <div className="md:w-1/4 w-full h-full flex flex-col md:flex-col lg:flex-col items-start">
          <div className="flex items-start h-fit">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: videoAnimationDuration, ease: videoAnimationEase }}
              >
                <video
                  src={dataVideo[activeIndex].video}
                  autoPlay={true}
                  muted={true}
                  onEnded={handleVideoEnd}
                  className="md:w-full h-auto rounded-lg"
                >
                  <source
                    src={dataVideo[activeIndex].video}
                    type="video/mp4"
                    autoPlay={true}
                  />
                </video>
              </motion.div>
            </AnimatePresence>  
          </div>
          <div className="lg:w-[20rem] w-fit mt-4">
            <p className="text-[14px] md:text-[16px] xl:text-[22px] text-gray-700">
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
            <div className="flex flex-row gap-2">
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
        <div className=" w-full h-full flex flex-col md:mt-18 md:ml-4 lg:mt-6 lg:ml-16 ">
          <div className="relative">
            <div className="w-1/3">
              <img
                src="/home/sheetGreen.png"
                alt="Descripción de la imagen"
                className="w-[70px] h-[90px] md:w-[60px] md:h-[80px] lg:w-[70px] lg:h-[90px]"
              />
            </div>
            <div className="absolute left-12  top-[36px] w-full text-left md:left-10 lg:left-12">
              <h2 className={`font-bold text-[#008638] mb-12 leading-[1]  font-itcGBold text-[23px] md:text-[32px] lg:text-[40px] xl:text-[48px] lg:leading-[0.8]`}>
                {data[0].title}
              </h2>
            </div>
          </div>
          <div className="items-center md:mt-0">
            <div className={`space-y-6 mt-12 text-left font-itcGBook`}>{data[0].text}</div>
          </div>
          <div className={`hidden lg:grid`}>
            <div className="items-center flex flex-col lg:flex-row lg:mt-10 gap-x-24 ">
              
              <div className="lg:w-1/2 flex items-center justify-center">
                <img src="/home/Frame171.png" className="w-auto h-[320px]" />
              </div>
              <div className="w-2/5 h-full flex flex-col justify-center ml-4">
                <div className={`flex items-end justify-end font-itcGBook`}>
                  {data[0].text2}
                </div>

                <button className="bg-[#FFB000] text-[12px] md:text-[16px] lg:text-[20px] text-white px-6 mt-4 rounded-md">
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
