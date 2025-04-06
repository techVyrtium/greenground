"use client";

import { useState } from "react";

import { CategoryTop } from "@/app/components/products/categoryTop";
import { CategoryLeft } from "@/app/components/products/categoryLeft";
import ProductGrid from "@/app/components/products/productCard";
import { useTranslations } from "next-intl"; // Importar useTranslations
import { FiSearch } from "react-icons/fi";

export default function ProductosCongelados() {
  const t = useTranslations("products");

  const products = Object.entries(t.raw("products")).map(([slug, product]) => ({
    slug,
    ...product,
  }));
  const [search, setSearch] = useState("");
  return (
    <div className="p-5 min-h-screen">
      {/* Versión móvil: Categorías arriba */}
      <div className="lg:hidden mb-6">
        <CategoryLeft />
      </div>

      <div className="grid lg:grid-cols-[1fr_4fr] gap-6">
        {/* Sidebar Categorías (solo desktop) */}
        <div className="hidden lg:block">
          <CategoryLeft />
        </div>

        {/* Contenido principal */}
        <div>
          <div className="flex justify-between gap-4 mb-6 w-full flex-col">
            <div className="p-2 md:px-8 px-4">
              <h3 className="text-3xl font-bold my-4 text-[#B52C17]">
                Productos
              </h3>
            </div>
            <div className="relative w-full max-w-lg bg-white rounded-lg p-2 md:px-8 px-4">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800 text-xl" />
              <input
                type="text"
                placeholder="buscar producto"
                className="w-full border border-gray-800 rounded-lg py-2 pl-10 pr-4 focus:outline-none placeholder:text-gray-800"
              />
            </div>
          </div>
          {/* Grid de productos responsive */}

          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
}
