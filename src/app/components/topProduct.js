import { getAllProducts } from "@/services/getAllProducts";
import ProductCard from "./products/productCard";
import Link from "next/link";
import Image from "next/image";
const TopProduct = async ({ locale }) => {
  const data = [
    {
      title: "TOP",
      title2: "PRODUCTOS",
      text: "Participamos como una de las empresas donantes y voluntarias hacia la comunidad de la Esperanza en la Guajira Colombiana, donde a través de donativos se instauró un tanque de agua que va a mejorar la calidad de vida de 100 familias, con un sistema de agua con capacidad de 10.000 litros que provisiona las necesidades hídricas de esta población.",
      // text: "We participate as one of the donor and volunteer companies towards the Esperanza community in the Colombian Guajira, where through donations a water tank was established that will improve the quality of life of 100 families, with a water system with a capacity of 10,000 liters that provides the water needs of this population."
    },
  ];

  const tag = "Top";
  const products = await getAllProducts(locale);
  const productsMap = Object.entries(products).map(([slug, product]) => ({
    slug,
    ...product,
  }));
  const productsTop = productsMap
    .filter((product) => {
      // No trae el orden de escritura del json.
      return (
        product.tag?.toLowerCase().replace(/\s+/g, "-") === tag.toLowerCase()
      );
    })
    .slice(0, 6);

  const formatTitle = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  return (
    <>
      <section className="w-full h-fit mt-20 relative">
        <div className="relative flex h-[131px] w-[80vw] max-w-[500px] pb-4 pt-6 bg-[#008638] rounded-br-full bg-[image:url(/home/bg-green.png)] bg-center">
          <div className="h-full px-4 sm:px-6 lg:px-30">
            <img
              src="/home/sheetWhite.png"
              alt="Descripción de la imagen"
              className="w-[80px] h-[100px]"
            />
          </div>
          <div
            className={`absolute pt-2 px-4 sm:px-6 lg:px-30 font-itcGBold text-[32px] md:text-[40px]`}
          >
            <h2 className="ml-22 text-[min(10vw,36px)] top-[36px] text-left font-bold text-white leading-[0.8]">
              {data[0].title}
            </h2>
            <h2 className="text-[min(8vw,32.5px)] ml-14 mt-2 top-[45px] text-left font-bold text-white mb-12 leading-[0.8]">
              {data[0].title2}
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-6 gap-4 justify-items-center px-[clamp(1rem,5vw,8rem)] mt-[96px]">
          {productsTop.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
        <Link
          href={`/products`}
          className="block bg-[#FFB000] text-[clamp(18px,1.25vw,24px)] md:text-[16px] lg:text-[20px] cursor-pointer text-white px-6 py-4 rounded-md font-bold leading-4 max-w-[36rem] w-[86%] md:w-[31.5rem] text-center h-12 absolute md:-bottom-6 right-[clamp(1rem,5.3vw,8rem)]"
        >
          Consulta nuestro catalogo
          <Image
            src={"/home/cursor.svg"}
            width={60}
            height={60}
            className="absolute -right-1 -bottom-7 w-10 h-10"
            alt="cursor"
          />
        </Link>
      </section>
    </>
  );
};
export default TopProduct;
