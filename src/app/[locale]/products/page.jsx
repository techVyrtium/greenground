import { CategoryTop } from "@/app/components/products/categoryTop";
import { CategoryLeft } from "@/app/components/products/categoryLeft";
import ProductGrid from "@/app/components/products/productsGrid";
import { getAllProducts } from "@/services/getAllProducts";
export const metadata = {
  title: 'Products'
}
export const dynamic = 'force-static';
export const generateStaticParams = async () => {
  const locales = ['es', 'en'];
  return locales.map((locale) => ({
    locale
  }));
}
export default async function Products({ params }) {
  const { locale } = await params;
  const products = await getAllProducts(locale);
  const productMap = Object.entries(products).map(([slug, product]) => ({ slug, ...product }));
  return (
    <div className="p-5 min-h-screen mt-18">
      <div className="grid lg:grid-cols-[1fr_4fr] gap-6 md:px-[48px]  lg:px-[70px] 2xl:px-[96px]">
        <div className="hidden lg:block sticky top-23 h-fit">
          <CategoryLeft />
        </div>
        <div>
          <CategoryTop />
          <ProductGrid products={productMap} />
        </div>
      </div>
    </div>
  );
}
