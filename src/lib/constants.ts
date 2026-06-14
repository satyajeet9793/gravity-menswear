// Brand Constants
export const BRAND = {
  name: "Gravity Menswear",
  tagline: "Best Menswear Seller in Gandhinagar, Kolhapur",
  description: "Premium fashion destination for modern men in Gandhinagar, Kolhapur.",
  phone: "7770005256",
  instagram: "gravity.com.o",
  instagramUrl: "https://instagram.com/gravity.com.o",
  whatsappUrl: "https://wa.me/917770005256",
  whatsappMessage:
    "Hi Gravity Menswear, I want this product. Please share price and available discounts.",
};

export const WHATSAPP_ORDER_URL = (productName?: string) => {
  const message = productName
    ? `Hi Gravity Menswear, I'm interested in "${productName}". Please share price and available discounts.`
    : BRAND.whatsappMessage;
  return `https://wa.me/917770005256?text=${encodeURIComponent(message)}`;
};

// Product Categories
export interface Product {
  id: string;
  title: string;
  image: string;
  originalPrice: number;
  discountedPrice: number;
  discount: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  products: Product[];
}

export const CATEGORIES: Category[] = [
  {
    id: "tshirts",
    name: "T-Shirts",
    slug: "tshirts",
    image: "/images/products/tshirts/tshirt-1.jpg",
    products: [
      {
        id: "ts-1",
        title: "Black Textured Polo Shirt",
        image: "/images/products/tshirts/tshirt-1.jpg",
        originalPrice: 1499,
        discountedPrice: 899,
        discount: "Flat 40% OFF",
        category: "T-Shirts",
      },
      {
        id: "ts-2",
        title: "Quarter-Zip Polo Shirt",
        image: "/images/products/tshirts/tshirt-2.jpg",
        originalPrice: 1299,
        discountedPrice: 779,
        discount: "Flat 40% OFF",
        category: "T-Shirts",
      },
      {
        id: "ts-3",
        title: "Vintage Wash Pocket Tee",
        image: "/images/products/tshirts/tshirt-3.jpg",
        originalPrice: 1599,
        discountedPrice: 959,
        discount: "Flat 40% OFF",
        category: "T-Shirts",
      },
      {
        id: "ts-4",
        title: "Olive Green Henley",
        image: "/images/products/tshirts/tshirt-4.jpg",
        originalPrice: 1399,
        discountedPrice: 839,
        discount: "Flat 40% OFF",
        category: "T-Shirts",
      },
      {
        id: "ts-5",
        title: "Light Grey Textured Polo",
        image: "/images/products/tshirts/tshirt-5.jpg",
        originalPrice: 1499,
        discountedPrice: 899,
        discount: "Flat 40% OFF",
        category: "T-Shirts",
      },
    ],
  },
  {
    id: "shirts",
    name: "Shirts",
    slug: "shirts",
    image: "/images/products/shirts/shirt-1.jpg",
    products: [
      {
        id: "sh-1",
        title: "Brown Suede Overshirt",
        image: "/images/products/shirts/shirt-1.jpg",
        originalPrice: 2499,
        discountedPrice: 1499,
        discount: "Flat 40% OFF",
        category: "Shirts",
      },
      {
        id: "sh-2",
        title: "White Striped Casual Shirt",
        image: "/images/products/shirts/shirt-2.jpg",
        originalPrice: 2699,
        discountedPrice: 1619,
        discount: "Flat 40% OFF",
        category: "Shirts",
      },
      {
        id: "sh-3",
        title: "Light Blue Striped Shirt",
        image: "/images/products/shirts/shirt-3.jpg",
        originalPrice: 2299,
        discountedPrice: 1379,
        discount: "Flat 40% OFF",
        category: "Shirts",
      },
      {
        id: "sh-4",
        title: "Black Graphic Print Shirt",
        image: "/images/products/shirts/shirt-4.jpg",
        originalPrice: 2399,
        discountedPrice: 1439,
        discount: "Flat 40% OFF",
        category: "Shirts",
      },
      {
        id: "sh-5",
        title: "Brown Checkered Flannel",
        image: "/images/products/shirts/shirt-5.jpg",
        originalPrice: 2599,
        discountedPrice: 1559,
        discount: "Flat 40% OFF",
        category: "Shirts",
      },
    ],
  },
  {
    id: "straight-fit",
    name: "Straight Fit",
    slug: "straight-fit",
    image: "/images/products/straight-fit/sf-1.png",
    products: [
      {
        id: "rj-1",
        title: "Light Wash Straight Denim",
        image: "/images/products/straight-fit/sf-1.png",
        originalPrice: 2999,
        discountedPrice: 1799,
        discount: "Flat 40% OFF",
        category: "Straight Fit",
      },
      {
        id: "rj-2",
        title: "Beige Straight Chinos",
        image: "/images/products/straight-fit/sf-2.png",
        originalPrice: 2799,
        discountedPrice: 1679,
        discount: "Flat 40% OFF",
        category: "Straight Fit",
      },
      {
        id: "rj-3",
        title: "Grey Straight Chinos",
        image: "/images/products/straight-fit/sf-3.png",
        originalPrice: 3199,
        discountedPrice: 1919,
        discount: "Flat 40% OFF",
        category: "Straight Fit",
      },
      {
        id: "rj-4",
        title: "Mid Wash Straight Denim",
        image: "/images/products/straight-fit/sf-4.png",
        originalPrice: 2899,
        discountedPrice: 1739,
        discount: "Flat 40% OFF",
        category: "Straight Fit",
      },
      {
        id: "rj-5",
        title: "Black Straight Denim",
        image: "/images/products/straight-fit/sf-5.jpg",
        originalPrice: 2999,
        discountedPrice: 1799,
        discount: "Flat 40% OFF",
        category: "Straight Fit",
      },
    ],
  },
  {
    id: "baggy-jeans",
    name: "Baggy Jeans",
    slug: "baggy-jeans",
    image: "/images/products/baggy-jeans/baggy-1.jpg",
    products: [
      {
        id: "bj-1",
        title: "Black Graphic Baggy Sweats",
        image: "/images/products/baggy-jeans/baggy-1.jpg",
        originalPrice: 3499,
        discountedPrice: 2099,
        discount: "Flat 40% OFF",
        category: "Baggy Jeans",
      },
      {
        id: "bj-2",
        title: "Flame Rhinestone Baggy Pants",
        image: "/images/products/baggy-jeans/baggy-2.jpg",
        originalPrice: 3299,
        discountedPrice: 1979,
        discount: "Flat 40% OFF",
        category: "Baggy Jeans",
      },
      {
        id: "bj-3",
        title: "Light Wash Baggy Denim",
        image: "/images/products/baggy-jeans/baggy-3.jpg",
        originalPrice: 3599,
        discountedPrice: 2159,
        discount: "Flat 40% OFF",
        category: "Baggy Jeans",
      },
      {
        id: "bj-4",
        title: "Plaid Star Split Baggy Pants",
        image: "/images/products/baggy-jeans/baggy-4.jpg",
        originalPrice: 3699,
        discountedPrice: 2219,
        discount: "Flat 40% OFF",
        category: "Baggy Jeans",
      },
      {
        id: "bj-5",
        title: "Grey Piped Baggy Sweats",
        image: "/images/products/baggy-jeans/baggy-5.jpg",
        originalPrice: 3399,
        discountedPrice: 2039,
        discount: "Flat 40% OFF",
        category: "Baggy Jeans",
      },
    ],
  },
  {
    id: "oversized-tshirts",
    name: "Oversized T-Shirts",
    slug: "oversized-tshirts",
    image: "/images/products/oversized-tshirts/oversized-1.jpg",
    products: [
      {
        id: "ot-1",
        title: "Studded Oversized Polo",
        image: "/images/products/oversized-tshirts/oversized-1.jpg",
        originalPrice: 1999,
        discountedPrice: 1199,
        discount: "Flat 40% OFF",
        category: "Oversized T-Shirts",
      },
      {
        id: "ot-2",
        title: "Black Graphic Oversized Tee",
        image: "/images/products/oversized-tshirts/oversized-2.jpg",
        originalPrice: 1799,
        discountedPrice: 1079,
        discount: "Flat 40% OFF",
        category: "Oversized T-Shirts",
      },
      {
        id: "ot-3",
        title: "Camo Zip-Up Oversized Polo",
        image: "/images/products/oversized-tshirts/oversized-3.jpg",
        originalPrice: 1899,
        discountedPrice: 1139,
        discount: "Flat 40% OFF",
        category: "Oversized T-Shirts",
      },
      {
        id: "ot-4",
        title: "Cream Graphic Oversized Tee",
        image: "/images/products/oversized-tshirts/oversized-4.jpg",
        originalPrice: 1899,
        discountedPrice: 1139,
        discount: "Flat 40% OFF",
        category: "Oversized T-Shirts",
      },
      {
        id: "ot-5",
        title: "Plaid Applique Oversized Tee",
        image: "/images/products/oversized-tshirts/oversized-5.jpg",
        originalPrice: 1999,
        discountedPrice: 1199,
        discount: "Flat 40% OFF",
        category: "Oversized T-Shirts",
      },
    ],
  },
];

// Customer Reviews
export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
}

export const REVIEWS: Review[] = [
  {
    id: "r1",
    name: "Pradip Patil",
    avatar: "PP",
    rating: 5,
    text: "कपड्यांची कॉलिटी एकदम भारी आहे! फिटिंग एकदम परफेक्ट बसली. ग्रॅविटी मेन्सवेअर माझे आवडते कपड्यांचे दुकान आहे.",
    date: "1 week ago",
  },
  {
    id: "r2",
    name: "Varad Selvani",
    avatar: "VS",
    rating: 5,
    text: "Best menswear store in Kolhapur! The baggy jeans collection is awesome. Fits well and very durable. Will definitely buy again.",
    date: "2 weeks ago",
  },
  {
    id: "r3",
    name: "Sachin Deshmukh",
    avatar: "SD",
    rating: 5,
    text: "गांधीनगर मधील सर्वोत्तम कपड्यांचे दुकान! नेहमीच नवीन आणि ट्रेंडी कलेक्शन असते. २५% सवलत म्हणजे खूपच भारी.",
    date: "3 weeks ago",
  },
  {
    id: "r4",
    name: "Amit Kadam",
    avatar: "AK",
    rating: 5,
    text: "Great customer service on WhatsApp and super quick response. The oversized t-shirts are extremely comfortable and of high premium quality.",
    date: "1 month ago",
  },
  {
    id: "r5",
    name: "Jai Lalwani",
    avatar: "JL",
    rating: 5,
    text: "Highly impressed by their premium shirts collection! Fabric feels extremely luxurious, and the checkout via WhatsApp is seamless. 5 stars!",
    date: "2 months ago",
  },
];

// Why Choose Us Features
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const FEATURES: Feature[] = [
  {
    id: "f1",
    title: "Trending Fashion",
    description:
      "Stay ahead with the latest Gen-Z inspired fashion trends, curated for the modern man.",
    icon: "TrendingUp",
  },
  {
    id: "f2",
    title: "Premium Quality",
    description:
      "Every piece is crafted with premium fabrics ensuring comfort, durability, and style.",
    icon: "Award",
  },
  {
    id: "f3",
    title: "Affordable Luxury",
    description:
      "Experience luxury fashion without breaking the bank. Flat 25% OFF on all collections.",
    icon: "BadgePercent",
  },
  {
    id: "f4",
    title: "Fast Response",
    description:
      "Quick WhatsApp support for orders, queries, and personalized styling advice.",
    icon: "Zap",
  },
  {
    id: "f5",
    title: "Latest Styles",
    description:
      "Fresh arrivals every week. From oversized tees to baggy jeans — we have it all.",
    icon: "Sparkles",
  },
  {
    id: "f6",
    title: "Trusted Seller",
    description:
      "Gandhinagar, Kolhapur's most trusted menswear destination with hundreds of happy customers.",
    icon: "ShieldCheck",
  },
];

// Navigation Links
export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Collections", href: "#collections" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];
