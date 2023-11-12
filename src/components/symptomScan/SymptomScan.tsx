// Dependencies
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

// Local Files
import "./SymptomScan.css"
import SymptomsForm from "./subComponents/SymptomsForm";
import SymptomsList from "./subComponents/SymptomsList";

const SymptomScan = () => {
  const [symptomsToken, setSymptomsToken] = useState(true); // change-it to False and also change the default navigation
  const [infoToken, setInfoToken] = useState(false);
  const [age, setAge] = useState(20);
  const [sex, setSex] = useState("male");

  const [symptoms, setSymptoms] = useState({});

  return (
    <>
      <div className="s2TopBar"></div>
      <Routes>
        <Route path="/" element={<Navigate to="./SymptomsList" />} />
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
            />
          }
        />
        <Route
          path="/SymptomsList"
          element={
            symptomsToken ? (
              <SymptomsList />
            ) : (
              <SymptomsForm
                setSymptomsToken={setSymptomsToken}
                infoToken={infoToken}
                setInfoToken={setInfoToken}
                age={age}
                sex={sex}
                setAge={setAge}
                setSex={setSex}
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
            />
          }
        />
      </Routes>
    </>
  );
};

export default SymptomScan;
