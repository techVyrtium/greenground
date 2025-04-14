import { notFound } from "next/navigation";
import ProductDetail from "@/app/components/products/detail";
import { CategoryLeft } from "@/app/components/products/categoryLeft";
import { getAllProducts } from "@/services/getAllProducts";
import { getProduct } from "@/services/getProduct";
export const generateMetadata = async ({ params }) => {
  const { slug, locale } = await params;
  const product = await getProduct({ locale, slug });
  if (!product)
    notFound();
  const { title, images, description } = product;
  return {
    title,
    description,
    images: images.map((image) => ({
      url: `https://greenground.vercel.app${image}`,
      width: 800,
      height: 600,
    })),
    url: `https://greenground.vercel.app/${locale}/products/${slug}`,
    openGraph: {
      type: 'article',
      title: `${title}`,
      description,
      images: images.map((image) => ({
        url: `https://greenground.vercel.app${image}`,
        width: 800,
        height: 600,
      })),
      url: `https://greenground.vercel.app/${locale}/producs/${slug}`,
    },
    twitter: {
      card: `summary_large_image`,
      site: `https://greenground.vercel.app/${locale}/products/${slug}`,
      title: `${title}`,
      description,
      images: images.map((image) => ({
        url: `https://greenground.vercel.app${image}`,
        width: 800,
        height: 600,
      }))
    }
  }
}
export const dynamic = 'force-static';
export async function generateStaticParams() {
  const locales = ['es', 'en'];

  return locales.map(async (locale) => {
    const slugs = await getAllProducts(locale);
    return Object.keys(slugs).map((slug) => ({ locale, slug }));
  });
}
export default async function ProductPage({ params }) {
  const { slug, locale } = await params;
  const products = await getAllProducts(locale);
  const product = products[slug];
  if (!product)
    notFound();
  const { category } = product;

  const sameCategoryProducts = Object.entries(products).filter(
    ([key, p]) => p.category === category && key !== slug
  );

  const getRandomItems = (arr, count) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  let related = [];
  related = getRandomItems(sameCategoryProducts, 4).map(([key, data]) => ({
    ...data,
    slug: key,
  }));
  return (
    <>
      <div className="p-5 min-h-screen mt-16">
        <div className="grid lg:grid-cols-[1fr_4fr] gap-6 md:px-[48px]  lg:px-[70px] 2xl:px-[96px]">
          <div className="hidden lg:block">
            <CategoryLeft />
          </div>
          <div>
            <ProductDetail product={product} relatedProducts={related} />
          </div>
        </div>
      </div>
    </>
  );
}
