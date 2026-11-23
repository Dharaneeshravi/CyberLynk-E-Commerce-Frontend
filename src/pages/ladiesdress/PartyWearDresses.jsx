import DressCategoryLayout from "../../components/DressCategoryLayout";

const names = [
  "Midnight Glam Gown",
  "Golden Party Dress",
  "Royal Red Evening Dress",
  "Elegant Sequin Dress",
  "Luxury Velvet Gown",
  "Floral Party Dress",
  "Designer Black Gown",
  "Champagne Evening Dress",
  "Elegant Satin Dress",
  "Royal Blue Party Dress",
  "Premium Cocktail Dress",
  "Shimmer Evening Gown",
  "Classic White Party Dress",
  "Designer Pink Gown",
  "Luxury Purple Dress",
  "Golden Celebration Gown",
  "Elegant Maroon Dress",
  "Modern Party Gown",
  "Premium Silk Party Dress",
  "Fashion Evening Dress",
  "Royal Green Gown",
  "Chic Black Dress",
  "Designer Festive Gown",
  "Elegant Party Wear",
  "Luxury Celebration Dress",
];

const images = [
  // Midnight Glam Gown
  "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop",

  // Golden Party Dress
  "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&auto=format&fit=crop",

  // Royal Red Evening Dress
  "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&auto=format&fit=crop",

  // Elegant Sequin Dress
  "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&auto=format&fit=crop",

  // Luxury Velvet Gown
  "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop",

  // Floral Party Dress
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop",

  // Designer Black Gown
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop",

  // Champagne Evening Dress
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&auto=format&fit=crop",

  // Elegant Satin Dress
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&auto=format&fit=crop",

  // Royal Blue Party Dress
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop",

  // Premium Cocktail Dress
  "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=800&auto=format&fit=crop",

  // Shimmer Evening Gown
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop",

  // Classic White Party Dress
  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop",

  // Designer Pink Gown
  "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=800&auto=format&fit=crop",

  // Luxury Purple Dress
  "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&auto=format&fit=crop",

  // Golden Celebration Gown
  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop",

  // Elegant Maroon Dress
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&auto=format&fit=crop",

  // Modern Party Gown
  "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&auto=format&fit=crop",

  // Premium Silk Party Dress
  "https://images.unsplash.com/photo-1475180098004-ca77a66827be?w=800&auto=format&fit=crop",

  // Fashion Evening Dress
  "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&auto=format&fit=crop",

  // Royal Green Gown
  "https://images.unsplash.com/photo-1503341455253-b2e723bb47f8?w=800&auto=format&fit=crop",

  // Chic Black Dress
  "https://images.unsplash.com/photo-1495385794356-15371f348c31?w=800&auto=format&fit=crop",

  // Designer Festive Gown
  "https://images.unsplash.com/photo-1495555961986-6d7eec5e4f4b?w=800&auto=format&fit=crop",

  // Elegant Party Wear
  "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop",

  // Luxury Celebration Dress
  "https://images.unsplash.com/photo-1512427691650-1c4b0b0a5e9a?w=800&auto=format&fit=crop",
];

export const products = names.map((name, index) => ({
  id: 501 + index,
  name,
  price: 2499 + index * 150,
  originalPrice: 2999 + index * 150,
  rating: Number((4.5 + (index % 5) * 0.1).toFixed(1)),
  badge: index % 5 === 0 ? "BESTSELLER" : index % 4 === 0 ? "TRENDING" : "",
  image: images[index],
  description: `${name} designed to make every celebration unforgettable.`,
  category: "Party Wear",
}));

export default function PartyWearDresses() {
  return (
    <DressCategoryLayout
      title="Party Wear Dresses"
      subtitle="Make every celebration a moment of elegance."
      products={products}
    />
  );
}
