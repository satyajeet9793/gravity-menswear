"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  TrendingUp,
  Award,
  BadgePercent,
  Zap,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { FEATURES } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  TrendingUp,
  Award,
  BadgePercent,
  Zap,
  Sparkles,
  ShieldCheck,
};

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".feature-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-gray-50/50">
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 md:mb-12"
        >
          <p className="label-caps mb-4">Why Gravity</p>
          <h2 className="heading-lg gold-underline">Why Choose Us</h2>
          <p className="text-luxury mt-8 max-w-lg mx-auto">
            We deliver more than just clothing — we deliver confidence, style,
            and an unmatched shopping experience.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <div
                key={feature.id}
                className="feature-card glass-card rounded-xl p-6 md:p-8 text-center hover:shadow-lg transition-all duration-500 group cursor-default"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-foreground/5 flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/10 transition-colors duration-400">
                  {Icon && (
                    <Icon
                      size={24}
                      className="text-foreground/60 group-hover:text-gold transition-colors duration-400"
                    />
                  )}
                </div>

                <h3 className="text-base font-medium tracking-wide mb-3">
                  {feature.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
