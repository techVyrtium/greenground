import { recipes } from '@/seed/recipes';
export const getRecipe = async ({ locale = 'es', slug }) => {
    let auxiliar = null;
    const recipesFilter = recipes[locale]?.filter(
        ({ slug: recipeSlug, auxiliarSlugs }) => {
            const isEqual = slug === recipeSlug;
            if (!isEqual && !auxiliar) {
                const key = Object.keys(auxiliarSlugs).filter((key) => auxiliarSlugs[key] === slug)[0];
                auxiliar = auxiliarSlugs[key];
                return !!auxiliar;
            }
            return isEqual;
        });
    if (recipesFilter.length === 0)
        return null;
    return { auxiliar, recipe: recipesFilter[0] };
}


