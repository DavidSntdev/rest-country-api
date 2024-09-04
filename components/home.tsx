import React, { useState, useEffect } from "react";
import Image from "next/image";

import { fetchCountries, Country } from "../services/countries";

import { Inputs } from "./inputs";

interface HomeProps {
  setDetail: (value: boolean) => void;
}

export default function Home({ ...props }: HomeProps) {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const getCountries = async () => {
      const data = await fetchCountries();

      setCountries(data);
    };

    getCountries();
  }, []);

  const mostrarDetails = () => props.setDetail(true);

  return (
    <>
      <div className="flex justify-between gap-4 w-full">
        <Inputs />
      </div>
      <div className="w-full grid grid-cols-4 py-5 gap-20">
        {countries.slice(0, 8).map((country) => (
          <div
            key={country.cca3}
            className="rounded-md bg-veryLightGray dark:bg-darkBlue shadow-medium cursor-pointer"
            role="button"
            tabIndex={0}
            onClick={mostrarDetails}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                mostrarDetails();
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
            <div className="flex flex-col p-5">
              <h1 className="text-lg font-bold">{country.name.common}</h1>
              <div className="mt-2">
                <p className="text-sm text-default-700">
                  <strong className="font-semibold text-default-900">
                    Population:{" "}
                  </strong>
                  {country.population}
                </p>
                <p className="text-sm text-default-700">
                  <strong className="font-semibold text-default-900">
                    Region:{" "}
                  </strong>
                  {country.region}
                </p>
                <p className="text-sm text-default-700">
                  <strong className="font-semibold text-default-900">
                    Capital:{" "}
                  </strong>
                  {country.capital}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
