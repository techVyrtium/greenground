import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";
import calendar from '@/assets/home/Calendar.png';
import approve from '@/assets/home/Approve.png';
import iso9001 from '@/assets/home/logotipo-iso-9001.png'
import FDA from "@/assets/home/FDA.png"
import invima1 from "@/assets/home/logo-invima1.png"
import tcpat1 from "@/assets/home/tcpat1.png"
import bacs from "@/assets/home/logo-bacs.png"
import kosher1 from "@/assets/home/Logo-Kosher1.png"
import sheetGreen from '@/assets/home/sheetGreen.png';
import Link from "next/link";
export default function OurCertificate() {
  const t = useTranslations('ourCertificate');
  const data = [
    {
      id: 1,
      text: t('text'),
      img: calendar,
      className: `md:w-[170px]`
    },
    {
      id: 2,
      text: t('text2'),
      img: approve,
      className: `md:w-[200px]`
    },
  ];

  const data2 = [
    {
      title: (
        <>
          <h2
            className={`text-[clamp(40px,6vw,96px)] xl:text-[clamp(70px,4.5vw,96px)] font-bold text-[#008638]  leading-[0.8] font-itcGBold max-[378px]:text-[10vw]`}
          >
            {t('title')}
          </h2>
        </>
      ),
    },
  ];
  const imageList = [
    {
      src: iso9001,
      link: "https://www.sgs.com/en/certified-clients-and-products",
    },
    { src: FDA, link: "" },
    { src: invima1, link: "" },
    { src: tcpat1, link: "" },
    { src: bacs, link: "" },
    { src: kosher1, link: "" },
  ];
  return (
    <section className="w-full h-full p-[clamp(1rem,5vw,6rem)]">
      <div className="lg:h-[10rem] w-full mx-auto">
        {/* Info Verde */}
        <div className="flex flex-col lg:flex-row items-stretch justify-center h-full w-full gap-16">
          {data.map((dato, i) => (
            <div className="lg:w-1/2 w-full" key={dato.id}>
              <div className="w-full h-full flex flex-col">
                <div className="flex-grow flex items-center justify-center rounded-xl bg-[#008638] text-white shadow-md shadow-gray-400 px-6 min-h-[80px]">
                  <div>
                    <Image alt={`image-${i}`} src={dato.img} className={`${dato.className ?? ''} w-[100px]`} loading="lazy" />
                  </div>
                  <div className="ml-8">
                    <p className="text-[max(1rem,3.8vw)] leading-[1.5rem] md:text-[36px] text-white text-center md:leading-8 font-bold py-4">
                      {dato.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*  Certificaciones */}
      <div className="lg:h-[20rem] mt-[160px] w-full ">
        <div className="flex flex-col w-full items-start gap-12">
          {/* titulo */}
          <div className="h-full w-full relative">
            <div className="flex h-full">
              {/* Imagen a la izquierda */}
              <div className="h-full">
                <Image
                  src={sheetGreen}
                  alt="Descripción de la imagen"
                  className="w-[70px] h-[90px] sm:w-[90px] sm:h-[110px] rotate-12"
                  loading="lazy"
                />
              </div>

              {/* Texto encima de la imagen */}
              <div className="absolute left-10 md:left-14  bottom-[-2px] md:bottom-0 sm:w-fit text-left">
                {data2[0].title}
              </div>
            </div>
          </div>

          {/* imagenes */}
          <div className="mt-12 w-full lg:mt-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 lg:order-none order-last place-items-center">
            {imageList.map((image, index) => (
              <div key={index}>
                {image.link ? (
                  <Link
                    href={image.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={image.src} alt="image" className="w-40 h-40 object-contain" loading="lazy" />
                  </Link>
                ) : (
                  <Image src={image.src} alt="image" className="w-40 h-40 object-contain" loading="lazy" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
