// Dependencies
import {
  Divider,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

// Local Files
import "./SymptomsForm.css";
import Body from "./Body";
import S2Card from "./S2Card";
import SymptomsCard from "./SymptomsCard";
import { useState } from "react";

type symptomsFormProps = {
  setSymptomsToken: Function;
  infoToken: boolean;
  setInfoToken: Function;
  age: number;
  sex: string;
  setAge: Function;
  setSex: Function;
};

const SymptomsForm = (props: symptomsFormProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [painPoint, setPainPoint] = useState(-1);

  const navigate = useNavigate();

  return (
    <>
      <div className="symptomsForm">
        <div className="flex flex-col gap-[2rem]">
          <S2Card
            className="S2Card"
            age={props.age}
            sex={props.sex}
            setAge={props.setAge}
            setSex={props.setSex}
            setInfoToken={props.setInfoToken}
          />
          <Divider className="hidden md:block xl:hidden" />
          <SymptomsCard className="min-w-[28rem] xl:hidden self-center" />
        </div>
        <Body
          className="bob-on-hover"
          age={props.age}
          sex={props.sex}
          setSymptomsToken={props.setSymptomsToken}
          infoToken={props.infoToken}
          onOpen={onOpen}
          setPainPoint={setPainPoint}
        />
        <SymptomsCard className="min-w-[20rem] hidden xl:block self-start" />
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Alert</ModalHeader>
              <ModalBody>
                <b>Have you accurately entered your Age and Sex?</b>
                <i className="text-small text-default-500">It appears the Age and Sex Field hasn't been updated.</i>
                <p className="text-small text-default-500">
                  Please ensure that your Age and Sex are entered correctly as it's crucial for fetching precise
                  symptoms relevant to the specified age and sex demographics.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="primary"
                  variant="flat"
                  onPress={() => {
                    onClose();
                    props.setInfoToken(true);
                    navigate("../SymptomsList", { state: { id: painPoint, age: props.age, sex: props.sex } });
                  }}
                >
                  Yes, I Have
                </Button>
                <Button color="danger" onPress={onClose}>
                  No
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default SymptomsForm;
