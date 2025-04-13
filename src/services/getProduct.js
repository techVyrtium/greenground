import { products } from "@/seed/products"
export const getProduct = async ({ locale, slug }) => {
    return products[locale][slug];
}