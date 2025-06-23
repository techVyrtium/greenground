"use client";
import Slider from "react-slick";
import Image from "next/image";
import { useState, useEffect } from "react";
import RelatedCard from "./relatedCard";

const ProductDetail = ({
  product = {
    title: "Producto de Ejemplo",
    description:
      "Una descripción breve del producto para mostrar sus características principales.",
    images: [
      "https://picsum.photos/id/1011/600/800",
      "https://picsum.photos/id/1012/600/800",
      "https://picsum.photos/id/1013/600/800",
    ],
  },
  relatedProducts = [],
}) => {
  const { title, description, images } = product;
  const [mainImage, setMainImage] = useState(images[0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    handleResize(); // inicializa

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    vertical: true, // Establece vertical a 'false' en móvil
    slidesToShow: 3, // Muestra 1 imagen en móvil y 3 en desktop
    infinite: false,
    arrows: true,
    swipeToSlide: true,
    focusOnSelect: true,
  };
  const mobile = {
    vertical: false, // Establece vertical a 'false' en móvil
    slidesToShow: 3, // Muestra 1 imagen en móvil y 3 en desktop
    infinite: false,
    arrows: true,
    swipeToSlide: true,
    focusOnSelect: true,
  };

  return (
    <div className="p-6">
      {/* Título en móvil */}
      <h1 className="text-3xl font-bold text-[#B52C17] mb-4 lg:hidden">
        {title}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1.3fr] gap-6 mb-12">
        <div className="flex flex-col sm:flex-row">
          {/* Imagen principal */}
          <div className="relative w-full flex flex-1 bg-white rounded-xl">
            <Image
              src={mainImage}
              alt={title}
              className="w-full object-contain rounded-xl border"
              fill
            // width={600}
            // height={800}
            />
          </div>

          {/* Slider */}
          <div className="w-full sm:w-[120px] sm:max-h-[600px] overflow-hidden">
            <div className="sm:hidden">
              <Slider {...mobile}>
                {images.map((img, i) => (
                  <div
                    key={i}
                    className="cursor-pointer p-2"
                    onClick={() => setMainImage(img)}
                  >
                    <div className="relative w-24 h-24">
                      <Image
                        src={img}
                        alt={`thumb-${i}`}
                        fill
                        className="object-cover rounded-md border"
                      // width={600}
                      // height={800}
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="hidden sm:block">
              <Slider {...settings}>
                {images.map((img, i) => (
                  <div
                    key={i}
                    className="cursor-pointer p-2"
                    onClick={() => setMainImage(img)}
                  >
                    <div className="relative w-24 h-24">
                      <Image
                        src={img}
                        alt={`thumb-${i}`}
                        fill
                        className="object-cover rounded-xl border"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        {/* Descripción */}
        <div>
          <h1 className="text-3xl font-bold text-[#B52C17] mb-4 hidden lg:block">
            {title}
          </h1>
          <p className="text-gray-800 text-lg">{description}</p>
        </div>
      </div>

      {/* Productos relacionados */}
      <RelatedCard products={relatedProducts} />
    </div>
  );
};

export default ProductDetail;
