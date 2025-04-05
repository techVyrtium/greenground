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
          <h2 className={`text-[40px] font-bold text-[#008638] mb-12 leading-[0.8] font-itcGBold`}>
            Nuestras certificaciones
          </h2>
        </>
      ),
    },
  ];

  return (
    <section className="w-full h-full px-4 sm:px-6 lg:px-20 mt-28">
      <div className="lg:h-[10rem] max-w-7xl mx-auto">
        {" "}
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
      <div className="lg:h-[10rem] mt-12 lg:mt-0 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row w-full place-items-center">
          <div className="lg:w-3/5 mt-12 justify-items-stretch lg:mt-0 grid grid-cols-2 md:grid-cols-4 gap-8 lg:order-none order-last">
            <div>
              <img src="/home/certSGS.png" className="w-[150px] h-auto" />
            </div>
            <div>
              <img src="/home/certInvima.png" className="w-[180px] h-auto" />
            </div>
            <div>
              <img src="/home/certFDA.png" className="w-[160px] h-auto" />
            </div>
            <div>
              <img src="/home/certKosher.png" className="w-[145px] h-auto" />
            </div>
          </div>
          <div className="h-full w-full lg:w-1/43 xl:w-1/4 2xl:w-1/4 mt-4 lg:order-none order-first">
            <div className="relative flex h-full md:px-8 ">
              {/* Imagen a la izquierda */}
              <div className="h-full">
                <img
                  src="/home/sheetGreen.png"
                  alt="Descripción de la imagen"
                  className="w-[90px] h-[110px] rotate-12"
                />
              </div>

              {/* Texto encima de la imagen */}
              <div className={`absolute left-10 md:left-20 top-[40px] w-fit text-left`}>
                {data2[0].title}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
