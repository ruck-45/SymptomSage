// Dependencies
import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

// Local Files
import HomeNavBar from "./subComponents/HomeNavBar";
import Loading from "../../globalSubComponents/Loading";

const About = lazy(() => import("../aboutPage/About"));
const Services = lazy(() => import("../servicesPage/Services"));
const SymptomScan = lazy(() => import("../symptomScan/SymptomScan"));
const FitnessPal = lazy(() => import("../fitnessPal/FitnessPal"));
const MedMatch360 = lazy(() => import("../medMatch360/MedMatch360"));
const FindMyCare = lazy(() => import("../findMyCare/FindMyCare"));

const Home = () => {
  return (
    <div>
      <HomeNavBar />
      <Routes>
        <Route path="/" element={<Navigate to="./SymptomScan" />} />
        <Route
          path="/SymptomScan/*"
          element={
            <Suspense fallback={<Loading />}>
              <SymptomScan />
            </Suspense>
          }
        />
        <Route
          path="/FitnessPal"
          element={
            <Suspense fallback={<Loading />}>
              <FitnessPal />
            </Suspense>
          }
        />
        <Route
          path="/MedMatch360"
          element={
            <Suspense fallback={<Loading />}>
              <MedMatch360 />
            </Suspense>
          }
        />
        <Route
          path="/FindMyCare"
          element={
            <Suspense fallback={<Loading />}>
              <FindMyCare />
            </Suspense>
          }
        />
        <Route
          path="/Services"
          element={
            <Suspense fallback={<Loading />}>
              <Services />
            </Suspense>
          }
        />
        <Route
          path="/About"
          element={
            <Suspense fallback={<Loading />}>
              <About />
            </Suspense>
          }
        />
        <Route path="/*" element={<Navigate to="./SymptomScan" />} />
      </Routes>
    </div>
  );
};

export default Home;
