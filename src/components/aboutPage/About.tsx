// Dependencies
import { useEffect } from "react";

// local Files
import "./About.css";
import { directory } from "../symptomScan/utils/customTypes";

type AboutProps = {
  setDirectories: Function;
};

const About = (props: AboutProps) => {
  const curDir: directory = [{ name: "About", path: "/Home/About" }];

  useEffect(() => {
    props.setDirectories((prev: directory) => curDir);
  }, []);

  return <div>About</div>;
};

export default About;
