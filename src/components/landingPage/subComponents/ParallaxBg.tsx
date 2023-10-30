
// Local Files
import "./ParallaxBg.css";

import doc from "../assets/doctor.svg";
import c1 from "../assets/upperCircle.svg";
import c2 from "../assets/lowerCircle.svg";

import LandingPgCard from "./LandingPgCard";

const ParallaxBg = () => {
  return (
    <div className="ParallaxBg">
      <img className="blueDoc doc hidden xl:block" src={doc} alt="" />
      <img className="blueDoc c1" src={c1} alt="" />
      <img className="blueDoc c2" src={c2} alt="" />
      <LandingPgCard className="LandingPgCard" />
    </div>
  );
};

export default ParallaxBg;
