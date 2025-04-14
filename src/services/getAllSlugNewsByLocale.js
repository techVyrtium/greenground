import { news } from "@/seed/news"
export const getAllSlugNewsByLocale = async (locale) => {
    return news[locale];
}