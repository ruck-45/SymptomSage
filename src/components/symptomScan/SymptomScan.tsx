// Dependencies
import { Divider } from "@nextui-org/react";
import { useState } from "react";


// Local Files
import "./SymptomScan.css";
import Body from "./subComponents/Body";
import S2Card from "./subComponents/S2Card";
import SymptomsCard from "./subComponents/SymptomsCard";

const SymptomScan = () => {
  const [age,setAge] = useState(20);
  const [sex, setSex] = useState('male');
  return (
    <>
      <div className="s2TopBar"></div>
      <div className="symptomScan">
        <div className="flex flex-col gap-[2rem]">
          <S2Card className="S2Card" setAge={setAge} setSex={setSex} />
          <Divider className="hidden md:block xl:hidden" />
          <SymptomsCard className="min-w-[28rem] xl:hidden self-center" />
        </div>
        <Body className="bob-on-hover" />
        <SymptomsCard className="min-w-[20rem] hidden xl:block self-start" />
      </div>
    </>
  );
}

export default SymptomScan;