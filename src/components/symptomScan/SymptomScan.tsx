// Dependencies
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

// Local Files
import "./SymptomScan.css";
import SymptomsForm from "./subComponents/SymptomsForm";
import SymptomsList from "./subComponents/SymptomsList";
import Diagnosis from "./subComponents/Diagnosis";

const SymptomScan = () => {
  const [symptomsToken, setSymptomsToken] = useState(false);
  const [diagnosisToken, setDiagnosisToken] = useState(false);
  
  const [infoToken, setInfoToken] = useState(false);
  const [age, setAge] = useState(20);
  const [sex, setSex] = useState("male");

  const [symptoms, setSymptoms] = useState([]);
  const [symptomsids, setSymptomsIds] = useState({});

  return (
    <>
      <div className="s2TopBar"></div>
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
            />
          }
        />
        <Route
          path="/SymptomsList"
          element={
            symptomsToken ? (
              <SymptomsList setSymptoms={setSymptoms} setSymptomsIds={setSymptomsIds} symptomsids={symptomsids} />
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
              />
            )
          }
        />
        <Route
          path="/Diagnosis"
          element={
            diagnosisToken ? (
              <Diagnosis age={age} sex={sex} symptomsids={symptomsids} />
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
            />
          }
        />
      </Routes>
    </>
  );
};

export default SymptomScan;
