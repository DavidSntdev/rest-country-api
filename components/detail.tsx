import { Button } from "@nextui-org/button";
import { GoArrowLeft } from "react-icons/go";

export default function Detail() {
  return (
    <>
      <Button className="rounded-md shadow-md bg-veryLightGray dark:bg-darkBlue place-self-start px-10 gap-1">
        <GoArrowLeft className="mb-0.5" size={20} /> Back
      </Button>
      <div className="flex ">
        <div></div>
        <div></div>
      </div>
    </>
  );
}
