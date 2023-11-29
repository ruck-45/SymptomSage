// Dependencies
import { useEffect } from "react";

// local Files
import "./FitnessPal.css";
import { directory } from "../symptomScan/utils/customTypes";

type FitnessPalProps = {
  setDirectories: Function;
};

const FitnessPal = (props: FitnessPalProps) => {
  const curDir: directory = [{ name: "Fitness Pal", path: "/Home/FitnessPal" }];

  useEffect(() => {
    props.setDirectories((prev: directory) => curDir);
  }, []);
  
  return <div>FitnessPal</div>;
};

export default FitnessPal;
