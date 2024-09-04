import { Button } from "@nextui-org/button";
import { GoArrowLeft } from "react-icons/go";
import Image from "next/image";

import Country from "../config/interfaceCountries";

interface DetailProps {
  setDetail: (value: boolean) => void;
  country: Country;
}

export default function Detail({ setDetail, country }: DetailProps) {
  const fecharDetails = () => setDetail(false);

  const nativeLanguageCode = "eng";
  const currencyCode = "SHP";
  const languages = country.languages;
  const languageNames = Object.values(languages).join(", ");
  const borders = country.borders || [];

  return (
    <>
      <Button
        className="rounded-md shadow-md bg-veryLightGray dark:bg-darkBlue place-self-start px-10 gap-1"
        onClick={fecharDetails}
      >
        <GoArrowLeft className="mb-0.5" size={20} /> Back
      </Button>
      <div className="flex flex-row items-center mt-10 w-full justify-center gap-32">
        <div className="w-1/2">
          <Image
            alt={`Flag of ${country.name.common}`}
            className="w-full h-auto object-cover shadow-medium rounded-md"
            height={0}
            src={country.flags.svg}
            width={0}
          />
        </div>
        <div className="w-1/2 flex flex-col gap-10">
          <h1 className="text-3xl font-bold">{country.name.common}</h1>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <p>
                <strong>Native Name: </strong>
                {country.name.nativeName[nativeLanguageCode]?.official || "N/A"}
              </p>
              <p>
                <strong>Population: </strong>
                {country.population.toLocaleString()}
              </p>
              <p>
                <strong>Region: </strong>
                {country.region}
              </p>
              <p>
                <strong>Sub Region: </strong>
                {country.subregion || "N/A"}
              </p>
              <p>
                <strong>Capital: </strong>
                {country.capital?.join(", ") || "N/A"}
              </p>
            </div>
            <div className="flex flex-col">
              <p>
                <strong>Top Level Domain: </strong>
                {country.tld.join(", ")}
              </p>
              <p>
                <strong>Currency: </strong>
                {country.currencies[currencyCode]?.name || "N/A"}
              </p>
              <p>
                <strong>Languages: </strong>
                {languageNames}
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-4 flex-wrap">
            <strong>Border Countries:</strong>
            {borders.length > 0 ? (
              borders.map((border, index) => (
                <Button
                  key={index}
                  className="h-7 rounded-sm shadow-small bg-veryLightGray dark:bg-darkBlue place-self-start px-10 gap-1"
                >
                  {border}
                </Button>
              ))
            ) : (
              <p>None</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
