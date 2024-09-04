import { Button } from "@nextui-org/button";
import { GoArrowLeft } from "react-icons/go";
import Image from "next/image";
import { useRouter } from "next/router";

import Country from "../config/interfaceCountries";

import Descricao from "./detail/descricao";
import Borders from "./detail/borders";

interface DetailProps {
  country: Country;
}

export default function Detail({ country }: DetailProps) {
  const router = useRouter();

  return (
    <>
      <Button
        className="rounded-md shadow-md bg-veryLightGray dark:bg-darkBlue place-self-start px-10 gap-1"
        onClick={() => router.push("/")}
      >
        <GoArrowLeft className="mb-0.5" size={20} /> Back
      </Button>
      <div className="flex flex-col md:flex-row items-center mt-10 w-full justify-center gap-5 md:gap-32">
        <div className="w-full md:w-1/2">
          <Image
            alt={`Flag of ${country.name.common}`}
            className="w-full h-auto object-cover shadow-medium rounded-md"
            height={0}
            src={country.flags.svg}
            width={0}
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-10 items-start">
          <h1 className="text-3xl font-bold">{country.name.common}</h1>
          <Descricao country={country} />
          <Borders country={country} />
        </div>
      </div>
    </>
  );
}
