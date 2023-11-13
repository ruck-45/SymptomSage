// Dependencies
import { useLocation } from "react-router-dom";

// Local Flies
import "./SymptomsList.css";
import SubLocationCard from "./SubLocationCard";
import symptomsdata from "../assets/data.json";

type SymptomsListProps = {
  setSymptoms: Function;
  setSymptomsIds: Function;
  symptomsids: {
    [key: number]: boolean;
  };
};

const SymptomsList = (props: SymptomsListProps) => {
  const location = useLocation();
  const { id, age, sex } = location.state;
  const data = symptomsdata.data; // fetch data from backend here
  return (
    <div className="SymptomsList">
      {data.map((ob): JSX.Element => {
        return (
          <SubLocationCard
            key={ob.ID}
            name={ob.Name}
            symptoms={ob.symptoms}
            setSymptoms={props.setSymptoms}
            setSymptomsIds={props.setSymptomsIds}
            painpointid={id}
            symptomsids={props.symptomsids}
          />
        );
      })}
    </div>
  );
};

export default SymptomsList;
