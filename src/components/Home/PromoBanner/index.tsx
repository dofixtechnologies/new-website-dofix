"use client";

import React from "react";
import Image from "next/image";

type PromoBannerProps = {
  onBookNowClick: (slug: string) => void;
};

const PromoBanner = ({ onBookNowClick }: PromoBannerProps) => {
  return (
    <section className="overflow-hidden py-20">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        
        {/* BIG BANNER */}
        {/* <div className="relative overflow-hidden rounded-lg mb-7.5 w-full h-[220px] sm:h-[280px] md:h-[320px] lg:h-[360px] xl:h-[400px] bg-[#fff]">
          <Image
            src="/images/promo/draw.png"
            alt="Mega Lucky Draw Banner"
            fill
            priority
            className="object-cover object-center lg:object-contain"
          /> */}

          {/* CLICK HANDLER */}
          {/* <div
            onClick={() => onBookNowClick("ac-repair-installation")}
            className="absolute inset-0 z-10 cursor-pointer"
          />
        </div> */}

        <div className="grid gap-7.5 grid-cols-1 lg:grid-cols-2">
          
          {/* AC BANNER */}
          <div className="relative z-1 overflow-hidden rounded-lg bg-[#d4eefb] py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10">
            <Image
              src="/images/promo/promo3.png"
              alt="promo img"
              className="absolute top-1/2 -translate-y-1/2 left-3 sm:left-10 -z-1 -ml-20 mt-2"
              width={350}
              height={241}
            />

            <div className="text-right">
              <span className="block text-lg text-dark mb-1.5">
                AC Trouble in Delhi NCR?
              </span>

              <h2 className="font-bold text-xl lg:text-heading-5 text-[#3683ab] mb-2.5">
                Experts Near You
              </h2>

              <p className="text-custom-10 text-dark">
                Quick response, professional <br /> servicing, and smooth
                performance <br /> guaranteed.
              </p>

              <button
                onClick={() => onBookNowClick("ac-repair-installation")}
                className="inline-flex font-medium text-custom-sm text-white bg-[#3683ab] py-2.5 px-8.5 rounded-md ease-out duration-200 hover:bg-[#14455e] mt-9"
              >
                Book AC Service
              </button>
            </div>
          </div>

          {/* APPLIANCE BANNER */}
          <div className="relative z-1 overflow-hidden rounded-lg bg-[#14455e] py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10">
            <Image
              src="/images/promo/promo5.png"
              alt="promo img"
              className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-8.5 -z-1"
              width={250}
              height={200}
            />

            <div>
              <span className="block text-lg text-white mb-1.5">
                Appliance Not Working Properly?
              </span>

              <h2 className="font-bold text-xl lg:text-heading-5 text-[#d4eefb] mb-2.5">
                We’ve Got You
              </h2>

              <p className="max-w-[285px] text-custom-10 text-[#d5d5d5]">
                Fast doorstep service, skilled <br /> technicians, and reliable
                solutions you can trust.
              </p>

              <button
                onClick={() => onBookNowClick("washing-machine-service")}
                className="inline-flex font-medium text-custom-sm text-[#14455b] bg-[#d4eefb] py-2.5 px-8.5 rounded-md ease-out duration-200 mt-9 hover:bg-white"
              >
                Book Appliance Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;