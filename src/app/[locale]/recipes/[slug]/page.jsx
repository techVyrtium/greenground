import RecetNews from "@/components/recetNews";
import { getAllSlugRecipesByLocale } from "@/services/getAllSlugRecipesByLocale";
import { getRecipe } from "@/services/getRecipe"
import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import vector from '@/assets/news/Vector.svg';
export const dynamic = 'force-static';
export const generateMetadata = async ({ params }) => {
    const { slug, locale } = await params;
    const currentRecipe = await getRecipe({ locale, slug });
    if (!currentRecipe)
        notFound();
    const { slug: currentSlug, image, title, preparationNotes, description: originalDescription, keywords } = currentRecipe.recipe;
    if (currentRecipe.auxiliar)
        redirect(`/${locale}/recipes/${currentSlug}`);
    const description = originalDescription ?? preparationNotes?.join(" ") ?? title;
    return {
        title,
        description,
        images: [
            {
                url: `https://greenground.vercel.app${image}`,
                width: 800,
                height: 600
            }
        ],
        url: `https://greenground.vercel.app/${locale}/news/${slug}`,
        keywords,
        openGraph: {
            type: 'article',
            title,
            description,
            images: [
                {
                    url: `https://greenground.vercel.app${image}`,
                    width: 800,
                    height: 600
                }
            ],
            url: `https://greenground.vercel.app/${locale}/news/${slug}`,
        },
        twitter: {
            card: `summary_large_image`,
            site: `https://greenground.vercel.app/${locale}/news/${slug}`,
            title,
            description,
            images: [
                {
                    url: `https://greenground.vercel.app${image}`,
                    width: 800,
                    height: 600
                }
            ],
        }
    }
}
export async function generateStaticParams() {
    const locales = ['es', 'en'];

    return locales.map(async (locale) => {
        const slugs = await getAllSlugRecipesByLocale(locale);
        return Object.entries(slugs).map((slug) => ({ locale, slug }));
    });
}
export default async function Recipe({ params }) {
    const { slug, locale } = await params;
    const currentRecipe = await getRecipe({ locale, slug });
    if (!currentRecipe)
        notFound();
    const { title, image, ingredients, owner, preparationNotes, preparationPhases, tips } = currentRecipe.recipe;
    return (
        <section className="w-11/12 m-auto lg:w-auto lg:mx-28 mt-24 relative">
            <div className="flex flex-col md:flex-row font-itcGBook md:gap-8 text-[#4A4A4A]">
                <Image
                    src={image}
                    className="md:w-1/2 w-full rounded-md h-[34rem] md:min-h-[34rem] md:gap-4 md:h-full object-cover object-center"
                    alt="recite-image"
                    width={828}
                    height={534}
                />
                <div className="w-full flex flex-col justify-between gap-4">
                    <div>
                        <h2 className="text-[38px] text-[#008638] font-itcGBold leading-12 lg:leading-12 md:text-[3.5vw] lg:text-[38px] md:leading-8">
                            {title}
                        </h2>
                        <p className="mb-2 text-[22px] mt-4 text-[#008638]">
                            {locale === 'es' ? "Receta hecha por" : "Recipe made by"} {owner}
                        </p>
                    </div>
                    <div className=" bg-[#008E4A] w-full md:w-fit rounded-md px-4 h-fit max-h-full min-h-[300px] overflow-y-auto" style={{ scrollbarWidth: 'thin' }}>
                        <h3 className="text-[24px] bg-[#008E4A] h-[50px] pt-1 ml-2 text-[#FEF8F1] font-bold font-itcGBold sticky top-0">
                            {locale === 'es' ? 'Ingredientes' : 'Ingredients'}:
                        </h3>
                        <ol className="list-disc mb-4 ml-8 text-[17px] text-[#FEF8F1] font-itcGBook">
                            {
                                ingredients.map((ingredient, i) => (
                                    <li key={`ingredient-${i}`} className="leading-[1.35rem] font-itcGLTBook" dangerouslySetInnerHTML={{ __html: ingredient }}></li>
                                ))
                            }
                        </ol>
                    </div>
                </div>
            </div>
            <h3 className="mb-4 text-[28px] mt-4 text-[#008638] font-bold font-itcGBold leading-12">{locale === 'es' ? "Preparación" : "Preparation"}:</h3>
            <ol className="list-decimal marker:text-[#008638] marker:font-itcGBold marker:text-[25px] marker:font-bold text-[#4A4A4A] text-[24px] text-justify list-recipe">
                {
                    preparationPhases.map(({ title, phases }, i) => (
                        <div key={`preparationPhases-${i}`}>
                            <h3 className="my-4 text-[28px] mt-4 text-[#008638] font-bold font-itcGBold leading-12 [word-spacing:-1.5px]">{title}</h3>
                            {
                                phases.map((phase, j) => (
                                    <li key={`preparationPhase-${i}-phase-${j}`} className={`ml-8 mb-3 text-left text-[20px] leading-6`} dangerouslySetInnerHTML={{ __html: phase }}></li>
                                ))
                            }
                        </div>
                    ))
                }
            </ol>
            {
                tips && (
                    <div><h3 className="mb-4 text-[28px] mt-4 text-[#008638] font-bold font-itcGBold leading-12">Tips:</h3>
                        <ol className="list-decimal marker:text-[#008638] marker:font-itcGBold marker:text-[25px] marker:font-bold text-[#4A4A4A] text-[24px] text-justify list-recipe">
                            {
                                tips.map((tip, i) => (
                                    <li key={`tips-${i}-`} className={`ml-8 mb-3 text-left text-[20px] leading-6`} dangerouslySetInnerHTML={{ __html: tip }}></li>
                                ))
                            }
                        </ol></div>)}
            <h3 className="mb-4 text-[32px] mt-4 text-[#008638] font-bold">{locale === 'es' ? "Notas de preparación" : "Preparation notes"}</h3>
            {
                preparationNotes.map((note, i) => (
                    // #ECEBEB
                    <div key={`note-${i}`} className="flex flex-row gap-[16px] mt-[24px] justify-start items-center bg-[#CFCECE] rounded-md p-4">
                        <div className="w-[60px] 2xl:w-[80px] flex-shrink-0 flex-grow-0">
                            <Image src={vector} className="w-10 h-10" />
                        </div>
                        <div>
                            <p className="text-[#4A4A4A] text-[20px] leading-6 text-justify 2xl:text-[24px] [word-spacing:-1.5px]" dangerouslySetInnerHTML={{ __html: note }}></p>
                        </div>
                    </div>
                ))
            }
            <h3 className="my-4 text-[38px] text-[#008638] font-itcGBold leading-12 lg:leading-12 md:text-[3.5vw] lg:text-[38px] md:leading-8">
                {locale === 'es' ? 'Consulta más artículos o recetas' : 'Check out more articles or recipes'}
            </h3>
            <RecetNews tipo="recetas" existPadding={false} />
        </section>
    )
}