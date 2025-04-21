import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import Slider from "react-slick";
export const Version = Object.freeze({
  MOBILE: 1,
  TABLET: 2,
  DESK: 3
});

export default function CardBlog({ data, color, type, version = Version.MOBILE }) {
  const { locale } = useParams();
  let $slider = useRef(null);
  const [slide, setSlide] = useState(0);
  const desktop = {
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
  const settings = {
    [Version.MOBILE]: mobile,
    [Version.TABLET]: tablet,
    [Version.DESK]: desktop
  }


  const handleNext = (cant) => {
    const next = slide === cant - 1 ? 0 : slide + 1;
    setSlide(next);
    $slider.slickGoTo(next);
  };

  const handlePrev = (cant) => {
    const previous = slide === 0 ? cant - 1 : slide - 1;
    setSlide(previous);
    $slider.slickGoTo(previous);
  };

  function Buttons({ slidesToShow, size }) {
    return (
      <div className="flex flex-row items-center justify-center gap-2">
        <img
          src={`${color ? "/home/arrowsOrangeL.png" : "/home/arrowsRSL.png"
            }`}
          alt="Descripción de la imagen"
          className="mt-4 mr-2 cursor-pointer"
          onClick={() => handlePrev(Math.ceil(size / slidesToShow))}
        />
        {new Array(Math.ceil(size / slidesToShow)).fill(0).map((_, i) => (
          <div key={`dot-${i}`}
            className={`mt-4 p-3 rounded-full cursor-pointer ${slide == i && color
              ? "bg-[#F19412]"
              : slide == i && !color
                ? "bg-[#B52C17]"
                : "bg-[#FEF8F1]"
              }`}
            onClick={() => {
              setSlide(i)
              $slider.slickGoTo(i)
            }}
          ></div>
        )
        )}
        <img
          src={`${color ? "/home/arrowsOrangeR.png" : "/home/arrowsRSR.png"
            }`}
          alt="Descripción de la imagen"
          className="mt-4 ml-2 cursor-pointer"
          onClick={() => handleNext(Math.ceil(size / slidesToShow))}
        />
      </div>
    );
  }
  return (
    <div className="w-full overflow-hidden">
      <Slider
        {...settings[version]}
        ref={slider => $slider = slider}
        afterChange={(currentSlide) => { setSlide(currentSlide) }}
      >
        {data.map((dato, i) => (
          <div
            key={i}
            className="flex flex-col h-full bg-transparent items-stretch px-2"
          >
            <div className="w-full h-auto object-cover bg-no-repeat bg-cover">
              <Image
                src={dato.image}
                className="w-full h-[300px] object-cover rounded-md"
                width={400}
                height={400}
                alt={dato.title}
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
      <Buttons size={data.length} slidesToShow={settings[version].slidesToShow} />
    </div >
  );
}