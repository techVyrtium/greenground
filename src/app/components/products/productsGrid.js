'use client'
import ProductCard from "./productCard";
import { PaginationProduct } from "./PaginationProduct";
import { useSearchParams } from "next/navigation";

// Componente de Grid con Paginación
const limits = [
  { id: 'limit-5', value: 5 },
  { id: 'limit-10', value: 10 },
  { id: 'limit-15', value: 15 },
  { id: 'limit-20', value: 20 }
];
const ProductGrid = ({ products }) => {
  const data = useSearchParams();
  const clientLimit = (data.get('limit') ?? 10);
  const productsPerPage = (limits.map(({ value }) => value).indexOf(+clientLimit)) == -1 ? 10 : clientLimit;
  const totalPages = Math.ceil(products.length / productsPerPage);
  const clientPage = (data.get('page') ?? 1);
  const currentPage = totalPages < clientPage ? 1 : clientPage;
  
  const paginatedProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[repeat(auto-fill,194px)] gap-4">
        {paginatedProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <PaginationProduct totalPages={totalPages} currentPage={+currentPage} productsPerPage={+productsPerPage} limits={limits} />
    </div>
  );
};
export default ProductGrid;
