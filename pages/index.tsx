import { useState } from "react";

import Country from "../config/interfaceCountries";

import DefaultLayout from "@/layouts/default";
import Detail from "@/components/detail";
import Home from "@/components/home";

export default function IndexPage() {
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4">
        {showDetail && selectedCountry ? (
          <Detail country={selectedCountry} setDetail={setShowDetail} />
        ) : (
          <Home
            setDetail={setShowDetail}
            setSelectedCountry={setSelectedCountry}
          />
        )}
      </section>
    </DefaultLayout>
  );
}
