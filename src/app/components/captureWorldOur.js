"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/app/hooks/useModal";
import Image from "next/image";
export default function CaptureWorldOur() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { toggleModal } = useModal();

  // Variables para la duración de las animaciones
  const videoAnimationDuration = 0.5; // Duración en segundos
  const videoAnimationEase = "easeInOut"; // Tipo de transición

  const dataSlider = [
    {
      id: 1,
      texto: "Nuestra marca ha logrado llegar a la quinta avenida en New York",
      src: "/home/quintaAve.mov",
      type: 'video'
    },
    {
      id: 2,
      texto: "Feria de productos colombianos Frankfurt Alemania",
      src: "/home/feria.mov",
      type: 'video'
    },
    {
      id: 3,
      texto: "Celebrando nuestra llegada al mercado suizo",
      src: "/home/suiza.mov",
      type: 'video'
    },
    {
      id: 4,
      texto: "Celebrando nuestra llegada al mercado suizo",
      src: "/home/slide4.png",
      type: 'image',
      height: 1148,
      width: 487.72,
    },
    {
      id: 5,
      texto: "Celebrando nuestra llegada al mercado suizo",
      src: "/home/slide5.png",
      type: 'image',
      height: 1148,
      width: 487.72,
    },
    {
      id: 6,
      texto: "Celebrando nuestra llegada al mercado suizo",
      src: "/home/slide6.png",
      type: 'image',
      height: 1148,
      width: 487.72,

    },
    {
      id: 7,
      texto: "Celebrando nuestra llegada al mercado suizo",
      src: "/home/slide7.png",
      type: 'image',
      height: 1148,
      width: 487.72,
    },
  ];

  const data = [
    {
      title: "Conquista el mundo con Nosotros",
      text: (
        <>
          <p className="text-justify text-[#5C6E79] font-bold leading-[1.3] font-itcGBook text-[clamp(22px,1.45vw,28px)]">
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
          <p
            className={
              `text-[#5C6E79] font-[700] font-itcGBold text-[clamp(20px,1.3vw,25px)]`
            }
          >
            Pon tu logo en nuestros productos, o distribúyelos alrededor del
            mundo
          </p>
        </>
      ),
      button: "Distribuye con nosotros",
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
          className="md:w-full md:h-[353px] lg:h-[480px] object-cover object-center rounded-lg h-[55.5rem]"
          height={dataSlider[activeIndex].height}
          width={dataSlider[activeIndex].width}
          alt="image-slide"
        />
      )
    )
  }
  return (
    <section className="px-[clamp(1rem,5vw,8rem)] w-full h-fit mt-[clamp(1rem,5vw,6rem)]">
      <div className="w-full flex flex-col md:flex-row gap-10">
        <div className="md:w-1/4 w-full h-full flex flex-col md:flex-col lg:flex-col items-center md:items-start">
          <div className="flex items-center md:items-start h-fit min-h-[356px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{
                  duration: videoAnimationDuration,
                  ease: videoAnimationEase,
                }}
              >
                {
                  dataSlider[activeIndex].type === 'video' ? (<video
                    src={dataSlider[activeIndex].src}
                    autoPlay={true}
                    muted={true}
                    onEnded={handleVideoEnd}
                    className="md:w-full h-auto rounded-lg"
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
          </div>
          <div className="lg:w-[20rem] w-fit mt-4">
            <p className="text-[14px] md:text-[16px] xl:text-[22px] text-gray-700">
              {dataSlider[activeIndex].texto}
            </p>
          </div>
          <div className="md:w-[19rem] w-full flex flex-row items-center justify-center md:-ml-6">
            <img
              src="/home/arrowsL.png"
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

            <img
              src="/home/arrowsR.png"
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
              <img
                src="/home/sheetGreen.png"
                alt="Descripción de la imagen"
                className="w-[70px] h-[90px] md:w-[60px] md:h-[80px] lg:w-[70px] lg:h-[90px]"
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
                <div className="lg:w-[min(25vw,20rem)] aspect-square">
                  <img
                    src="/home/Frame171.png"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="lg:w-[min(25vw,20rem)] aspect-square">
                  <img
                    src="/tu_logo_aqui.png"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="w-full h-full flex flex-row justify-center ml-4 mt-3">
                <div className={`flex items-end justify-end font-itcGBook leading-5`}>
                  {data[0].text2}
                </div>

                <button
                  onClick={toggleModal}
                  // cursor-[url(/home/cursor.svg)_3_3,_pointer]
                  className="bg-[#FFB000] text-[12px] md:text-[16px] lg:text-[20px] cursor-pointer text-white px-6 rounded-md font-bold leading-4 w-[27rem] h-10 relative"
                >
                  {data[0].button}
                  <Image
                    src={'/home/cursor.svg'}
                    width={60} height={60}
                    className="absolute -right-1 -bottom-7 w-10 h-10"
                    alt='cursor'
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-full mx-auto flex flex-col md:flex-row items-center justify-center lg:mt-10 visible lg:hidden ">
        <div className="lg:w-1/2 flex flex-row items-center justify-center gap-4">
          <div className="w-[50%] aspect-square">
            <img
              src="/home/Frame171.png"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-[50%] aspect-square">
            <img
              src="/tu_logo_aqui.png"
              className="w-full h-full object-contain"
              alt='tu-logo-aqui'
            />
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 h-full flex flex-col justify-end ml-4">
          <div className="flex items-end justify-end">{data[0].text2}</div>

          <button className="bg-[#FFB000] text-[20px] text-white px-6 mt-4 rounded-md relative">
            {data[0].button}
            <Image
              src={'/home/cursor.svg'}
              width={60}
              height={60}
              className="absolute -right-1 -bottom-7 w-10 h-10"
              alt='cursor'
            />
          </button>
        </div>
      </div>
    </section>
  );
}
