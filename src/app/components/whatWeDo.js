"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import { useTranslations } from "next-intl"; // Importar useTranslations
export default function WhatWeDo() {
  const t = useTranslations("whatWeDo"); // Inicializar useTranslations
  const [activeIndex, setActiveIndex] = useState(0);
  const ubiRef = useRef();

  const data = [
    {
      title: "AHORA MAS CERCÁ DE TÍ",
      text: (
        <>
          <p className="text-[30px] text-white ">
            Encuentra nuestros productos{" "}
            <span className=" font-bold">Green ground </span>
            en<span className=" font-bold">tiendas ara </span>y abre las puertas
            de tu casa al{" "}
            <span className=" font-bold">sabor de la tradición.</span>
          </p>
        </>
      ),
    },
  ];

  const data2 = [
    {
      title: "BOCADO",
      text: (
        <>
          <p className="text-[30px] text-white ">
            Conoce nuestros productos{" "}
            <span className=" font-bold">
              orgánicos, sin etiquetas de excesos{" "}
            </span>
            y <span className=" font-bold">100% Colombianos</span>
          </p>
        </>
      ),
    },
  ];

  const handleNext = (size) => {
    setActiveIndex(activeIndex + 1);
    if (size == 1) {
      if (activeIndex >= 2 || activeIndex == 0) setActiveIndex(1);
      else if (activeIndex == 1) setActiveIndex(0);
    } else if (size == 0) {
      if (activeIndex == 2) setActiveIndex(0);
    }
  };

  const handlePrev = (size) => {
    setActiveIndex(activeIndex - 1);
    if (size == 1) {
      if (activeIndex == 0) setActiveIndex(1);
      else if (activeIndex == 1) setActiveIndex(0);
    } else if (size == 0) {
      if (activeIndex == 0) setActiveIndex(2);
    }
  };

  function btn(size) {
    return (
      <div className="flex felx-row items-center justify-center gap-2">
        <img
          src="/home/arrowsRedL.png"
          alt="Descripción de la imagen"
          className="mt-4 mr-2 w-8"
          onClick={() => handlePrev(size)}
        />
        <div
          className={`mt-4 p-3 rounded-full ${
            activeIndex == 0 ? "bg-[#EA6B58]" : "bg-[#E1FAEE]"
          }`}
        ></div>
        <div
          className={`mt-4 p-3 rounded-full ${
            activeIndex == 1 ? "bg-[#EA6B58]" : "bg-[#E1FAEE]"
          }`}
        ></div>
        <div
          className={`mt-4 p-3 rounded-full  ${
            activeIndex == 2 ? "bg-[#EA6B58]" : "bg-[#E1FAEE]"
          }`}
        ></div>
        <img
          src="/home/arrowsRedR.png"
          alt="Descripción de la imagen"
          className="mt-4 ml-2 w-8"
          onClick={() => handleNext(size)}
        />
      </div>
    );
  }

  function video() {
    return (
      <video
        src="/hero/video.mp4"
        autoPlay={true}
        loop
        muted={true}
        className="w-full h-full "
      />
    );
  }

  function yellow() {
    return (
      <section
        className="px-4 sm:px-6 lg:px-22 w-full h-full bg-[url(/home/bg-yellow.png)] bg-cover bg-no-repeat"
        ref={ubiRef}
      >
        <div className=" flex flex-col lg:flex-row ">
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{
              opacity: 1,
              x: 55,
              transition: {
                duration: 0.5,
                delay: 1,
              },
            }}
            className="flex flex-col justify-around lg:w-2/5 w-full h-fit md:py-10"
          >
            <div className="flex justify-center leading-7">
              <img
                src="/home/blanco-12.svg"
                className="w-[200px] md:w-[250px] h-auto"
              />
            </div>
            <div className="mt-12 flex justify-center">
              <h1
                className={`text-white text-[100px] font-bold leading-21 font-itcGBold`}
              >
                {data2[0].title}
              </h1>
            </div>
            <div className="space-y-6 mt-12 text-justify ">{data2[0].text}</div>
            <div className="flex flex-col md:flex-row w-full items-center justify-center gap-8 py-8">
              <div className="flex flex-row gap-8">
                <img
                  src="/home/GFICON.png"
                  className="md:w-[156px] w-[120px]"
                />
                <img
                  src="/home/MICICON.png"
                  className="md:w-[156px] w-[120px]"
                />
              </div>
              <div className="gap-8">
                <img
                  src="/home/READYICON.png"
                  className="md:w-[156px] w-[120px]"
                />
              </div>
            </div>
          </motion.div>
          <div className="w-2/3 flex flex-col mt-12 ml-20">
            <div className="">
              <motion.img
                initial={{ opacity: 1, y: 160 }}
                whileInView={{
                  opacity: 1,
                  y: 10,
                  transition: {
                    duration: 0.5,
                    delay: 1,
                  },
                }}
                src="/home/tajadaempaque.png"
                className="w-[450px] h-[auto] -ml-14"
              />
            </div>
            <div>
              <motion.img
                initial={{ opacity: 0, x: -20 }}
                whileInView={{
                  opacity: 1,
                  x: 10,
                  transition: {
                    duration: 0.5,
                    delay: 1.2,
                  },
                }}
                src="/home/tajadaempaque.png"
                className="w-[450px] h-[auto] -mt-52 ml-40"
              />
            </div>
            <div>
            <motion.img
                initial={{ opacity: 0, x: -40 }}
                whileInView={{
                  opacity: 1,
                  x: 20,
                  transition: {
                    duration: 0.5,
                    delay: 1.5,
                    
                  },
                }}
                src="/home/tajadaempaque.png"
                className="w-[450px] h-[auto] -mt-52 ml-[24rem]"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  function last() {
    return (
      <section className="px-4 sm:px-6 lg:px-22 w-full h-full bg-[url(/home/bg-red.png)] bg-cover bg-no-repeat">
        <div className=" flex flex-col lg:flex-row ">
          <div className="lg:w-3/5 w-full flex items-center justify-center">
            <img src="/home/Frame171.png" className="w-[900px] h-[auto]" />
          </div>
          <div className="flex flex-col justify-around lg:w-2/5 w-full h-fit md:py-22">
            <div className="flex justify-end leading-7">
              <img
                src="/home/aroBird.png"
                className="w-[200px] md:w-[250px] h-auto"
              />
            </div>
            <div className="mt-6 flex justify-start">
              <h1
                className={`text-white text-[82px] font-bold  leading-21 font-itcGBold`}
              >
                {data[0].title}
              </h1>
            </div>
            <div className="space-y-6 mt-12 text-justify ">{data[0].text}</div>
            <div className="flex flex-col md:flex-row w-full items-center justify-center gap-8 py-8">
              <div className="flex flex-row gap-8">
                <img
                  src="/home/GFICON.png"
                  className="md:w-[156px] w-[120px]"
                />
                <img
                  src="/home/MICICON.png"
                  className="md:w-[156px] w-[120px]"
                />
              </div>
              <div className="gap-8">
                <img
                  src="/home/READYICON.png"
                  className="md:w-[156px] w-[120px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="h-full w-full">
      <div className="relative w-full h-fit">
        {activeIndex == 0 ? video() : activeIndex == 1 ? yellow() : last()}
      </div>
      <div className="py-16 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto h-full w-full " id='wedo'>
          <div className="mb-12 -mt-12">{btn(0)}</div>
          <div className="flex flex-col lg:flex-row ">
            <div className="relative flex items-center h-full w-full lg:w-1/3">
              {/* Imagen a la izquierda */}
              <div className="lg:w-1/3 w-full h-full">
                <img
                  src="/home/quehacemos.png"
                  alt="Descripción de la imagen"
                  className="w-[100px] h-[120px]"
                />
              </div>

              {/* Texto encima de la imagen */}
              <div className="absolute left-16 top-[40px] w-full ">
                <h2
                  className={`lg:text-[60px] text-[54px] font-bold text-[#E7681F] mb-12 leading-[0.8] font-itcGBold`}
                  dangerouslySetInnerHTML={{ __html: t("title") }}
                />
              </div>
            </div>
            <div className="flex flex-col justify-center lg:w-2/3 w-full h-fit lg:ml-10 mt-8 lg:mt-0">
              {/* Text Content */}
              <p className="text-lg text-[#4A4A4A] leading-relaxed ">
                {t("text")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
