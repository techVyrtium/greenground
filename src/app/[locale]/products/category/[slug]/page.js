import { CategoryLeft } from "@/app/components/products/categoryLeft";
import ProductGrid from "@/app/components/products/productsGrid";
import { getAllProducts } from "@/services/getAllProducts";
import { FiSearch } from "react-icons/fi";
export const generateMetadata = async ({ params }) => {
  const { slug } = await params;
  return {
    title: `Product-Category: ${slug}`
  }
  // return {
  //   title,
  //   description,
  //   image: `https://greenground.vercel.app${images[0]}`,
  //   url: `https://greenground.vercel.app/${locale}/products/${slug}`,
  //   openGraph: {
  //     type: 'article',
  //     title: `${title}`,
  //     description,
  //     image: `https://greenground.vercel.app${images[0]}`,
  //     url: `https://greenground.vercel.app/${locale}/producs/${slug}`,
  //   },
  //   twitter: {
  //     card: `summary_large_image`,
  //     site: `https://greenground.vercel.app/${locale}/products/${slug}`,
  //     title: `${title}`,
  //     description,
  //     image: `https://greenground.vercel.app${images[0]}`,
  //   }
  // }
}
export const dynamic = 'force-static'
export async function generateStaticParams() {
  const locales = ['es', 'en'];

  return locales.map(async (locale) => {
    const slugs = await getAllProducts(locale);
    return Object.entries(slugs).map(([slug]) => ({ locale, slug }));
  });
}
export default async function ProductosPorCategoria({ params }) {
  const { slug = '', locale } = await params;
  const products = await getAllProducts(locale);
  const productsMap = Object.entries(products).map(([slug, product]) => ({
    slug,
    ...product,
  }));

  const filteredProducts = productsMap.filter(
    (product) =>
      product.category?.toLowerCase().replace(/\s+/g, "-") ===
      slug.toLowerCase()
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
                {locale === 'es' ? "Productos" : 'Products'} {formatTitle(slug)}
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
  )
}
