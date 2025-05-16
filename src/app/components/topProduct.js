'use client'
import { getAllProducts } from "@/services/getAllProducts";
import ProductCard from "./products/productCard";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import sheetWhite from '@/assets/home/sheetWhite.png';
import cursor from '@/assets/home/cursor.svg';
const TopProduct = () => {
  const { locale } = useParams();
  const t = useTranslations('topProducts');
  const [products, setProducts] = useState([]);
  const data = [
    {
      title: t('title'),
      title2: t('title2'),
      text: t('text'),
    },
  ];

  const tag = "Top";
  useEffect(() => {
    (async () => {
      setProducts(await getAllProducts(locale));
    })();
  }, [locale])

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
            <Image
              src={sheetWhite}
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
          {t('button')}
          <Image
            src={cursor}
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
