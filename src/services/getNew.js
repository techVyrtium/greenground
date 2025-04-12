import { news } from '@/seed/news';
export const getNew = async ({ locale = 'es', slug }) => {
    const newsFilter = news[locale]?.filter(({ slug: newSlug }) => slug === newSlug);
    if (newsFilter.length === 0)
        return null;
    return newsFilter[0];
}