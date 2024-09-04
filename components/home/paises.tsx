import Image from "next/image";

import TextHome from "./textHome";

import Country from "@/config/interfaceCountries";
import { featuredCountries } from "@/config/constants";

interface PaisesProps {
  mostrarTudo: boolean;
  filteredCountries: Country[];
  setSelectedCountry: (country: Country) => void;
}

export default function Paises({ ...props }: PaisesProps) {
  const handleCountryClick = (country: Country) => {
    props.setSelectedCountry(country);
  };

  const countriesToDisplay = props.mostrarTudo
    ? props.filteredCountries
    : props.filteredCountries.filter((country) =>
        featuredCountries.includes(country.cca3)
      );

  return (
    <>
      {countriesToDisplay.map((country) => (
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
    </>
  );
}
