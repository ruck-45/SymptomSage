// Dependencies
import { Routes, Route, Navigate, Link } from "react-router-dom";
import { useState } from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

// Local Files
import "./SymptomScan.css";
import SymptomsForm from "./subComponents/SymptomsForm";
import SymptomsList from "./subComponents/SymptomsList";
import Diagnosis from "./subComponents/Diagnosis";

const SymptomScan = () => {
  const [symptomsToken, setSymptomsToken] = useState(false);
  const [diagnosisToken, setDiagnosisToken] = useState(true); // change this to false and also the default routing

  const [infoToken, setInfoToken] = useState(false);
  const [age, setAge] = useState(20);
  const [sex, setSex] = useState("male");

  const [symptoms, setSymptoms] = useState([]);
  const [symptomsids, setSymptomsIds] = useState({});

  const [directories, setDirectories] = useState([{ name: "Symptom Scan", path: "/Home/SymptomScan/SymptomsForm" }]);

  return (
    <>
      <div className="s2TopBar flex items-center ps-[7%]">
        <Breadcrumbs size="lg" className="font-semibold">
          {directories.map((ob) => {
            return (
              <BreadcrumbItem key={ob.name}>
                <Link to={ob.path}>{ob.name}</Link>
              </BreadcrumbItem>
            );
          })}
        </Breadcrumbs>
      </div>
      <Routes>
        <Route path="/" element={<Navigate to="./SymptomsForm" />} />
        <Route
          path="/SymptomsForm"
          element={
            <SymptomsForm
              setSymptomsToken={setSymptomsToken}
              infoToken={infoToken}
              setInfoToken={setInfoToken}
              age={age}
              sex={sex}
              setAge={setAge}
              setSex={setSex}
              symptoms={symptoms}
              setSymptoms={setSymptoms}
              setSymptomsIds={setSymptomsIds}
              setDiagnosisToken={setDiagnosisToken}
              setDirectories={setDirectories}
              directories={directories}
            />
          }
        />
        <Route
          path="/SymptomsList"
          element={
            symptomsToken ? (
              <SymptomsList
                setSymptoms={setSymptoms}
                setSymptomsIds={setSymptomsIds}
                symptomsids={symptomsids}
                age={age}
                sex={sex}
                setDirectories={setDirectories}
                directories={directories}
              />
            ) : (
              <SymptomsForm
                setSymptomsToken={setSymptomsToken}
                infoToken={infoToken}
                setInfoToken={setInfoToken}
                age={age}
                sex={sex}
                setAge={setAge}
                setSex={setSex}
                symptoms={symptoms}
                setSymptoms={setSymptoms}
                setSymptomsIds={setSymptomsIds}
                setDiagnosisToken={setDiagnosisToken}
                setDirectories={setDirectories}
                directories={directories}
              />
            )
          }
        />
        <Route
          path="/Diagnosis"
          element={
            diagnosisToken ? (
              <Diagnosis
                age={age}
                sex={sex}
                symptomsids={symptomsids}
                setDirectories={setDirectories}
                directories={directories}
              />
            ) : (
              <SymptomsForm
                setSymptomsToken={setSymptomsToken}
                infoToken={infoToken}
                setInfoToken={setInfoToken}
                age={age}
                sex={sex}
                setAge={setAge}
                setSex={setSex}
                symptoms={symptoms}
                setSymptoms={setSymptoms}
                setSymptomsIds={setSymptomsIds}
                setDiagnosisToken={setDiagnosisToken}
                setDirectories={setDirectories}
                directories={directories}
              />
            )
          }
        />
        <Route
          path="/*"
          element={
            <SymptomsForm
              setSymptomsToken={setSymptomsToken}
              infoToken={infoToken}
              setInfoToken={setInfoToken}
              age={age}
              sex={sex}
              setAge={setAge}
              setSex={setSex}
              symptoms={symptoms}
              setSymptoms={setSymptoms}
              setSymptomsIds={setSymptomsIds}
              setDiagnosisToken={setDiagnosisToken}
              setDirectories={setDirectories}
              directories={directories}
            />
          }
        />
      </Routes>
    </>
  );
};

export default SymptomScan;
