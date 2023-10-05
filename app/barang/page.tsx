"use client";
import { SearchBar } from "@/src/components/molecules";
import { CatalogProducts, SwiperProduct } from "@/src/components/oraganisms";
import { AppBar } from "@/src/layouts";
import { GetDataApi } from "@/src/utils";
import { useEffect, useState } from "react";

const Barang = () => {
  const [data, setdata] = useState({} as any);
  const [barangPromo, setbarangPromo] = useState([] as any);

  useEffect(() => {
    async function fetchData() {
      const response = await GetDataApi("/api/webstore");
      const responseBarangPromo = await GetDataApi(
        `${process.env.NEXT_PUBLIC_HOST}/products/barang?promo=true`
      );
      setbarangPromo(responseBarangPromo.data);
      setdata(response.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <AppBar data={data} />
      <SearchBar />
      <SwiperProduct
        persentaseHarga={data.profit_percentage}
        url="/dashboard/barang/promo"
        title="Promo"
        products={barangPromo}
      />
      <p className="underline font-semibold m-2">{"Semua Barang"}</p>
      <CatalogProducts persentaseHarga={data.profit_percentage} />
    </div>
  );
};

export default Barang;