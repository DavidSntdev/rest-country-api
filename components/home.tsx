import React, { useState, useEffect } from "react";
import Image from "next/image";

import Inputs from "./inputs";
import TextHome from "./textHome";

import { fetchCountries } from "@/services/countries";
import Country from "@/config/interfaceCountries";

interface HomeProps {
  setSelectedCountry: (country: Country) => void;
}

export default function Home({ ...props }: HomeProps) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const getCountries = async () => {
      const data = await fetchCountries();

      setCountries(data);
    };

    getCountries();
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCountryClick = (country: Country) => {
    props.setSelectedCountry(country);
  };

  return (
    <>
      <div className="flex justify-between gap-4 w-full">
        <Inputs setSearchTerm={setSearchTerm} />
      </div>
      <div className="w-full grid grid-cols-4 py-5 gap-20">
        {filteredCountries.slice(0, 8).map((country) => (
          <div
            key={country.cca3}
            className="rounded-md bg-veryLightGray dark:bg-darkBlue shadow-medium cursor-pointer"
            role="button"
            tabIndex={0}
            onClick={() => handleCountryClick(country)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleCountryClick(country);
              }
            }}
          >
            <Image
              alt={`Flag of ${country.name.common}`}
              className="w-full h-[150px] object-cover rounded-t-md"
              height={0}
              src={country.flags.svg}
              width={0}
            />
            <TextHome country={country} />
          </div>
        ))}
      </div>
    </>
  );
}
