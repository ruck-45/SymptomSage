// Dependencies
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

// Local Files
import "./SymptomSubCard.css";

type SymptomSubCardProps = {
  src: string;
  className?: string;
  serviceName: string;
  serviceDescription: string;
};

const SymptomSubCard = (props: SymptomSubCardProps) => {
  const className = "bg-transparent " + props.className;
  return (
    <Card shadow="none" isPressable className={className}>
      <CardBody className="overflow-visible p-0 pl-2 pr-2 pt-2">
        <Image
          radius="none"
          width="100%"
          alt=""
          className="w-full object-cover ml-auto mr-auto subCardImage"
          src={props.src}
        />
      </CardBody>
      <CardFooter className="text-small flex-col items-center">
        <b className="footerServiceName mb-1">{props.serviceName}</b>
        <p className="text-default-500 footerServiceDescription">{props.serviceDescription}</p>
      </CardFooter>
    </Card>
  );
};

export default SymptomSubCard;
