import { useState, useEffect } from "react";

import {
  LuChevronFirst,
  LuChevronLast,
  LuChevronLeft,
  LuChevronRight,
} from "react-icons/lu";
import ProductCard from "./productCard";

// Componente de Grid con Paginación
const RelatedCard = ({ products }) => {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold text-[#B52C17] mb-4">
        Productos relacionados
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};
export default RelatedCard;
