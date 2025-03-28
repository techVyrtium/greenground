import React from "react";

export default function NowNearYou() {
  const data = [
    {
      title: "AHORA MAS CERCÁ DE TÍ",
      text: (
        <>
          <p className="text-[20px] text-white ">
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
    <section className="px-4 sm:px-6 lg:px-20 w-full h-[32rem] bg-[url(/home/bg-red.png)] bg-cover bg-no-repeat">
      <div className=" mx-auto flex flex-row ">
        <div className="w-1/2">
          <img src="/home/Frame171.png" className="w-[700px] h-auto" />
        </div>
        <div className="flex flex-col  justify-around w-1/2 h-fit py-22">
          <div className="flex flex-row">
            <div className="flex  justify-center leading-7">
              <img src="/home/aroBird.png" className="w-[388px] h-auto" />
            </div>
            <div>
              <h1 className="text-white text-[60px] font-bold ml-16 leading-16">
                {data[0].title}
              </h1>
            </div>
          </div>
          <div className="space-y-6 mt-12 text-justify ">{data[0].text}</div>
          <div className="flex flex-row items-center justify-center gap-8 py-8">
            <img src="/home/GFICON.png" className="w-[156px]" />
            <img src="/home/MICICON.png" className="w-[156px]" />
            <img src="/home/READYICON.png" className="w-[156px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
