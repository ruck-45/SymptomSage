// Dependencies
import { Card, CardHeader, CardBody, CardFooter, Divider, Button, Chip } from "@nextui-org/react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import VisibilitySensor from "react-visibility-sensor";
import { useState } from "react";
import { IoPlanetOutline } from "react-icons/io5";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { animated, useSpring } from "react-spring";

// Local Files
import "./IssueCard.css";

type IssueCardProps = {
  className?: string;
};

const IssueCard = (props: IssueCardProps) => {
  const className = "bg-transparent cursor-pointer " + props.className;
  const [percentage, setPercentage] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [unpack, setUnpack] = useState(false);

  const shortDescription =
    "Polyneuropathy is the malfunctioning of numerous peripheral nerves located at various parts of the body. This malfunctioning occurs at the same time and can have various causes. The condition can be considered acute when it starts suddenly and chronic when it develops progressively, over a long period.";

  const longDescription =
    "Polyneuropathy is a disease of the nerves which are responsible for movement in the arms and legs and also for the sense of touch. The patient suffers from weakness in certain muscle groups as well as issues with sensation and touch in the arms and legs. Various underlying causes may be behind polyneuropathy, such as diabetes, alcoholism, certain infections, vitamin B12 deficiency, and certain inherited diseases.";

  const medicalCondition =
    "Patients start off experiencing paresthesia (like ants crawling across the skin) around the toes or soles at night, as well as feeling as though they are wearing socks when they are not. Digits on both sides of the body are affected. Later, paralysis of small and large muscles of the foot sets in, which manifests as the feeling that the tip of the foot is getting caught on something while walking. The arms are generally affected much later in the course of the disease.";

  const treatmentDescription =
    "Treatment is dependening on the cause. Because diabetes can lead as well to polyneuropathy, regulating the blood sugar is important. Consumption of alcohol should be avoided. To treat the pain various medications can be used.";

  const possibleSymptoms =
    "Hand pain,Limited mobility of the fingers,Muscular atrophy of the arm,Muscular weakness in the arm,Numbness of the hands,Numbness in the arm,Pain in the limbs,Tingling,Numbness in the leg,Non-healing skin wound,Muscular weakness in the leg,Muscular atrophy in the leg,Muscle weakness,Muscle pain,Moist and softened skin,Limited mobility of the ankle,Leg ulcer,Increased touch sensitivity,Impairment of male potency,Foot pain,Cold hands,Cold feet,Changes in the nails,Tremor at rest";

  const specialisation = [
    { ID: 15, Name: "General practice", Accuracy: 90, Ranking: 0 },
    { ID: 31, Name: "Orthopedics", Accuracy: 56.79611, Ranking: 0 },
    { ID: 27, Name: "Neurology", Accuracy: 28.3980541, Ranking: 0 },
    { ID: 41, Name: "Rheumatology", Accuracy: 27.0873756, Ranking: 0 },
    { ID: 20, Name: "Hand surgery", Accuracy: 21.8446579, Ranking: 0 },
    { ID: 19, Name: "Internal medicine", Accuracy: 3.93203831, Ranking: 0 },
  ];

  const stages = medicalCondition.split(".");
  const symptoms = possibleSymptoms.split(",");

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
    <Card className={className}>
      <CardHeader className="flex gap-3">
        <IoPlanetOutline className="text-5xl bg-black text-white p-2 rounded-xl" />
        <div className="flex flex-col">
          <p className="text-md">Condition Overview</p>
          <p className="text-small text-default-500">At a Glance</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="flex-row justify-between p-[2rem]">
        <div className="flex flex-col gap-[1rem] max-w-[60%]">
          <p className="issueCardHeading">Simultaneous Malfunction Of Peripheral Nerves</p>
          <p className="text-small text-default-500 text-justify">{showMore ? longDescription : shortDescription}</p>
          <div className="leading-3 italic">
            <p className="text-sm font-semibold">Polyneuropathy</p>
            <p className="text-xs text-default-500">Professional Name</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center max-w-[30%] gap-1">
          <VisibilitySensor onChange={() => setPercentage(66)}>
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
          <p className="text-xs">Ranking : 1</p>
        </div>
      </CardBody>
      <AnimatedDivider style={springProps} />
      <AnimatedCardBody style={springProps} className="p-0">
        <div className="flex justify-between p-[2rem]">
          <div className="flex flex-col max-w-[60%] gap-[1rem]">
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
              })}
            </ul>
          </div>
          <div className="flex flex-col items-evenly max-w-[30%] gap-[1rem]">
            <p className="w-[100%] font-semibold">Specializations</p>
            <div>
              {specialisation.map((ob, index) => {
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
            <p className="text-sm text-default-500 text-justify">{treatmentDescription}</p>
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
