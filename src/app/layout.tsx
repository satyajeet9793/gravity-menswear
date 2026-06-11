import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Gravity Menswear | Premium Fashion for Modern Men",
  description:
    "Gravity Menswear — Best menswear seller in Gandhinagar, Kolhapur. Shop premium T-Shirts, Shirts, Straight Fit, Baggy Jeans & Oversized T-Shirts. Flat 25% OFF on all collections. Premium quality, affordable luxury.",
  keywords: [
    "Gravity Menswear",
    "menswear Gandhinagar, Kolhapur",
    "premium fashion",
    "men's clothing",
    "t-shirts",
    "shirts",
    "straight fit",
    "baggy jeans",
    "oversized t-shirts",
    "affordable luxury",
  ],
  openGraph: {
    title: "Gravity Menswear | Premium Fashion for Modern Men",
    description:
      "Best menswear seller in Gandhinagar, Kolhapur. Shop premium collections with Flat 25% OFF.",
    type: "website",
    locale: "en_IN",
    siteName: "Gravity Menswear",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen bg-white text-foreground">
        {children}
      </body>
    </html>
  );
}
