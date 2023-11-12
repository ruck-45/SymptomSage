// Dependencies
import { useLocation } from "react-router-dom";

// Local Flies
import "./SymptomsList.css";
import SubLocationCard from "./SubLocationCard";
import symptomsdata from "../assets/data.json";

const SymptomsList = () => {
  // const location = useLocation();
  // const { id,age,sex } = location.state;
  // console.log(id,age,sex)
  const data = symptomsdata.data;
  return (
    <div className="SymptomsList">
      {data.map((ob): JSX.Element => {
        return <SubLocationCard key={ob.ID} name={ob.Name} symptoms={ob.symptoms} />;
      })}
    </div>
  );
};

export default SymptomsList;
