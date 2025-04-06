import React from "react";
import Card from "./card";

export default function NewProduct() {
  const card = [
    {
      id: 1,
      title: "Tajada de Maduro",
      weight: "25.00 USD",
      buttom: "Ver producto",
      img1: "/home/tajadaempaque.png",
      img2: "/home/verdeempaque.png",
    },
    {
      id: 2,
      title: "Tostones de plátano",
      weight: "25.00 USD",
      buttom: "Ver producto",
      img1: "/home/verdeempaque.png",
      img2: "/home/tajadaempaque.png",
    },
    {
      id: 3,
      title: "Papa criolla",
      weight: "25.00 USD",
      buttom: "Ver producto",
      img1: "/home/tajadaempaque.png",
      img2: "/home/verdeempaque.png",
    },
    {
      id: 4,
      title: "Sancocho",
      weight: "25.00 USD",
      buttom: "Ver producto",
      img1: "/home/soup.png",
      img2: "/home/verdeempaque.png",
    },
  ];

  const data = [
    {
      title: "Nuevos Productos",
      text: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      button: "Consulta nuestro catalogo",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-20 w-full h-fit mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row ">
        <div className="xl:w-3/5 w-full mt-12 md:mt-0 flex items-center justify-center xl:items-start xl:justify-start order-last md:order-last xl:order-first">
          <Card
            card={card}
            wSize={42}
            hSize={48}
            imgW={400}
            zone={2}
          />
        </div>
        <div className="xl:w-2/5  w-full flex flex-col items-center justify-center mt-12">
          <div className="relative w-full">
            <div className="w-fit">
              <h2 className={`md:text-[73px] lg:text-[80px] text-6xl font-bold text-[#E7681F] mb-12 font-itcGBold`}>
                {data[0].title}
              </h2>
              <img
                src="/home/sheetOrange.png"
                alt="Descripción de la imagen"
                className="w-[150px] h:[120px] md:w-[155px] md:h-[135px] absolute left-32 md:left-142 lg:left-159 xl:left-45 -top-[50px] min-[600px]:left-112"

              />
            </div>
          </div>
          <div className="text-[16px] w-full">{data[0].text}</div>
          <div className="flex justify-end w-full">
            <button className="bg-[#F19412] text-[20px] text-white px-6 mt-4 rounded-md">
              {data[0].button}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
