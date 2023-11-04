// Dependencies
import { Routes, Route, Navigate } from "react-router-dom";

// Local Files
import "./Home.css";
import HomeNavBar from "./subComponents/HomeNavBar";
import Content from "../contentPage/Content";
import About from "../aboutPage/About";
import Services from "../servicesPage/Services";

const Home = () => {
  return (
    <div className="Home">
      <HomeNavBar />
      <Routes>
        <Route path="/" element={<Navigate to="./Content" />} />
        <Route path="/Content" element={<Content />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
};

export default Home;
