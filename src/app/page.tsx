"use client";

import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedCollections from "@/components/FeaturedCollections";
import CollectionSection from "@/components/CollectionSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CustomerReviews from "@/components/CustomerReviews";
import InstagramShowcase from "@/components/InstagramShowcase";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { CATEGORIES } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedCollections />
        {CATEGORIES.map((category, index) => (
          <CollectionSection
            key={category.id}
            category={category}
            index={index}
          />
        ))}
        <AboutSection />
        <WhyChooseUs />
        <CustomerReviews />
        <InstagramShowcase />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
