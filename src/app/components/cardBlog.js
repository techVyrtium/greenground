import React from "react";

export default function CardBlog({ data }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 relative py-8 px-1 md:px-[4px] gap-[16px] lg:gap-[24px] xl:gap-[32px]">
      {data.map((dato, i) => (
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
  );
}
