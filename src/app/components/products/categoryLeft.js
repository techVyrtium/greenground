"use client";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import { useState } from "react";
import { useTranslations } from "next-intl";
export function CategoryLeft() {
  const [expandedCategories, setExpandedCategories] = useState({});
  const t = useTranslations("category");

  const categories = t.raw("categories");
  const toggleCategory = (categoryName) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  return (
    <aside className="border border-[#D9840D] rounded shadow-md">
      <div className="flex justify-between items-center bg-[#D9840D] p-2 rounded-br-lg rounded-bl-lg">
        <h2 className="text-white font-bold text-[24px] font-[700]">
          Categorías
        </h2>
        <button
          onClick={() => setExpandedCategories({})}
          className="lg:hidden text-white text-2xl"
        >
          −
        </button>
      </div>

      <ul className="transition-all duration-300">
        {categories.map((category) => (
          <li key={category.name} className="border-b last:border-b-0">
            <div
              className={`p-2 hover:bg-gray-200 cursor-pointer flex justify-between items-center text-[16px] xl:text-[24px]`}
              onClick={() =>
                category.subcategories.length > 0 &&
                toggleCategory(category.name)
              }
              role="button"
              aria-expanded={expandedCategories[category.name]}
            >
              <span className="text-[#4A4A4A]">{category.name}</span>
              {category.subcategories.length > 0 &&
                (expandedCategories[category.name] ? (
                  <LuChevronUp className="h-4 w-4 text-[#4A4A4A]" />
                ) : (
                  <LuChevronDown className="h-4 w-4 text-[#4A4A4A]" />
                ))}
            </div>

            {category.subcategories.length > 0 && (
              <ul
                className={`overflow-hidden transition-all duration-300 ${
                  expandedCategories[category.name] ? "max-h-96" : "max-h-0"
                }`}
              >
                {category.subcategories.map((subcat) => (
                  <li
                    key={subcat}
                    className="pl-6 p-2 hover:bg-gray-100 cursor-pointer text-sm text-[#4A4A4A] text-[16px] 2xl:text-[24px]"
                  >
                    {subcat}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}
