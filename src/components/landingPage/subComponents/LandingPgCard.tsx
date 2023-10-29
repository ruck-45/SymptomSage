// Dependencies
import { Card, CardHeader, CardBody, CardFooter, Link } from "@nextui-org/react";

// Local Files
import "./LandingPgCard.css";
import SymptomSubCard from "./SymptomSubCard";

type LandingPgCardProps = {
  className?: string;
};

const LandingPgCard = (props: LandingPgCardProps) => {
  const className = "LandingCard " + props.className;

  return (
    <Card className={className} shadow="none" radius="none" disableRipple isPressable>
      <CardHeader>
        <h1 className="LandingPgHeading">Symptom Sage</h1>
      </CardHeader>
      <CardBody className="flex flex-row justify-evenly">
        <SymptomSubCard src="https://nextui.org/images/fruit-1.jpeg" />
        <SymptomSubCard src="https://nextui.org/images/fruit-1.jpeg" />
        <SymptomSubCard src="https://nextui.org/images/fruit-1.jpeg" />
        <SymptomSubCard src="https://nextui.org/images/fruit-1.jpeg" />
      </CardBody>
      <CardFooter>
        <Link isExternal showAnchorIcon href="https://github.com/nextui-org/nextui">
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
  );

  //   return <h1 className={className}>Symptom Sage</h1>;
};

export default LandingPgCard;
