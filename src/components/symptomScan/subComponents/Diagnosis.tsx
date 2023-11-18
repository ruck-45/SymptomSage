// Dependencies
import { useEffect } from "react";
import { Pagination } from "@nextui-org/react";
import { useState } from "react";

import {
  GiAbstract116,
  GiAbstract102,
  GiAbstract100,
  GiAbstract088,
  GiAbstract067,
  GiAbstract080,
  GiAbstract095,
  GiAbstract053,
  GiAbstract045,
  GiAbstract062,
} from "react-icons/gi";

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

const iconClass = "text-5xl bg-black text-white p-2 rounded-xl";

const iconArray = [
  <GiAbstract116 className={iconClass} />,
  <GiAbstract102 className={iconClass} />,
  <GiAbstract100 className={iconClass} />,
  <GiAbstract088 className={iconClass} />,
  <GiAbstract067 className={iconClass} />,
  <GiAbstract080 className={iconClass} />,
  <GiAbstract095 className={iconClass} />,
  <GiAbstract053 className={iconClass} />,
  <GiAbstract045 className={iconClass} />,
  <GiAbstract062 className={iconClass} />,
];

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
  const [index, setIndex] = useState(0);

  const changeCard = (e: number) => {
    setIndex(e - 1);
  };

  return (
    <div className="Diagnosis flex flex-col xl:flex-row justify-evenly gap-[5rem] items-center xl:items-stretch xl:gap-[2rem] relative ps-[2rem] pe-[2rem] lg:p-0 pt-[2rem] lg:pt-[3rem] xl:pt-[5rem]">
      <div className="flex flex-col gap-[2rem] items-center">
        <IssueCard
          key={index}
          issueName={data[index].Issue.Name}
          profName={data[index].Issue.ProfName}
          accuracy={data[index].Issue.Accuracy}
          ranking={index + 1}
          shortDescription={data[index].Info.DescriptionShort}
          longDescription={data[index].Info.Description}
          medicalCondition={data[index].Info.MedicalCondition}
          treatmentDescription={data[index].Info.TreatmentDescription}
          possibleSymptoms={data[index].Info.PossibleSymptoms}
          specialisations={data[index].Specialisation}
          className="IssueCard"
          issueIcon={iconArray[index]}
        />
        <Pagination
          total={data.length}
          initialPage={1}
          size="sm"
          color="danger"
          variant="light"
          showControls
          loop
          showShadow
          onChange={changeCard}
        />
      </div>
      <div>
        <Yoga className="yoga-bob-on-hover xl:sticky xl:top-[10rem]" />
      </div>
    </div>
  );
};

export default Diagnosis;
