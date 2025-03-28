import React from "react";

export default function Blog() {
  const data = [
    {
      title: (
        <>
          <h2 className="text-[60px] font-bold text-white mb-12 leading-[0.8]">
            Blog
          </h2>
        </>
      ),
      text: (
        <>
          <p className="text-[26px] text-white leading-relaxed">
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
          <p className="text-[26px] text-white leading-relaxed font-bold">
            Inspírate, cocina y disfruta con nosotros.
          </p>
        </>
      ),
    },
  ];

  const card = [
    {
      id: 1,
      title: "Papas saladas",
      text: "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      img: "/home/Recetapapa.png",
      button: "Consultar receta",
    },
    {
      id: 2,
      title: "Papas saladas",
      text: "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      img: "/home/Recetapapa.png",
      button: "Consultar receta",
    },
    {
      id: 3,
      title: "Maduro frito",
      text: "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      img: "/home/recetamaduro.png",
      button: "Consultar receta",
    },
  ];

  return (
    <section className="mt-24 w-full h-full">
      {/* Zona Orange */}
      <div className=" h-[12rem] bg-[url(/home/bg-yellow.png)] bg-cover bg-no-repeat">
        <div className="flex flex-row max-w-7xl mx-auto h-full">
          <div className="relative flex h-full w-1/3 py-8 ">
            {/* Imagen a la izquierda */}
            <div className="w-1/3 h-full">
              <img
                src="/home/sheetWhite.png"
                alt="Descripción de la imagen"
                className="w-[100px] h-[120px]"
              />
            </div>

            {/* Texto encima de la imagen */}
            <div className="absolute left-16 top-[80px]  w-full text-left">
              {data[0].title}
            </div>
          </div>
          <div className="flex flex-col  justify-center h-[12rem] ml-10">
            {/* Text Content */}
            <div className="space-y-6">{data[0].text}</div>
            <div className="mt-6">{data[0].text1}</div>
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

        <div className="w-full h-full mt-12 flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 relative py-8 px-1 md:px-[4px] gap-[16px] lg:gap-[24px] 2xl:gap-[32px]">
          {card.map((dato, i) => (
            <div key={i} className="flex flex-col h-full bg-transparent">
              <div className="w-full h-auto  object-cover bg-no-repeat bg-cover">
                <img src={dato.img} />
              </div>
              <div className="p-[8px] 2xl:p-[16px] flex flex-col">
                <div className="text-[32px] 2xl:text-[46px] text-[#D9840D] font-bold">
                  {dato.title}
                </div>
                <div className="block text-[#4a4a4a] font-[400] text-[20px] 2xl:text-[20px] mt-[16px] 2xl:leading-[23px] leading-[17px]">
                  <div className=" line-clamp-6">{dato.text}</div>
                </div>
                <div className="flex w-full h-full">
                  <button className="mt-[16px] w-full text-center text-[#EFEBE7] bg-[#F19412] font-[700] py-[4px] px-[16px] rounded-lg">
                    {dato.button}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
