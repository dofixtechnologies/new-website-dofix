"use client";

import data from "./categoryData";
import SingleItem from "./SingleItem";

interface CategoriesProps {
  onCategoryClick: (slug: string) => void;
}

const Categories = ({ onCategoryClick }: CategoriesProps) => {
  return (
    <section className="overflow-hidden pt-17.5">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 pb-15 border-b border-gray-3">

        {/* Header */}
        <div className="mb-10">
          <span className="flex items-center gap-2.5 font-medium text-dark mb-1.5">
            Categories
          </span>

          <h2 className="font-semibold text-xl xl:text-heading-5 text-dark">
            Dofix Services
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">

          {data.map((item) => (
            <div
              key={item.id}
              onClick={() => onCategoryClick(item.link)}
              className="cursor-pointer flex justify-center"
            >
              <SingleItem item={item} />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Categories;