import { products } from "@/seed/products"
export const getAllProducts = async (locale) => {
    return products[locale];
}