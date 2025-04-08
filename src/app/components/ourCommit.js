import React from "react";

export default function OurCommit() {
  const data = [
    {
      title: (
        <>
          <h2
            className={`lg:text-[60px] text-[40px] font-bold text-white mb-12 leading-[0.8] font-itcGBold`}
          >
            Nuestro compromiso
          </h2>
        </>
      ),
      text: "Participamos como una de las empresas donantes y voluntarias hacia la comunidad de la Esperanza en la Guajira Colombiana, donde a través de donativos se instauró un tanque de agua que va a mejorar la calidad de vida de 100 familias, con un sistema de agua con capacidad de 10.000 litros que provisiona las necesidades hídricas de esta población.",
    },
  ];
  return (
    <section className="mt-24 w-full h-full" id="ourCommit">
      {/* Zona Orange */}
      <div className="h-[15rem] lg:h-[12rem] bg-[url(/home/bg-green.png)] bg-cover bg-no-repeat">
        <div className="px-[clamp(1rem,5vw,6rem)]">
          <div className="flex flex-row w-full mx-auto h-full">
            <div className="relative flex  h-full w-1/2 lg:w-1/3 py-8 ">
              {/* Imagen a la izquierda */}
              <div className="lg:w-1/3 h-full">
                <img
                  src="/home/sheetWhite.png"
                  alt="Descripción de la imagen"
                  className="w-[100px] h-[120px]"
                />
              </div>

              {/* Texto encima de la imagen */}
              <div className="absolute left-16 top-[70px] w-full text-left font-itcGBold">
                {data[0].title}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" px-[clamp(1rem,5vw,6rem)] flex h-full lg:h-[18rem] ">
        <div className="w-full mx-auto flex flex-col lg:flex-row">
          <div className="lg:w-2/5 w-full flex lg:order-none order-last">
            <div className=" w-full">
              <p className="text-[clamp(1.2rem,1.75vw,1.75rem)] text-[#4A4A4A] leading-relaxed mt-[30px] text-left">
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
                className="w-[750px] h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
