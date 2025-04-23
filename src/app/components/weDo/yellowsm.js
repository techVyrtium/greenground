"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Yellowsm() {
  const cardTop = useRef();
  const [num, setNum] = useState(1);
  const t = useTranslations("whatWeDo");
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
  return (
    <section className="" ref={cardTop}>
      <div className="flex flex-col w-full h-full text-[#45AC36] items-center gap-4">
        <div className="w-full h-fit flex items-center justify-center">
          <img
            src="/home/logo-green.svg"
            className="w-[200px] md:w-[250px] h-auto"
          />
        </div>
        <div className="flex flex-col items-center h-fit w-full">
          <h1
            className={`text-[32px] font-bold leading-10 font-itcGBold`}
          >
            {data2[0].title2}
          </h1>
          <h1
            className={`text-[min(20vw,80px)] font-bold leading-19 font-itcGBold`}
          >
            {data2[0].title}
          </h1>
        </div>
        <div className="w-full h-fit flex text-base mt-4 text-[#45AC36]">
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
              className={`${num == 1 ? 'w-[250px] h-[auto]' : 'w-full h-full'}`}
            />
          </AnimatePresence>
        </div>

        <div className="flex flex-row items-center justify-around mt-4">
          <div className="flex flex-row items-center justify-center mt-8 gap-3">
            <img src="/home/GFICON-green.png" className="w-[max(75px,20vw)]" />
            <img src="/home/MICICON-green.png" className="w-[max(75px,20vw)]" />
            <img src="/home/READYICON-green.png" className="w-[max(75px,20vw)]" />
          </div>
        </div>
        <Link href={"/products"} className="inline-block bg-[#FFB000] text-[12px] md:text-[16px] lg:text-[20px] cursor-pointer text-white box- rounded-md font-bold leading-4 px-6  box-border max-w-[27rem] h-fit py-[0.5rem] text-center">
          {data2[0].button}
        </Link>
      </div>
    </section>
  );
}
