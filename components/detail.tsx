import { Button } from "@nextui-org/button";
import { GoArrowLeft } from "react-icons/go";

interface DetailProps {
  setDetail: (value: boolean) => void;
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
      <div className="flex ">
        <div></div>
        <div></div>
      </div>
    </>
  );
}
