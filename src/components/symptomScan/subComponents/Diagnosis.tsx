// Dependencies
import { useEffect } from "react";


// local Files
import "./Diagnosis.css";
import { directory, symptomsid } from "../utils/customTypes";
import Yoga from "./Yoga";
import IssueCard from "./IssueCard";
import issueData from "../assets/issue.json";

type DiagnosisProps = {
  age: number;
  sex: string;
  symptomsids: symptomsid;
  setDirectories: Function;
  directories: directory;
};

const Diagnosis = (props: DiagnosisProps) => {
  const curDir: directory = [
    { name: "Symptom Scan", path: "/Home/SymptomScan/SymptomsForm" },
    { name: "Diagnosis", path: "/Home/SymptomScan/Diagnosis" },
  ];

  useEffect(() => {
    props.setDirectories((prev: directory) => curDir);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // Fetch Diagnosis data here
  const data = issueData.data;


  return (
    <div
      className="Diagnosis flex flex-col xl:flex-row justify-evenly gap-[5rem] items-center xl:items-stretch xl:gap-[2rem] relative"
    >
      <div>
        <IssueCard className="IssueCard" />
        {/* {data.map((ob) => {
          return <IssueCard className="IssueCard" />;
        })} */}
      </div>
      <div>
        <Yoga className="yoga-bob-on-hover xl:sticky xl:top-[10rem]" />
      </div>
    </div>
  );
};

export default Diagnosis;
