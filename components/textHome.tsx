import Country from "@/config/interfaceCountries";

interface TextHomeProps {
  country: Country;
}

export default function TextHome({ country }: TextHomeProps) {
  return (
    <div className="flex flex-col p-5">
      <h1 className="text-lg font-bold">{country.name.common}</h1>
      <div className="mt-2">
        <p className="text-sm text-default-700">
          <strong className="font-semibold text-default-900">
            Population:{" "}
          </strong>
          {country.population.toLocaleString()}
        </p>
        <p className="text-sm text-default-700">
          <strong className="font-semibold text-default-900">Region: </strong>
          {country.region}
        </p>
        <p className="text-sm text-default-700">
          <strong className="font-semibold text-default-900">Capital: </strong>
          {country.capital}
        </p>
      </div>
    </div>
  );
}
