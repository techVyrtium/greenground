"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl"; // Importar useTranslations
import Yellowmd from "./weDo/yellowmd";
import Link from "next/link";
import Yellowsm from "./weDo/yellowsm";
import Image from "next/image";
import { Maximaze } from "./common/Maximaze";
import Yellow2md from "./weDo/yellow2md";
import Yellow2sm from "./weDo/yellow2sm";
import arrowRSL from '@/assets/home/arrowsRSL.png';
import arrowsRSR from '@/assets/home/arrowsRSR.png';
import pause from '@/assets/home/pause.svg';
import play from '@/assets/home/play.svg';
import speaker from '@/assets/home/speaker.svg';
import mute from '@/assets/home/mute.svg';
import minimaze from '@/assets/minimaze.svg';
import maximazeIcon from '@/assets/home/maximaze.svg';
import logoGreen from "@/assets/home/logo-green.svg";
import GFICONGreen from "@/assets/home/GFICON-green.png"
import MICICONGreen from '@/assets/home/MICICON-green.png';
import READYICONGreen from '@/assets/home/READYICON-green.png';
import platanoMaduro from '@/assets/home/platanomaduro.png';
import platanoVerde from '@/assets/home/platanoverde.png';
import yucaFrita from '@/assets/home/yucafrita.png';
import frame171 from '@/assets/home/Frame171.png';
import araBird from '@/assets/home/aroBird.png';
import queHacemos from '@/assets/home/quehacemos.png';
import GFICON from "@/assets/home/GFICON.png"
import MICICON from '@/assets/home/MICICON.png';
import READYICON from '@/assets/home/READYICON.png';

export default function WhatWeDo() {
  const t = useTranslations("whatWeDo"); // Inicializar useTranslations
  const [activeIndex, setActiveIndex] = useState(0);
  const ubiRef = useRef();
  const videoPlay = useRef(null);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [viewBotom, SetViewBotom] = useState(false);
  const [stateBotom, setStateBotom] = useState(true);
  const [videoMute, setVideoMute] = useState(true);
  const [maximaze, setMaximaze] = useState(false);
  // const { toggleModal } = useModal();
  const toogleMaximaze = () => {
    setMaximaze(!maximaze);
    setAutoPlay(false);
  }
  const handleTimeUpdate = (e) => {
    const { currentTime } = e.target;
    if (currentTime >= 15 && autoPlay) {
      setActiveIndex(activeIndex + 1);
    }
  }
  const data = [
    {
      title: t('red.title'),
      text: (
        <>
          <p className="text-[clamp(18px,2.5vw,28px)] text-white ">
            {t('red.text.part1')}
            <span className=" font-bold">{t('red.text.strong1')}</span>
            {t('red.text.part2')}<span className=" font-bold">{t('red.text.strong2')}</span>
            {t('red.text.part3')}<span className=" font-bold">{t('red.text.part3')}</span>
          </p>
        </>
      ),
    },
  ];

  const data2 = [
    {
      title: t('yellow.title'),
      title2: t('yellow.title2'),
      text: (
        <>
          <p className="text-[clamp(18px,2.5vw,28px)] text-left ">
            {t('yellow.text.part1')}
            <span className=" font-bold">
              {t('yellow.text.strong1')}
            </span>
            {t('yellow.text.part2')}
            <span className=" font-bold">{t('yellow.text.strong2')}</span>
          </p>
        </>
      ),
      button: t('button'),
    },
  ];

  const data3 = [
    {
      title: t('yellow2.title'),
      title2: t('yellow2.title2'),
      text: (
        <>
          <p className="text-[clamp(18px,2.5vw,28px)] text-left ">
            {t('yellow2.text.part1')}
            <span className=" font-bold">
              {t('yellow2.text.strong1')}
            </span>
            {t('yellow2.text.part2')}
            <span className=" font-bold">{t('yellow2.text.strong2')}</span>
          </p>
        </>
      ),
      button: t('button'),
    },
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % 4);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + 4) % 4);
  };

  function btn() {
    return (
      <div className="flex flex-row items-center justify-center gap-2 lg:hidden">
        <Image
          src={arrowRSL}
          alt="arrowRSL"
          className="mt-4 mr-2 w-8 cursor-pointer"
          onClick={() => handlePrev()}
          width={32}
        />
        <div
          className={`mt-4 p-3 rounded-full ${activeIndex == 0 ? "bg-[#B52C17]" : "bg-[#C0C0C0]"
            }`}
        ></div>
        <div
          className={`mt-4 p-3 rounded-full ${activeIndex == 1 ? "bg-[#B52C17]" : "bg-[#C0C0C0]"
            }`}
        ></div>
        <div
          className={`mt-4 p-3 rounded-full  ${activeIndex == 2 ? "bg-[#B52C17]" : "bg-[#C0C0C0]"
            }`}
        ></div>
        <Image
          src={arrowsRSR}
          alt="arrowsRSR"
          className="mt-4 ml-2 w-8"
          onClick={() => handleNext()}
          width={32}
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
    setAutoPlay(false);
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
    setAutoPlay(false);
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
          onTimeUpdate={handleTimeUpdate}
        >
          <source src={"/home/GGbanner.mp4"} type="video/mp4" />
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
            className={`absolute w-full max-w-[1920px] h-10 cursor-pointer mb-6 items-center`}
          >
            <div className="flex flex-row items-center justify-center">
              <div
                className={`cursor-pointer w-3/4 h-10 p-6 bg-[#031D35] rounded-md`}
              >
                <div className=" h-full" onClick={() => togglePlayPause()}>
                  {stateBotom ? (
                    <Image alt="pause" src={pause} className="w-5 h-auto -mt-4" width={20} />
                  ) : (
                    <Image alt="play" src={play} className="w-8 h-auto -mt-4" width={32} />
                  )}
                </div>
                <div className="relative h-full flex items-end justify-end mt-8">
                  <Image
                    src={!videoMute ? speaker : mute}
                    alt="sound"
                    className={
                      !videoMute ? "w-5 h-auto mr-4" : "w-8 h-auto mr-4"
                    }
                    onClick={() => toggleMute()}
                  />
                  {!maximaze ? <Image src={maximazeIcon} className="w-8 h-auto" onClick={toogleMaximaze} alt="maximaze" width={32} /> : <Image src={minimaze} width={32} height={32} alt="minimaze" className="text-white" onClick={toogleMaximaze} />}
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
        className="px-4 sm:px-6 lg:px-22 w-full h-full mt-12 bg-[image:url(/home/banana-patterns.png)] bg-cover bg-no-repeat"
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
                <Image
                  src={logoGreen}
                  alt="logo-green"
                  width={250}
                  className="w-[200px] md:w-[250px] h-auto"
                />
              </div>
              <div className="mt-12 flex flex-col items-start justify-center text-[#b52c17]">
                <p className={`text-[clamp(20px,6.5vw,48px)] font-bold font-itcGBold`}>{data2[0].title2}</p>
                <h1
                  className={`lg:text-[clamp(50px,6.5vw,120px)] text-[clamp(50px,6.5vw,14px)] 2xl:text-[clamp(50px,6.5vw,160px)] font-bold leading-21 font-itcGBold `}
                >
                  {data2[0].title}
                </h1>
              </div>
              <div className="space-y-6 mt-12 text-justify text-[#45AC36]">
                {data2[0].text}
              </div>
              <div className="flex flex-col md:flex-row w-full items-center justify-center gap-8 py-8">
                <div className="flex flex-row gap-8">
                  <Image
                    src={GFICONGreen}
                    alt="GFICON"
                    className="md:w-[136px] w-[120px]"
                    width={136}
                  />
                  <Image
                    src={MICICONGreen}
                    alt="MICICON"
                    className="md:w-[136px] w-[120px]"
                    width={136}
                  />
                  <Image
                    src={READYICONGreen}
                    alt="READY"
                    className="md:w-[136px] w-[120px]"
                    width={136}
                  />
                </div>
              </div>
              <div className="flex items-end justify-end">
                <Link href={"/products"} className="inline-block bg-[#FFB000] text-[12px] md:text-[16px] lg:text-[20px] cursor-pointer text-white box- rounded-md font-bold leading-4 px-6  box-border max-w-[27rem] h-fit py-[0.5rem] text-center">
                  {data2[0].button}
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
                  alt="tajadas"
                  // src={tajadas.src}
                  src={"/home/tajadas.webp"}
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
                  alt="patacones"
                  // src={patacones.src}
                  src="/home/patacones.webp"
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
                  alt="papaCriolla"
                  // src={papaCriolla.src}
                  src="/home/papaCriolla.webp"
                  className="lg:w-[220px] xl:w-[300px] 2xl:w-[380px] h-[auto] mt-70 ml-[26rem] lg:ml-[17rem] xl:ml-[23rem] 2xl:ml-[27rem]"
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

  function yellow2() {
    return (
      <section
        className="px-4 sm:px-6 lg:px-22 w-full h-full mt-12 bg-[image:url(/home/banana-patterns.png)] bg-cover bg-no-repeat"
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
                <Image
                  alt="logo-green"
                  src={logoGreen}
                  className="w-[200px] md:w-[250px] h-auto"
                  width={200}
                />
              </div>
              <div className="mt-12 flex flex-col items-start justify-center text-[#b52c17]">
                <p className={`text-[clamp(20px,6.5vw,34px)] font-bold font-itcGBold`}>{data3[0].title2}</p>
                <h1
                  className={`lg:text-[clamp(50px,6.5vw,220px)] font-bold leading-21 font-itcGBold text-[20px]`}
                >
                  {data3[0].title}
                </h1>
              </div>
              <div className="space-y-6 mt-6 text-justify text-[#45AC36]">
                {data3[0].text}
              </div>
              <div className="flex flex-col md:flex-row w-full items-center justify-center gap-8 py-8">
                <div className="flex flex-row gap-8">
                  <Image
                    alt="GFICON"
                    src={GFICONGreen}
                    className="md:w-[136px] w-[120px]"
                    width={120}
                  />
                  <Image
                    alt="MICICO "
                    src={MICICONGreen}
                    className="md:w-[136px] w-[120px]"
                    width={120}
                  />
                  <Image
                    alt="READY"
                    src={READYICONGreen}
                    className="md:w-[136px] w-[120px]"
                    width={120}
                  />
                </div>
              </div>
              <div className="flex items-end justify-end">
                <Link href={"/products"} className="inline-block bg-[#FFB000] text-[12px] md:text-[16px] lg:text-[20px] cursor-pointer text-white box- rounded-md font-bold leading-4 px-6  box-border max-w-[27rem] h-fit py-[0.5rem] text-center">
                  {data3[0].button}
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
                  src={platanoMaduro.src}
                  className="absolute lg:w-[320px] h-[auto] -ml-12 z-10 "
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
                  src={platanoVerde.src}
                  className="absolute lg:w-[320px]  h-[auto] mt-42 ml-[11rem] lg:ml-[7rem] xl:ml-[10rem] 2xl:ml-[12rem] z-2"
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
                  src={yucaFrita.src}
                  className="lg:w-[220px] xl:w-[300px] 2xl:w-[380px] h-[auto] mt-70 ml-[26rem] lg:ml-[18rem] 2xl:ml-[25rem] "
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tabla */}
        <div className="hidden md:grid lg:hidden py-22 mb-10">
          <Yellow2md />
        </div>

        {/*Movil */}
        <div className="block md:hidden py-10 mb-10 ">
          <Yellow2sm />
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
              <Image
                alt="frame171"
                src={frame171}
                className="w-[900px] h-[auto]"
                width={900}
              />
            </div>
            <div className="flex flex-col justify-around lg:w-2/5 w-full h-fit md:py-22">
              <div className="flex justify-end leading-7">
                <Image
                  alt="araBird"
                  src={araBird}
                  className="w-[200px] md:w-[250px] h-auto"
                  width={200}
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
                  <Image
                    alt="GFICON"
                    src={GFICON}
                    className="md:w-[136px] w-[120px]"
                    width={120}
                  />
                  <Image
                    alt="MICICON"
                    src={MICICON}
                    className="md:w-[136px] w-[120px]"
                    width={120}
                  />
                  <Image
                    alt="READY"
                    src={READYICON}
                    className="md:w-[136px] w-[120px]"
                    width={120}
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
                <Image
                  alt="araBird"
                  src={araBird}
                  className="w-[200px] md:w-[250px] h-auto"
                  width={200}
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
              <Image
                alt="frame171"
                src={frame171}
                className="w-[600px] h-[auto]"
                width={600}
              />
            </div>

            <div className="flex flex-row items-center justify-center gap-8">
              <Image alt="GFICON" src={GFICON} className="md:w-[156px] w-[120px]" width={120} />
              <Image alt="MICICON" src={MICICON} className="md:w-[156px] w-[120px]" width={120} />
              <Image
                alt="READYICON"
                src={READYICON}
                className="md:w-[156px] w-[120px]"
                width={120}
              />
            </div>
          </div>
        </div>

        {/* Movil */}
        <div className="block md:hidden py-10 mb-10 ">
          <div className="flex flex-col w-full h-full">
            <div className="w-full flex items-center justify-center">
              <Image
                alt="araBird"
                src={araBird}
                className="w-[200px] md:w-[250px] h-auto"
                width={200}
              />
            </div>
            <div className="w-full flex items-center justify-center">
              <Image
                alt="frame171"
                src={frame171}
                className="w-full h-full"
              />
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
              <Image
                alt="GFICON"
                src={GFICON}
                className="w-[95px]"
                width={95}
              />
              <Image
                alt="MICICON"
                src={MICICON}
                className="w-[95px]"
                width={95}
              />
              <Image
                alt="READYICON"
                src={READYICON}
                className="w-[95px]"
                width={95}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="h-full w-full mt-8">
      <div className="w-full h-full flex flex-col">
        <div className="hidden lg:grid">
          <div className="flex">
            <div className="absolute z-10 text-8xl ml-1 mt-[20rem]">
              <Image
                src={arrowRSL}
                alt="Descripción de la imagen"
                className="mt-4 mr-2 w-8 cursor-pointer"
                onClick={() => handlePrev()}
                width={32}
              />
            </div>
          </div>
          <div className="flex items-center justify-end ">
            <div className="absolute z-10 text-8xl mr-1 mt-[44rem]">
              <Image
                src={arrowsRSR}
                alt="Descripción de la imagen"
                className="mt-4 mr-2 w-8 cursor-pointer"
                onClick={() => handleNext()}
                width={32}
              />
            </div>
          </div>
        </div>
        {activeIndex == 0 ? video() : activeIndex == 1 ? yellow() : activeIndex == 2 ? yellow2() : red()}
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
                <Image
                  src={queHacemos}
                  alt="Descripción de la imagen"
                  className="w-[80px] h-auto lg:w-[100px] lg:h-[120px]"
                  width={100}
                  height={120}
                />
              </div>

              {/* Texto encima de la imagen */}
              <div className="absolute left-16 top-[30px] w-fit max-w-[90%] lg:max-w-[400px]">
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
      {maximaze ? (
        <Maximaze maximaze={maximaze} setMaximaze={setMaximaze}>
          {video()}
        </Maximaze>
      ) : <></>}
    </section>
  );
}
