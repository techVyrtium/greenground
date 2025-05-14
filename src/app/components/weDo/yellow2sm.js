"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";
import logoGreen from "@/assets/home/logo-green.svg";
import GFICONGreen from "@/assets/home/GFICON-green.png"
import MICICONGreen from '@/assets/home/MICICON-green.png';
import READYICONGreen from '@/assets/home/READYICON-green.png';
import Image from "next/image";
export default function Yellow2sm() {
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
  return (
    <section className="" ref={cardTop}>
      <div className="flex flex-col w-full h-full text-[#45AC36] items-center gap-4">
        <div className="w-full h-fit flex items-center justify-center">
          <Image
            alt="logo-green"
            src={logoGreen}
            className="w-[200px] md:w-[250px] h-auto"
          />
        </div>
        <div className="flex flex-col items-center h-fit w-full">
          <h1
            className={`text-[24px] font-bold leading-10 font-itcGBold text-[#b52c17] text-center`}
          >
            {data2[0].title2}
          </h1>
          <h1
            className={`text-[min(20vw,80px)] font-bold leading-19 font-itcGBold text-[#b52c17] text-center`}
          >
            {data2[0].title}
          </h1>
        </div>
        <div className="w-full h-fit flex text-base mt-4 text-[#45AC36]">
          {data2[0].text}
        </div>

        <div className="relative w-full h-full flex flex-row items-center justify-center gap-4">
          <AnimatePresence>
            <motion.image
              src={`../assets/home/homeYellow2${num}.png`}
              alt=""
              initial={{
                opacity: 0,
                scale: `{${num == 2 ? 0 : num == 3 ? 0 : 0}}`,
              }}
              animate={{
                opacity: 1,
                scale: `{${num == 2 ? 5 : num == 3 ? 1 : 1}}`,
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              className={`${num == 1 ? 'w-[250px] h-[auto]' : 'w-full h-full'}`}
            />
          </AnimatePresence>
        </div>

        <div className="flex flex-row items-center justify-center mt-8 gap-3">
          <Image alt="GFICONGreen" src={GFICONGreen} className="w-[max(75px,20vw)]" />
          <Image alt="MICICONGreen" src={MICICONGreen} className="w-[max(75px,20vw)]" />
          <Image alt="READYICONGreen" src={READYICONGreen} className="w-[max(75px,20vw)]" />
        </div>
        <Link href={"/products"} className="inline-block bg-[#FFB000] text-[12px] md:text-[16px] lg:text-[20px] cursor-pointer text-white box- rounded-md font-bold leading-4 px-6  box-border max-w-[27rem] h-fit py-[0.5rem] text-center">
          {data2[0].button}
        </Link>
      </div>
    </section>
  );
} 