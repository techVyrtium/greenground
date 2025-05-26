import { CategoryLeft } from "@/components/products/categoryLeft";
import { FilterProducts } from "@/components/products/FilterProducts";
import { getAllProducts } from "@/services/getAllProducts";

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
export const dynamic = 'force-static';
export async function generateStaticParams() {
  const locales = ['es', 'en'];

  return locales.map(async (locale) => {
    const slugs = await getAllProducts(locale);
    return Object.entries(slugs).map(([slug]) => ({ locale, slug }));
  });
}
export default async function ProductsByCategory({ params }) {
  const { slug = '', locale } = await params;
  const products = await getAllProducts(locale);
  const productsMap = Object.entries(products).map(([slug, product]) => ({
    slug,
    ...product,
  }));

  return (
    <div className="p-5 min-h-screen mt-16">
      <div className="lg:hidden mb-6">
        <CategoryLeft />
      </div>

      <div className="grid lg:grid-cols-[1fr_4fr] gap-6 md:mx-[48px] lg:mx-[70px] 2xl:mx-[96px]">
        <div className="hidden lg:block gap-6 h-min w-full sticky top-24">
          <CategoryLeft />
        </div>
        <FilterProducts slug={slug} locale={locale} productsMap={productsMap} />
      </div>
    </div>
  )
}
