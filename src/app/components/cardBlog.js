import React from "react";
import Link from "next/link";

export default function CardBlog({ data, color }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 relative py-8 px-1 md:px-[4px] gap-4">
      {data.map((dato, i) => (
        <div
          key={i}
          className="flex flex-col h-full bg-transparent items-stretch"
        >
          <div className="w-full h-auto object-cover bg-no-repeat bg-cover">
            <img src={dato.img} />
          </div>
          <div className="p-[8px] 2xl:p-[16px] flex flex-col flex-grow">
            <div
              className={`text-[28px] leading-8 h-16 ${
                color ? "text-[#D9840D]" : "text-[#B52C17]"
              } font-bold`}
            >
              {dato.title}
            </div>
            <div className="block text-[#4a4a4a] font-[400] text-[clamp(1.375rem,4vw,1.75rem)] mt-[16px] leading-[25px] flex-grow">
              <div className="line-clamp-4">{dato.description}</div>
            </div>
            <div className="flex w-full h-fit">
              <Link href={`${/news/}${dato.id}`} className="w-full">
                <button
                  className={`mt-[16px] w-full text-center text-[#EFEBE7] cursor-pointer ${
                    color
                      ? "bg-[#F19412] hover:bg-[#f19412e2]"
                      : "bg-[#EA6B58] hover:bg-[#B52C17]"
                  } font-[700] py-[4px] px-[16px] rounded-lg text-[clamp(1.375rem,4vw,1.75rem)] `}
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
