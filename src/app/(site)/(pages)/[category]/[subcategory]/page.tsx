import shopData from "@/components/Shop/shopData";
import Image from "next/image";
import Link from "next/link";

export default async function SubCategoryPage({
  params,
}: {
  params: Promise<{ category: string; subcategory: string }>;
}) {
  const { category, subcategory } = await params;

  const filteredServices = shopData.filter(
    (item) =>
      item.category === category &&
      item.subCategory === subcategory
  );

  if (filteredServices.length === 0) {
    return (
      <div className="p-20 text-center text-red-600 text-xl">
        No Services Found
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto bg-gray pt-32 pb-32 pt-55 px-4">

      {/* Heading */}
      <h1 className="text-2xl font-bold mb-4 capitalize">
        {subcategory.replace(/-/g, " ")}
      </h1>

      {/* Service Count */}
      <div className="inline-block mb-6 px-5 py-2 border border-[#3683ab] text-[#3683ab] rounded-full text-sm font-medium">
        {filteredServices.length} Services Available
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-2xl shadow-md p-4 flex items-center justify-between"
          >

<div className="flex items-start gap-4 w-full">

  {/* Image */}
  <div className="w-[90px] h-[90px] rounded-xl overflow-hidden flex-shrink-0">
    <Image
      src={service.imgs.thumbnails[0]}
      alt={service.title}
      width={90}
      height={90}
      className="object-cover w-full h-full"
    />
  </div>

  {/* Content */}
  <div className="flex-1 min-w-0">

    <h2 className="text-lg font-semibold line-clamp-2">
      {service.title}
    </h2>

    <div className="text-sm text-gray-500 mt-1">
      ⭐ 4.7 ({service.reviews})
    </div>

    <div className="mt-2 inline-block px-4 py-1 border border-[#3683ab] text-[#3683ab] rounded-full text-xs">
      {service.variants.length} Options Available
    </div>

    <Link href={`/ac-services/${service.id}`}>
      <p className="mt-2 text-[#3683ab] text-sm font-medium">
        View Details
      </p>
    </Link>

  </div>
</div>
            {/* Arrow */}
            <Link
              href={`/ac-services/${service.id}`}
              className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-lg text-[#3683ab]"
            >
              →
            </Link>

          </div>
        ))}

      </div>

    </div>
  );
}