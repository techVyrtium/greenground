"use client";
import React, { useState, useEffect } from "react";
import CardBlog from "./cardBlog";


export default function Blog() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dataTable, setDataTable] = useState([]);
  const [dataMovil, setDataMovil] = useState([]);

  useEffect(() => {
    if (activeIndex == 0) {
      const rs = card.filter((r) => r.id == "1" || r.id == "2");
      setDataTable(rs);
      const dm = card.filter((r) => r.id == "1");
      setDataMovil(dm);
    }
    if (activeIndex == 1) {
      const rs = card.filter((r) => r.id == "2" || r.id == "3");
      setDataTable(rs);
      const dm = card.filter((r) => r.id == "2");
      setDataMovil(dm);
    }
    if (activeIndex == 2) {
      const dm = card.filter((r) => r.id == "3");
      setDataMovil(dm);
    }
  }, [activeIndex]);

  const data = [
    {
      title: (
        <>
          <h2 className={`text-[60px] font-bold text-white mb-12 leading-[0.8] font-itcGBold`}>
            Blog
          </h2>
        </>
      ),
      text: (
        <>
          <p className="text-[26px] text-white leading-[1.8rem]">
            Descubre{" "}
            <span className=" font-bold">recetas fáciles y deliciosas </span>,
            las{" "}
            <span className=" font-bold">
              últimas tendencias en alimentación{" "}
            </span>
            saludable y nuestro{" "}
            <span className=" font-bold">
              compromiso con la sostenibilidad.
            </span>
          </p>
        </>
      ),
      text1: (
        <>
          <p className={`text-[26px] text-white leading-relaxed font-bold font-itcGBold`}>
            Inspírate, cocina y disfruta con nosotros.
          </p>
        </>
      ),
    },
  ];

  const card = [
    {
      id: 1,
      title: "Papas saladas1",
      text: "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      img: "/home/Recetapapa.png",
      button: "Consultar receta",
    },
    {
      id: 2,
      title: "Papas saladas2",
      text: "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      img: "/home/Recetapapa.png",
      button: "Consultar receta",
    },
    {
      id: 3,
      title: "Maduro frito3",
      text: "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      img: "/home/recetamaduro.png",
      button: "Consultar receta",
    },
  ];

  const handleNext = (size) => {
    setActiveIndex(activeIndex + 1);
    if (size == 1) {
      if (activeIndex >= 2 || activeIndex == 0) setActiveIndex(1);
      else if (activeIndex == 1) setActiveIndex(0);
    } else if (size == 0) {
        if(activeIndex == 2) setActiveIndex(0)
    }
  };

  const handlePrev = (size) => {
    setActiveIndex(activeIndex - 1);
    if (size == 1) {
      if (activeIndex == 0) setActiveIndex(1);
      else if (activeIndex == 1) setActiveIndex(0);
    } else if (size == 0) {
        if(activeIndex == 0) setActiveIndex(2)
    }
  };

  function btn(size) {
    return (
      <div className="flex felx-row items-center justify-center gap-2">
        <img
          src="/home/arrowsOrangeL.png"
          alt="Descripción de la imagen"
          className="mt-4 mr-2"
          onClick={() => handlePrev(size)}
        />
        <div
          className={`mt-4 p-3 rounded-full ${
            activeIndex == 0 ? "bg-[#F19412]" : "bg-[#FEF8F1]"
          }`}
        ></div>
        <div
          className={`mt-4 p-3 rounded-full ${
            activeIndex == 1 ? "bg-[#F19412]" : "bg-[#FEF8F1]"
          }`}
        ></div>
        <div
          className={`mt-4 p-3 rounded-full sm:grid md:hidden  ${
            activeIndex == 2 ? "bg-[#F19412]" : "bg-[#FEF8F1]"
          }`}
        ></div>
        <img
          src="/home/arrowsOrangeR.png"
          alt="Descripción de la imagen"
          className="mt-4 ml-2"
          onClick={() => handleNext(size)}
        />
      </div>
    );
  }

  return (
    <section className="mt-24 w-full h-full" id='blog'>
      {/* Zona Orange */}
      <div className="h-full w-full bg-[url(/home/bg-yellow.png)] bg-cover bg-no-repeat">
        <div className="px-4 sm:px-6 lg:px-20 py-4 box-border">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-10 max-w-7xl mx-auto h-full ">
            <div className="relative flex items-center h-full py-8 ml-14">
              {/* Imagen a la izquierda */}
              <div className="absolute w-fit h-full -left-14 bottom-2">
                <img
                  src="/home/sheetWhite.png"
                  alt="Descripción de la imagen"
                  className="w-[100px] h-[120px]"
                />
              </div>
              {/* Texto encima de la imagen */}
              <div className="w-fit text-left">
                {data[0].title}
              </div>
            </div>
            <div className="flex flex-col justify-center h-fit lg:mt-4">
              {/* Text Content */}
              <div className="space-y-6">{data[0].text}</div>
              <div className="mt-6">{data[0].text1}</div>
            </div>
          </div>
        </div>
      </div>
      {/* Zona Card */}
      <div className="max-w-7xl mx-auto mt-12 h-full">
        <div className="flex flex-row items-center justify-center h-12 w-full gap-8  ">
          <div>
            <button className="bg-[#f19412] px-8 py-4 rounded-xl text-white text-[20px] font-bold">
              Recetas
            </button>
          </div>
          <div>
            <button className="bg-[#f5b256] hover:bg-[#f19412] px-8 py-4 rounded-xl text-white text-[20px] font-bold">
              Actualidad
            </button>
          </div>
        </div>
        <div className="mt-4 max-w-7xl mx-auto px-4 lg:px-0 flex w-full items-center justify-center">
          <div className="hidden lg:grid ">
            <CardBlog data={card} />
          </div>
          {/*  Movil */}
          <div className="block lg:hidden sm:hidden">
            <CardBlog data={dataMovil} />
            {btn(0)}
          </div>
          {/*  Tabla */}
          <div className="hidden md:grid lg:hidden ">
            <CardBlog data={dataTable} />
            {btn(1)}
          </div>
        </div>
      </div>
    </section>
  );
}
