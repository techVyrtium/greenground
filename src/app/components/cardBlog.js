import React from "react";
import Link from "next/link";

export default function CardBlog({ data, color }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 relative py-8 px-1 md:px-[4px] gap-[16px] lg:gap-[24px] xl:gap-[32px]">
      {data.map((dato, i) => (
        <div key={i} className="flex flex-col h-full bg-transparent">
          <div className="w-full h-auto object-cover bg-no-repeat bg-cover">
            <img src={dato.img} />
          </div>
          <div className="p-[8px] 2xl:p-[16px] flex flex-col">
            <div
              className={`text-[22px] ${
                color ? "text-[#D9840D]" : "text-[#B52C17]"
              } font-bold`}
            >
              {dato.title}
            </div>
            <div className="block text-[#4a4a4a] font-[400] text-[18px] mt-[16px] 2xl:leading-[23px] leading-[22px]">
              <div className=" line-clamp-5 2xl:line-clamp-4">{dato.description}</div>
            </div>
            <div className="flex w-full h-fit">
              <Link href={`${/news/}${dato.id}`} className="w-full">
                <button
                  className={`mt-[16px] w-full text-center text-[#EFEBE7] ${
                    color
                      ? "bg-[#F19412] hover:bg-[#f19412e2]"
                      : "bg-[#EA6B58] hover:bg-[#B52C17]"
                  } font-[700] py-[4px] px-[16px] rounded-lg`}
                >
                  {dato.btn}
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
