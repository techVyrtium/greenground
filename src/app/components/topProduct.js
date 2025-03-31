"use client";
import React, { useState, useEffect } from "react";
import Card from "./card";

export default function TopProduct() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dataTable, setDataTable] = useState([]);
  const [dataMovil, setDataMovil] = useState([]);

  useEffect(() => {
    if (activeIndex == 0) {
      const rs = card.filter((r) => r.id == "1" || r.id == "2" || r.id == "3");
      setDataTable(rs);
      const dm = card.filter((r) => r.id == "1" || r.id == "2");
      setDataMovil(dm);
    }
    if (activeIndex == 1) {
      const rs = card.filter((r) => r.id == "4" || r.id == "5" || r.id == "6");
      setDataTable(rs);
      const dm = card.filter((r) => r.id == "3" || r.id == "4");
      setDataMovil(dm);
    }
    if (activeIndex == 2) {
        const dm = card.filter((r) => r.id == "5" || r.id == "6");
        setDataMovil(dm);
      }
  }, [activeIndex]);

  const data = [
    {
      title: "Top",
      title2: "Productos",
      text: "Participamos como una de las empresas donantes y voluntarias hacia la comunidad de la Esperanza en la Guajira Colombiana, donde a través de donativos se instauró un tanque de agua que va a mejorar la calidad de vida de 100 familias, con un sistema de agua con capacidad de 10.000 litros que provisiona las necesidades hídricas de esta población.",
    },
  ];

  const card = [
    {
      id: 1,
      title: "Producto",
      weight: "500gr / 1Kg / 2Kg / 3Kg",
      buttom: "Ver producto",
      img1: "/home/tajadaempaque.png",
    },
    {
      id: 2,
      title: "Producto2",
      weight: "500gr / 1Kg / 2Kg / 3Kg",
      buttom: "Ver producto",
      img1: "/home/tajadaempaque.png",
    },
    {
      id: 3,
      title: "Producto3",
      weight: "500gr / 1Kg / 2Kg / 3Kg",
      buttom: "Ver producto",
      img1: "/home/tajadaempaque.png",
    },
    {
      id: 4,
      title: "Producto4",
      weight: "500gr / 1Kg / 2Kg / 3Kg",
      buttom: "Ver producto",
      img1: "/home/tajadaempaque.png",
    },
    {
      id: 5,
      title: "Producto5",
      weight: "500gr / 1Kg / 2Kg / 3Kg",
      buttom: "Ver producto",
      img1: "/home/tajadaempaque.png",
    },
    {
      id: 6,
      title: "Producto6",
      weight: "500gr / 1Kg / 2Kg / 3Kg",
      buttom: "Ver producto",
      img1: "/home/tajadaempaque.png",
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
    <section className="w-full h-fit mt-20 ">
      <div className="relative flex h-[131px] w-4/5 md:w-2/3 lg:w-2/5 py-4 bg-[#008638] rounded-br-full">
        <div className="w-1/2 h-full px-4 sm:px-6 lg:px-20">
          <img
            src="/home/sheetWhite.png"
            alt="Descripción de la imagen"
            className="w-[80px] h-[100px] "
          />
        </div>
        <div className="absolute w-full px-4 sm:px-6 lg:px-20">
          <h2 className="text-[40px] ml-24 top-[25px] text-left font-bold text-white leading-[0.8]">
            {data[0].title}
          </h2>
          <h2 className="text-[40px] ml-14 mt-2 top-[45px] text-left font-bold text-white mb-12 leading-[0.8]">
            {data[0].title2}
          </h2>
        </div>
      </div>
      <div className="mt-12 max-w-7xl mx-auto flex w-full items-center justify-center">
        <div className="hidden lg:grid ">
          <Card card={card} />
        </div>
        {/*  Movil */}
        <div className="block lg:hidden sm:hidden">
          <Card card={dataMovil} />
          {btn(0)}
        </div>
        {/*  Tabla */}
        <div className="hidden md:grid lg:hidden ">
          <Card card={dataTable} />
          {btn(1)}
        </div>
      </div>
    </section>
  );
}
