// Dependencies
import { Card, CardHeader, CardBody, CheckboxGroup, Image } from "@nextui-org/react";

// Local Files
import "./SubLocationCard.css";
import { CustomCheckbox } from "./CustomCheckbox";

type SubLocationCardProps = {
  className?: string;
  name: string;
  symptoms: {
    ID: number;
    Name: string;
    HasRedFlag: boolean;
    HealthSymptomLocationIDs: number[];
    ProfName: string;
    Synonyms: string[];
  }[];
};

const SubLocationCard = (props: SubLocationCardProps) => {
  return (
    <Card className="max-w-[75%] bg-transparent">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md capitalize">{props.name}</p>
          <p className="text-small text-default-500">Symptoms</p>
        </div>
      </CardHeader>
      <CardBody className="pt-5 pb-5 ps-10 pe-10">
        <CheckboxGroup className="gap-1" orientation="horizontal">
          {props.symptoms.map((ob): JSX.Element => {
            return (
              <CustomCheckbox key={ob.ID} value={ob.ID}>
                {ob.Name}
              </CustomCheckbox>
            );
          })}
        </CheckboxGroup>
      </CardBody>
    </Card>
  );
};

export default SubLocationCard;
