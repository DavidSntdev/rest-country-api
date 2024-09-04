import { Button } from "@nextui-org/button";
import { GoArrowDown, GoArrowUp } from "react-icons/go";
interface BotoesProps {
  mostrarTudo: boolean;
  mostrar: (value: boolean) => void;
}

export default function Botoes({ ...props }: BotoesProps) {
  return (
    <>
      {props.mostrarTudo ? (
        <Button
          className="bg-transparent h-5"
          onClick={() => props.mostrar(false)}
        >
          <GoArrowUp />
        </Button>
      ) : (
        <Button
          className="bg-transparent h-5"
          onClick={() => props.mostrar(true)}
        >
          <GoArrowDown />
        </Button>
      )}
    </>
  );
}
