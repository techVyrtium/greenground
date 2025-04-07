import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import ProductDetail from "@/app/components/products/detail";
import { CategoryLeft } from "@/app/components/products/categoryLeft";
export default async function ProductPage({ params }) {
  const resolvedParams = await params;
  const { slug, locale } = resolvedParams;

  const t = await getTranslations({ locale, namespace: "products" });
  let title, description, price, images, category, subcategory;
  let product;
  console.log("product", t.raw(`products.${slug}`));
  try {
    product = t.raw(`products.${slug}`);

    if (!product) {
      return notFound();
    }

    ({ title, description, price, images, category, subcategory } = product);
  } catch (e) {
    console.log("error", e);
    return notFound();
  }

  const allProducts = t.raw("products");

  const sameCategoryProducts = Object.entries(allProducts).filter(
    ([key, p]) => p.category === product.category && key !== slug
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
      <div className="p-5 min-h-screen">
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
