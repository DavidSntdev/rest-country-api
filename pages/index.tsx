import { useRouter } from "next/router";
import { useState } from "react";
import { CircularProgress } from "@nextui-org/progress";

import DefaultLayout from "@/layouts/default";
import Home from "@/components/home";
import Country from "@/config/interfaceCountries";

export default function IndexPage() {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    router.push(`/details/${country.cca3}`);
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4">
        {selectedCountry ? (
          <div>
            <CircularProgress aria-label="Loading..." size="lg" />
          </div>
        ) : (
          <Home setSelectedCountry={handleCountrySelect} />
        )}
      </section>
    </DefaultLayout>
  );
}
