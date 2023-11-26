// Dependencies
import { Routes, Route, Navigate } from "react-router-dom";

// Local Files
import HomeNavBar from "./subComponents/HomeNavBar";
import About from "../aboutPage/About";
import Services from "../servicesPage/Services";
import SymptomScan from "../symptomScan/SymptomScan";
import FitnessPal from "../fitnessPal/FitnessPal";
import MedMatch360 from "../medMatch360/MedMatch360";
import FindMyCare from "../findMyCare/FindMyCare";

const Home = () => {
  return (
    <div>
      <HomeNavBar />
      <Routes>
        <Route path="/" element={<Navigate to="./SymptomScan" />} />
        <Route path="/SymptomScan/*" element={<SymptomScan />} />
        <Route path="/FitnessPal" element={<FitnessPal />} />
        <Route path="/MedMatch360" element={<MedMatch360 />} />
        <Route path="/FindMyCare" element={<FindMyCare />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/About" element={<About />} />
        <Route path="/*" element={<Navigate to="./SymptomScan" />} />
      </Routes>
    </div>
  );
};

export default Home;
