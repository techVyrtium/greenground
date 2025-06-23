import Image from "next/image";
import ProductCard from "./products/productCard";
import { getAllProducts } from "@/services/getAllProducts";
import sheetOrange from '@/assets/home/sheetOrange.png';
import Link from "next/link";
export default async function NewProduct({ locale = 'es' }) {
  const tag = "Nuevo";
  const products = await getAllProducts(locale);
  const productsMap = Object.entries(products).map(([slug, product]) => ({
    slug,
    ...product,
  }));
  const filteredProducts = productsMap
    .filter(
      (product) =>
        product.tag?.toLowerCase().replace(/\s+/g, "-") === tag.toLowerCase()
    )
    .slice(0, 4);
  // const formatTitle = (str) =>
  //   str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  const data = [
    {
      title: "Nuevos Productos",
      text: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      button: "Consulta nuestro catalogo",
    },
  ];
  return (
    <section className="p-[clamp(1rem,5vw,6rem)] w-full h-fit overflow-hidden">
      <div className="w-full mx-auto flex flex-col-reverse xl:flex-row">
        <div className="xl:w-3/5 w-full mt-12 md:mt-0  grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
        <div className="xl:w-2/5 w-full flex flex-col items-center justify-center mt-12">
          <div className="relative w-full flex justify-center">
            <div className="w-[400px] md:w-full xl:w-[400px] lg:w-full relative flex flex-col items-center">
              <h2 className="text-[clamp(60px,8.5vw,96px)] xl:text-[clamp(48px,5.6vw,96px)] leading-[1] font-bold text-[#E7681F] mb-12 font-itcGBold text-left">
                {data[0].title}
              </h2>
              <Image
                src={sheetOrange}
                alt="Descripción de la imagen"
                className="w-[155px] h-auto absolute -top-10 right-4"
              />
            </div>
          </div>

          <div className="flex justify-end w-full">
            <Link
              href={`/products`}
              className="bg-[#F19412] text-[20px] text-white px-6 mt-4 rounded-md"
            >
              {data[0].button}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
