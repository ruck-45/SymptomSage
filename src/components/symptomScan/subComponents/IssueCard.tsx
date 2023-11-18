// Dependencies
import { Card, CardHeader, CardBody, CardFooter, Divider, Button, Chip } from "@nextui-org/react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import VisibilitySensor from "react-visibility-sensor";
import { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { animated, useSpring } from "react-spring";

// Local Files
import "./IssueCard.css";
import { specialisation } from "../utils/customTypes";

type IssueCardProps = {
  className?: string;
  issueName: string;
  profName: string;
  accuracy: number;
  ranking: number;
  shortDescription: string;
  longDescription: string;
  medicalCondition: string;
  treatmentDescription: string;
  possibleSymptoms: string;
  specialisations: specialisation;
  issueIcon: JSX.Element;
};


const IssueCard = (props: IssueCardProps) => {
  const className = "bg-transparent cursor-pointer " + props.className;
  const [percentage, setPercentage] = useState<number>(0);
  const [showMore, setShowMore] = useState(false);
  const [unpack, setUnpack] = useState(false);

  const stages = props.medicalCondition.split(".");
  const symptoms = props.possibleSymptoms.split(",");

  const AnimatedCardBody = animated(CardBody);
  const AnimatedDivider = animated(Divider);

  const springProps = useSpring({
    maxHeight: showMore ? "100rem" : "0rem",
    opacity: showMore ? 1 : 0,
    from: {
      maxHeight: showMore ? "0rem" : unpack ? "100rem" : "0",
      opacity: showMore ? 0 : unpack ? 1 : 0,
    },
  });

  const showMoreToggle = () => {
    if (showMore) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    setShowMore((prev) => !prev);
    setUnpack(true);
  };

  return (
    <Card className={className} isPressable>
      <CardHeader className="flex gap-3">
        {props.issueIcon}
        <div className="flex flex-col text-left">
          <p className="text-md">Condition Overview</p>
          <p className="text-small text-default-500">At a Glance</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="lg:flex-row items-center lg:justify-between p-[2rem] gap-[2rem] lg:gap-0">
        <div className="flex flex-col gap-[1rem] lg:max-w-[60%]">
          <p className="issueCardHeading capitalize">{props.issueName}</p>
          <p className="text-small text-default-500 text-justify">
            {showMore ? props.longDescription : props.shortDescription}
          </p>
          <div className="leading-3 italic">
            <p className="text-sm font-semibold capitalize">{props.profName}</p>
            <p className="text-xs text-default-500">Professional Name</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center max-w-[15rem] gap-1">
          <VisibilitySensor onChange={() => setPercentage(Math.floor(props.accuracy))}>
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              className="max-w-[50%] font-bold"
              counterClockwise
              strokeWidth={15}
              styles={buildStyles({
                pathColor: "#7828C8",
                textColor: "#7828C8",
                trailColor: "#c7d2df",
                pathTransitionDuration: 0.8,
              })}
            />
          </VisibilitySensor>
          <p className="text-xs text-default-500">Accuracy</p>
          <p className="text-xs">Ranking : {props.ranking}</p>
        </div>
      </CardBody>
      <AnimatedDivider style={springProps} />
      <AnimatedCardBody style={springProps} className="p-0">
        <div className="flex flex-col lg:flex-row lg:justify-between p-[2rem] gap-[2rem] lg:gap-0">
          <div className="flex flex-col lg:max-w-[60%] gap-[1rem]">
            <p className="font-semibold">Development Phases</p>
            <ul className="text-sm text-default-500 text-justify">
              {stages.map((s, index) => {
                const stage = s.trim();
                if (stage) {
                  return (
                    <li key={index} className="p-[0.2rem] list-disc list-inside">
                      {stage}
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          </div>
          <div className="flex flex-col items-evenly lg:max-w-[30%] gap-[1rem]">
            <p className="w-[100%] font-semibold">Specializations</p>
            <div>
              {props.specialisations.map((ob, index) => {
                return (
                  <Chip key={index} color="success" variant="flat" className="m-[0.1rem]">
                    {ob.Name}
                  </Chip>
                );
              })}
            </div>
          </div>
        </div>
        <AnimatedDivider style={springProps} />
        <div className="flex flex-col gap-[2rem] p-[2rem]">
          <div className="flex flex-col gap-[1rem]">
            <p className="font-semibold">Available Treatment</p>
            <p className="text-sm text-default-500 text-justify">{props.treatmentDescription}</p>
          </div>
          <div className="flex flex-col items-evenly gap-[1rem]">
            <p className="w-[100%] font-semibold">Recognizable Symptoms</p>
            <div>
              {symptoms.map((symptom, index) => {
                return (
                  <Chip key={index} color="warning" variant="flat" className="m-[0.1rem]">
                    {symptom}
                  </Chip>
                );
              })}
            </div>
          </div>
        </div>
      </AnimatedCardBody>
      <Divider />
      <CardFooter className="p-0">
        <Button
          aria-label={showMore ? "Show Less" : "Show More"}
          className="w-[100%] bg-transparent"
          radius="none"
          onClick={showMoreToggle}
        >
          {showMore ? <RiArrowDropUpLine className="text-5xl" /> : <RiArrowDropDownLine className="text-5xl" />}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default IssueCard;
