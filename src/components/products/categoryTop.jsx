import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";
import aji from "@/assets/home/aji.svg";
import maiz from "@/assets/home/maiz.svg";
import cafe from "@/assets/home/cafe.svg";
import bananom from "@/assets/home/bananom.svg";
import pera from "@/assets/home/pera.svg";
import botella from "@/assets/home/botella.svg";
import paleta from "@/assets/home/paleta.svg";
import galleta from "@/assets/home/galleta.svg";
import piña from "@/assets/home/piña.svg";
import rabano from "@/assets/home/rabano.svg";
import dulce from "@/assets/home/dulce.svg";
import olla from "@/assets/home/olla.svg";
export function CategoryTop({ search, setSearch }) {
  const title = "Categorías de productos";
  const images = {
    congelados: [
      {
        start: "left",
        id: "aji",
        src: aji,
        alt: "",
        width: 37.195,
        height: 172.538,
        className:
          "lg:group-hover:left-4 -left-2 lg:-left-10 h-[5.5rem] lg:h-auto",
      },
      {
        start: "bottom",
        id: "maiz",
        src: maiz,
        alt: "",
        width: 128.906,
        height: 183.732,
        className:
          "left-4 lg:group-hover:-bottom-[7.5rem] -bottom-[7.5rem] lg:-bottom-52 h-[9.5rem] lg:h-auto",
      },
      {
        start: "bottom",
        id: "pera",
        src: pera,
        alt: "",
        width: 116.467,
        height: 171,
        className:
          "w-[4.8rem] lg:group-hover:-bottom-8 -bottom-8 right-0 lg:-bottom-36 h-[5.5rem] lg:h-auto",
      },
      {
        start: "top",
        id: "bananom",
        src: bananom,
        alt: "",
        width: 103.984,
        height: 91.71,
        className:
          "w-20 lg:group-hover:top-2 top-2 right-4 lg:-top-24 h-[3rem]",
      },
    ],
    abarrotes: [
      {
        start: "top",
        id: "cafe",
        src: cafe,
        alt: "",
        width: 105.892,
        height: 111,
        className:
          "lg:group-hover:top-6 top-6 left-4 lg:w-[4.8rem] w-[3.2rem] lg:w-[4.8rem] lg:-top-28 top-4",
      },
      {
        start: "bottom",
        id: "botella",
        src: botella,
        alt: "",
        width: 61.055,
        height: 123,
        className:
          "left-4 lg:group-hover:-bottom-8 -bottom-8 lg:-bottom-40 lg:w-auto w-12",
      },
      {
        start: "top",
        id: "galleta",
        src: galleta,
        alt: "",
        width: 77.603,
        height: 77,
        className:
          "lg:group-hover:top-8 top-2 right-6 lg:right-16 lg:-top-24 lg:w-16 w-12",
      },
    ],
    menaje: [
      {
        start: "left",
        id: "paleta",
        src: paleta,
        alt: "",
        width: 106.897,
        height: 161.924,
        className:
          "bottom-2 lg:group-hover:left-2 left-2 lg:w-24 lg:-left-32 w-16",
      },
      {
        start: "top",
        id: "piña",
        src: piña,
        alt: "",
        width: 191.983,
        height: 171.772,
        className:
          "lg:group-hover:top-0 top-0 lg:w-32 -right-8 lg:-top-32 w-24",
      },
    ],
  };

  return (
    <div className="flex justify-between gap-4 mb-6 w-full flex-col">
      <div className="p-2 md:px-8 px-4">
        <h3 className="text-3xl font-bold my-4 text-[#B52C17]">{title}</h3>
        <div
          className={
            "flex flex-col gap-4 flex-wrap items-center sm:flex-row sm:justify-around"
          }
        >
          <ProductCategory
            sup="Productos"
            title={"Congelados"}
            color="green"
            mainImage={rabano}
            mainImageHeight={392}
            mainImageWidth={269.555}
            classNameImage="w-[11rem] md:w-52 -bottom-24"
            className="border border-[#4A4A4A] md:w-auto lg:hover:bg-product-green lg:backdrop-blur-2xl hover:lg:backdrop-blur-none transition-[blur]"
            classNameTitle="md:bg-category-title-light"
            images={images.congelados}
            link="products/category/congelados"
          />
          <ProductCategory
            title={"Abarrotes"}
            color="red"
            mainImage={dulce}
            mainImageHeight={231}
            mainImageWidth={468.405}
            classNameImage="bottom-6 w-[15rem] md:w-full md:scale-[120%] md:bottom-15 md:group-hover:scale-[120%]"
            className="border border-[#4A4A4A] lg:hover:bg-product-red lg:backdrop-blur-2xl hover:lg:backdrop-blur-none transition-[blur]"
            classNameTitle="md:bg-category-title-bold"
            images={images.abarrotes}
            link="products/category/abarrotes"
          />
          <ProductCategory
            title={"Menaje"}
            color="orange"
            mainImage={olla}
            mainImageHeight={272}
            mainImageWidth={261}
            classNameImage="bottom-2 w-[9rem] md:w-[12.5rem]"
            className="border border-[#4A4A4A] lg:hover:bg-product-orange lg:backdrop-blur-2xl hover:lg:backdrop-blur-none transition-[blur]"
            classNameTitle="md:bg-category-title-bold"
            images={images.menaje}
            link="products/category/menaje"
          />
        </div>
      </div>
      <div className="flex justify-between gap-4 mb-6 w-full flex-col md:px-8 px-4">
        <div className="relative w-full max-w-lg bg-white rounded-lg ">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800 text-xl" />
          <input
            type="text"
            placeholder="buscar producto"
            className="w-full border border-gray-800 rounded-lg py-2 pl-10 pr-4 focus:outline-none placeholder:text-gray-800"
          />
        </div>
      </div>
    </div>
  );
}
const ProductCategory = ({
  title,
  mainImage,
  mainImageWidth,
  mainImageHeight,
  images = [],
  className = "",
  bgTitleType = "bold",
  classNameImage = "",
  classNameTitle = "",
  sup,
  link,
}) => {
  return (
    <Link
      className={`group h-40 w-full md:h-56 md:w-56 text-center align-middle product-category-card rounded-lg cursor-pointer flex md:flex-1 justify-center items-center relative overflow-hidden z-10 ${className}`}
      href={link}
    >
      <div className="lg:flex justify-end w-full absolute hidden">
        <div
          className={`relative group-hover:w-full w-0 h-[76px] bg-category-title-${bgTitleType} -z-[1] duration-[2s] text-end transition-[width]`}
        ></div>
      </div>
      <h3
        className={`text-[34px] md:text-[min(50px,3.2vw)] font-bold flex flex-col lg:bg-transparent leading-7 text-[#F19412] ${
          sup ? "pl-4 py-4" : "py-6"
        } px-4 w-full ${classNameTitle}`}
      >
        <div className="text-2xl md:text-3xl self-start">{sup}</div>
        {title}
      </h3>
      {images.map(({ className, id, ...props }) => (
        <Image
          key={id}
          {...props}
          className={`absolute z-0 ${className} duration-150`}
        />
      ))}
      <Image
        src={mainImage}
        width={mainImageWidth}
        height={mainImageHeight}
        alt="main"
        className={`absolute -z-10 lg:scale-0 duration-300 group-hover:scale-100 ${classNameImage}`}
        loading="lazy"
      />
    </Link>
  );
};
