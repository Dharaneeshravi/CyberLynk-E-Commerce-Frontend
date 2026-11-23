import DressCategoryLayout from "../../components/DressCategoryLayout";

const names = [
  "Rose Pink Chiffon Saree",
  "Elegant Black Chiffon Saree",
  "Lavender Floral Chiffon Saree",
  "Sky Blue Chiffon Saree",
  "Peach Party Chiffon Saree",
  "Red Designer Chiffon Saree",
  "Cream Soft Chiffon Saree",
  "Mint Green Chiffon Saree",
  "Wine Chiffon Saree",
  "Floral White Chiffon Saree",
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
  id: 901 + index,
  name,
  category: "Chiffon Sarees",
  image: images[index],
  price: `₹${[1999, 2499, 2299, 1899, 2799, 2599, 2199, 2399, 2999, 2099][index]}`,
  originalPrice: `₹${[2999, 3599, 3299, 2799, 3999, 3799, 3199, 3499, 4499, 2999][index]}`,
  rating: 4.4,
  description:
    "A soft, lightweight chiffon saree designed for effortless elegance, graceful draping and beautiful occasions.",
  badge: index === 2 ? "NEW" : "",
}));

export default function ChiffonSarees() {
  return (
    <DressCategoryLayout
      title="Chiffon Sarees"
      subtitle="Lightweight elegance and graceful drapes for every occasion."
      products={products}
    />
  );
}
