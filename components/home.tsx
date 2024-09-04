import React, { useState, useEffect } from "react";

import Inputs from "./home/inputs";
import Botoes from "./home/botoes";
import Paises from "./home/paises";

import { fetchCountries } from "@/services/countries";
import Country from "@/config/interfaceCountries";

interface HomeProps {
  setSelectedCountry: (country: Country) => void;
}

export default function Home({ setSelectedCountry }: HomeProps) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchContinent, setSearchContinent] = useState<string>("");
  const [mostrarTudo, setMostrarTudo] = useState<boolean>(false);

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

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:justify-between gap-10 w-full">
        <Inputs
          setSearchContinent={setSearchContinent}
          setSearchTerm={setSearchTerm}
        />
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 sm:px-0 py-5 gap-5 sm:gap-20">
        <Paises
          filteredCountries={filteredCountries}
          mostrarTudo={mostrarTudo}
          setSelectedCountry={setSelectedCountry}
        />
      </div>
      <Botoes mostrar={setMostrarTudo} mostrarTudo={mostrarTudo} />
    </>
  );
}
