"use client";

import { CollectionsBar } from "@/components/home/CollectionsBar";
import { Footer } from "@/components/home/Footer";
import { Hero } from "@/components/home/Hero";
import { ProductGrid } from "@/components/home/ProductGrid";
import { ShopGuide } from "@/components/home/ShopGuide";
import { StickyNav } from "@/components/home/StickyNav";
import { StorySections } from "@/components/home/StorySections";

export function HomeExperience() {
  return (
    <main id="top">
      <StickyNav />
      <Hero />
      <CollectionsBar />
      <ProductGrid />
      <StorySections />
      <ShopGuide />
      <Footer />
    </main>
  );
}
