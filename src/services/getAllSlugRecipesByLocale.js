import { recipes } from "@/seed/recipes"
export const getAllSlugRecipesByLocale = async (locale) => {
    return recipes[locale]?.map(({ slug }) => slug);
}