import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";

import { SearchIcon } from "../icons";

import { regions } from "@/config/regions";

interface InputsProps {
  setSearchTerm: (term: string) => void;
}

export default function Inputs({ setSearchTerm }: InputsProps) {
  return (
    <>
      <Input
        classNames={{
          base: "max-w-full sm:max-w-[10rem] h-10",
          mainWrapper: "h-full",
          input: "text-small",
          inputWrapper:
            "h-full font-normal text-default-500 bg-veryLightGray dark:bg-darkBlue sm:w-[300px] md:w-[500px] w-full  px-10 py-7 rounded-md",
        }}
        placeholder="Search for country..."
        size="md"
        startContent={<SearchIcon className="mb-1 mr-3" size={17} />}
        type="search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Select
        className="max-w-[180px]"
        classNames={{
          popoverContent:
            "bg-veryLightGray dark:bg-darkBlue rounded-md shadow-small",
          trigger: "bg-veryLightGray dark:bg-darkBlue rounded-md",
        }}
        label="Filter by Region"
        placeholder="Select the region"
      >
        {regions.map((region) => (
          <SelectItem key={region.key}>{region.label}</SelectItem>
        ))}
      </Select>
    </>
  );
}
