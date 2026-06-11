"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BRAND } from "@/lib/constants";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-reveal",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-white">
      <div className="container-luxury">
        <div className="max-w-3xl mx-auto">
          {/* Text Content */}
          <div>
            <p className="about-reveal label-caps mb-4">Our Story</p>

            <h2 className="about-reveal heading-lg mb-6">
              Crafting{" "}
              <span className="italic" style={{ color: "var(--gold)" }}>
                Excellence
              </span>{" "}
              in Men&apos;s Fashion
            </h2>

            <p className="about-reveal text-luxury mb-6 text-base">
              {BRAND.description} At Gravity Menswear, we believe every man
              deserves to look and feel exceptional. Our carefully curated
              collections blend contemporary trends with timeless elegance.
            </p>

            <p className="about-reveal text-luxury mb-8 text-base">
              From premium T-shirts to statement jeans, every piece in our
              collection is selected to meet the highest standards of quality and
              style. We bring international fashion trends to Gandhinagar, Kolhapur,
              making luxury accessible to all.
            </p>

            {/* Stats */}
            <div className="about-reveal grid grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-light text-foreground">
                  500<span className="text-gold">+</span>
                </p>
                <p className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground mt-1">
                  Happy Customers
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-light text-foreground">
                  50<span className="text-gold">+</span>
                </p>
                <p className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground mt-1">
                  Styles
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-light text-foreground">
                  5<span className="text-gold">★</span>
                </p>
                <p className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground mt-1">
                  Rated
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
