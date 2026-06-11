"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Menu, X } from "lucide-react";
import { InstagramIcon } from "./Icons";
import { BRAND, NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-black/5 shadow-sm"
            : "bg-transparent"
        }`}
      >
        {/* Top Promo Announcement Bar */}
        <div className="w-full bg-gradient-to-r from-gold via-yellow-400 to-gold text-black py-2.5 text-center text-xs font-bold tracking-[0.25em] uppercase select-none shadow-sm flex items-center justify-center gap-2 hover:bg-yellow-500 transition-colors duration-300 cursor-pointer">
          <span className="animate-pulse">✨</span>
          <span>Flat 25% OFF On All Collections</span>
          <span className="animate-pulse">✨</span>
        </div>

        <div className="container-luxury flex items-center justify-between h-[80px] md:h-[96px]">
          {/* Logo Area */}
          <a href="#home" className="flex items-center gap-4 group hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300">
            <div className="w-16 h-16 md:w-20 md:h-20 overflow-hidden rounded-md flex items-center justify-center border-2 border-transparent group-hover:border-gold transition-colors duration-300 shadow-sm group-hover:shadow-md">
              <Image src="/logo.jpg" alt="Gravity Menswear Logo" width={80} height={80} className="object-cover w-full h-full" />
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl md:text-3xl font-black tracking-[0.08em] uppercase leading-none transition-colors duration-300 ${
                scrolled ? "text-foreground" : "text-white"
              }`}>
                Gravity
              </span>
              <span className={`text-xs md:text-sm font-bold tracking-[0.2em] uppercase leading-tight transition-colors duration-300 mt-1 ${
                scrolled ? "text-muted-foreground" : "text-white/80"
              }`}>
                Menswear
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-[13px] font-medium tracking-[0.08em] uppercase transition-colors duration-300 relative group ${
                  scrolled
                    ? "text-foreground/70 hover:text-foreground"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gold group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Social Icons + Mobile Menu */}
          <div className="flex items-center gap-4">
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:flex w-9 h-9 items-center justify-center rounded-full transition-all duration-300 group ${
                scrolled ? "hover:bg-foreground/5" : "hover:bg-white/10"
              }`}
              aria-label="Instagram"
            >
              <InstagramIcon
                size={18}
                className={`transition-colors duration-300 ${
                  scrolled
                    ? "text-foreground/60 group-hover:text-foreground"
                    : "text-white/60 group-hover:text-white"
                }`}
              />
            </a>
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:flex w-9 h-9 items-center justify-center rounded-full transition-all duration-300 group ${
                scrolled ? "hover:bg-green-50" : "hover:bg-white/10"
              }`}
              aria-label="WhatsApp"
            >
              <MessageCircle
                size={18}
                className={`transition-colors duration-300 ${
                  scrolled
                    ? "text-foreground/60 group-hover:text-green-600"
                    : "text-white/60 group-hover:text-green-400"
                }`}
              />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden w-10 h-10 flex items-center justify-center transition-colors duration-300 z-50 ${
                mobileOpen ? "text-foreground" : (scrolled ? "text-foreground" : "text-white")
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full gap-8"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                  className="text-2xl font-light tracking-[0.1em] uppercase text-foreground hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex gap-6 mt-8"
              >
                <a
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-foreground/10 hover:border-gold hover:text-gold transition-all duration-300"
                >
                  <InstagramIcon size={20} />
                </a>
                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-foreground/10 hover:border-green-500 hover:text-green-600 transition-all duration-300"
                >
                  <MessageCircle size={20} />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
