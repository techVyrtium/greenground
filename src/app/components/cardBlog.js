import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function CardBlog({ data, color, type }) {
  const { locale } = useParams();
  return (
    <div className="w-full h-full flex flex-col items-center justify-center md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 relative py-8 px-1 md:px-[4px] gap-4">
      {data.map((dato, i) => (
        <div
          key={i}
          className="flex flex-col h-full bg-transparent items-stretch"
        >
          <div className="w-full h-auto object-cover bg-no-repeat bg-cover">
            <Image src={dato.image} className="rounded-md w-full h-[450px]" width={400} height={450} />
          </div>
          <div className="p-[8px] 2xl:p-[16px] flex flex-col flex-grow">
            <div
              className={`text-[28px] leading-8 h-16 ${color ? "text-[#D9840D]" : "text-[#B52C17]"
                } font-bold`}
            >
              {dato.title}
            </div>
            <div className="block text-[#4a4a4a] font-[400] text-[clamp(1.375rem,4vw,1.75rem)] mt-[16px] leading-[1.1] flex-grow">
              <div className="line-clamp-4">{dato.description ?? 'Descripcion temporal'}</div>
            </div>
            <div className="flex w-full h-fit">
              <Link href={`/${type}/${dato.slug}`} className="w-full">
                <button
                  className={`mt-[16px] w-full text-center text-[#EFEBE7] cursor-pointer ${color
                    ? "bg-[#F19412] hover:bg-[#f19412e2]"
                    : "bg-[#EA6B58] hover:bg-[#B52C17]"
                    } font-[700] py-[4px] px-[16px] rounded-lg text-[clamp(1.375rem,4vw,1.75rem)] `}
                >
                  {locale === 'es' ? 'Consulta' : 'Find'}
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
