// Dependencies
import { useEffect } from "react";

// local Files
import "./Services.css";
import { directory } from "../symptomScan/utils/customTypes";

type ServicesProps = {
  setDirectories: Function;
};

const Services = (props: ServicesProps) => {
  const curDir: directory = [{ name: "Services", path: "/Home/Services" }];

  useEffect(() => {
    props.setDirectories((prev: directory) => curDir);
  }, []);

  return <div>Services</div>;
};

export default Services;
