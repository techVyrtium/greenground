"use client";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { FiSearch } from "react-icons/fi";
import { CategoryLeft } from "@/app/components/products/categoryLeft";
import ProductGrid from "@/app/components/products/productsGrid";

export default function ProductosPorCategoria() {
  const t = useTranslations("products");
  const params = useParams();
  const categorySlug = params?.slug?.toString() || "";

  const products = Object.entries(t.raw("products")).map(([slug, product]) => ({
    slug,
    ...product,
  }));

  const filteredProducts = products.filter(
    (product) =>
      product.category?.toLowerCase().replace(/\s+/g, "-") ===
      categorySlug.toLowerCase()
  );


  const formatTitle = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  return (
    <div className="p-5 min-h-screen">
      <div className="lg:hidden mb-6">
        <CategoryLeft />
      </div>

      <div className="grid lg:grid-cols-[1fr_4fr] gap-6 md:mx-[48px] lg:mx-[70px] 2xl:mx-[96px]">
        <div className="hidden lg:block gap-6 h-min w-full sticky top-6">
          <CategoryLeft />
        </div>

        <div>
          <div className="flex justify-between gap-4 mb-6 w-full flex-col">
            <div className="p-2 md:px-8 px-4">
              <h3 className="text-3xl font-bold my-4 text-[#B52C17]">
                Productos {formatTitle(categorySlug)}
              </h3>
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

          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
}
