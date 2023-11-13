// Dependencies
import { Card, CardHeader, CardBody, CardFooter, Divider, Button, Image } from "@nextui-org/react";
import { IoPlanetOutline } from "react-icons/io5";

// Local Files
import "./SymptomsCard.css";
import SymptomsCardAccordion from "./SymptomsCardAccordion";

type SymptomsCardProps = {
  className?: string;
  symptoms: {
    Name: string;
    Symptoms: {
      Name: string;
      ID: number;
    }[];
  }[];
  setSymptoms: Function;
  setSymptomsIds: Function;
};

const SymptomsCard = (props: SymptomsCardProps) => {
  const className = "max-w-[20rem] bg-transparent " + props.className;

  let noSymptomSelectedClassName = "text-small text-default-500 text-center mt-5 mb-5";
  let symptomsCardAccordionClass = "";

  if (props.symptoms.length > 0) {
    noSymptomSelectedClassName = "hidden";
  } else {
    symptomsCardAccordionClass = "hidden";
  }
  return (
    <Card className={className}>
      <CardHeader className="flex gap-3">
        <IoPlanetOutline className="text-5xl bg-black text-white p-2 rounded-xl" />
        <div className="flex flex-col">
          <p className="text-md">Symptoms List</p>
          <p className="text-small text-default-500">review</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="ps-1 pe-1 pt-5 pb-5">
          <p className={noSymptomSelectedClassName}>No Symptoms Selected</p>
          <SymptomsCardAccordion
            className={symptomsCardAccordionClass}
            symptoms={props.symptoms}
            setsymptoms={props.setSymptoms}
            setsymptomsids={props.setSymptomsIds}
          />
        </div>
      </CardBody>
      <Divider />
      <CardFooter className="justify-center">
        <Button color="danger" variant="shadow" className="font-bold" radius="full">
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SymptomsCard;
