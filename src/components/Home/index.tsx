"use client";

import React, { useState } from "react";
import Hero from "./Hero";
import Categories from "./Categories";
import NewArrival from "./NewArrivals";
import PromoBanner from "./PromoBanner";
import BestSeller from "./BestSeller";
import Testimonials from "@/components/Home/Testimonials";
import FaqSection from "@/components/Home/FaqSection";
import DynamicModal from "@/components/Common/DynamicModal";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <main>
      <Hero />

      <Categories onCategoryClick={(slug) => setActiveCategory(slug)} />

      <NewArrival />
      <PromoBanner />
      {/* <BestSeller /> */}
      <Testimonials />

      {/* ✅ ADD THIS */}
      <FaqSection />

      {activeCategory && (
        <DynamicModal
          categorySlug={activeCategory}
          onClose={() => setActiveCategory(null)}
        />
      )}
    </main>
  );
};

export default Home;