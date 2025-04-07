import React from "react";
import Card from "./card";
import ProductCard from "./products/productCard";
import { useTranslations } from "next-intl";
export default function NewProduct() {
  const t = useTranslations("products");
  const tag = "Nuevo";

  const products = Object.entries(t.raw("products"))
    .map(([slug, product]) => ({
      slug,
      ...product,
    }))
    .slice(0, 4);
  const filteredProducts = products.filter(
    (product) =>
      product.tag?.toLowerCase().replace(/\s+/g, "-") === tag.toLowerCase()
  );
  const formatTitle = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  const data = [
    {
      title: "Nuevos Productos",
      text: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      button: "Consulta nuestro catalogo",
    },
  ];
  return (
    <section className=" px-[48px] lg:px-[70px] 3xl:px-[96px] w-full h-fit mt-20 overflow-hidden">
      <div className="w-full mx-auto flex flex-col-reverse xl:flex-row">
        <div className="xl:w-3/5 w-full mt-12 md:mt-0  grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
        <div className="xl:w-2/5  w-full flex flex-col items-center justify-center mt-12">
          <div className="relative w-full">
            <div className="w-fit">
              <h2
                className={`md:text-[73px] lg:text-[80px] text-6xl font-bold text-[#E7681F] mb-12 font-itcGBold`}
              >
                {data[0].title}
              </h2>
              <img
                src="/home/sheetOrange.png"
                alt="Descripción de la imagen"
                className="w-[150px] h:[120px] md:w-[155px] md:h-[135px] absolute left-32 md:left-142 lg:left-159 xl:left-55 -top-[50px] min-[600px]:left-112"
              />
            </div>
          </div>
          <div className="text-[16px] w-full text-black">{data[0].text}</div>
          <div className="flex justify-end w-full">
            <button className="bg-[#F19412] text-[20px] text-white px-6 mt-4 rounded-md">
              {data[0].button}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
