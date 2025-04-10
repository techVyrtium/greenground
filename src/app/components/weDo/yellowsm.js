"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Yellowsm() {
  const cardTop = useRef();
  const [num, setNum] = useState(1);

  useEffect(() => {
    const elemento = cardTop.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          handlechange(entry.isIntersecting);
        });
      },
      {
        threshold: 0.5,
      }
    );
    if (elemento) {
      observer.observe(elemento);
    }
  }, []);

  const handlechange = (valor) => {
    if (valor == true) {
      setTimeout(() => {
        setNum(2);
      }, 1000);
    } else setNum(1);
  };

  const data2 = [
    {
      title: "BOCADO",
      title2: "Tradición en cada",
      text: (
        <>
          <p className="lg:text-[30px] md:text-[24px] text-[24px] text-white ">
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
  return (
    <section className="" ref={cardTop}>
      <div className="flex flex-col w-full h-full">
            <div className="w-full h-fit flex items-center justify-center">
              <img
                src="/home/blanco-12.svg"
                className="w-[200px] md:w-[250px] h-auto"
              />
            </div>
            <div className="flex flex-col items-center h-fit w-full">
              <h1
                className={`text-white text-[32px] font-bold leading-21 font-itcGBold`}
              >
                {data2[0].title2}
              </h1>
              <h1
                className={`text-white text-[80px] font-bold leading-21 font-itcGBold`}
              >
                {data2[0].title}
              </h1>
            </div>
            <div className="w-full h-fit flex text-base mt-4">
              {data2[0].text}
            </div>

            <div className="relative w-full h-full flex flex-row items-center justify-center gap-4">
                        <AnimatePresence>
                          <motion.img
                            src={`/home/homeYellow${num}.png`}
                            alt=""
                            initial={{
                              opacity: 0,
                              scale: `{${num == 2 ? 0 : num == 3 ? 0 : 0}}`,
                            }}
                            animate={{
                              opacity: 1,
                              scale: `{${num == 2 ? 5 : num == 3 ? 1 : 1}}`,
                            }} // Oculta la primera imagen cuando aparece la segunda
                            transition={{
                              duration: 2,
                              //delay:2,
                              ease: "easeInOut",
                            }}
                            className={`${num == 1 ? 'w-[250px] h-[auto]' : 'w-full h-[12rem]' }`}
                          />
                        </AnimatePresence>
            </div>
           
            <div className="flex flex-row items-center justify-around mt-4">
              <div className="flex flex-row items-center justify-center mt-8 gap-8">
                <img src="/home/GFICON.png" className="w-[95px]" />
                <img src="/home/MICICON.png" className="w-[95px]" />
                <img src="/home/READYICON.png" className="w-[95px]" />
              </div>
            </div>
            <div className="flex items-center justify-center mt-4">
              <Link href={"/products"}>
                <button className="bg-[#B52C17] text-[20px] text-white px-6 mt-4 rounded-md cursor-pointer">
                  {data2[0].button}
                </button>
              </Link>
            </div>
          </div>
    </section>
  );
}
