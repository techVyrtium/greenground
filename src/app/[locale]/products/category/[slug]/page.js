import { PageContent } from "@/app/components/products/PageContent";
export const generateMetadata = async ({ params }) => {
  const { slug } = await params;
  return {
    title: `Products: ${slug}`
  }
}
export default async function ProductosPorCategoria({ params }) {
  const { slug } = await params;
  // const t = useTranslations("products");
  

  return (
    <>
      <PageContent slug={slug} />
    </>
  )
}
