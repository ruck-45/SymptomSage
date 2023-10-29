
// Local Files
import "./ParallaxBg.css";

import doc from "../assets/doctor.svg";
import c1 from "../assets/upperCircle.svg";
import c2 from "../assets/lowerCircle.svg";

import leaf1 from '../assets/leaf1.svg';
import leaf2 from "../assets/leaf2.svg";
import leaf3 from "../assets/leaf3.svg";
import leaf4 from "../assets/leaf4.svg";
import leaf5 from "../assets/leaf5.svg";

import LandingPgCard from "./LandingPgCard";

const ParallaxBg = () => {
  return (
    <div className="ParallaxBg">
      <img className="blueDoc doc" src={doc} alt="" />
      <img className="blueDoc c1" src={c1} alt="" />
      <img className="blueDoc c2" src={c2} alt="" />
      <LandingPgCard className="LandingPgCard" />

      {/* <img className="pinkLeaf l1" src={leaf1} alt="" />
      <img className="pinkLeaf l2" src={leaf2} alt="" />
      <img className="pinkLeaf l3" src={leaf3} alt="" />
      <img className="pinkLeaf l4" src={leaf4} alt="" />
      <img className="pinkLeaf l5" src={leaf5} alt="" /> */}
    </div>
  );
};

export default ParallaxBg;
