"use client";

import { useParams, useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  addItemToCart,
  removeItemFromCart,
  selectCartItems,
  selectTotalPrice,
} from "@/redux/features/cart-slice";
import shopData from "@/components/Shop/shopData";
import Image from "next/image";
import { useState } from "react";
import VariantModal from "@/components/VarientModal";
import { Star, ReceiptText } from "lucide-react";

export default function ServiceVariantPage() {
  const params = useParams();
  const id = params?.id as string;

  const router = useRouter();
  const dispatch = useAppDispatch();

  const service = shopData.find((s) => String(s.id) === String(id));

  const cartItems = useAppSelector(selectCartItems);
  const totalPrice = useAppSelector(selectTotalPrice);

  const [selectedVariant, setSelectedVariant] = useState<any>(null);

  if (!service) return <div className="p-10">Service Not Found</div>;

  // ✅ ADD WITH CORRECT CATEGORY + SUBCATEGORY
  const handleAdd = (variant: any) => {
    dispatch(
      addItemToCart({
        id: String(variant.id),
        title: variant.title,
        price: variant.price,
        oldPrice: variant.oldPrice,
        quantity: 1,

        // ✅ FIXED LOGIC
        category: service.category,
        subCategory: service.subCategory,

        imgs: {
          thumbnails: [variant.img || service.imgs.thumbnails[0]],
          previews: [variant.img || service.imgs.previews[0]],
        },
      })
    );
  };

  // REMOVE
  const handleRemove = (variantId: string | number) => {
    dispatch(removeItemFromCart(String(variantId)));
  };

  // CHECK QUANTITY
  const getItemQuantity = (variantId: string | number) => {
    return (
      cartItems.find((item) => String(item.id) === String(variantId))
        ?.quantity || 0
    );
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] pt-55 md:pt-40 pb-20">
      
      {/* TOP HERO CARD */}
      <div className="px-4 mt-6">
        <div className="bg-white rounded-[28px] shadow-sm overflow-hidden border border-[#eef2f5]">
          
          {/* IMAGE */}
          <div className="relative">
            <Image
              src={service.imgs.thumbnails[0]}
              alt={service.title}
              width={1200}
              height={500}
              className="w-full h-[240px] object-cover"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

            {/* TITLE */}
            <div className="absolute bottom-8 left-6 text-white text-[22px] font-bold leading-tight">
              {service.title}
            </div>
          </div>

          {/* BOTTOM INFO ROW */}
          <div className="px-6 py-6 flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3 text-[#1f2937] text-[18px] font-semibold">
              <span className="text-[20px]">🏠</span>
              {service.subCategory}
            </div>

            <div className="flex items-center gap-2 border border-[#d7e5ee] bg-[#f6fbfe] px-5 py-3 rounded-full text-[18px] text-[#1f2937]">
              <Star size={18} className="text-[#1383b8] fill-[#1383b8]" />
              <span className="font-semibold">3.5</span>
              <span className="text-gray-500">(6)</span>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="px-6 pb-6">
            <div className="h-[2px] bg-[#eef2f5] rounded-full" />
          </div>

        </div>
      </div>

      {/* BODY */}
      <div className="px-4 mt-6">

        <h2 className="text-xl font-bold mb-5">
          Available Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">

          {service.variants.map((variant) => {
            const quantity = getItemQuantity(variant.id);

            return (
              <div
                key={variant.id}
                onClick={() => setSelectedVariant(variant)}
                className="bg-white rounded-[22px] p-5 shadow-sm h-full flex flex-col justify-between"
              >

                {/* TOP */}
                <div className="flex justify-between items-start">

                  <h3 className="font-bold text-lg max-w-[70%]">
                    {variant.title}
                  </h3>

                  <div className="flex items-center gap-1 bg-[#fff4d6] px-2 py-1 rounded-full text-sm">
                    <Star size={14} className="text-yellow-500 fill-yellow-500" />
                    3.5 (6)
                  </div>

                </div>

                {/* PRICE */}
                <div className="mt-2 flex items-center gap-2">

                  {variant.oldPrice && (
                    <span className="line-through text-gray-400">
                      ₹{variant.oldPrice}.0
                    </span>
                  )}

                  <span className="text-[#1383b8] font-bold text-lg">
                    ₹{variant.price}.0
                  </span>

                </div>

                {/* DESC */}
                <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                  {variant.description}
                </p>

                {/* ACTIONS */}
                <div className="flex gap-3 mt-4">

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(`/rate-card/${service.rateCardKey}`);
                    }}
                    className="flex-1 border border-[#cfe1ea] text-[#247fa9] rounded-xl py-3 flex items-center justify-center gap-2 font-medium"
                  >
                    <ReceiptText size={16} />
                    View Rate Card
                  </button>

                  {/* SAME BUTTON TOGGLE */}
                  {quantity > 0 ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemove(variant.id);
                      }}
                      className="bg-[#f25555] text-white px-6 rounded-xl font-semibold"
                    >
                      Remove
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAdd(variant);
                      }}
                      className="bg-[#3683ab] text-white px-6 rounded-xl font-semibold"
                    >
                      Add
                    </button>
                  )}

                </div>

              </div>
            );
          })}

        </div>

      </div>

      {/* MODAL */}
      {selectedVariant && (
        <VariantModal
          variant={selectedVariant}
          service={service}
          onClose={() => setSelectedVariant(null)}
        />
      )}

      {/* STICKY CART */}
      {cartItems.length > 0 && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] md:w-[500px] bg-[#1383b8] text-white rounded-xl shadow-lg flex justify-between items-center px-6 py-4">

          <div>
            <p className="text-sm">
              {cartItems.length} item in cart
            </p>

            <p className="text-lg font-semibold">
              ₹{totalPrice}
            </p>
          </div>

          <button
            onClick={() => router.push("/cart")}
            className="bg-white text-[#1383b8] px-5 py-2 rounded-lg font-semibold"
          >
            View Cart
          </button>

        </div>
      )}
    </div>
  );
}