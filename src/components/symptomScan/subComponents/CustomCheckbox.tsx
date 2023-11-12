import { useCheckbox, Chip, VisuallyHidden, tv } from "@nextui-org/react";
import CheckIcon from "./CheckIcon";

const checkbox = tv({
  slots: {
    base: "border-default-400 bg-transparent hover:bg-danger hover:border-transparent p-0",
    content: "text-default-500 hover:text-white ps-3 pe-3",
  },
  variants: {
    isSelected: {
      true: {
        base: "border-primary bg-primary hover:bg-primary-500 hover:border-primary-500",
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

export const CustomCheckbox = (props: any) => {
  const { children, isSelected, isFocusVisible, getBaseProps, getLabelProps, getInputProps } = useCheckbox({
    ...props,
  });

  const styles = checkbox({ isSelected, isFocusVisible });

  const saveSymptom = () => {
    if (isSelected) {
      console.log("removing symptoms ....");
    } else {
      console.log("Saving symptoms ....");
    }
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
