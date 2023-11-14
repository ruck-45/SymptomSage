// Dependencies
import { Accordion, AccordionItem, Chip } from "@nextui-org/react";

// Local Files
import { symptom, symptomsid } from "../utils/customTypes";

type SymptomsCardAccordionProps = {
  className?: string;
  setsymptomsids: Function;
  setsymptoms: Function;
  symptoms: symptom;
};

const SymptomsCardAccordion = (props: SymptomsCardAccordionProps) => {
  const handleClose = (painPointname: string, symptomToRemove: number) => {
    console.log(symptomToRemove);
    props.setsymptoms((prevState: symptom) => {
      let updatedSymptoms = prevState.map((ob) => {
        if (ob.Name === painPointname) {
          return {
            ...ob,
            Symptoms: ob.Symptoms.filter((symptom) => symptom.ID !== symptomToRemove),
          };
        }
        return ob;
      });
      updatedSymptoms = updatedSymptoms.filter((ob) => ob.Symptoms.length > 0);

      return updatedSymptoms;
    });

    props.setsymptomsids((prevSymptomsIds: symptomsid) => {
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
