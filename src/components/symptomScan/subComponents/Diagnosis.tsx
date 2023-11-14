// Dependencies
import { useEffect } from "react";

// local Files
import "./Diagnosis.css";
import { directory, symptomsid } from "../utils/customTypes";

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

  return <div>Diagnosis</div>;
};

export default Diagnosis;
