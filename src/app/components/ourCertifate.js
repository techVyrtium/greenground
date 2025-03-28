import React from "react";

export default function OurCertifate() {
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
          <h2 className="text-[40px] font-bold text-[#008638] mb-12 leading-[0.8]">
            Nuestras
            <br /> certificaciones
          </h2>
        </>
      ),
    },
  ];

  return (
    <section className="max-w-7xl mx-auto w-full h-full mt-28">
      <div className=" h-[10rem]">
        {" "}
        {/* Info Verde */}
        <div className="flex flex-row h-full gap-16 ">
          {data.map((dato) => (
            <div className="w-1/2" key={dato.id}>
              <div className="w-full h-24 flex flex-row items-center justify-center rounded-xl bg-[#008638] text-white shadow-md shadow-gray-400">
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
      <div className="h-[10rem]">
        <div className="flex flex-row w-full">
          <div className="flex flex-row gap-8">
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
          <div className="h-full ml-12 mt-6">
            <div className="relative flex items-center justify-center h-full px-8 ">
              {/* Imagen a la izquierda */}
              <div className="h-full">
                <img
                  src="/home/sheetGreen.png"
                  alt="Descripción de la imagen"
                  className="w-[90px] h-[110px] rotate-12"
                />
              </div>

              {/* Texto encima de la imagen */}
              <div className="absolute left-20 top-[50px] w-full text-left">
                {data2[0].title}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
