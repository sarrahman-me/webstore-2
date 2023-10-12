"use client";
import { SearchBar } from "@/src/components/molecules";
import { CatalogProducts } from "@/src/components/oraganisms";
import { AppBar } from "@/src/layouts";

const Promo = () => {
  return (
    <div>
      <AppBar allowBack={true} />
      <SearchBar />
      <CatalogProducts atribut={`promo=true`} />
    </div>
  );
};

export default Promo;
