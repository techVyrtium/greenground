import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";
export function CategoryTop({ search, setSearch }) {
  const title = "Categorías de productos";
  const images = {
    congelados: [
      {
        start: "left",
        id: "aji",
        src: "/home/aji.svg",
        alt: "",
        width: 37.195,
        height: 172.538,
        className: "group-hover:left-4 left-4 lg:-left-12 md:h-[6.5rem] lg:h-auto",
      },
      {
        start: "bottom",
        id: "maiz",
        src: "/home/maiz.svg",
        alt: "",
        width: 128.906,
        height: 183.732,
        className:
          "left-4 group-hover:-bottom-[7.5rem] -bottom-[7.5rem] lg:-bottom-52 md:h-[9.5rem] lg:h-auto",
      },
      {
        start: "bottom",
        id: "pera",
        src: "/home/pera.svg",
        alt: "",
        width: 116.467,
        height: 171,
        className:
          "w-[4.8rem] group-hover:-bottom-8 -bottom-8 right-0 lg:-bottom-36 md:h-[5.5rem] lg:h-auto",
      },
      {
        start: "top",
        id: "bananom",
        src: "/home/bananom.svg",
        alt: "",
        width: 103.984,
        height: 91.71,
        className: "w-20 group-hover:top-2 top-2 right-4 lg:-top-24 md:h-[3rem]",
      },
    ],
    abarrotes: [
      {
        start: "top",
        id: "cafe",
        src: "/home/cafe.svg",
        alt: "",
        width: 105.892,
        height: 111,
        className: "group-hover:top-6 top-6 left-4 w-[4.8rem] lg:-top-28",
      },
      {
        start: "bottom",
        id: "botella",
        src: "/home/botella.svg",
        alt: "",
        width: 61.055,
        height: 123,
        className: "left-4 group-hover:-bottom-8 -bottom-8 lg:-bottom-40",
      },
      {
        start: "top",
        id: "galleta",
        src: "/home/galleta.svg",
        alt: "",
        width: 77.603,
        height: 77,
        className: "w-16 group-hover:top-8 top-8 right-16 lg:-top-24",
      },
    ],
    menaje: [
      {
        start: "left",
        id: "paleta",
        src: "/home/paleta.svg",
        alt: "",
        width: 106.897,
        height: 161.924,
        className: "bottom-2 group-hover:left-2 left-2 w-24 lg:-left-32",
      },
      {
        start: "top",
        id: "piña",
        src: "/home/piña.svg",
        alt: "",
        width: 191.983,
        height: 171.772,
        className: "group-hover:top-0 top-0 w-32 -right-8 lg:-top-32",
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
            mainImage="/home/rabano.svg"
            mainImageHeight={392}
            mainImageWidth={269.555}
            classNameImage="w-52 -bottom-24"
            className="border border-[#4A4A4A] lg:hover:bg-product-green lg:backdrop-blur-2xl hover:lg:backdrop-blur-none transition-[blur]"
            classNameTitle="md:bg-category-title-light"
            images={images.congelados}
            link="products/category/congelados"
          />
          <ProductCategory
            title={"Abarrotes"}
            color="red"
            mainImage="/home/dulce.svg"
            mainImageHeight={231}
            mainImageWidth={468.405}
            classNameImage="bottom-6 w-full"
            className="border border-[#4A4A4A] lg:hover:bg-product-red lg:backdrop-blur-2xl hover:lg:backdrop-blur-none transition-[blur]"
            classNameTitle="md:bg-category-title-bold"
            images={images.abarrotes}
            link="products/category/abarrotes"
          />
          <ProductCategory
            title={"Menaje"}
            color="orange"
            mainImage="/home/olla.svg"
            mainImageHeight={272}
            mainImageWidth={261}
            classNameImage="bottom-2 w-[12.5rem]"
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
        className={`text-[34px] md:text-[3.2vw] font-bold flex flex-col lg:bg-transparent leading-7 text-[#F19412] ${sup ? "pl-4 py-4" : "py-6"
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
        className={`absolute -z-10 lg:scale-0 duration-300 product-category-main-image ${classNameImage}`}
      />
    </Link>
  );
};
