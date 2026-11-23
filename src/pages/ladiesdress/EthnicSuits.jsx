import DressCategoryLayout from "../../components/DressCategoryLayout";

const names = [
  "Royal Punjabi Suit",
  "Elegant Churidar Suit",
  "Floral Ethnic Suit",
  "Premium Silk Suit",
  "Designer Straight Suit",
  "Classic Salwar Suit",
  "Golden Festive Suit",
  "Pastel Ethnic Suit",
  "Royal Embroidered Suit",
  "Traditional Maroon Suit",
  "Luxury Party Suit",
  "Elegant White Suit",
  "Designer Blue Suit",
  "Festive Green Suit",
  "Classic Pink Suit",
  "Premium Cotton Suit",
  "Traditional Red Suit",
  "Modern Ethnic Suit",
  "Floral Printed Suit",
  "Graceful Purple Suit",
  "Royal Wedding Suit",
  "Designer Beige Suit",
  "Elegant Long Suit",
  "Festive Silk Suit",
  "Premium Ethnic Ensemble",
];

const images = [
  // Royal Punjabi Suit
  "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop",

  // Elegant Churidar Suit
  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop",

  // Floral Ethnic Suit
  "https://images.unsplash.com/photo-1583391733956-6c78276477e3?w=800&auto=format&fit=crop",

  // Premium Silk Suit
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78?w=800&auto=format&fit=crop",

  // Designer Straight Suit
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop",

  // Classic Salwar Suit
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&auto=format&fit=crop",

  // Golden Festive Suit
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop",

  // Pastel Ethnic Suit
  "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=800&auto=format&fit=crop",

  // Royal Embroidered Suit
  "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=800&auto=format&fit=crop",

  // Traditional Maroon Suit
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&auto=format&fit=crop",

  // Luxury Party Suit
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop",

  // Elegant White Suit
  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop",

  // Designer Blue Suit
  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop",

  // Festive Green Suit
  "https://images.unsplash.com/photo-1495385794356-15371f348c31?w=800&auto=format&fit=crop",

  // Classic Pink Suit
  "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&auto=format&fit=crop",

  // Premium Cotton Suit
  "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&auto=format&fit=crop",

  // Traditional Red Suit
  "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop",

  // Modern Ethnic Suit
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&auto=format&fit=crop",

  // Floral Printed Suit
  "https://images.unsplash.com/photo-1475180098004-ca77a66827be?w=800&auto=format&fit=crop",

  // Graceful Purple Suit
  "https://images.unsplash.com/photo-1503341455253-b2e723bb47f8?w=800&auto=format&fit=crop",

  // Royal Wedding Suit
  "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&auto=format&fit=crop",

  // Designer Beige Suit
  "https://images.unsplash.com/photo-1495555961986-6d7eec5e4f4b?w=800&auto=format&fit=crop",

  // Elegant Long Suit
  "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop",

  // Festive Silk Suit
  "https://images.unsplash.com/photo-1512427691650-1c4b0b0a5e9a?w=800&auto=format&fit=crop",

  // Premium Ethnic Ensemble
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78?w=800&auto=format&fit=crop",
];

export const products = names.map((name, index) => ({
  id: 401 + index,
  name,
  price: 1699 + index * 100,
  originalPrice: 2199 + index * 100,
  rating: Number((4.5 + (index % 5) * 0.1).toFixed(1)),
  badge: index % 5 === 0 ? "BESTSELLER" : index % 4 === 0 ? "NEW" : "",
  image: images[index],
  description: `${name} with exquisite ethnic detailing and refined craftsmanship.`,
  category: "Ethnic Suits",
}));

export default function EthnicSuits() {
  return (
    <DressCategoryLayout
      title="Ethnic Suits"
      subtitle="Celebrate tradition with sophisticated ethnic styles."
      products={products}
    />
  );
}
