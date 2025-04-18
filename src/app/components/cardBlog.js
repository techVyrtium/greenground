import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import Slider from "react-slick";

export default function CardBlog({ data, color, type }) {
  const { locale } = useParams();
  const settings = {
    vertical: false,
    slidesToShow: 3,
    infinite: false,
    arrows: true,
    swipeToSlide: true,
    focusOnSelect: true,
  };
  const tablet = {
    vertical: false,
    slidesToShow: 2,
    infinite: false,
    arrows: true,
    swipeToSlide: true,
    focusOnSelect: true,
  };
  const mobile = {
    vertical: false,
    slidesToShow: 1,
    infinite: false,
    arrows: true,
    swipeToSlide: true,
    focusOnSelect: true,
  };

  return (
    <div className="w-full sm:max-h-[600px] overflow-hidden">
      <div className="block md:hidden">
        <Slider {...mobile}>
          {data.map((dato, i) => (
            <div
              key={i}
              className="flex flex-col h-full bg-transparent items-stretch"
            >
              <div className="w-full h-auto object-cover bg-no-repeat bg-cover">
                <Image
                  src={dato.image}
                  className="w-full h-[300px] object-cover rounded-md"
                  width={400}
                  height={400}
                />
              </div>
              <div className="pt-[8px] 2xl:pt-[16px] flex flex-col flex-grow">
                <div
                  className={`text-[28px] leading-8 h-16 overflow-y-scroll [scrollbar-width:none] ${color ? "text-[#D9840D]" : "text-[#B52C17]"
                    } font-bold`}
                >
                  {dato.title}
                </div>
                <div className="block text-[#4a4a4a] font-[400] text-[clamp(1.375rem,4vw,1.75rem)] mt-[16px] leading-[1.1] flex-grow min-h-[123.188px]">
                  <div className="line-clamp-4">
                    {dato.description ?? dato.content[0].text}
                  </div>
                </div>
                <div className="flex w-full h-fit">
                  <Link href={`/${type}/${dato.slug}`} className="w-full">
                    <button
                      className={`mt-[16px] w-full text-center text-[#EFEBE7] cursor-pointer ${color
                        ? "bg-[#F19412] hover:bg-[#f19412e2]"
                        : "bg-[#EA6B58] hover:bg-[#B52C17]"
                        } font-[700] py-[4px] px-[16px] rounded-lg text-[clamp(1.375rem,4vw,1.75rem)] `}
                    >
                      {locale === "es" ? "Consulta" : "Find"}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider >
      </div >
      <div className="hidden md:block lg:hidden">
        <Slider {...tablet}>
          {data.map((dato, i) => (
            <div
              key={i}
              className="flex flex-col h-full bg-transparent items-stretch mx-2"
            >
              <div className="w-full h-auto object-cover bg-no-repeat bg-cover">
                <Image
                  src={dato.image}
                  className="w-full h-[300px] object-cover rounded-md"
                  width={400}
                  height={400}
                />
              </div>
              <div className="pt-[8px] 2xl:pt-[16px] flex flex-col flex-grow">
                <div
                  className={`text-[28px] leading-8 h-16 overflow-y-scroll [scrollbar-width:none] ${color ? "text-[#D9840D]" : "text-[#B52C17]"
                    } font-bold`}
                >
                  {dato.title}
                </div>
                <div className="block text-[#4a4a4a] font-[400] text-[clamp(1.375rem,4vw,1.75rem)] mt-[16px] leading-[1.1] flex-grow min-h-[123.188px]">
                  <div className="line-clamp-4">
                    {dato.description ?? dato.content[0].text}
                  </div>
                </div>
                <div className="flex w-full h-fit">
                  <Link href={`/${type}/${dato.slug}`} className="w-full">
                    <button
                      className={`mt-[16px] w-full text-center text-[#EFEBE7] cursor-pointer ${color
                        ? "bg-[#F19412] hover:bg-[#f19412e2]"
                        : "bg-[#EA6B58] hover:bg-[#B52C17]"
                        } font-[700] py-[4px] px-[16px] rounded-lg text-[clamp(1.375rem,4vw,1.75rem)] `}
                    >
                      {locale === "es" ? "Consulta" : "Find"}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider >
      </div >
      <div className="hidden lg:block">
        <Slider {...settings}>
          {data.map((dato, i) => (
            <div
              key={i}
              className="flex flex-col h-full bg-transparent items-stretch px-3"
            >
              <div className="w-full h-auto object-cover bg-no-repeat bg-cover">
                <Image
                  src={dato.image}
                  className="w-full h-[300px] object-cover rounded-md"
                  width={400}
                  height={400}
                />
              </div>
              <div className="pt-[8px] 2xl:pt-[16px] flex flex-col flex-grow">
                <div
                  className={`text-[28px] leading-8 h-16 overflow-y-scroll [scrollbar-width:none] ${color ? "text-[#D9840D]" : "text-[#B52C17]"
                    } font-bold`}
                >
                  {dato.title}
                </div>
                <div className="block text-[#4a4a4a] font-[400] text-[clamp(1.375rem,4vw,1.75rem)] mt-[16px] leading-[1.1] flex-grow min-h-[123.188px]">
                  <div className="line-clamp-4">
                    {dato.description ?? dato.content[0].text}
                  </div>
                </div>
                <div className="flex w-full h-fit">
                  <Link href={`/${type}/${dato.slug}`} className="w-full">
                    <button
                      className={`mt-[16px] w-full text-center text-[#EFEBE7] cursor-pointer ${color
                        ? "bg-[#F19412] hover:bg-[#f19412e2]"
                        : "bg-[#EA6B58] hover:bg-[#B52C17]"
                        } font-[700] py-[4px] px-[16px] rounded-lg text-[clamp(1.375rem,4vw,1.75rem)] `}
                    >
                      {locale === "es" ? "Consulta" : "Find"}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider >
      </div >
    </div >
  );
}

// {data.map((dato, i) => (
//   <div
//     key={i}
//     className="flex flex-col h-full bg-transparent items-stretch"
//   >
//     <div className="w-full h-auto object-cover bg-no-repeat bg-cover">
//       <Image
//         src={dato.image}
//         className="w-full h-[300px] object-cover rounded-md"
//         width={400}
//         height={400}
//       />
//     </div>
//     <div className="p-[8px] 2xl:p-[16px] flex flex-col flex-grow">
//       <div
//         className={`text-[28px] leading-8 h-16 overflow-y-scroll [scrollbar-width:none] ${color ? "text-[#D9840D]" : "text-[#B52C17]"
//           } font-bold`}
//       >
//         {dato.title}
//       </div>
//       <div className="block text-[#4a4a4a] font-[400] text-[clamp(1.375rem,4vw,1.75rem)] mt-[16px] leading-[1.1] flex-grow">
//         <div className="line-clamp-4">
//           {dato.description ?? dato.content[0].text}
//         </div>
//       </div>
//       <div className="flex w-full h-fit">
//         <Link href={`/${type}/${dato.slug}`} className="w-full">
//           <button
//             className={`mt-[16px] w-full text-center text-[#EFEBE7] cursor-pointer ${color
//               ? "bg-[#F19412] hover:bg-[#f19412e2]"
//               : "bg-[#EA6B58] hover:bg-[#B52C17]"
//               } font-[700] py-[4px] px-[16px] rounded-lg text-[clamp(1.375rem,4vw,1.75rem)] `}
//           >
//             {locale === "es" ? "Consulta" : "Find"}
//           </button>
//         </Link>
//       </div>
//     </div>
//   </div>
// ))}



{/* <div className="w-full h-full flex flex-col items-center justify-center md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 relative py-8 px-1 md:px-[4px] gap-4">
      {data.map((dato, i) => (
        <div
          key={i}
          className="flex flex-col h-full bg-transparent items-stretch"
        >
          <div className="w-full h-auto object-cover bg-no-repeat bg-cover">
            <Image
              src={dato.image}
              className="w-full h-[300px] object-cover rounded-md"
              width={400}
              height={400}
            />
          </div>
          <div className="p-[8px] 2xl:p-[16px] flex flex-col flex-grow">
            <div
              className={`text-[28px] leading-8 h-16 overflow-y-scroll [scrollbar-width:none] ${color ? "text-[#D9840D]" : "text-[#B52C17]"
                } font-bold`}
            >
              {dato.title}
            </div>
            <div className="block text-[#4a4a4a] font-[400] text-[clamp(1.375rem,4vw,1.75rem)] mt-[16px] leading-[1.1] flex-grow">
              <div className="line-clamp-4">
                {dato.description ?? dato.content[0].text}
              </div>
            </div>
            <div className="flex w-full h-fit">
              <Link href={`/${type}/${dato.slug}`} className="w-full">
                <button
                  className={`mt-[16px] w-full text-center text-[#EFEBE7] cursor-pointer ${color
                    ? "bg-[#F19412] hover:bg-[#f19412e2]"
                    : "bg-[#EA6B58] hover:bg-[#B52C17]"
                    } font-[700] py-[4px] px-[16px] rounded-lg text-[clamp(1.375rem,4vw,1.75rem)] `}
                >
                  {locale === "es" ? "Consulta" : "Find"}
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div> */}