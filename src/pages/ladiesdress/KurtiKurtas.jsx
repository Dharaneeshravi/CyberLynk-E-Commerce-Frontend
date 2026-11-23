import DressCategoryLayout from "../../components/DressCategoryLayout";

const names = [
  "Elegant Cotton Kurti",
  "Floral Printed Kurti",
  "Classic Straight Kurta",
  "Designer Long Kurti",
  "Pastel Everyday Kurti",
  "Embroidered Kurta",
  "Premium Silk Kurti",
  "Traditional Printed Kurta",
  "Modern Office Kurti",
  "Elegant White Kurta",
  "Festive Pink Kurti",
  "Blue Floral Kurta",
  "Classic Black Kurti",
  "Premium Rayon Kurta",
  "Chic Short Kurti",
  "Traditional Red Kurta",
  "Designer Green Kurti",
  "Casual Beige Kurta",
  "Elegant Purple Kurti",
  "Floral Summer Kurta",
  "Premium Long Kurti",
  "Fashion Printed Kurta",
  "Festive Embroidered Kurti",
  "Modern Ethnic Kurta",
  "Graceful Daily Wear Kurti",
];

const images = [
  // Elegant Cotton Kurti
  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop",

  // Floral Printed Kurti
  "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop",

  // Classic Straight Kurta
  "https://images.unsplash.com/photo-1583391733956-6c78276477e3?w=800&auto=format&fit=crop",

  // Designer Long Kurti
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop",

  // Pastel Everyday Kurti
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop",

  // Embroidered Kurta
  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop",

  // Premium Silk Kurti
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&auto=format&fit=crop",

  // Traditional Printed Kurta
  "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop",

  // Modern Office Kurti
  "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=800&auto=format&fit=crop",

  // Elegant White Kurta
  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop",

  // Festive Pink Kurti
  "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=800&auto=format&fit=crop",

  // Blue Floral Kurta
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop",

  // Classic Black Kurti
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop",

  // Premium Rayon Kurta
  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop",

  // Chic Short Kurti
  "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&auto=format&fit=crop",

  // Traditional Red Kurta
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&auto=format&fit=crop",

  // Designer Green Kurti
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop",

  // Casual Beige Kurta
  "https://images.unsplash.com/photo-1475180098004-ca77a66827be?w=800&auto=format&fit=crop",

  // Elegant Purple Kurti
  "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&auto=format&fit=crop",

  // Floral Summer Kurta
  "https://images.unsplash.com/photo-1495385794356-15371f348c31?w=800&auto=format&fit=crop",

  // Premium Long Kurti
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&auto=format&fit=crop",

  // Fashion Printed Kurta
  "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop",

  // Festive Embroidered Kurti
  "https://images.unsplash.com/photo-1503341455253-b2e723bb47f8?w=800&auto=format&fit=crop",

  // Modern Ethnic Kurta
  "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&auto=format&fit=crop",

  // Graceful Daily Wear Kurti
  "https://images.unsplash.com/photo-1495555961986-6d7eec5e4f4b?w=800&auto=format&fit=crop",
];

export const products = names.map((name, index) => ({
  id: 301 + index,
  name,
  price: 899 + index * 80,
  originalPrice: 1299 + index * 80,
  rating: Number((4.5 + (index % 5) * 0.1).toFixed(1)),
  badge: index % 5 === 0 ? "BESTSELLER" : index % 4 === 0 ? "NEW" : "",
  image: images[index],
  description: `${name} made for comfortable everyday style and elegance.`,
  category: "Kurti & Kurtas",
}));

export default function KurtiKurtas() {
  return (
    <DressCategoryLayout
      title="Kurti & Kurtas"
      subtitle="Everyday elegance meets effortless comfort."
      products={products}
    />
  );
}
