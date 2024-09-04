import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";

import { SearchIcon } from "./icons";

import { regions } from "@/config/regions";

export function Inputs() {
  return (
    <>
      <Input
        classNames={{
          base: "max-w-full sm:max-w-[10rem] h-10",
          mainWrapper: "h-full",
          input: "text-small",
          inputWrapper:
            "h-full font-normal text-default-500 bg-veryLightGray dark:bg-darkBlue w-[500px] px-10 py-7 rounded-md",
        }}
        placeholder="Search for country..."
        size="md"
        startContent={<SearchIcon className="mb-1 mr-3" size={17} />}
        type="search"
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
