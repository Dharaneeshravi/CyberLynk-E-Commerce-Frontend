import DressCategoryLayout from "../../components/DressCategoryLayout";

const names = [
  "Royal Banarasi Red Saree",
  "Golden Banarasi Wedding Saree",
  "Pink Banarasi Silk Saree",
  "Blue Brocade Banarasi Saree",
  "Green Banarasi Traditional Saree",
  "Maroon Banarasi Zari Saree",
  "Cream Banarasi Silk Saree",
  "Purple Banarasi Saree",
  "Bridal Banarasi Saree",
  "Elegant Floral Banarasi Saree",
];

const images = [
  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1583391733956-6c7827649a12?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1583391733956-6c7827649a12?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1583391733956-6c7827649a12?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80",
];

export const products = names.map((name, index) => ({
  id: 801 + index,
  name,
  category: "Banarasi Sarees",
  image: images[index],
  price: `₹${[2999, 3999, 3499, 4599, 3799, 4299, 3199, 3899, 4999, 3599][index]}`,
  originalPrice: `₹${[4499, 5499, 4999, 6499, 5299, 5999, 4699, 5499, 6999, 4999][index]}`,
  rating: 4.6,
  description:
    "A beautifully woven Banarasi saree with luxurious patterns and an elegant finish for festive and special occasions.",
  badge: index === 1 ? "BESTSELLER" : index === 4 ? "NEW" : "",
}));

export default function BanarasiSarees() {
  return (
    <DressCategoryLayout
      title="Banarasi Sarees"
      subtitle="Celebrate elegance with exquisite Banarasi weaving and luxurious designs."
      products={products}
    />
  );
}
