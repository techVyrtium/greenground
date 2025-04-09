"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl"; // Importar useTranslations
import Yellowmd from "./weDo/yellowmd";
import Link from "next/link";
import Yellowsm from "./weDo/yellowsm";
export default function WhatWeDo() {
  const t = useTranslations("whatWeDo"); // Inicializar useTranslations
  const [activeIndex, setActiveIndex] = useState(0);
  const ubiRef = useRef();
  const videoPlay = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [viewBotom, SetViewBotom] = useState(false);
  const [stateBotom, setStateBotom] = useState(true);
  const [videoMute, setVideoMute] = useState(true);

  const data = [
    {
      title: "AHORA MÁS CERCA DE TI",
      text: (
        <>
          <p className="text-[clamp(18px,2.5vw,28px)] text-white ">
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
      title2: "Tradición en cada",
      text: (
        <>
          <p className="text-[clamp(18px,2.5vw,28px)] text-white text-left ">
            Conoce nuestros productos{" "}
            <span className=" font-bold">
              orgánicos, sin etiquetas de excesos{" "}
            </span>
            y <span className=" font-bold">100% Colombianos</span>
          </p>
        </>
      ),
      button: "Conoce nuestros productos",
    },
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
  };

  function btn() {
    return (
      <div className="flex felx-row items-center justify-center gap-2 lg:hidden">
        <img
          src="/home/arrowsRSL.png"
          alt="Descripción de la imagen"
          className="mt-4 mr-2 w-8"
          onClick={() => handlePrev()}
        />
        <div
          className={`mt-4 p-3 rounded-full ${
            activeIndex == 0 ? "bg-[#B52C17]" : "bg-[#C0C0C0]"
          }`}
        ></div>
        <div
          className={`mt-4 p-3 rounded-full ${
            activeIndex == 1 ? "bg-[#B52C17]" : "bg-[#C0C0C0]"
          }`}
        ></div>
        <div
          className={`mt-4 p-3 rounded-full  ${
            activeIndex == 2 ? "bg-[#B52C17]" : "bg-[#C0C0C0]"
          }`}
        ></div>
        <img
          src="/home/arrowsRSR.png"
          alt="Descripción de la imagen"
          className="mt-4 ml-2 w-8"
          onClick={() => handleNext()}
        />
      </div>
    );
  }

  /*  useEffect(() => {
    //console.log(viewBotom);
    console.log(videoMute);
  }, [videoMute]); */

  const togglePlayPause = () => {
    const video = videoPlay.current;
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      video.pause(); // Pausa el video
      setStateBotom(false);
    } else {
      video.play(); // Reproduce el video
      setStateBotom(true);
    }
  };

  const toggleMute = () => {
    setVideoMute(!videoMute);
  };

  function video() {
    return (
      <div className="w-full h-full flex flex-row items-end">
        <video
          className="w-full h-full cursor-pointer"
          autoPlay
          loop
          muted={videoMute}
          ref={videoPlay}
          onMouseOver={() => SetViewBotom(true)}
        >
          <source src={"/hero/video.mp4"} type="video/mp4" />
          <track
            // src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>
        {viewBotom ? (
          <div
            className={`absolute w-full 2xl:w-5/6 h-10 cursor-pointer mb-6 items-center`}
          >
            <div className="flex flex-row items-center justify-center  ">
              <div
                className={`cursor-pointer w-3/4 h-10 p-6 bg-[#031D35] rounded-md`}
              >
                <div className=" h-full" onClick={() => togglePlayPause()}>
                  {stateBotom ? (
                    <img src={"home/pause.svg"} className="w-5 h-auto -mt-4" />
                  ) : (
                    <img src={"home/play.svg"} className="w-8 h-auto -mt-4" />
                  )}
                </div>
                <div className="relative h-full flex items-end justify-end mt-8">
                  <img
                    src={!videoMute ? "home/speaker.svg" : "home/mute.svg"}
                    className={
                      !videoMute ? "w-5 h-auto mr-4" : "w-8 h-auto mr-4"
                    }
                    onClick={() => toggleMute()}
                  />
                  {/* <img src={"home/play.svg"} className="w-8 h-auto" /> */}
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }

  function yellow() {
    return (
      <section
        className="px-4 sm:px-6 lg:px-22 w-full h-full bg-[url(/home/bg-yellow.png)] bg-cover bg-no-repeat"
        ref={ubiRef}
      >
        <div className="hidden lg:grid">
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
              <div className="mt-12 flex flex-col items-center justify-center">
                <p className={`text-white text-[clamp(20px,6.5vw,46px)] font-bold font-itcGBold`}>{data2[0].title2}</p>
                <h1
                  className={`text-white lg:text-[clamp(50px,6.5vw,100px)] font-bold leading-21 font-itcGBold`}
                >
                  {data2[0].title}
                </h1>
              </div>
              <div className="space-y-6 mt-12 text-justify ">
                {data2[0].text}
              </div>
              <div className="flex flex-col md:flex-row w-full items-center justify-center gap-8 py-8">
                <div className="flex flex-row gap-8">
                  <img
                    src="/home/GFICON.png"
                    className="md:w-[136px] w-[120px]"
                  />
                  <img
                    src="/home/MICICON.png"
                    className="md:w-[136px] w-[120px]"
                  />
                   <img
                    src="/home/READYICON.png"
                    className="md:w-[136px] w-[120px]"
                  />
                </div>
              </div>
              <div className="flex items-end justify-end">
                <Link href={"/products"}>
                  <button className="bg-[#B52C17] text-[20px] text-white px-6 mt-4 rounded-md cursor-pointer">
                    {data2[0].button}
                  </button>
                </Link>
              </div>
            </motion.div>
            <div className="relative w-2/3 flex flex-col mt-12 lg:mt-36 xl:mt-28 2xl:mt-30 ml-20">
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
                  src="/home/homeYellow1.png"
                  className="absolute lg:w-[320px] xl:w-[420px] 2xl:w-[480px] h-[auto] -ml-12 z-10 "
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
                  src="/home/patacones.png"
                  className="absolute lg:w-[320px] xl:w-[420px] 2xl:w-[480px] h-[auto] mt-42 ml-[11rem] lg:ml-[7rem] xl:ml-[10rem] 2xl:ml-[12rem] z-2"
                />
              </div>
              <div>
                <motion.img
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{
                    opacity: 1,
                    x: 80,
                    transition: {
                      duration: 0.5,
                      delay: 1.5,
                    },
                  }}
                  src="/home/papaCriolla.png"
                  className="lg:w-[220px] xl:w-[300px] 2xl:w-[380px] h-[auto] mt-70 ml-[26rem] lg:ml-[17rem] xl:ml-[23rem] 2xl:ml-[27rem] "
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tabla */}
        <div className="hidden md:grid lg:hidden py-22 mb-10">
          <Yellowmd />
        </div>

        {/*Movil */}
        <div className="block md:hidden py-10 mb-10 ">
          <Yellowsm />
        </div>
      </section>
    );
  }

  function red() {
    return (
      <section className="px-4 sm:px-6 lg:px-22 w-full h-full bg-[url(/home/bg-red.png)] bg-cover bg-no-repeat">
        <div className="hidden lg:grid ">
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
                  className={`text-white lg:text-[clamp(50px,5vw,95px)] font-bold  leading-21 font-itcGBold`}
                >
                  {data[0].title}
                </h1>
              </div>
              <div className="space-y-6 mt-12 text-justify ">
                {data[0].text}
              </div>
              <div className="flex flex-col md:flex-row w-full items-center justify-center gap-8 py-8">
                <div className="flex flex-row gap-8">
                  <img
                    src="/home/GFICON.png"
                    className="md:w-[136px] w-[120px]"
                  />
                  <img
                    src="/home/MICICON.png"
                    className="md:w-[136px] w-[120px]"
                  />
                  <img
                    src="/home/READYICON.png"
                    className="md:w-[136px] w-[120px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabla */}
        <div className="hidden md:grid lg:hidden py-22 mb-10 ">
          <div className="flex flex-col w-full h-full">
            <div className="flex flex-row">
              <div className="w-1/5">
                <img
                  src="/home/aroBird.png"
                  className="w-[200px] md:w-[250px] h-auto"
                />
              </div>
              <div className="w-4/5 px-8">
                <div className="flex flex-col">
                  <div className="mt-6 flex justify-start">
                    <h1
                      className={`text-white text-[50px] font-bold  leading-21 font-itcGBold`}
                    >
                      {data[0].title}
                    </h1>
                  </div>
                  <div className="space-y-6 mt-2 text-justify ">
                    {data[0].text}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img src="/home/Frame171.png" className="w-[600px] h-[auto]" />
            </div>

            <div className="flex flex-row items-center justify-center gap-8">
              <img src="/home/GFICON.png" className="md:w-[156px] w-[120px]" />
              <img src="/home/MICICON.png" className="md:w-[156px] w-[120px]" />
              <img
                src="/home/READYICON.png"
                className="md:w-[156px] w-[120px]"
              />
            </div>
          </div>
        </div>

        {/* Movil */}
        <div className="block md:hidden py-10 mb-10 ">
          <div className="flex flex-col w-full h-full">
            <div className="w-full flex items-center justify-center">
              <img
                src="/home/aroBird.png"
                className="w-[200px] md:w-[250px] h-auto"
              />
            </div>
            <div className="w-full flex items-center justify-center">
              <img src="/home/Frame171.png" className="w-full h-full" />
            </div>
            <div className="w-full flex items-center justify-center">
              <h1
                className={`text-white text-6xl font-bold leading-16 font-itcGBold`}
              >
                {data[0].title}
              </h1>
            </div>
            <div className="space-y-6 mt-2 text-pretty ">{data[0].text}</div>
            <div className="flex flex-row items-center justify-center mt-8 gap-8">
              <img src="/home/GFICON.png" className="w-[95px]" />
              <img src="/home/MICICON.png" className="w-[95px]" />
              <img src="/home/READYICON.png" className="w-[95px]" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="h-full w-full">
      <div className="w-full h-full flex flex-col">
        <div className="hidden lg:grid">
          <div className="flex">
            <div className="absolute z-10 text-8xl ml-1 mt-[20rem]">
              <img
                src="/home/arrowsRSL.png"
                alt="Descripción de la imagen"
                className="mt-4 mr-2 w-8"
                onClick={() => handlePrev()}
              />
            </div>
          </div>
          <div className="flex items-center justify-end ">
            <div className="absolute z-10 text-8xl mr-1 mt-[44rem]">
              <img
                src="/home/arrowsRSR.png"
                alt="Descripción de la imagen"
                className="mt-4 mr-2 w-8"
                onClick={() => handleNext()}
              />
            </div>
          </div>
        </div>
        {activeIndex == 0 ? video() : activeIndex == 1 ? yellow() : red()}
      </div>
      <div
        className="py-[96px] px-[clamp(1rem,5vw,6rem)]"
        onMouseOver={() => SetViewBotom(false)}
      >
        <div className="w-full mx-auto h-full" id="whatWeDo">
          <div className="mb-12 -mt-12">{btn()}</div>
          <div className="flex flex-col lg:flex-row">
            <div className="relative flex items-center h-full w-full lg:w-1/3 -top-8">
              {/* Imagen a la izquierda */}
              <div className="lg:w-1/3 w-full h-full">
                <img
                  src="/home/quehacemos.png"
                  alt="Descripción de la imagen"
                  className="w-[80px] h-auto lg:w-[100px] lg:h-[120px]"
                />
              </div>

              {/* Texto encima de la imagen */}
              <div className="absolute left-16 top-[30px] w-full max-w-[90%] lg:max-w-[400px]">
                <h2
                  className={`text-[clamp(40px,6vw,96px)] lg:text-[clamp(70px,5.8vw,96px)]  font-bold text-[#E7681F] mb-12 leading-[0.8] font-itcGBold`}
                  dangerouslySetInnerHTML={{ __html: t("title") }}
                />
              </div>
            </div>

            <div className="flex flex-col justify-center lg:w-2/3 w-full h-fit lg:ml-24 mt-8 lg:mt-0">
              {/* Contenido de texto */}
              <p className="text-[clamp(22px,1.45vw,28px)] text-[#4A4A4A] leading-[1.3] ">
                {t("text")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
