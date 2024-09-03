import { Select, SelectItem } from "@nextui-org/select";
import { Input } from "@nextui-org/input";

import { SearchIcon } from "./icons";

import { regions } from "@/config/regions";

export default function Home() {
  return (
    <>
      <div className="flex justify-between gap-4 w-full">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
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
      </div>
      <div></div>
    </>
  );
}
