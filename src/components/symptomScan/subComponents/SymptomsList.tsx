// Dependencies
import { useLocation } from "react-router-dom";
import {
  GiAbstract002,
  GiAbstract005,
  GiAbstract007,
  GiAbstract008,
  GiAbstract010,
  GiAbstract013,
  GiAbstract014,
  GiAbstract015,
  GiAbstract016,
  GiAbstract018,
} from "react-icons/gi";

// Local Flies
import "./SymptomsList.css";
import lion from "../assets/lionimg.svg";
import SubLocationCard from "./SubLocationCard";
import symptomsdata from "../assets/data.json";

type SymptomsListProps = {
  setSymptoms: Function;
  setSymptomsIds: Function;
  symptomsids: {
    [key: number]: boolean;
  };
};

type iconType = {
  [key: number]: JSX.Element;
};

const iconClass = "text-5xl bg-black text-white p-2 rounded-xl";

const icons: iconType = {
  1: <GiAbstract002 className={iconClass} />,
  2: <GiAbstract005 className={iconClass} />,
  3: <GiAbstract007 className={iconClass} />,
  4: <GiAbstract008 className={iconClass} />,
  5: <GiAbstract010 className={iconClass} />,
  6: <GiAbstract013 className={iconClass} />,
  7: <GiAbstract014 className={iconClass} />,
  8: <GiAbstract015 className={iconClass} />,
  9: <GiAbstract016 className={iconClass} />,
  10: <GiAbstract018 className={iconClass} />,
};

const SymptomsList = (props: SymptomsListProps) => {
  const location = useLocation();
  const { id, age, sex } = location.state;
  const data = symptomsdata.data; // fetch data from backend here

  let iconNumber = 0;

  const getIcon = () => {
    iconNumber = iconNumber === 10 ? 1 : iconNumber + 1;
    return icons[iconNumber];
  };

  return (
    <div className="SymptomsList ps-[1rem] pe-[1rem] md:ps-[2rem] md:pe-[2rem] lg:ps-[5rem] lg:pe-[5rem]">
      <img src={lion} alt="" className="SymptomsListImg hidden xl:block z-[1] bob-on-hover" />
      {data.map((ob): JSX.Element => {
        return (
          <SubLocationCard
            className="z-[2]"
            key={ob.ID}
            name={ob.Name}
            symptoms={ob.symptoms}
            setSymptoms={props.setSymptoms}
            setSymptomsIds={props.setSymptomsIds}
            painpointid={id}
            symptomsids={props.symptomsids}
          >
            {getIcon()}
          </SubLocationCard>
        );
      })}
    </div>
  );
};

export default SymptomsList;
