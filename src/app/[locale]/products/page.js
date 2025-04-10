import { CategoryTop } from "@/app/components/products/categoryTop";
import { CategoryLeft } from "@/app/components/products/categoryLeft";
import ProductGrid from "@/app/components/products/productsGrid";
import { useTranslations } from "next-intl"; // Importar useTranslations

export default function ProductosCongelados() {
  const t = useTranslations("products");

  const products = Object.entries(t.raw("products")).map(([slug, product]) => ({
    slug,
    ...product,
  }));
  return (
    <div className="p-5 min-h-screen">
      <div className="grid lg:grid-cols-[1fr_4fr] gap-6 md:px-[48px]  lg:px-[70px] 2xl:px-[96px]">
        <div className="hidden lg:block">
          <CategoryLeft />
        </div>
        <div>
          <CategoryTop />
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
}
