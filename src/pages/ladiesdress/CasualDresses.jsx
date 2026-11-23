import DressCategoryLayout from "../../components/DressCategoryLayout";

const names = [
  "Everyday Floral Dress",
  "Casual Cotton Dress",
  "Summer Breeze Dress",
  "Elegant Casual Dress",
  "Classic Shirt Dress",
  "Comfort Fit Dress",
  "Floral Midi Dress",
  "Modern Everyday Dress",
  "Pastel Summer Dress",
  "Casual Chic Dress",
  "Printed Cotton Dress",
  "Weekend Style Dress",
  "Elegant Beige Dress",
  "Classic Black Casual Dress",
  "Summer Floral Dress",
  "Relaxed Fit Dress",
  "Modern Casual Gown",
  "Everyday Pink Dress",
  "Lightweight Summer Dress",
  "Chic Printed Dress",
  "Comfortable Day Dress",
  "Fashion Casual Dress",
  "Classic Midi Dress",
  "Elegant Everyday Wear",
  "Simple Style Dress",
];

const images = [
  "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800",
  "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800",
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800",
  "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800",
  "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800",
  "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800",
  "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800",
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800",
  "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=800",
  "https://images.unsplash.com/photo-1542060748-10c28b62716b?w=800",
  "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=800",
  "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800",
  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800",
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800",
  "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=800",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
  "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800",
  "https://images.unsplash.com/photo-1554412933-514a83d2f7a8?w=800",
  "https://images.unsplash.com/photo-1551803091-e20673f15770?w=800",
  "https://images.unsplash.com/photo-1529636798458-92182e662485?w=800",
  "https://images.unsplash.com/photo-1544441893-675973e31985?w=800",
  "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800",
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800",
];

export const products = names.map((name, index) => ({
  id: 601 + index,
  name,
  price: 999 + index * 80,
  originalPrice: 1499 + index * 80,
  rating: Number((4.5 + (index % 5) * 0.1).toFixed(1)),
  badge: index % 5 === 0 ? "BESTSELLER" : index % 4 === 0 ? "POPULAR" : "",
  image: images[index],
  description: `${name} designed for comfortable, effortless everyday fashion.`,
  category: "Casual Wear",
}));

export default function CasualDresses() {
  return (
    <DressCategoryLayout
      title="Casual Dresses"
      subtitle="Everyday comfort with a touch of style."
      products={products}
    />
  );
}
