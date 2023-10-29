import "./Landing.css";
import NavBar from "./subComponents/NavBar";

import doc from './assets/upper_circle.svg'




const Landing = () => {
  return (
    <div>
      <NavBar />
      <img src={doc} alt="" style={{ height: "100%", width: "100%" }} />
    </div>
  );
};

export default Landing;
