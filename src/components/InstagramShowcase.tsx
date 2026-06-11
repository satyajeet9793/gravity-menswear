"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { InstagramIcon } from "./Icons";
import { BRAND, CATEGORIES } from "@/lib/constants";

export default function InstagramShowcase() {
  // Use product images for the instagram grid
  const gridImages = [
    CATEGORIES[0].products[0].image,
    CATEGORIES[1].products[1].image,
    CATEGORIES[2].products[0].image,
    CATEGORIES[0].products[2].image,
    CATEGORIES[3].products[0].image,
    CATEGORIES[1].products[3].image,
  ];

  return (
    <section className="section-padding bg-gray-50/50">
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 md:mb-12"
        >
          <p className="label-caps mb-4">Follow Us</p>
          <h2 className="heading-lg gold-underline">
            @{BRAND.instagram}
          </h2>
          <p className="text-luxury mt-8 max-w-lg mx-auto">
            Stay updated with our latest drops, styling tips, and exclusive
            offers on Instagram.
          </p>
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {gridImages.map((image, index) => (
            <motion.a
              key={index}
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
            >
              <Image
                src={image}
                alt={`Instagram post ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-400 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-400">
                  <InstagramIcon size={28} className="text-white" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Follow Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10"
        >
          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-outline rounded-full"
          >
            <InstagramIcon size={16} />
            Follow @{BRAND.instagram}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
