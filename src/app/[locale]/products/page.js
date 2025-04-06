"use client";

import { useState } from "react";

import { CategoryTop } from "@/app/components/products/categoryTop";
import { CategoryLeft } from "@/app/components/products/categoryLeft";
import ProductGrid from "@/app/components/products/productCard";
import { useTranslations } from "next-intl"; // Importar useTranslations

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
          <CategoryTop />

          {/* Grid de productos responsive */}

          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
}
