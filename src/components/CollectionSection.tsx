"use client";

import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { Category } from "@/lib/constants";

interface CollectionSectionProps {
  category: Category;
  index: number;
}

export default function CollectionSection({
  category,
  index,
}: CollectionSectionProps) {
  const isEven = index % 2 === 0;

  return (
    <section
      id={category.id}
      className={`section-padding ${isEven ? "bg-white" : "bg-gray-50/50"}`}
    >
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6 md:mb-10"
        >
          <p className="label-caps mb-3">Shop Collection</p>
          <h2 className="heading-lg gold-underline">{category.name}</h2>
        </motion.div>

        {/* Product Grid / Horizontal Scroll on Mobile */}
        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 md:grid md:grid-cols-3 lg:grid-cols-5 md:gap-6 pb-6 -mx-4 px-4 md:mx-0 md:px-0 hide-scroll">
          {category.products.map((product, i) => (
            <div key={product.id} className="min-w-[75vw] sm:min-w-[45vw] md:min-w-0 snap-center">
              <ProductCard product={product} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
