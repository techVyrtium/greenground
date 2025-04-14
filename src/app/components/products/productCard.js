"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // ✅ IMPORTANTE
import "slick-carousel/slick/slick-theme.css";

const ProductCard = ({ product }) => {
  const hasMultipleImages = product.images.length > 1;
  const settings = {
    dots: true,
    infinite: hasMultipleImages,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: hasMultipleImages,
    autoplaySpeed: 6000,
    appendDots: (dots) => (
      <div className="absolute -bottom-8 w-full">
        <ul className="!m-0 !p-0 !static flex justify-center items-center">
          {dots}
        </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-2 h-2 bg-gray-300 rounded-full mx-1 transition-all cursor-pointer" />
    ),
  };

  return (
    <div className="max-w-[186px] rounded-xl p-2 relative pb-12">
      <Slider {...settings} className="rounded-lg">
        {product.images.map((img, index) => (
          <div key={index} className="m-auto">
            <img
              src={img}
              alt={product.title}
              className="w-full h-[200px]  rounded-lg bg-white/60 shadow-md"
            />
          </div>
        ))}
      </Slider>
      {!hasMultipleImages && (
        <div className="relative py-2 w-full pb-[12px]">
          <ul className="flex justify-center items-center">
            <li>
              <div className=" bg-[#b52c17] rounded-full mx-1 w-4 h-4 " />
            </li>
          </ul>
        </div>
      )}

      <div className="border border-[#008638] text-[#4A4A4A] text-[clamp(18px,1.25vw,24px)] font-bold p-1 rounded-lg flex flex-col h-52">
        <div className="min-h-[60px] h-full flex items-center justify-center px-2 overflow-y-auto overflow-x-hidden">
          <h3 className="text-center leading-[18px] md:leading-snug">{product.title}</h3>
        </div>

        <div className="border-t border-[#F19412] mt-auto w-full">
          <div className="flex justify-center items-center text-[clamp(12px,1.8vw,14px)] py-2 font-normal">
            {product.presentation || "500 gr / 1kg / 2kg / 3kg"}
          </div>
          <a
            href={`/products/${product.slug}`}
            className="block w-full bg-[#F5B356] text-white text-[clamp(18px,1.25vw,24px)]  rounded-md p-2 text-center"
          >
            Ver producto
          </a>
        </div>
      </div>

      <style jsx global>{`
        .slick-dots {
          position: relative !important;
          bottom: auto !important;
          padding-top: 1rem !important;
        }
        .slick-dots li {
          margin: 0 5px !important;
          transform: scale(1.5) !important;
        }
        .slick-dots li.slick-active div {
          background-color: #b52c17 !important;
          transform: scale(1.4) !important;
        }
        .slick-dots div {
          background-color: #cecece !important;
          transform: scale(1.4) !important;
        }
      `}</style>
    </div>
  );
};

export default ProductCard;
