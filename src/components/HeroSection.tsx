"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import gsap from "gsap";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-line",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.15,
          delay: 2.6,
        }
      );

      gsap.fromTo(
        ".hero-cta",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          delay: 3.2,
        }
      );
    }, textRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Blur and Luxury Overlay */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="/images/hero-bg-2.jpg"
          alt="Premium Luxury Menswear Background"
          fill
          priority
          className="object-cover object-center filter blur-[6px] scale-[1.04] transition-all duration-1000"
        />
        {/* Rich dark vignette overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-background" />
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-[0.08] z-0"
        style={{ background: "radial-gradient(circle, var(--gold), transparent)" }}
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 rounded-full opacity-[0.06] z-0"
        style={{ background: "radial-gradient(circle, var(--gold), transparent)" }}
        animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating glassmorphism cards */}
      <motion.div
        className="absolute top-[30%] right-[8%] hidden lg:block z-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="glass-dark rounded-2xl px-6 py-4 rotate-6 text-white border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
          <p className="text-xs font-semibold tracking-wider uppercase text-gold">
            New Arrivals
          </p>
          <p className="text-[10px] text-white/70 mt-1">Fresh Drops Weekly</p>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-[25%] left-[5%] hidden lg:block z-10"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="glass-dark rounded-2xl px-6 py-4 -rotate-3 text-white border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
          <p className="text-xs font-semibold tracking-wider uppercase text-gold">
            Flat 25% OFF
          </p>
          <p className="text-[10px] text-white/70 mt-1">On All Collections</p>
        </div>
      </motion.div>

      {/* Main content */}
      <div ref={textRef} className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="overflow-hidden mb-4">
          <p className="hero-line label-caps opacity-0 text-gold">
            Premium Fashion Destination
          </p>
        </div>

        <div className="overflow-hidden">
          <h1 className="hero-line heading-xl opacity-0 text-white font-extralight">
            Redefine Your
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1 className="hero-line heading-xl opacity-0 text-white font-extralight">
            <span className="italic font-light text-gold">
              Style
            </span>{" "}
            Statement
          </h1>
        </div>

        <div className="overflow-hidden mt-6">
          <p className="hero-line text-base md:text-lg max-w-xl mx-auto opacity-0 text-white/80 font-light tracking-wide leading-relaxed">
            Discover handpicked premium menswear that blends luxury with
            affordability. Gandhinagar, Kolhapur&apos;s finest fashion destination.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <a href="#collections" className="hero-cta opacity-0">
            <button className="btn-gold flex items-center justify-center gap-2 w-full sm:w-auto group">
              Explore Collection
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>
          </a>
          <a href="#tshirts" className="hero-cta opacity-0">
            <button className="btn-outline !text-white !border-white/40 hover:!border-white hover:!bg-white hover:!text-foreground transition-all duration-300 w-full sm:w-auto">
              Shop Now
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
