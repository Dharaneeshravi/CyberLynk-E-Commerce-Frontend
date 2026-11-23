import DressCategoryLayout from "../../components/DressCategoryLayout";

const names = [
  "Royal Red Kanjivaram Silk Saree",
  "Golden Bridal Kanjivaram Saree",
  "Emerald Green Silk Saree",
  "Purple Traditional Silk Saree",
  "Maroon Wedding Silk Saree",
  "Blue Temple Border Saree",
  "Pink Grand Silk Saree",
  "Gold Zari Kanjivaram Saree",
  "Peacock Blue Silk Saree",
  "Traditional Mustard Silk Saree",
];

const images = [
  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1583391733956-6c7827649a12?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1610030469668-8e9f5f5f5f5f?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1583391733956-6c7827649a12?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1583391733956-6c7827649a12?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80",
];

export const products = names.map((name, index) => ({
  id: 701 + index,
  name,
  category: "Kanjivaram Sarees",
  image: images[index],
  price: `₹${[3499, 4299, 3899, 4599, 3999, 3299, 4199, 4999, 3699, 3799][index]}`,
  originalPrice: `₹${[4999, 5999, 5499, 6499, 5799, 4799, 5999, 6999, 5299, 5499][index]}`,
  rating: 4.5,
  description:
    "An elegant traditional silk saree featuring rich colours, graceful detailing and timeless Indian craftsmanship.",
  badge: index === 0 ? "BESTSELLER" : index === 3 ? "NEW" : "",
}));

export default function KanjivaramSarees() {
  return (
    <DressCategoryLayout
      title="Kanjivaram Sarees"
      subtitle="Experience the beauty of timeless silk and traditional craftsmanship."
      products={products}
    />
  );
}
