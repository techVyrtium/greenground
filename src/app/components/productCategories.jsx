import Image from "next/image";
import Link from "next/link";

export const ProductCategories = () => {
  const title = "Conoce nuestras distintas categorías de productos:";
  const images = {
    congelados: [
      {
        start: "left",
        id: "aji",
        src: "/home/aji.svg",
        alt: "",
        width: 37.195,
        height: 172.538,
        className: "group-hover:left-4 left-4 lg:-left-12",
      },
      {
        start: "bottom",
        id: "maiz",
        src: "/home/maiz.svg",
        alt: "",
        width: 128.906,
        height: 183.732,
        className:
          "left-4 group-hover:-bottom-[7.5rem] -bottom-[7.5rem] lg:-bottom-52",
      },
      {
        start: "bottom",
        id: "pera",
        src: "/home/pera.svg",
        alt: "",
        width: 116.467,
        height: 171,
        className:
          "w-[4.8rem] group-hover:-bottom-8 -bottom-8 right-0 lg:-bottom-36",
      },
      {
        start: "top",
        id: "bananom",
        src: "/home/bananom.svg",
        alt: "",
        width: 103.984,
        height: 91.71,
        className: "w-20 group-hover:top-2 top-2 right-4 lg:-top-24",
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
    <section
      className={`bg-cover w-full text-white my-4 bg-[image:var(--image-product-categories)] lg:bg-[image:var(--image-product-categories-rotate)] font-itcGBold`}
    >
      <div className="bg-[#00000080] py-2 px-4 md:px-8 md:py-10">
        <h3 className="text-5xl font-bold my-4">{title}</h3>
        <div
          className={
            "flex flex-col gap-4 flex-wrap items-center lg:flex-row lg:justify-around"
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
            className="bg-product-green lg:bg-white-25 lg:hover:bg-product-green lg:backdrop-blur-2xl hover:lg:backdrop-blur-none transition-[blur]"
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
            className="bg-product-red lg:bg-white-25 lg:hover:bg-product-red lg:backdrop-blur-2xl hover:lg:backdrop-blur-none transition-[blur]"
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
            className="bg-product-orange lg:bg-white-25 lg:hover:bg-product-orange lg:backdrop-blur-2xl hover:lg:backdrop-blur-none transition-[blur]"
            classNameTitle="md:bg-category-title-bold"
            images={images.menaje}
            link="products/category/menaje"
          />
        </div>
      </div>
    </section>
  );
};
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
      className={
        `group w-[354px] md:w-[21.875rem] max-w-full h-56 text-center align-middle product-category-card rounded-lg cursor-pointer flex justify-center items-center relative overflow-hidden z-10 ${className}`
      }
      href={link}
    >

      <div className="lg:flex justify-end w-full absolute hidden">
        <div
          className={`relative group-hover:w-full w-0 h-[76px] bg-category-title-${bgTitleType} -z-[1] duration-[2s] text-end transition-[width]`}
        ></div>
      </div>
      <h3
        className={`text-[34px] lg:text-4xl font-bold flex flex-col lg:bg-transparent leading-7 ${sup ? "pl-14 py-4" : "py-6"
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
