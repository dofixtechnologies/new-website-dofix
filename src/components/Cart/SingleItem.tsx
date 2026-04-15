"use client";
import React from "react";
import { useDispatch } from "react-redux";
import {
  removeItemFromCart,
  updateCartItemQuantity,
} from "@/redux/features/cart-slice";
import Image from "next/image";

const SingleItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncreaseQuantity = () => {
    dispatch(
      updateCartItemQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecreaseQuantity = () => {
    if (item.quantity > 1) {
      dispatch(
        updateCartItemQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    }
  };

  const handleRemoveFromCart = () => {
    dispatch(removeItemFromCart(item.id));
  };

  return (
    <div className="flex flex-col sm:flex-row gap-5">
      
      {/* Image */}
      {/* <div className="w-full sm:w-28 h-28 relative rounded-xl overflow-hidden bg-gray-100">
      <Image
  src={item.img && item.img !== "" ? item.img : "/images/default.png"}
  alt={item.title}
  fill
  className="object-cover"
/>
      </div> */}

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between">
        
        {/* Title + Remove */}
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-dark">
            {item.title}
          </h3>

          <button
            onClick={handleRemoveFromCart}
            className="text-red-500 hover:text-red-600 text-sm font-medium"
          >
            Remove
          </button>
        </div>

        {/* Price */}
        <p className="text-gray-1000 text-lg mt-1">
          ₹{item.price}
          {item.oldPrice && (
            <span className="line-through ml-2 text-gray-400 text-xs">
              ₹{item.oldPrice}
            </span>
          )}
        </p>

        {/* Bottom Row */}
        <div className="flex items-center justify-between mt-4">
          
          {/* Quantity */}
          <div className="flex items-center border border-[#3683ab] rounded-full px-1 py-1 gap-2">
            
            <button
              onClick={handleDecreaseQuantity}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#3683ab] text-white text-lg font-bold shadow-sm hover:shadow-md transition"
            >
              −
            </button>

            <span className="w-6 text-center font-semibold text-[#3683ab]">
              {item.quantity}
            </span>

            <button
              onClick={handleIncreaseQuantity}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#3683ab] text-white text-lg font-bold shadow-sm hover:shadow-md transition"
            >
              +
            </button>

          </div>

          {/* Subtotal */}
          <div className="text-lg font-semibold text-[#3683ab]">
            ₹{(item.price * item.quantity).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;