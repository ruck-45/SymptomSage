// Dependencies
import { useEffect } from "react";

// local Files
import "./MedMatch360.css";
import { directory } from "../symptomScan/utils/customTypes";

type MedMatch360Props = {
  setDirectories: Function;
};

const MedMatch360 = (props: MedMatch360Props) => {
  const curDir: directory = [{ name: "Med Match 360", path: "/Home/MedMatch360" }];

  useEffect(() => {
    props.setDirectories((prev: directory) => curDir);
  }, []);

  return <div>MedMatch360</div>;
};

export default MedMatch360;
