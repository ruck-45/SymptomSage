// Dependencies
import { Card, CardHeader, CardBody, CardFooter, Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

// Local Files
import "./LandingPgCard.css";
import SymptomSubCard from "./SymptomSubCard";

import SymptomScan from "../assets/symptomScan.png";
import FitnessPal from "../assets/fitnessPal.png";
import FindMyCare from "../assets/findMyCare.png";
import MedMatch360 from "../assets/medMatch360.png";

import l3 from "../assets/leaf3.svg";
import l4 from "../assets/leaf4.svg";
import l5 from "../assets/leaf5.svg";

type LandingPgCardProps = {
  className?: string;
};

const imgSrc = [
  {
    id: 1,
    img: SymptomScan,
    serviceName: "SymptomScan",
    serviceDescription: "Your silent health Detective",
  },
  {
    id: 2,
    img: FitnessPal,
    serviceName: "FitnessPal",
    serviceDescription: "Personalized insights and Expert Tips",
  },
  {
    id: 3,
    img: FindMyCare,
    serviceName: "FindMyCare",
    serviceDescription: "Discover healthcare options near You",
  },
  {
    id: 4,
    img: MedMatch360,
    serviceName: "MedMatch360",
    serviceDescription: "Your compass through the world of Medication",
  },
];

const LandingPgCard = (props: LandingPgCardProps) => {
  const className = "gap-[0.5rem] overflow-visible bg-transparent " + props.className;

  const navigate = useNavigate();
  const routeChangeAuth = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, state: boolean) => {
    let path = `../Authentication`;
    navigate(path, { state: state });
    event.preventDefault();
  };

  return (
    <Card className={className} shadow="none" radius="none" disableRipple isPressable>
      <CardHeader className="pl-8">
        <h1 className="LandingPgHeading">Symptom Sage</h1>
        <img src={l5} alt="" className="leaf leaf5" />
        <img src={l4} alt="" className="leaf leaf4 " />
      </CardHeader>
      <CardBody className="flex flex-row p-0 overflow-visible justify-center xl:justify-normal landingCardBody">
        {imgSrc.map((ob): JSX.Element => {
          return (
            <SymptomSubCard
              key={ob.id}
              src={ob.img}
              serviceName={ob.serviceName}
              serviceDescription={ob.serviceDescription}
              className="LandingSubCard"
            />
          );
        })}
      </CardBody>
      <CardFooter className="mt-5 pl-8 overflow-visible justify-center xl:justify-normal">
        <Button
          color="danger"
          variant="shadow"
          size="lg"
          className="landingCardBtn"
          radius="full"
          onClick={(e) => routeChangeAuth(e, true)}
        >
          Login
        </Button>
        <img src={l3} alt="" className="leaf leaf3" />
      </CardFooter>
    </Card>
  );
};

export default LandingPgCard;
