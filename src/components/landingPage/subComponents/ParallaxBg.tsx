
// Local Files
import "./ParallaxBg.css";

import doc from "../assets/doctor.svg";
import c1 from "../assets/upperCircle.svg";
import c2 from "../assets/lowerCircle.svg";
import l1 from "../assets/leaf1.svg";
import l2 from "../assets/leaf2.svg";
import g4 from "../assets/green4.svg";

import LandingPgCard from "./LandingPgCard";

const ParallaxBg = () => {
  return (
    <div className="ParallaxBg">
      <img className="blueDoc doc hidden xl:block" src={doc} alt="" />
      <img className="blueDoc c1" src={c1} alt="" />
      <img className="blueDoc c2" src={c2} alt="" />
      <LandingPgCard className="LandingPgCard" />
      <img src={l1} className="xl:hidden l1" alt="" />
      <img src={l2} className="xl:hidden l2" alt="" />
      <img src={g4} className="xl:hidden g2" alt="" />
      <img src={l2} className="xl:hidden l3" alt="" />
    </div>
  );
};

export default ParallaxBg;
