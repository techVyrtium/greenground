import { useState, useEffect } from "react";

import {
  LuChevronFirst,
  LuChevronLast,
  LuChevronLeft,
  LuChevronRight,
} from "react-icons/lu";
import ProductCard from "./productCard";

// Componente de Grid con Paginación
const ProductGrid = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(Math.max(1, Math.min(newPage, totalPages)));
  };

  const paginatedProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {paginatedProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      {/* Paginación con números individuales */}
      <div className="flex justify-center items-center mt-8 space-x-4">
        <button
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          className="text-[#F5B356] disabled:opacity-50 transition-colors"
        >
          <LuChevronFirst className="w-10 h-10" />
        </button>

        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="text-[#F5B356] disabled:opacity-50 transition-colors"
        >
          <LuChevronLeft className="w-10 h-10" />
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-3 py-1 rounded ${
              currentPage === page
                ? "bg-[#F5B356] text-white"
                : "bg-[#F5B356]/50 hover:bg-[#F5B356] text-white"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="text-[#F5B356] disabled:opacity-50 transition-colors"
        >
          <LuChevronRight className="w-10 h-10" />
        </button>

        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
          className="text-[#F5B356] disabled:opacity-50 transition-colors"
        >
          <LuChevronLast className="w-10 h-10" />
        </button>
      </div>
    </div>
  );
};
export default ProductGrid;
