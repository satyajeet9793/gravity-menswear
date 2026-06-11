"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CATEGORIES } from "@/lib/constants";

export default function FeaturedCollections() {
  return (
    <section id="collections" className="section-padding bg-white">
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <p className="label-caps mb-4">Curated For You</p>
          <h2 className="heading-lg gold-underline">
            Featured Collections
          </h2>
          <p className="text-luxury mt-8 max-w-lg mx-auto">
            Explore our handpicked categories designed for the modern man who
            demands both style and substance.
          </p>
        </motion.div>

        {/* Category Grid / Horizontal Scroll on Mobile */}
        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 md:grid md:grid-cols-3 lg:grid-cols-5 md:gap-6 pb-6 -mx-4 px-4 md:mx-0 md:px-0 hide-scroll">
          {CATEGORIES.map((category, index) => {
            const isShirt =
              category.id.toLowerCase().includes("shirt") ||
              category.id.toLowerCase().includes("tshirt") ||
              category.id.toLowerCase().includes("t-shirt");

            const isPant =
              category.id.toLowerCase().includes("jeans") ||
              category.id.toLowerCase().includes("pant") ||
              category.id.toLowerCase().includes("straight");

            // Dynamic absolute zoom-cropping to show only the relevant clothing parts
            let imageStyle: React.CSSProperties = {
              objectFit: "cover",
            };

            if (isShirt) {
              imageStyle = {
                ...imageStyle,
                transform: "scale(1.5)",
                transformOrigin: "center 0%",
              };
            } else if (isPant) {
              imageStyle = {
                ...imageStyle,
                transform: "scale(1.05)",
                transformOrigin: "center",
              };
            }

            return (
              <motion.a
                key={category.id}
                href={`#${category.id}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl aspect-[3/4] cursor-pointer min-w-[70vw] sm:min-w-[40vw] md:min-w-0 snap-center shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image */}
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  style={imageStyle}
                  sizes="(max-width: 768px) 70vw, 20vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-500 group-hover:from-black/90" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-base md:text-lg font-bold tracking-[0.15em] uppercase drop-shadow-md">
                    {category.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-gold text-xs font-semibold tracking-wider uppercase">
                      View All
                    </span>
                    <svg
                      className="w-4 h-4 text-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Gold accent line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
