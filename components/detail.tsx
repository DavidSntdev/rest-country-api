import { Button } from "@nextui-org/button";
import { GoArrowLeft } from "react-icons/go";
import Image from "next/image";

import { Country } from "../services/countries";

interface DetailProps {
  setDetail: (value: boolean) => void;
  country: Country;
}

export default function Detail({ ...props }: DetailProps) {
  const fecharDetails = () => props.setDetail(false);

  return (
    <>
      <Button
        className="rounded-md shadow-md bg-veryLightGray dark:bg-darkBlue place-self-start px-10 gap-1"
        onClick={fecharDetails}
      >
        <GoArrowLeft className="mb-0.5" size={20} /> Back
      </Button>
      <div className="flex flex-col items-center p-5">
        <Image
          alt={`Flag of ${props.country.name.common}`}
          className="w-full h-[150px] object-cover rounded-md"
          height={0}
          src={props.country.flags.svg}
          width={0}
        />
        <h1 className="text-2xl font-bold mt-4">{props.country.name.common}</h1>
        <p className="text-lg">
          <strong>Population: </strong>
          {props.country.population}
        </p>
        <p className="text-lg">
          <strong>Region: </strong>
          {props.country.region}
        </p>
        <p className="text-lg">
          <strong>Capital: </strong>
          {props.country.capital}
        </p>
      </div>
    </>
  );
}
