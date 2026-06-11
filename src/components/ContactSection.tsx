"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, MapPin } from "lucide-react";
import { InstagramIcon } from "./Icons";
import { BRAND } from "@/lib/constants";

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 md:mb-12"
        >
          <p className="label-caps mb-4">Get In Touch</p>
          <h2 className="heading-lg gold-underline">Contact Us</h2>
          <p className="text-luxury mt-8 max-w-lg mx-auto">
            Have questions about our products? Want personalized styling advice?
            Reach out to us — we&apos;re just a message away.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {/* WhatsApp */}
          <motion.a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="glass-card rounded-xl p-6 text-center hover:shadow-lg transition-all duration-400 group cursor-pointer"
          >
            <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-100 transition-colors duration-300">
              <MessageCircle
                size={24}
                className="text-green-600"
              />
            </div>
            <h3 className="text-sm font-medium tracking-wide mb-1">
              WhatsApp
            </h3>
            <p className="text-xs text-muted-foreground">{BRAND.phone}</p>
          </motion.a>

          {/* Instagram */}
          <motion.a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="glass-card rounded-xl p-6 text-center hover:shadow-lg transition-all duration-400 group cursor-pointer"
          >
            <div className="w-14 h-14 rounded-full bg-pink-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-100 transition-colors duration-300">
              <InstagramIcon
                size={24}
                className="text-pink-600"
              />
            </div>
            <h3 className="text-sm font-medium tracking-wide mb-1">
              Instagram
            </h3>
            <p className="text-xs text-muted-foreground">
              @{BRAND.instagram}
            </p>
          </motion.a>

          {/* Call */}
          <motion.a
            href={`tel:+91${BRAND.phone}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="glass-card rounded-xl p-6 text-center hover:shadow-lg transition-all duration-400 group cursor-pointer"
          >
            <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors duration-300">
              <Phone size={24} className="text-blue-600" />
            </div>
            <h3 className="text-sm font-medium tracking-wide mb-1">Call Us</h3>
            <p className="text-xs text-muted-foreground">+91 {BRAND.phone}</p>
          </motion.a>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card rounded-xl p-6 text-center group"
          >
            <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-4">
              <MapPin size={24} className="text-amber-600" />
            </div>
            <h3 className="text-sm font-medium tracking-wide mb-1">Visit Us</h3>
            <p className="text-xs text-muted-foreground">Gandhinagar, Kolhapur</p>
          </motion.div>
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground italic">
            &ldquo;{BRAND.tagline}&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
