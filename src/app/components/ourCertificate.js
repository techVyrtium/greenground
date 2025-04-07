import React from "react";

export default function OurCertificate() {
  const data = [
    {
      id: 1,
      text: "Las auditorias son realizadas en nuestra locación anualmente.",
      img: "/home/Calendar.png",
    },
    {
      id: 2,
      text: "Contamos con la aprobación de los programas FSMA por parte de la inspección FDA.",
      img: "/home/Approve.png",
    },
    
  ];

  const data2 = [
    {
      title: (
        <>
          <h2
            className={`text-[40px] font-bold text-[#008638]  leading-[0.8] font-itcGBold`}
          >
            Nuestras certificaciones
          </h2>
        </>
      ),
    },
  ];

  return (
    <section className="w-full h-full px-4 sm:px-6 lg:px-20 mt-10">
      <div className="lg:h-[10rem] max-w-7xl mx-auto">

        {/* Info Verde */}
        <div className="flex flex-col lg:flex-row items-center justify-center h-full w-full gap-16 ">
          {data.map((dato) => (
            <div className="lg:w-1/2 w-full" key={dato.id}>
              <div className="w-full h-24 flex flex-row place-items-center items-center justify-center rounded-xl bg-[#008638] text-white shadow-md shadow-gray-400">
                <div className="">
                  <img src={dato.img} className="w-16" />
                </div>
                <div className="w-96 ml-8">
                  <p className="text-lg text-white text-center leading-relaxed ">
                    {dato.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*  Certificaciones */}
      <div className="lg:h-[20rem] mt-12 lg:mt-0 max-w-7xl mx-auto">
        <div className="flex flex-col w-full items-start gap-12">
          {/* titulo */}
          <div className="h-full w-full relative">
            <div className="flex h-full">
              {/* Imagen a la izquierda */}
              <div className="h-full">
                <img
                  src="/home/sheetGreen.png"
                  alt="Descripción de la imagen"
                  className="w-[70px] h-[90px] sm:w-[90px] sm:h-[110px] rotate-12"
                />
              </div>

              {/* Texto encima de la imagen */}
              <div
                className="absolute left-10 md:left-14  bottom-[-14px] md:bottom-6 sm:w-fit text-left"
              >
                {data2[0].title}
              </div>
            </div>
          </div>

          {/* imagenes */}
          <div className="mt-12 w-full lg:mt-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:order-none order-last place-items-center">
            <div>
              <a
                href="https://www.sgs.com/en/certified-clients-and-products"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/home/logotipo-iso-9001.png"
                  className="w-full h-auto"
                />
              </a>
            </div>

            <div>
              <img src="/home/FDA.png" className="w-full h-auto" />
            </div>
            <div>
              <img src="/home/logo-invima1.png" className="w-full h-auto" />
            </div>
            <div>
              <img src="/home/tcpat1.png" className="w-full h-auto" />
            </div>
            <div>
              <img src="/home/logo-bacs.png" className="w-full h-auto" />
            </div>
            <div>
              <img src="/home/Logo-Kosher1.png" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
