// Dependencies
import { Routes, Route, Navigate } from "react-router-dom";
import { useState, lazy, Suspense, useEffect } from "react";

// Local Files
import HomeLoading from "../../globalSubComponents/HomeLoading";
import { directory } from "./utils/customTypes";

const SymptomsForm = lazy(() => import("./subComponents/SymptomsForm"));
const SymptomsList = lazy(() => import("./subComponents/SymptomsList"));
const Diagnosis = lazy(() => import("./subComponents/Diagnosis"));

type SymptomScanProps = {
  setDirectories: Function;
};

const SymptomScan = (props: SymptomScanProps) => {
  const [symptomsToken, setSymptomsToken] = useState(false);
  const [diagnosisToken, setDiagnosisToken] = useState(false);

  const [infoToken, setInfoToken] = useState(false);
  const [age, setAge] = useState(20);
  const [sex, setSex] = useState("male");

  const [symptoms, setSymptoms] = useState([]);
  const [symptomsids, setSymptomsIds] = useState({});

  const curDir: directory = [{ name: "Symptom Scan", path: "/Home/SymptomScan/SymptomsForm" }];

  useEffect(() => {
    props.setDirectories((prev: directory) => curDir);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="./SymptomsForm" />} />
      <Route
        path="/SymptomsForm"
        element={
          <Suspense fallback={<HomeLoading />}>
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
              setDirectories={props.setDirectories}
            />
          </Suspense>
        }
      />
      <Route
        path="/SymptomsList"
        element={
          symptomsToken ? (
            <Suspense fallback={<HomeLoading />}>
              <SymptomsList
                setSymptoms={setSymptoms}
                setSymptomsIds={setSymptomsIds}
                symptomsids={symptomsids}
                age={age}
                sex={sex}
                setDirectories={props.setDirectories}
              />
            </Suspense>
          ) : (
            <Navigate to="./SymptomsForm" />
          )
        }
      />
      <Route
        path="/Diagnosis"
        element={
          diagnosisToken ? (
            <Suspense fallback={<HomeLoading />}>
              <Diagnosis age={age} sex={sex} symptomsids={symptomsids} setDirectories={props.setDirectories} />
            </Suspense>
          ) : (
            <Navigate to="./SymptomsForm" />
          )
        }
      />
      <Route path="/*" element={<Navigate to="./SymptomsForm" />} />
    </Routes>
  );
};

export default SymptomScan;
