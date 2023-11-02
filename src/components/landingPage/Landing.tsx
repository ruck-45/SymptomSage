import "./Landing.css";
import NavBar from "./subComponents/NavBar";
import ParallaxBg from './subComponents/ParallaxBg'



const Landing = () => {
  return (
    <div>
      <NavBar className= 'Nav' />
      <ParallaxBg />
    </div>
  );
};

export default Landing;
