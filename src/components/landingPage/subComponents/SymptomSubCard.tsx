// Dependencies
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

// Local Files
import "./SymptomSubCard";

type SymptomSubCardProps = {
    src:string
}

const SymptomSubCard = (props: SymptomSubCardProps) => {
  return (
    <Card shadow="sm" isPressable>
      <CardBody className="overflow-visible p-0">
        <Image shadow="sm" radius="lg" width="100%" alt="" className="w-full object-cover h-[5rem]" src={props.src} />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <b>Orange</b>
        <p className="text-default-500">$ 50.00</p>
      </CardFooter>
    </Card>
  );
};

export default SymptomSubCard;