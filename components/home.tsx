import React, { useState, useEffect } from "react";
import Image from "next/image";

import Inputs from "./home/inputs";
import TextHome from "./home/textHome";

import { fetchCountries } from "@/services/countries";
import Country from "@/config/interfaceCountries";

interface HomeProps {
  setSelectedCountry: (country: Country) => void;
}

export default function Home({ setSelectedCountry }: HomeProps) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchContinent, setSearchContinent] = useState<string>("");

  useEffect(() => {
    const getCountries = async () => {
      const data = await fetchCountries();

      setCountries(data);
    };

    getCountries();
  }, []);

  const filteredCountries = countries.filter((country) => {
    const matchesName = country.name.common
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesContinent = searchContinent
      ? country.continents.some((continent) =>
          continent.toLowerCase().includes(searchContinent.toLowerCase())
        )
      : true;

    return matchesName && matchesContinent;
  });

  const handleCountryClick = (country: Country) => {
    setSelectedCountry(country);
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:justify-between gap-10 w-full">
        <Inputs
          setSearchContinent={setSearchContinent}
          setSearchTerm={setSearchTerm}
        />
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 sm:px-0 py-5 gap-5 sm:gap-20">
        {filteredCountries.map((country) => (
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
