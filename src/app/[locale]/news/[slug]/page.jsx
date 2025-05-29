import { ListContent } from "@/components/ListContent";
import RecetNews from "@/components/recetNews";
import { routing } from "@/i18n/routing";
import { getAllSlugNewsByLocale } from "@/services/getAllSlugNewsByLocale";
import { getNew } from "@/services/getNew";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";

export const dynamic = "force-static";

export const generateMetadata = async ({ params }) => {
  const { slug, locale } = await params;
  const currentNew = await getNew({ locale, slug });
  if (!currentNew) notFound();
  const {
    slug: currentSlug,
    image,
    title,
    owner,
    content = [],
    sections = [],
  } = currentNew.new;
  if (currentNew.auxiliar) redirect(`/${locale}/news/${currentSlug}`);
  const description = content[0]?.text ?? sections[0]?.text ?? title;
  return {
    title: `New: ${title}`,
    description,
    images: [
      {
        url: `https://greenground.vercel.app${image}`,
        width: 800,
        height: 600,
      },
    ],
    url: `https://greenground.vercel.app/${locale}/news/${slug}`,
    openGraph: {
      type: "article",
      title: `${title} - ${owner}`,
      description,
      images: [
        {
          url: `https://greenground.vercel.app${image}`,
          width: 800,
          height: 600,
        },
      ],
      url: `https://greenground.vercel.app/${locale}/news/${slug}`,
    },
    twitter: {
      card: `summary_large_image`,
      site: `https://greenground.vercel.app/${locale}/news/${slug}`,
      title: `${title} - ${owner}`,
      description,
      images: [
        {
          url: `https://greenground.vercel.app${image}`,
          width: 800,
          height: 600,
        },
      ],
    },
  };
};

export async function generateStaticParams() {
  const locales = ["es", "en"];

  return locales.map(async (locale) => {
    const slugs = await getAllSlugNewsByLocale(locale);
    return Object.entries(slugs).map(([slug]) => ({ locale, slug }));
  });
}
export default async function News({ params }) {
  const { locale, slug } = await params;

  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);

  const currentNew = await getNew({ locale, slug });
  if (!currentNew) notFound();
  const { image, content = [], owner, sections = [], title } = currentNew.new;
  return (
    <div className="w-11/12 m-auto lg:w-auto lg:mx-28 mt-24">
      <h2 className="text-[38px] text-[#008638] font-itcGBold leading-12 lg:leading-12 md:text-[3.5vw] lg:text-[38px] md:leading-8 mb-4">
        {title}
      </h2>
      <p className="my-4 text-[22px] text-[#008638] leading-[1.6rem]">
        {locale === "es" ? "Articulo publicado en" : "Article published in"}{" "}
        {owner}
      </p>

      <Image
        src={image}
        className="w-full object-cover object-center"
        width={938}
        height={763}
        alt="image-new"
      />

      {content?.map(({ text, list }, i) => (
        <div key={`content-main-${i}`}>
          <p
            className="text-[#4A4A4A] text-[20px] leading-6 text-justify 2xl:text-[24px] [word-spacing:-1.5px] my-5"
            dangerouslySetInnerHTML={{ __html: text }}
          ></p>
          {list && <ListContent list={list} />}
        </div>
      ))}
      {sections.map(({ title, content }, i) => (
        <div key={`section-${title}-${i}`}>
          <h3 className="mb-4 text-[28px] mt-4 text-[#008638] font-bold font-itcGBold leading-12">
            {title}
          </h3>
          {content.map(({ text, list }, j) => (
            <div key={`section-${title}-${i}-content-${j}`}>
              <p
                className="text-[#4A4A4A] text-[20px] leading-6 text-justify 2xl:text-[24px] [word-spacing:-1.5px] my-5"
                dangerouslySetInnerHTML={{ __html: text }}
              ></p>
              {list && <ListContent list={list} />}
            </div>
          ))}
        </div>
      ))}
      <h2 className="my-4 text-[38px] text-[#008638] font-itcGBold leading-12 lg:leading-12 md:text-[3.5vw] lg:text-[38px] md:leading-8">
        {locale === "es"
          ? "Consulta más artículos o recetas"
          : "Check out more articles or recipes"}
      </h2>
      <RecetNews tipo="actualidad" existPadding={false} />
    </div>
  );
}
