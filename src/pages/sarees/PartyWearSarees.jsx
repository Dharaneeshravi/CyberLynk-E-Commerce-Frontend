import DressCategoryLayout from "../../components/DressCategoryLayout";

const names = [
  "Golden Sequin Party Saree",
  "Black Designer Party Saree",
  "Red Celebration Saree",
  "Pink Glamour Saree",
  "Silver Party Wear Saree",
  "Wine Designer Saree",
  "Royal Blue Party Saree",
  "Emerald Party Wear Saree",
  "Champagne Designer Saree",
  "Bridal Party Saree",
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
  id: 1201 + index,
  name,
  category: "Party Wear Sarees",
  image: images[index],
  price: `₹${[3499, 2999, 3999, 3299, 4599, 3799, 4299, 4999, 3599, 5499][index]}`,
  originalPrice: `₹${[4999, 4499, 5799, 4799, 6499, 5499, 5999, 6999, 5299, 7999][index]}`,
  rating: 4.6,
  description:
    "A glamorous statement saree designed with elegant details, perfect for weddings, parties and celebrations.",
  badge: index === 0 ? "BESTSELLER" : index === 8 ? "NEW" : "",
}));

export default function PartyWearSarees() {
  return (
    <DressCategoryLayout
      title="Party Wear Sarees"
      subtitle="Make every celebration unforgettable with our glamorous saree collection."
      products={products}
    />
  );
}
