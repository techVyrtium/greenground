import React from "react";

export default function OurCommit() {
  const data = [
    {
      title: (
        <>
          <h2 className="lg:text-[60px] text-[50px] font-bold text-white mb-12 leading-[0.8]">
            Nuestro compromiso
          </h2>
        </>
      ),
      text: "Participamos como una de las empresas donantes y voluntarias hacia la comunidad de la Esperanza en la Guajira Colombiana, donde a través de donativos se instauró un tanque de agua que va a mejorar la calidad de vida de 100 familias, con un sistema de agua con capacidad de 10.000 litros que provisiona las necesidades hídricas de esta población.",
    },
  ];
  return (
    <section className="mt-24 w-full h-full">
      {/* Zona Orange */}
      <div className="h-[15rem] lg:h-[12rem] bg-[url(/home/bg-green.png)] bg-cover bg-no-repeat">
      <div className="px-4 sm:px-6 lg:px-20">
        <div className="flex flex-row max-w-7xl mx-auto h-full">
          <div className="relative flex  h-full w-1/3 py-8 ">
            {/* Imagen a la izquierda */}
            <div className="lg:w-1/3 h-full">
              <img
                src="/home/sheetWhite.png"
                alt="Descripción de la imagen"
                className="w-[100px] h-[120px]"
              />
            </div>

            {/* Texto encima de la imagen */}
            <div className="absolute left-16 top-[70px] w-full text-left">
              {data[0].title}
            </div>
          </div>
        </div>
      </div></div>

      <div className=" px-4 sm:px-6 lg:px-20 flex h-full lg:h-[18rem] ">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row  w-full">
          <div className="lg:w-2/5 w-full flex lg:order-none order-last">
            <div className="lg:w-5/6 w-full">
              <p className="text-lg text-[#4A4A4A] leading-relaxed mt-18 text-justify">
                {data[0].text}
              </p>
            </div>
          </div>
          <div className="lg:w-3/5 w-full lg:order-none order-first">
            <div className="flex flex-row justify-end w-full -mt-10 lg:-mt-36">
              <video
                src="/home/ourCommit.mov"
                autoPlay={true}
                loop
                muted={true}
                className="w-[750px] h-auto rounded-lg ml-20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
