import Country from '../config/interfaceCountries';

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
