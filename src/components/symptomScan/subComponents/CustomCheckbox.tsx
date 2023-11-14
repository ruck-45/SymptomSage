// Dependencies
import { useCheckbox, Chip, VisuallyHidden, tv } from "@nextui-org/react";
import { useState } from "react";

// Local Files
import CheckIcon from "./CheckIcon";
import { painPointNames } from "../utils/painPointNames";
import { symptomsid, symptom } from "../utils/customTypes";

const checkbox = tv({
  slots: {
    base: "border-default-400 bg-transparent hover:bg-danger hover:border-transparent p-0",
    content: "text-default-500 hover:text-white ps-3 pe-3",
  },
  variants: {
    isSelected: {
      true: {
        base: "border-primary bg-primary hover:bg-primary hover:border-primary",
        content: "text-primary-foreground pl-1",
      },
    },
    isFocusVisible: {
      true: {
        base: "outline-none ring-2 ring-focus ring-offset-2 ring-offset-background",
      },
    },
  },
});

type CustomCheckboxProps = {
  className?: string;
  children: string;
  value: string;
  setsymptoms: Function;
  setsymptomsids: Function;
  painpointid: number;
  symptomsid: number;
  symptomsname: string;
  symptomsids: symptomsid;
};

export const CustomCheckbox = (props: CustomCheckboxProps) => {
  const { children, isFocusVisible, getBaseProps, getLabelProps, getInputProps } = useCheckbox({
    ...props,
  });

  const [isSelected, setIsSelected] = useState(() => {
    if (props.symptomsids[props.symptomsid] === undefined) {
      return false;
    } else {
      return true;
    }
  });

  const styles = checkbox({ isSelected, isFocusVisible });

  const saveSymptom = () => {
    if (isSelected) {
      props.setsymptoms((prevState: symptom) => {
        let updatedSymptoms = prevState.map((ob) => {
          if (ob.Name === painPointNames[props.painpointid]) {
            return {
              ...ob,
              Symptoms: ob.Symptoms.filter((symptom) => symptom.ID !== props.symptomsid),
            };
          }
          return ob;
        });

        updatedSymptoms = updatedSymptoms.filter((ob) => ob.Symptoms.length > 0);

        return updatedSymptoms;
      });

      props.setsymptomsids((prevSymptomsIds: symptomsid) => {
        let updatedSymptomsIds = { ...prevSymptomsIds };
        delete updatedSymptomsIds[props.symptomsid];
        return updatedSymptomsIds;
      });
    } else {
      const newSymptom = {
        Name: props.symptomsname,
        ID: props.symptomsid,
      };

      props.setsymptoms((prevState: symptom) => {
        const painpointExists = prevState.some((ob) => ob.Name === painPointNames[props.painpointid]);

        if (painpointExists) {
          return prevState.map((ob) => {
            if (ob.Name === painPointNames[props.painpointid]) {
              return {
                ...ob,
                Symptoms: [...ob.Symptoms, newSymptom],
              };
            }
            return ob;
          });
        } else {
          return [...prevState, { Name: painPointNames[props.painpointid], Symptoms: [newSymptom] }];
        }
      });

      props.setsymptomsids((prevSymptomsIds: symptomsid) => {
        let updatedSymptomsIds = { ...prevSymptomsIds };
        updatedSymptomsIds[props.symptomsid] = true;

        return updatedSymptomsIds;
      });
    }
    setIsSelected(!isSelected);
  };

  return (
    <label {...getBaseProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <Chip
        classNames={{
          base: styles.base(),
          content: styles.content(),
        }}
        startContent={isSelected ? <CheckIcon className="ml-1 text-white" /> : null}
        variant="faded"
        {...getLabelProps()}
        onClick={saveSymptom}
      >
        {children ? children : isSelected ? "Enabled" : "Disabled"}
      </Chip>
    </label>
  );
};
