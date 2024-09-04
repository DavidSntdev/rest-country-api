import Country from "../../config/interfaceCountries";

interface DescricaoProps {
  country: Country;
}

export default function Descricao({ country }: DescricaoProps) {
  const defaultLanguageCode = Object.keys(country.name.nativeName)[0];
  const nativeName =
    country.name.nativeName[defaultLanguageCode]?.common ||
    "It's the same name";

  const languages = country.languages;
  const languageNames = Object.values(languages).join(", ");

  const currencyEntries = Object.entries(country.currencies);
  const currencyInfo = currencyEntries.map(([code]) => (
    <p key={code}>{code}</p>
  ));

  return (
    <div className="flex flex-col lg:flex-row justify-between">
      <div className="flex flex-col">
        <p>
          <strong>Native Name: </strong>
          {nativeName}
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
          {country.subregion || "No subregions"}
        </p>
        <p>
          <strong>Capital: </strong>
          {country.capital?.join(", ") || "No capital"}
        </p>
      </div>
      <div className="flex flex-col">
        <p>
          <strong>Top Level Domain: </strong>
          {country.tld.join(", ")}
        </p>
        <p className="flex gap-2">
          <strong>Currency:</strong>
          {currencyInfo.length > 0 ? currencyInfo : <p>No currencies</p>}
        </p>
        <p>
          <strong>Languages: </strong>
          {languageNames}
        </p>
      </div>
    </div>
  );
}
