"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { REVIEWS } from "@/lib/constants";

export default function CustomerReviews() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll carousel
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId: number;
    let scrollPos = 0;
    const speed = 0.5;

    const scroll = () => {
      if (!isPaused && container) {
        scrollPos += speed;
        if (scrollPos >= container.scrollWidth / 2) {
          scrollPos = 0;
        }
        container.scrollLeft = scrollPos;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  // Double the reviews for infinite scroll effect
  const doubledReviews = [...REVIEWS, ...REVIEWS];

  return (
    <section id="reviews" className="section-padding bg-white overflow-hidden">
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 md:mb-12"
        >
          <p className="label-caps mb-4">Testimonials</p>
          <h2 className="heading-lg gold-underline">
            What Our Customers Say
          </h2>
        </motion.div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="flex gap-6 overflow-hidden px-6 cursor-grab"
        style={{ scrollBehavior: "auto" }}
      >
        {doubledReviews.map((review, index) => (
          <div
            key={`${review.id}-${index}`}
            className="flex-shrink-0 w-[340px] md:w-[400px]"
          >
            <div className="glass-card rounded-xl p-6 md:p-8 h-full hover:shadow-lg transition-all duration-500">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-gold fill-gold"
                  />
                ))}
                {Array.from({ length: 5 - review.rating }).map((_, i) => (
                  <Star
                    key={`empty-${i}`}
                    size={14}
                    className="text-gray-200"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-sm text-foreground/70 leading-relaxed mb-6 italic">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center">
                  <span className="text-white text-xs font-medium">
                    {review.avatar}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium">{review.name}</p>
                  <p className="text-[11px] text-muted-foreground">
                    {review.date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
