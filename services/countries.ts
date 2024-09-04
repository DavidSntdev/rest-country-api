export interface Country {
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

export const fetchCountries = async (): Promise<Country[]> => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data: Country[] = await response.json();

    return data;
  } catch (error) {
    return [];
  }
};
