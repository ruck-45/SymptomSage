// Dependencies
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { IoPlanetOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

// Local Files
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
  setDiagnosisToken: Function;
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

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const navigate = useNavigate();

  const submitPrompt = () => {
    if (props.symptoms.length > 0) {
      props.setDiagnosisToken(true);
      navigate("../Diagnosis");
    } else {
      onOpen();
    }
  };

  return (
    <>
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
          <Button color="danger" variant="shadow" className="font-bold" radius="full" onClick={submitPrompt}>
            Submit
          </Button>
        </CardFooter>
      </Card>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Alert</ModalHeader>
              <ModalBody>
                <b>No Symptoms Selected</b>
                <i className="text-small text-default-500">It appears you haven't selected any symptoms.</i>
                <p className="text-small text-default-500">
                  Please make sure to select accurate symptoms for a proper diagnosis.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" onPress={onClose}>
                  Got It
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default SymptomsCard;
