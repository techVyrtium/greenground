import { recipes } from '@/seed/recipes';
export const getRecipe = async ({ locale = 'es', slug }) => {
    const recipesFilter = recipes[locale]?.filter(({ slug: recipeSlug }) => slug === recipeSlug);
    if (recipesFilter.length === 0)
        return null;
    return recipesFilter[0];
}


