import DressCategoryLayout from "../../components/DressCategoryLayout";

const names = [
  "Floral Pink Organza Saree",
  "White Pearl Organza Saree",
  "Golden Organza Saree",
  "Lavender Organza Saree",
  "Green Floral Organza Saree",
  "Pastel Peach Organza Saree",
  "Royal Blue Organza Saree",
  "Black Designer Organza Saree",
  "Cream Embroidered Organza Saree",
  "Pink Party Organza Saree",
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
  id: 1001 + index,
  name,
  category: "Organza Sarees",
  image: images[index],
  price: `₹${[2799, 3299, 2999, 3599, 3199, 2899, 3799, 3499, 3999, 3099][index]}`,
  originalPrice: `₹${[3999, 4799, 4299, 4999, 4599, 4199, 5499, 4999, 5799, 4499][index]}`,
  rating: 4.5,
  description:
    "An elegant organza saree with delicate textures, beautiful detailing and a sophisticated look.",
  badge: index === 0 ? "BESTSELLER" : "",
}));

export default function OrganzaSarees() {
  return (
    <DressCategoryLayout
      title="Organza Sarees"
      subtitle="Discover dreamy textures, delicate details and contemporary elegance."
      products={products}
    />
  );
}
