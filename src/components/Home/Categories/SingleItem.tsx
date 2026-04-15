import { Category } from "@/types/category";
import React from "react";
import Image from "next/image";

const SingleItem = ({ item }: { item: Category }) => {
  return (
    <div className="group flex flex-col items-center cursor-pointer text-center">

      {/* Circle (Responsive Size) */}
      <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-[#F2F3F8] flex items-center justify-center mb-3 sm:mb-4 overflow-hidden">
        <Image
          src={item.img}
          alt={item.title}
          width={60}
          height={60}
          className="object-contain sm:w-[84px] sm:h-[84px]"
        />
      </div>

      {/* Title */}
      <h3 className="text-xs sm:text-base font-medium text-dark leading-tight bg-gradient-to-r from-[#3683ab] to-[#3683ab] bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_1px] group-hover:text-[#3683ab]">
        {item.title}
      </h3>

    </div>
  );
};

export default SingleItem;