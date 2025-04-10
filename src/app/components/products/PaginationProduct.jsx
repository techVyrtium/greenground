'use client'
import { usePathname, useRouter } from 'next/navigation';
// import { useState } from 'react';
import {
    LuChevronFirst,
    LuChevronLast,
    LuChevronLeft,
    LuChevronRight,
} from "react-icons/lu";

export const PaginationProduct = ({ totalPages, currentPage, productsPerPage, limits }) => {
    const limit = productsPerPage;
    const pathname = usePathname();
    const { replace } = useRouter();
    const length = totalPages >= 4 ? 4 : totalPages;
    // useState(() => {
        //Posible ajuste, para que la ruta cambie tambien, cuando no es un page o limit valido.
    // }, [])
    const handlePageChange = (newPage, newLimit = limit) => {
        const params = new URLSearchParams();
        params.set('page', Math.max(1, Math.min(newPage, totalPages)));
        params.set('limit', newLimit);
        replace(`${pathname}?${params.toString()}`);
    };
    return (
        // 780px
        <div className="flex flex-row justify-between lg:justify-center relative max-[520px]:flex-col-reverse max-[520px]:items-center max-[520px]:gap-4">
            {/* Paginación con números individuales */}
            <div className="inline-flex justify-center items-center space-x-4 max-[780px]:space-x-0.5">
                {/* max-w-[610px]:flex-col max-w-[610px]: */}
                <button
                    onClick={() => handlePageChange(1)}
                    disabled={currentPage === 1}
                    className="text-[#F5B356] disabled:opacity-50 disabled:cursor-auto transition-colors cursor-pointer"
                >

                    <LuChevronFirst className="w-10 h-10 lg:w-12 lg:h-12 max-[610px]:h-[8vw] max-[610px]:w-[8vw]" />
                </button>

                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="text-[#F5B356] disabled:opacity-50 disabled:cursor-auto transition-colors cursor-pointer"
                >
                    <LuChevronLeft className="w-10 h-10 lg:w-12 lg:h-12 max-[610px]:h-[8vw] max-[610px]:w-[8vw]" />
                </button>
                <div className="flex gap-4">
                    {Array.from({ length }, (_, i) => i + (currentPage > length ? currentPage - length + 1 : 1)).map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`px-3 py-1 rounded cursor-pointer max-[780px]:px-2 ${currentPage === page
                                ? "bg-[#F5B356] text-white"
                                : "bg-[#F5B356]/50 hover:bg-[#F5B356] text-white"
                                }`}
                        >
                            {page}
                        </button>
                    ))}
                </div>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="text-[#F5B356] disabled:opacity-50 disabled:cursor-auto transition-colors cursor-pointer"
                >
                    <LuChevronRight className="w-10 h-10 lg:w-12 lg:h-12 max-[610px]:h-[8vw] max-[610px]:w-[8vw]" />
                </button>

                <button
                    onClick={() => handlePageChange(totalPages)}
                    disabled={currentPage === totalPages}
                    className="text-[#F5B356] disabled:opacity-50 disabled:cursor-auto transition-colors cursor-pointer"
                >
                    <LuChevronLast className="w-10 h-10 lg:w-12 lg:h-12 max-[610px]:h-[8vw] max-[610px]:w-[8vw]" />
                </button>
            </div>
            <div className='inline-flex flex-row items-center gap-2 lg:absolute lg:right-0'>
                <span className='w-24 md:w-auto leading-4 md:text-xl'>Productos por pagina</span>
                <select className="border rounded w-20 h-7 max-[780px]:w-fit" defaultValue={limit} onChange={({ target }) => handlePageChange(currentPage, target.value)}>
                    {
                        limits.map(({ id, value }) => (
                            <option key={id} value={value}>{value}</option>
                        )
                        )
                    }
                </select>
            </div>
        </div>
    )
}