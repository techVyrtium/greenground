"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Yellowmd() {
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
          <p className="lg:text-[30px] md:text-[24px] text-[24px] text-[#45AC36]">
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
        <div className="flex flex-row">
          <div className="w-1/4 h-fit">
            <img
              src="/home/logo-green.svg"
              className="w-[200px] md:w-[250px] h-auto"
            />
          </div>
          <div className="flex flex-col items-center h-fit w-2/3 text-[#45AC36]">
            <h1
              className={`text-[40px] font-bold leading-21 font-itcGBold`}
            >
              {data2[0].title2}
            </h1>
            <h1
              className={`text-[80px] font-bold leading-21 font-itcGBold`}
            >
              {data2[0].title}
            </h1>
          </div>
          <div className="w-1/4 mt-8">{data2[0].text}</div>
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
              className={`${num == 1 ? 'w-[500px] h-[auto]' : 'w-full h-[25rem]'}`}
            />
          </AnimatePresence>
        </div>
        <div className="flex flex-row items-center justify-around w-full">
          <div className="flex flex-row gap-8">
            <img src="/home/GFICON-green.png" className=" w-[120px]" />
            <img src="/home/MICICON-green.png" className=" w-[120px]" />
            <img src="/home/READYICON-green.png" className=" w-[120px]" />
          </div>

          {/* <div className="gap-8">
            <Link href={'/products'}>
              <button className="bg-[#B52C17] text-[30px] text-white px-6 mt-4 rounded-md cursor-pointer">
                {data2[0].button}
              </button></Link>
          </div> */}
          <Link href={"/products"} className="inline-block bg-[#FFB000] text-[12px] md:text-[16px] lg:text-[20px] cursor-pointer text-white box- rounded-md font-bold leading-4 px-6 pt-[min(3%,1.5vw)] box-border max-w-[27rem] h-[min(5vw,7rem)] text-center">
            {data2[0].button}
          </Link>
        </div>
      </div>
    </section>
  );
}
