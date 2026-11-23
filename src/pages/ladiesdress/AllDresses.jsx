import DressCategoryLayout from "../../components/DressCategoryLayout";

import { products as anarkaliProducts } from "./AnarkaliDresses";
import { products as kurtiProducts } from "./KurtiKurtas";
import { products as ethnicSuitProducts } from "./EthnicSuits";
import { products as partyWearProducts } from "./PartyWearDresses";
import { products as casualProducts } from "./CasualDresses";

const allProducts = [
  ...anarkaliProducts,
  ...kurtiProducts,
  ...ethnicSuitProducts,
  ...partyWearProducts,
  ...casualProducts,
];

export default function AllDresses() {
  return (
    <DressCategoryLayout
      title="All Dresses"
      subtitle="Explore Anarkalis, Kurtis, Ethnic Suits, Party Wear and Casual Wear."
      products={allProducts}
    />
  );
}
