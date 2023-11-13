// Dependencies
import { Accordion, AccordionItem, Chip } from "@nextui-org/react";
import { useState } from "react";

// Local Files
import "./SymptomsCardAccordion.css";

type prevSymptomsOb = {
  Name: string;
  Symptoms: {
    Name: string;
    ID: number;
  }[];
};

type SymptomsCardAccordionProps = {
  className?: string;
  setsymptomsids: Function;
  setsymptoms: Function;
  symptoms: prevSymptomsOb[];
};

type prevSymptomsIdType = {
  [key: number]: boolean;
};

const SymptomsCardAccordion = (props: SymptomsCardAccordionProps) => {

  const handleClose = (painPointname: string, symptomToRemove: number) => {
    console.log(symptomToRemove)
    props.setsymptoms((prevState: prevSymptomsOb[]) => {
      let updatedSymptoms = prevState.map((ob) => {
        if (ob.Name === painPointname) {
          return {
            ...ob,
            Symptoms: ob.Symptoms.filter((symptom) => symptom.ID !== symptomToRemove),
          };
        }
        return ob;
      });
      console.log("here...")
      console.log(updatedSymptoms)

      updatedSymptoms = updatedSymptoms.filter((ob) => ob.Symptoms.length > 0);

      return updatedSymptoms;
    });

    props.setsymptomsids((prevSymptomsIds: prevSymptomsIdType) => {
      let updatedSymptomsIds = { ...prevSymptomsIds };
      delete updatedSymptomsIds[symptomToRemove];
      return updatedSymptomsIds;
    });
  };

  return (
    <Accordion className={props.className} isCompact>
      {props.symptoms.map((ob) => {
        return (
          <AccordionItem key={ob.Name} aria-label={ob.Name} title={ob.Name}>
            {ob.Symptoms.map((symptom) => {
              return (
                <Chip
                  key={symptom.ID}
                  onClose={() => handleClose(ob.Name, symptom.ID)}
                  variant="bordered"
                  color="default"
                  className="m-[0.2rem] border-default-400"
                >
                  {symptom.Name}
                </Chip>
              );
            })}
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default SymptomsCardAccordion;
