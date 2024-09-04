import React, { useState, useEffect } from "react";
import Image from "next/image";

import { fetchCountries, Country } from "../services/countries";

import { Inputs } from "./inputs";

export default function Home() {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const getCountries = async () => {
      const data = await fetchCountries();

      setCountries(data);
    };

    getCountries();
  }, []);

  return (
    <>
      <div className="flex justify-between gap-4 w-full">
        <Inputs />
      </div>
      <div className="w-full grid grid-cols-4 py-5 gap-20">
        {countries.slice(0, 8).map((country) => (
          <div
            key={country.cca3}
            className="rounded-md bg-veryLightGray dark:bg-darkBlue shadow-medium"
          >
            <Image
              alt={`Flag of ${country.name.common}`}
              className="w-full h-[150px] object-cover rounded-t-md"
              height={0}
              src={country.flags.svg}
              width={0}
            />
            <div className="flex p-5">
                <h1 className="text-lg font-bold">{country.name.common}</h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
