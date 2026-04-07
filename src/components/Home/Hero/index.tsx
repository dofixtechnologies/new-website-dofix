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
              your home services & maintenance
            </h2>

            {/* MAIN GRID */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* LEFT CONTENT */}
              <div>
                {/* TOP PARAGRAPH */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We don't wait for problems to happen at your home. Our mission
                  is to solve all your home problems by delivering dependable
                  services that keep your home safe, functional, and attractive.
                </p>

                {/* INNER GRID */}
                <div className="grid sm:grid-cols-2 gap-5 text-gray-700 leading-relaxed">
                  <p>
                    We believe every home deserves the best care — and that's
                    exactly what we do, every single day. Your home has needs
                    every single day — and DoFix is there to fulfil every need.
                  </p>

                  <p>
                    From fast repairs to complete home improvement, we connect
                    you with trusted experts at your doorstep. Our mission is to
                    make home care simple, reliable, and effortless.
                  </p>

                  <p>
                    DoFix has grown into a trusted facility service provider,
                    trusted by homeowners and businesses for quality, speed, and
                    reliability.
                  </p>

                  <p>
                    You wouldn't let just anyone into your home — and you
                    shouldn't have to. Every DoFix professional is trained,
                    certified, and background-verified.
                  </p>
                </div>

                {/* FINAL LINE */}
                <p className="text-gray-700 mt-6 leading-relaxed">
                  No more searching for separate vendors, no more unreliable
                  workers, no more wasted time — just one call, one platform,
                  one solution.
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