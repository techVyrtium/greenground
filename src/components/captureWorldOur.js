"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/hooks/useModal";
import Image from "next/image";
import { useTranslations } from "next-intl";
import slide4 from '@/assets/home/slide4.png'
import slide5 from '@/assets/home/slide5.png'
import slide6 from '@/assets/home/slide6.png'
import slide7 from '@/assets/home/slide7.png'
import tuLogoAqui from '@/assets/tu_logo_aqui.png';
import cursor from '@/assets/home/cursor.svg';
import arrowL from '@/assets/home/arrowL.svg';
import arrowR from '@/assets/home/arrowR.svg';
import sheetGreen from '@/assets/home/sheetGreen.png';
import frame171 from '@/assets/home/Frame171.png';
export default function CaptureWorldOur() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { toggleModal } = useModal();
  const t = useTranslations('captureWorldOur');
  // Variables para la duración de las animaciones
  // const videoAnimationDuration = 0.5; // Duración en segundos
  const videoAnimationDuration = 0;
  const videoAnimationEase = "easeInOut"; // Tipo de transición

  const dataSlider = [
    {
      id: 1,
      texto: t('slides.slide1'),
      src: "/home/quintaAve.mp4",
      type: 'video'
    },
    {
      id: 2,
      texto: t('slides.slide2'),
      src: "/home/feria.mp4",
      type: 'video'
    },
    {
      id: 3,
      texto: t('slides.slide3'),
      src: "/home/suiza.mp4",
      type: 'video'
    },
    {
      id: 4,
      texto: t('slides.slide4'),
      src: slide4,
      type: 'image',
      height: 1148,
      width: 487.72,
    },
    {
      id: 5,
      texto: t('slides.slide5'),
      src: slide5,
      type: 'image',
      height: 1148,
      width: 487.72,
    },
    {
      id: 6,
      texto: t('slides.slide6'),
      src: slide6,
      type: 'image',
      height: 1148,
      width: 487.72,

    },
    {
      id: 7,
      texto: t('slides.slide7'),
      src: slide7,
      type: 'image',
      height: 1148,
      width: 487.72,
    },
  ];

  const data = [
    {
      title: t('title'),
      text: (
        <>
          <p className="text-justify text-[#5C6E79] font-bold leading-[1.3] font-itcGBook text-[clamp(22px,1.45vw,28px)]">
            {t('text1.part1')}
            <span className={` font-[700] font-itcGBold`}>
              {t('text1.strong1')}
            </span>
            {t('text1.part2')}
          </p>
        </>
      ),
      text2: (
        <>
          <p
            className={
              `text-[#5C6E79] font-[700] font-itcGBold text-[1rem]`
            }
          >
            {t('text2.part1')}
            <span className="inline-block">
              {t('text2.part2')}
            </span>
          </p>
        </>
      ),
      button: t('button'),
    },
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % dataSlider.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + dataSlider.length) % dataSlider.length
    );
  };

  const handleVideoEnd = () => {
    if (activeIndex <= dataSlider.length) handleNext();
  };
  const ImageSlide = ({ activeIndex }) => {
    const timeout = setTimeout(() => {
      handleNext();
    }, 8000)
    useEffect(() => {
      return () => {
        clearTimeout(timeout);
      }
    }, [timeout])
    return (
      (
        <Image
          src={dataSlider[activeIndex].src}
          className="md:w-full object-cover object-center rounded-lg md:h-[520px] h-[40rem]"
          height={dataSlider[activeIndex].height}
          width={dataSlider[activeIndex].width}
          alt="image-slide"
          loading="lazy"
        />
      )
    )
  }
  return (
    <section className="px-[clamp(1rem,5vw,8rem)] w-full h-fit mt-[clamp(1rem,5vw,6rem)]">
      <div className="w-full flex flex-col md:flex-row gap-10">
        <div className="lg:w-1/4 md:w-[44rem] w-full h-full flex flex-col md:flex-col lg:flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 1, x: 20 }}
              transition={{
                duration: videoAnimationDuration,
                ease: videoAnimationEase,
              }}
              className="md:min-h-[520px] lg:h-full min-h-[40rem]"
            >
              {
                dataSlider[activeIndex].type === 'video' ? (
                  <video
                    src={dataSlider[activeIndex].src}
                    autoPlay={true}
                    muted={true}
                    onEnded={handleVideoEnd}
                    className="h-[40rem] md:h-[520px] object-cover rounded-lg"
                  >
                    <source
                      src={dataSlider[activeIndex].src}
                      type="video/mov"
                      autoPlay={true}
                    />
                  </video>)
                  : (
                    <ImageSlide activeIndex={activeIndex} />
                  )
              }

            </motion.div>
          </AnimatePresence>
          <div className="lg:w-[20rem] w-fit max-w-full mt-4">
            <p className="text-[14px] md:text-[16px] xl:text-[22px] text-gray-700 leading-[20px] text-center">
              {dataSlider[activeIndex].texto}
            </p>
          </div>
          <div className="w-full flex flex-row items-center justify-center">
            <Image
              src={arrowL}
              alt="Descripción de la imagen"
              className="mt-4 mr-2 cursor-pointer"
              onClick={() => handlePrev()}
            />
            <div className="flex flex-row gap-2">
              {
                new Array(dataSlider.length).fill(0).map((_, i) => (
                  <div key={`slide-${i}`} className={`mt-4 p-1.5 rounded-full cursor-pointer ${activeIndex == i ? "bg-[#008E4A]" : "bg-[#E1FAEE]"}`}>
                  </div>
                ))
              }
            </div>

            <Image
              src={arrowR}
              alt="Descripción de la imagen"
              className="mt-4 ml-2 cursor-pointer"
              onClick={() => handleNext()}
            />
          </div>
        </div>
        {/* Sector 2 */}
        <div className=" w-full h-full flex flex-col md:mt-18 md:ml-4 lg:mt-6 lg:ml-16 ">
          <div className="relative">
            <div className="w-1/3">
              <Image
                src={sheetGreen}
                alt="Descripción de la imagen"
                className="w-[70px] h-[90px] md:w-[60px] md:h-[80px] lg:w-[70px] lg:h-[90px]"
                loading="lazy"
              />
            </div>
            <div className="absolute left-8 sm:left-12 top-[25px] sm:top-[36px] text-left md:left-10 lg:left-12 w-fit">
              <h2
                className={`font-bold text-[#008638] mb-12 leading-[1.1] font-itcGBold text-[clamp(28px,1.75vw,48px)] lg:leading-[0.8]`}
              >
                {data[0].title}
              </h2>
            </div>
          </div>
          <div className="items-center md:mt-0">
            <div
              className={`space-y-4 mt-8 text-left font-itcGBook  font-medium`}
            >
              {data[0].text}
            </div>
          </div>
          <div className={`hidden lg:grid`}>
            <div className="items-center flex flex-col  lg:mt-10 gap-x-24 ">
              <div className="lg:w-full flex flex-row items-center justify-around gap-4 h-52">
                <div className="lg:w-[min(25vw,20rem)] aspect-square flex flex-col">
                  <Image
                    alt="frame171"
                    src={frame171}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                  <div className={`flex items-end justify-end font-itcGBook leading-5 bottom-8 relative`}>
                    {data[0].text2}
                  </div>
                </div>
                <div className="lg:w-[min(25vw,20rem)] aspect-square flex flex-col">
                  <Image
                    alt="tu_logo_aqui"
                    src={tuLogoAqui}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                  <button
                    onClick={toggleModal}
                    // cursor-[url(/home/cursor.svg)_3_3,_pointer]
                    className="bg-[#FFB000] text-[12px] md:text-[16px] lg:text-[20px] cursor-pointer text-white px-6 rounded-md font-bold leading-4 max-w-[27rem] h-12 relative bottom-8"
                  >
                    {data[0].button}
                    <Image
                      src={cursor}
                      width={60} height={60}
                      className="absolute -right-1 -bottom-7 w-10 h-10"
                      alt='cursor'
                      loading="lazy"
                    />
                  </button>
                </div>
              </div>
              <div className="w-full h-full flex flex-row justify-center ml-4 mt-3">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-full mx-auto flex flex-col md:flex-row items-center justify-center lg:mt-10 visible lg:hidden ">
        <div className="lg:w-1/2 flex flex-row items-center justify-center gap-4">
          <div className="w-[50%] aspect-square">
            <Image
              src={frame171}
              alt="frame171"
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
          <div className="w-[50%] aspect-square">
            <Image
              src={tuLogoAqui}
              className="w-full h-full object-contain"
              alt='tu-logo-aqui'
              loading="lazy"
            />
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 h-full flex flex-col justify-end ml-4">
          <div className="flex items-end justify-end">{data[0].text2}</div>

          <button className="bg-[#FFB000] text-[20px] text-white px-6 mt-4 rounded-md relative h-12">
            {data[0].button}
            <Image
              src={cursor}
              width={60}
              height={60}
              className="absolute -right-1 -bottom-7 w-10 h-10"
              alt='cursor'
              loading="lazy"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
