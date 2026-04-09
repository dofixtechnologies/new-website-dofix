import React from "react";
import HeroCarousel from "./HeroCarousel";
import HeroFeature from "./HeroFeature";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="overflow-hidden pb-10 lg:pb-12.5 xl:pb-15 pt-57.5 sm:pt-45 lg:pt-30 xl:pt-51.5 bg-[#E5EAF4]">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="flex flex-wrap gap-5">
          <div className="xl:max-w-[1500px] w-full -mt-5">
            <div className="relative z-1 rounded-[10px] bg-white overflow-hidden h-[450px]">
              {/* bg shapes */}
              <Image
                src="/images/hero/hero-bg.png"
                alt="hero bg shapes"
                className="absolute right-0 bottom-0 -z-1"
                width={534}
                height={520}
              />

              <HeroCarousel />
            </div>
          </div>

          {/* CONTENT + IMAGE SECTION */}
          <div className="max-w-6xl mx-auto px-4 w-full">
            {/* HEADING */}
            <h2 className="text-2xl sm:text-3xl font-bold pt-10 text-center text-[#2e5563] mb-10">
              Dofix - One-stop solution for all
              <br />
              your home services & maintenance in Delhi NCR
            </h2>

            {/* MAIN GRID */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* LEFT CONTENT */}
              <div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  At <span className="font-semibold text-black">DOFIX</span>, we believe in preventing problems before they start. Our reliable <span className="font-semibold text-black">home services</span> help keep your home safe, working well, and in great shape every day. We connect you with skilled professionals for fast, affordable, and easy doorstep service. Whether you need <span className="font-semibold text-black">AC repair services or installation</span>, <span className="font-semibold text-black">plumbing services</span>, <span className="font-semibold text-black">electrical repairs</span>, <span className="font-semibold text-black">washing machine fixes</span>, or <span className="font-semibold text-black">other appliance repairs</span>, our team handles every job with care and professionalism. We also offer specialized <span className="font-semibold text-black">fabrication services</span> for modern home upgrades.
                </p>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  We want to make home care easy and dependable. Our trained and certified experts are background-checked, so you can trust the service you get. With DOFIX, you don’t need to look for different vendors or worry about unreliable workers. Everything you need is on one platform. We proudly offer convenient <span className="font-semibold text-black">doorstep services across Delhi NCR</span>, including Delhi, Noida, and <span className="font-semibold text-black">Gurgaon</span>.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Your home deserves the best care. With DOFIX, you can count on quality, speed, and reliability every time.
                </p>
              </div>

              {/* RIGHT IMAGE */}
              <div className="w-full">
                <img
                  src="/images/hero/home-services-dofix-delhi.webp"
                  alt="DoFix Home Services"
                  className="w-full h-auto rounded-2xl shadow-lg object-cover"
                />
              </div>
            </div>
          </div>

          {/* 
          <div className="xl:max-w-[393px] w-full">
            <div className="flex flex-col sm:flex-row xl:flex-col gap-5">
              ...
            </div>
          </div> 
          */}
        </div>
      </div>

      {/* Hero features */}
      <HeroFeature />
    </section>
  );
};

export default Hero;