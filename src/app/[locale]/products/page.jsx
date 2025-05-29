import { CategoryTop } from "@/components/products/categoryTop";
import { CategoryLeft } from "@/components/products/categoryLeft";
import ProductGrid from "@/components/products/productsGrid";
import { getAllProducts } from "@/services/getAllProducts";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
export const metadata = {
  title: "Products",
};
export const dynamic = "force-static";
export const generateStaticParams = async () => {
  const locales = ["es", "en"];
  return locales.map((locale) => ({
    locale,
  }));
};
export default async function Products({ params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);
  const products = await getAllProducts(locale);
  const productMap = Object.entries(products).map(([slug, product]) => ({
    slug,
    ...product,
  }));
  return (
    <div className="p-5 min-h-screen mt-18">
      <div className="grid lg:grid-cols-[1fr_4fr] gap-6 md:px-[48px]  lg:px-[70px] 2xl:px-[96px]">
        <div className="hidden lg:block sticky top-23 h-fit">
          <CategoryLeft />
        </div>
        <div>
          <CategoryTop locale={locale} />
          <ProductGrid products={productMap} />
        </div>
      </div>
    </div>
  );
}
