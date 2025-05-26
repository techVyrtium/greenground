"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";
import arrowL from '@/assets/home/arrowL.svg';
import arrowR from '@/assets/home/arrowR.svg';
import women1 from '@/assets/home/women1.png';
import women2 from '@/assets/home/women2.png';
import women3 from '@/assets/home/women3.png';
export default function OurCommitWomen() {
  const [activeIndex, setActiveIndex] = useState(0);
  const t = useTranslations('ourCommitWomen');
  const dataimg = [
    {
      id: 1,
      image: women1,
    },
    {
      id: 2,
      image: women2,
    },
    {
      id: 3,
      image: women3,
    },
  ];

  const data = [
    {
      title: (
        <>
          <h2
            className={`text-[clamp(40px,6vw,70px)] font-bold text-[#008638] mb-12 leading-[0.98] font-itcGBold`}
          >
            {t('title.part1')}
            <span className="inline-block">{t('title.strong1')}</span>
          </h2>
        </>
      ),
      text: t('text'),
    },
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % dataimg.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + dataimg.length) % dataimg.length
    );
  };

  return (
    <section className="md:mt-[200px] w-full h-full">
      <div className="px-[clamp(1rem,5vw,6rem)] flex flex-row h-full ">
        <div className="flex flex-col lg:flex-row w-full h-full justify-start">
          <div className="w-full flex items-start justify-start">
            <div className="flex flex-row order-last gap-[0.4rem] md:gap-4 lg:order-none items-center justify-start w-full mt-4 lg:mt-0">

              <Image
                src={arrowL}
                alt="Descripción de la imagen"
                className="mt-4 w-[3rem] cursor-pointer"
                onClick={() => handlePrev()}
              />


              <Image
                src={dataimg[activeIndex].image}
                alt="image"
                className="md:w-[750px] md:h-[400px] lg:max-w-full lg:w-[82%] w-[70%] lg:h-[550px] h-full rounded-b-2xl rounded-r-2xl"
                loading="lazy"
              />

              <Image
                src={arrowR}
                alt="Descripción de la imagen"
                className="mt-4 w-[3rem] cursor-pointer"
                onClick={() => handleNext()}
              />

            </div>
          </div>
          <div className="md:ml-12 flex flex-col order-first lg:order-none items-center justify-center lg:w-[49%]">
            {data[0].title}
            <p className="text-[clamp(1.2rem,1.75vw,1.75rem)]  text-[#4A4A4A] leading-[1.3] lg:mt-4 text-left">
              {data[0].text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
