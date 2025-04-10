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
            className={`text-[clamp(40px,6vw,96px)] xl:text-[clamp(70px,4.5vw,96px)] font-bold text-[#008638]  leading-[0.8] font-itcGBold max-[378px]:text-[10vw]`}
          >
            Nuestras certificaciones
          </h2>
        </>
      ),
    },
  ];
  const imageList = [
    {
      src: "/home/logotipo-iso-9001.png",
      link: "https://www.sgs.com/en/certified-clients-and-products",
    },
    { src: "/home/FDA.png", link: "" },
    { src: "/home/logo-invima1.png", link: "" },
    { src: "/home/tcpat1.png", link: "" },
    { src: "/home/logo-bacs.png", link: "" },
    { src: "/home/Logo-Kosher1.png", link: "" },
  ];
  return (
    <section className="w-full h-full p-[clamp(1rem,5vw,6rem)]">
      <div className="lg:h-[10rem] w-full mx-auto">
        {/* Info Verde */}
        <div className="flex flex-col lg:flex-row items-stretch justify-center h-full w-full gap-16">
          {data.map((dato) => (
            <div className="lg:w-1/2 w-full" key={dato.id}>
              <div className="w-full h-full flex flex-col">
                <div className="flex-grow flex items-center justify-center rounded-xl bg-[#008638] text-white shadow-md shadow-gray-400 px-6 min-h-[80px]">
                  <div className="">
                    <img src={dato.img} className="w-[100px]" />
                  </div>
                  <div className="ml-8">
                    <p className="text-[29px] text-white text-center leading-8 font-bold py-4">
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
                <img
                  src="/home/sheetGreen.png"
                  alt="Descripción de la imagen"
                  className="w-[70px] h-[90px] sm:w-[90px] sm:h-[110px] rotate-12"
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
                  <a
                    href={image.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={image.src} className="w-40 h-40 object-contain" />
                  </a>
                ) : (
                  <img src={image.src} className="w-40 h-40 object-contain" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
