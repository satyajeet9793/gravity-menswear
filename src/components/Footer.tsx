"use client";

import { MessageCircle, Heart } from "lucide-react";
import Image from "next/image";
import { InstagramIcon, WhatsAppIcon } from "./Icons";
import { BRAND, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="container-luxury">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-16 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 overflow-hidden rounded-sm flex items-center justify-center border border-white/20">
                <Image src="/logo.jpg" alt="Gravity Menswear Logo" width={40} height={40} className="object-cover w-full h-full" />
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-[0.08em] uppercase">
                  Gravity
                </h3>
                <p className="text-[9px] font-medium tracking-[0.2em] uppercase text-white/50">
                  Menswear
                </p>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              {BRAND.description} Bringing luxury fashion to Gandhinagar, Kolhapur with
              style, quality, and affordability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase mb-6 text-gold">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/50 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase mb-6 text-gold">
              Connect With Us
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/50 hover:text-white transition-colors duration-300 flex items-center gap-2"
              >
                <WhatsAppIcon size={14} />
                +91 {BRAND.phone}
              </a>
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/50 hover:text-white transition-colors duration-300 flex items-center gap-2"
              >
                <InstagramIcon size={14} />
                @{BRAND.instagram}
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-green-400 hover:text-green-400 transition-all duration-300"
              >
                <WhatsAppIcon size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Gravity Menswear. All rights reserved.
          </p>
          <p className="text-xs text-white/30 flex items-center gap-1">
            Made with <Heart size={12} className="text-gold fill-gold" /> in
            Gandhinagar, Kolhapur
          </p>
        </div>
      </div>
    </footer>
  );
}
