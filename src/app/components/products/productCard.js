import { useState, useEffect } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  LuChevronFirst,
  LuChevronLast,
  LuChevronLeft,
  LuChevronRight,
} from "react-icons/lu";

// Componente Individual de Tarjeta de Producto
const ProductCard = ({ product }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
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
      <div className="border border-[#008638] text-[#4A4A4A] text-[18px] 3xl:text-[24px] p-1 rounded-lg  flex flex-col">
        {/* Contenedor de título con altura fija y scroll si es necesario */}
        <div className="min-h-[60px] flex items-center justify-center px-2 overflow-y-auto">
          <h3 className="text-center leading-snug text-[16px] 3xl:text-[24px]">
            {product.title}
          </h3>
        </div>

        <div className="border-t border-[#F19412] mt-auto">
          <div className="flex justify-center items-center text-[10px] 3xl:text-[14px] py-2">
            {product.price || "0.00"} usd
          </div>
          <button className="w-full bg-[#F5B356] text-white text-[16px] 3xl:text-[24px] rounded-md p-2">
            Ver Producto
          </button>
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

// Componente de Grid con Paginación
const ProductGrid = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(Math.max(1, Math.min(newPage, totalPages)));
  };

  const paginatedProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {paginatedProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      {/* Paginación con números individuales */}
      <div className="flex justify-center items-center mt-8 space-x-4">
        <button
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          className="text-[#F5B356] disabled:opacity-50 transition-colors"
        >
          <LuChevronFirst className="w-10 h-10" />
        </button>

        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="text-[#F5B356] disabled:opacity-50 transition-colors"
        >
          <LuChevronLeft className="w-10 h-10" />
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-3 py-1 rounded ${
              currentPage === page
                ? "bg-[#F5B356] text-white"
                : "bg-[#F5B356]/50 hover:bg-[#F5B356] text-white"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="text-[#F5B356] disabled:opacity-50 transition-colors"
        >
          <LuChevronRight className="w-10 h-10" />
        </button>

        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
          className="text-[#F5B356] disabled:opacity-50 transition-colors"
        >
          <LuChevronLast className="w-10 h-10" />
        </button>
      </div>
    </div>
  );
};
export default ProductGrid;
