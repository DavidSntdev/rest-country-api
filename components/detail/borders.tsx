import { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";

import Country from "@/config/interfaceCountries";
import { fetchCountries } from "@/services/countries";

interface BordersProps {
  country: Country;
}

export default function Borders({ country }: BordersProps) {
  const [countryList, setCountryList] = useState<Country[]>([]);
  const borders = country.borders || [];

  useEffect(() => {
    const fetchCountryList = async () => {
      const data = await fetchCountries();

      setCountryList(data);
    };

    fetchCountryList();
  }, []);

  const getCountryNameByCCA3 = (cca3: string) => {
    const country = countryList.find((c) => c.cca3 === cca3);

    return country ? country.name.common : cca3;
  };

  return (
    <div className="flex flex-row gap-4 flex-wrap">
      <strong>Border Countries:</strong>
      {borders.length > 0 ? (
        borders.map((border, index) => (
          <Button
            key={index}
            className="h-7 rounded-sm shadow-small bg-veryLightGray dark:bg-darkBlue place-self-start px-10 gap-1"
          >
            {getCountryNameByCCA3(border)}
          </Button>
        ))
      ) : (
        <p>It&#39;s an island</p>
      )}
    </div>
  );
}
