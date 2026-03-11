"use client";

import React, { useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import SingleItem from "./SingleItem";
import shopData from "@/components/Shop/shopData";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const BestSeller = () => {
  const sliderRef = useRef<any>(null);

  const handlePrev = useCallback(() => {
    sliderRef.current?.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    sliderRef.current?.swiper.slideNext();
  }, []);

  useEffect(() => {
    sliderRef.current?.swiper.init();
  }, []);

  return (
    <section className="overflow-hidden pt-15">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">

        {/* Title */}
        <div className="mb-7 flex items-center justify-between">
          <div>
            <span className="flex items-center gap-2.5 font-medium text-dark mb-1.5">
              <Image
                src="/images/icons/icon-07.svg"
                alt="icon"
                width={17}
                height={17}
              />
              This Month
            </span>

            <h2 className="font-semibold text-xl xl:text-heading-5 text-dark">
              Best Bookings
            </h2>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 text-[#3683ab] hover:bg-[#3683ab] hover:text-white transition"
            >
              <FiChevronLeft size={20} />
            </button>

            <button
              onClick={handleNext}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 text-[#3683ab] hover:bg-[#3683ab] hover:text-white transition"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          ref={sliderRef}
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
        >
          {shopData.slice(1, 6).map((item, key) => (
            <SwiperSlide key={key}>
              <SingleItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default BestSeller;