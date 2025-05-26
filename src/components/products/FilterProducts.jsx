'use client'
import { FiSearch } from "react-icons/fi";
import ProductGrid from "./productsGrid";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export const FilterProducts = ({ slug, locale, productsMap }) => {
    const queryParams = useSearchParams();
    const subcategory = queryParams.get('subcategory') ?? '';
    const [search, setSearch] = useState('');
    const handleChange = (e) => {
        const { value } = e.target;
        setSearch(value);
    }
    const filteredProducts = productsMap.filter(
        (product) =>
            product.category?.toLowerCase().replace(/\s+/g, "-") ===
            slug.toLowerCase()
    ).filter((product) => {
        return (subcategory.length != 0) ? (product.subcategory?.toLowerCase() === subcategory.toLowerCase()) : true;
    }).filter((product) => {
        return (search.length != 0) ? (product.title.trim().toLowerCase().includes(search.toLowerCase())) : true;
    })

    const formatTitle = (str) =>
        str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    return (
        <div>
            <div className="flex justify-between gap-4 mb-6 w-full flex-col">
                <div className="p-2 md:px-8 px-4">
                    <h3 className="text-3xl font-bold my-4 text-[#B52C17]">
                        {locale === 'es' ? "Productos" : 'Products'} {formatTitle(slug)}
                    </h3>
                </div>
                <div className="flex justify-between gap-4 mb-6 w-full flex-col md:px-8 px-4">
                    <div className="relative w-full max-w-lg bg-white rounded-lg ">
                        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800 text-xl" />
                        <input
                            type="text"
                            placeholder="buscar producto"
                            className="w-full border border-gray-800 rounded-lg py-2 pl-10 pr-4 focus:outline-none placeholder:text-gray-800"
                            onChange={handleChange}
                            name="product"
                        />
                    </div>
                </div>
            </div>
            <ProductGrid products={filteredProducts} />
        </div>
    );
}