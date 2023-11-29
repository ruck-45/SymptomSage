// Dependencies
import { useEffect } from "react";

// Local Files
import "./FindMyCare.css";
import { directory } from "../symptomScan/utils/customTypes";

type FindMyCareProps = {
  setDirectories: Function;
};

const FindMyCare = (props: FindMyCareProps) => {
  const curDir: directory = [{ name: "Find My Care", path: "/Home/FindMyCare" }];

  useEffect(() => {
    props.setDirectories((prev: directory) => curDir);
  }, []);

  return <div>FindMyCare</div>;
};

export default FindMyCare;
