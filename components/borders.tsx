import { Button } from "@nextui-org/button";

import Country from "@/config/interfaceCountries";

interface BordersProps {
  country: Country;
}

export default function Borders({ country }: BordersProps) {
  const borders = country.borders || [];

  return (
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
  );
}
