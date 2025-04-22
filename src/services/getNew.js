import { news } from '@/seed/news';
export const getNew = async ({ locale = 'es', slug }) => {
    let auxiliar = null;
    const newsFilter = news[locale]?.filter(({ slug: newSlug, auxiliarSlugs }) => {
        const isEqual = slug === newSlug;
        if (!isEqual && !auxiliar) {
            const key = Object.keys(auxiliarSlugs).filter((key) => {
                return auxiliarSlugs[key] === slug;
            })[0];
            auxiliar = auxiliarSlugs[key];
            return !!auxiliar;
        }
        return isEqual;
    });
    if (newsFilter.length === 0)
        return null;
    return { auxiliar, new: newsFilter[0] };
}