// Dependencies
import { Card, CardHeader, CardBody, Divider, CardFooter, Slider, Radio, RadioGroup } from "@nextui-org/react";

// Local Files
import "./S2Card.css";
import Arrow from "./Arrow";

type S2CardProps = {
  className?: string;
  setAge: Function;
  setSex: Function;
};

const S2Card = (props: S2CardProps) => {
  const className = "bg-transparent text-left " + props.className;

  return (
    <Card className={className} shadow="none" isPressable>
      <CardHeader className="flex gap-3">
        <div className="flex flex-col gap-[2rem]">
          <p className="s2CardHeading">Symptom Scan</p>
          <p className="text-small text-default-500">
            Experiencing unusual symptoms or discomfort? & not quite sure what might be causing it? Symptom Scan is here
            to help you gain insights into your health. We've made it simple for you. Just click where it hurts on our
            virtual body, select your discomfort and related symptoms, share some key info, and voilà, you'll get a
            quick analysis of possible diagnoses and their probability.
          </p>
          <i className="text-small text-default-500">Navigating Health, One Click at a Time!</i>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="S2CardBody">
        <p className="text-small text-default-500 max-w-[85%]">
          Simply click on the affected region, and let us uncover possible symptoms for you.
          <i> Discover, Diagnose & Decide .</i>
        </p>
        <Arrow />
      </CardBody>
      <Divider />
      <CardFooter className="flex-col items-start gap-[2rem]">
        <Slider
          label="Select your Age"
          step={1}
          maxValue={100}
          minValue={0}
          defaultValue={20}
          className="max-w-md slider"
          showTooltip
          size="lg"
          color="secondary"
          onChange={(e) => {
            props.setAge(e);
          }}
        />
        <RadioGroup
          label="Select your Sex"
          orientation="horizontal"
          color="secondary"
          defaultValue="male"
          onChange={(e) => {
            props.setSex(e.target.value);
          }}
        >
          <Radio value="male">Male</Radio>
          <Radio value="female">Female</Radio>
        </RadioGroup>
      </CardFooter>
    </Card>
  );
};

export default S2Card;
