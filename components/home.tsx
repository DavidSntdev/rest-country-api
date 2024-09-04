import React, { useState, useEffect } from "react";

import { Inputs } from "./inputs";

interface Country {
  cca3: string;
  name: {
    common: string;
  };
  capital?: string[];
  region: string;
  population: number;
  flags: {
    svg: string;
  };
}

export default function Home() {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data: Country[] = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <>
      <div className="flex justify-between gap-4 w-full">
        <Inputs />
      </div>
      <div className="w-full grid grid-cols-4 py-5 gap-6">
        {countries.slice(0, 8).map((country) => (
          <div key={country.cca3} className="border p-4 rounded">
            <h2 className="text-lg font-bold">{country.name.common}</h2>
            <p>Capital: {country.capital?.[0]}</p>
            <p>Region: {country.region}</p>
            <p>Population: {country.population.toLocaleString()}</p>
            <img
              alt={`Flag of ${country.name.common}`}
              className="w-16 h-10"
              src={country.flags.svg}
            />
          </div>
        ))}
      </div>
    </>
  );
}
