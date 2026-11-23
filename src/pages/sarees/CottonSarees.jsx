import DressCategoryLayout from "../../components/DressCategoryLayout";

const names = [
  "Traditional White Cotton Saree",
  "Blue Handloom Cotton Saree",
  "Green Cotton Saree",
  "Pink Printed Cotton Saree",
  "Mustard Cotton Saree",
  "Elegant Black Cotton Saree",
  "Red Handloom Cotton Saree",
  "Floral Cotton Saree",
  "Cream Traditional Cotton Saree",
  "Indigo Cotton Saree",
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
  id: 1101 + index,
  name,
  category: "Cotton Sarees",
  image: images[index],
  price: `₹${[1299, 1599, 1499, 1799, 1399, 1699, 1899, 1199, 1499, 1999][index]}`,
  originalPrice: `₹${[1999, 2499, 2299, 2699, 2099, 2599, 2799, 1899, 2299, 2999][index]}`,
  rating: 4.3,
  description:
    "A comfortable and stylish cotton saree with beautiful traditional patterns, perfect for everyday and festive wear.",
  badge: index === 7 ? "VALUE PICK" : "",
}));

export default function CottonSarees() {
  return (
    <DressCategoryLayout
      title="Cotton Sarees"
      subtitle="Comfort, craftsmanship and timeless style in everyday elegance."
      products={products}
    />
  );
}
