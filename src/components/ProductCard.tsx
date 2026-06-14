"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { Product, WHATSAPP_ORDER_URL } from "@/lib/constants";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const isShirt =
    product.category.toLowerCase().includes("shirt") ||
    product.category.toLowerCase().includes("tshirt") ||
    product.category.toLowerCase().includes("t-shirt");

  const isPant =
    product.category.toLowerCase().includes("jeans") ||
    product.category.toLowerCase().includes("pant");

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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative"
    >
      {/* Card */}
      <div className="glass-card rounded-xl overflow-hidden transition-all duration-500 hover:shadow-lg">
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            style={imageStyle}
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />

          {/* Hover overlay with quick action */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500 flex items-end justify-center pb-6">
            <motion.a
              href={WHATSAPP_ORDER_URL(product.title)}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ scale: 1.05 }}
              className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-400 bg-white text-foreground px-6 py-2.5 rounded-full text-xs font-medium tracking-wider uppercase shadow-lg flex items-center gap-2 hover:bg-foreground hover:text-white"
            >
              <ShoppingBag size={14} />
              Quick Order
            </motion.a>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="text-sm font-medium tracking-wide text-foreground truncate">
            {product.title}
          </h3>

          {/* Order Button */}
          <a
            href={WHATSAPP_ORDER_URL(product.title)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block w-full text-center bg-foreground text-white py-2.5 text-xs font-medium tracking-[0.1em] uppercase hover:bg-navy transition-all duration-300 rounded-lg hover:shadow-md"
          >
            Order Now
          </a>
        </div>
      </div>
    </motion.div>
  );
}
