"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // ✅ IMPORTANTE
import "slick-carousel/slick/slick-theme.css";

const ProductCard = ({ product }) => {
  const settings = {
    dots: true,
    infinite: product.images.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
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
    <div className="w-full rounded-xl p-3 relative pb-12">
      <Slider {...settings} className="rounded-lg">
        {product.images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={product.title}
              className="w-full h-48 3xl:h-56 object-cover rounded-lg bg-white/60 shadow-md"
            />
          </div>
        ))}
      </Slider>

      <div className="border border-[#008638] text-[#4A4A4A] text-[18px] 3xl:text-[24px] p-1 rounded-lg flex flex-col">
        <div className="min-h-[60px] flex items-center justify-center px-2 overflow-y-auto">
          <h3 className="text-center leading-snug text-[16px] 3xl:text-[24px]">
            {product.title}
          </h3>
        </div>

        <div className="border-t border-[#F19412] mt-auto w-full">
          <div className="flex justify-center items-center text-[10px] 3xl:text-[14px] py-2">
            {product.price || "0.00"} usd
          </div>
          <a
            href={`/products/${product.slug}`}
            className="block w-full bg-[#F5B356] text-white text-[14px] 3xl:text-[24px] rounded-md p-2 text-center"
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
