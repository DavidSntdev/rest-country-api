import Country from "../config/interfaceCountries";

interface DescricaoProps {
  country: Country;
}

export default function Descricao({ country }: DescricaoProps) {
  const nativeLanguageCode = "eng";
  const currencyCode = "SHP";
  const languages = country.languages;
  const languageNames = Object.values(languages).join(", ");

  return (
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
  );
}
