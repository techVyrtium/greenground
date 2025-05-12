"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Yellow2md() {
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
          <p className="text-[clamp(18px,2.5vw,28px)] text-left">
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
      <div className="flex flex-col w-full h-full">
        <div className="flex flex-row">
          <div className="w-1/4 h-fit">
            <img
              src="/home/logo-green.svg"
              className="w-[200px] md:w-[250px] h-auto"
            />
          </div>
          <div className="flex flex-col items-center w-2/3 text-[#45AC36]">
            <h1
              className={`text-[30px] font-bold leading-21 font-itcGBold text-[#b52c17]`}
            >
              {data2[0].title2}
            </h1>
            <h1
              className={`text-[80px] font-bold leading-21 font-itcGBold text-[#b52c17]`}
            >
              {data2[0].title}
            </h1>
          </div>
          <div className="w-1/4 mt-8 text-[#45AC36]">{data2[0].text}</div>
        </div>

        <div className="flex flex-row items-end justify-center w-full py-8">
          <img
            src="/home/platanomaduro.png"
            className="w-[280px] h-auto"
            alt="Plátano maduro"
          />
          <img
            src="/home/platanoverde.png"
            className="w-[280px] h-auto"
            alt="Plátano verde"
          />
          <img
            src="/home/yucafrita.png"
            className="w-[280px] h-auto"
            alt="Yuca frita"
          />
        </div>
        <div className="flex flex-row items-center justify-around w-full">
          <div className="flex flex-row gap-8">
            <img src="/home/GFICON-green.png" className=" w-[120px]" />
            <img src="/home/MICICON-green.png" className=" w-[120px]" />
            <img src="/home/READYICON-green.png" className=" w-[120px]" />
          </div>
          <Link href={"/products"} className="inline-block bg-[#FFB000] text-[12px] md:text-[16px] lg:text-[20px] cursor-pointer text-white box- rounded-md font-bold leading-4 px-6  box-border max-w-[27rem] h-fit py-[0.5rem] text-center">
            {data2[0].button}
          </Link>
        </div>
      </div>
    </section>
  );
}
