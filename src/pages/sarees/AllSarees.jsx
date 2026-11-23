import DressCategoryLayout from "../../components/DressCategoryLayout";

import { products as kanjivaramProducts } from "./KanjivaramSarees";
import { products as banarasiProducts } from "./BanarasiSarees";
import { products as chiffonProducts } from "./ChiffonSarees";
import { products as organzaProducts } from "./OrganzaSarees";
import { products as cottonProducts } from "./CottonSarees";
import { products as partyWearProducts } from "./PartyWearSarees";

const allSarees = [
  ...kanjivaramProducts,
  ...banarasiProducts,
  ...chiffonProducts,
  ...organzaProducts,
  ...cottonProducts,
  ...partyWearProducts,
];

export default function AllSarees() {
  return (
    <DressCategoryLayout
      title="Elegant Sarees"
      subtitle="Discover timeless sarees crafted for celebrations, traditions and unforgettable moments."
      products={allSarees}
    />
  );
}
