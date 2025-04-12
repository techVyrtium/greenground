import { getRecipe } from "@/services/getRecipe"
export const generateMetadata = async ({ params }) => {
    const { slug } = await params;
    return {
        title: `Recipe: ${slug}`
    }
}
export default async function Recipe({ params }) {
    const { slug } = await params;
    const { title, image, ingredients, owner, preparationNotes, preparationPhases, recommendations } = await getRecipe(slug);
    return (
        // lg:mx-52
        <div className="w-11/12 m-auto lg:w-auto lg:mx-28 mt-20">
            <div className="flex flex-col md:flex-row font-itcGBook md:gap-8 text-[#4A4A4A]">
                <img
                    src={image}
                    className="md:w-1/2 w-full rounded-md h-[34rem] md:min-h-[34rem] md:gap-4 md:h-full object-cover object-center"
                />
                <div className="w-full flex flex-col justify-between">
                    <h2 className="text-[38px] text-[#008638] font-itcGBold leading-12 lg:leading-12 md:text-[3.5vw] lg:text-[38px] md:leading-8">
                        {title}
                    </h2>
                    <p className="mb-2 text-[22px] mt-4 text-[#008638]">
                        Receta hecha por {owner}
                    </p>
                    <div className=" bg-[#008E4A] w-full md:w-fit rounded-md px-4 h-[370px] overflow-y-auto" style={{ scrollbarWidth: 'thin' }}>
                        <h3 className="text-[24px] bg-[#008E4A] h-[50px] pt-1 ml-2 text-[#FEF8F1] font-bold font-itcGBold sticky top-0">
                            Ingredientes:
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
            <h3 className="mb-4 text-[28px] mt-4 text-[#008638] font-bold font-itcGBold leading-12">Preparación:</h3>
            <ol className="list-decimal marker:text-[#008638] marker:font-itcGBold marker:text-[25px] marker:font-bold text-[#4A4A4A] text-[24px] text-justify list-recipe">
                {
                    preparationPhases.map(({ title, phases }, i) => (
                        <div key={`preparationPhases-${i}`}>
                            <h3 className="my-4 text-[28px] mt-4 text-[#008638] font-bold font-itcGBold leading-12 [word-spacing:-1.5px]">{title}</h3>
                            {
                                phases.map((phase, j) => (
                                    <li key={`preparationPhase-${i}-phase-${j}`} className={`ml-8 mb-3 text-left text-[20px] leading-6`}>{phase}</li>
                                ))
                            }
                        </div>
                    ))
                }
            </ol>
            <h3 className="mb-4 text-[32px] mt-4 text-[#008638] font-bold">Notas de preparación</h3>
            {
                preparationNotes.map((note, i) => (
                    // #ECEBEB
                    <div key={`note-${i}`} className="flex flex-row gap-[16px] mt-[24px] justify-center items-center bg-[#CFCECE] rounded-md p-4">
                        <div className="w-[60px] 2xl:w-[80px] flex-shrink-0 flex-grow-0">
                            <img src="/news/Vector.svg" className="w-10 h-10" />
                        </div>
                        <div className="">
                            <p className="text-[#4A4A4A] text-[20px] leading-6 text-justify 2xl:text-[24px] [word-spacing:-1.5px]" dangerouslySetInnerHTML={{ __html: note }}></p>
                        </div>
                    </div>
                ))
            }
            <h2 className="my-4 text-[38px] text-[#008638] font-itcGBold leading-12 lg:leading-12 md:text-[3.5vw] lg:text-[38px] md:leading-8">
                Consulta más artículos o recetas
            </h2>
        </div>
    )
}