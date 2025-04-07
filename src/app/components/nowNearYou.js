import React from "react";

export default function NowNearYou() {
  const data = [
    {
      title: "AHORA MÁS CERCA DE TI",
      text: (
        <>
          <p className="text-[20px] text-white md:text-[34px] leading-8">
            Encuentra nuestros productos{" "}
            <span className=" font-bold">Green ground </span>
            en<span className=" font-bold">tiendas ara </span>y abre las puertas
            de tu casa al{" "}
            <span className=" font-bold">sabor de la tradición.</span>
          </p>
        </>
      ),
    },
  ];
  return (
    <section className="hidden md:block px-4 sm:px-6 lg:px-20 mt-20 w-full h-fit xl:h[32rem] 2xl:h[32rem] bg-[url(/home/bg-red.png)] bg-cover bg-no-repeat">
      <div className=" flex flex-col lg:flex-row ">
        <div className="lg:w-1/2 w-full flex items-center justify-center">
          <img src="/home/Frame171.png" className="w-[600px] h-auto" />
        </div>
        <div className="flex flex-col justify-around lg:w-1/2 w-full h-fit md:py-22">
          <div className="flex flex-col md:flex-row">
            <div className="flex justify-center">
              <img src="/home/aroBird.png" className="w-[288px] md:w-[30rem] h-auto" />
            </div>
            <div>
              <h1 className={`text-white text-[56px] font-bold md:ml-16 leading-16 font-itcGBold`}>
                {data[0].title}
              </h1>
            </div>
          </div>
          <div className="space-y-6 mt-12 text-justify ">{data[0].text}</div>
          <div className="flex flex-col md:flex-row w-full items-center justify-center gap-8 py-8">
            <div className="flex flex-row gap-8 lg:gap-[1vw] max-[465px]:gap-6">
              <img src="/home/GFICON.png" className="md:w-[156px] lg:w-[14vw] w-[120px] max-[465px]:w-[100px]" />
              <img src="/home/MICICON.png" className="md:w-[156px] lg:w-[14vw] w-[120px] max-[465px]:w-[100px]" />
              <img src="/home/READYICON.png" className="md:w-[156px] lg:w-[14vw] w-[120px] max-[465px]:w-[100px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
