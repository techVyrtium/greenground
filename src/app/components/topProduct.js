import ProductCard from "./products/productCard";
import { useTranslations } from "next-intl";
const TopProduct = () => {
  const data = [
    {
      title: "TOP",
      title2: "PRODUCTOS",
      text: "Participamos como una de las empresas donantes y voluntarias hacia la comunidad de la Esperanza en la Guajira Colombiana, donde a través de donativos se instauró un tanque de agua que va a mejorar la calidad de vida de 100 familias, con un sistema de agua con capacidad de 10.000 litros que provisiona las necesidades hídricas de esta población.",
    },
  ];

  const t = useTranslations("products");
  const tag = "Top";

  const products = Object.entries(t.raw("products"))
    .map(([slug, product]) => ({
      slug,
      ...product,
    }))
    .slice(0, 6);
  const filteredProducts = products.filter(
    (product) =>
      product.tag?.toLowerCase().replace(/\s+/g, "-") === tag.toLowerCase()
  );
  const formatTitle = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  return (
    <>
      <section className="w-full h-fit mt-20 ">
        <div className="relative flex h-[131px] w-4/5 md:w-2/3 lg:w-2/5 py-4 bg-[#008638] rounded-br-full">
          <div className="h-full px-4 sm:px-6 lg:px-30">
            <img
              src="/home/sheetWhite.png"
              alt="Descripción de la imagen"
              className="w-[80px] h-[100px]"
            />
          </div>
          <div
            className={`absolute px-4 sm:px-6 lg:px-30 font-itcGBold text-[32px] md:text-[40px]`}
          >
            <h2 className="ml-22 top-[36px] text-left font-bold text-white leading-[0.8]">
              {data[0].title}
            </h2>
            <h2 className="text-[32.5px] ml-14 mt-2 top-[45px] text-left font-bold text-white mb-12 leading-[0.8]">
              {data[0].title2}
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-[48px] lg:px-[70px] 3xl:px-[96px]">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};
export default TopProduct;
