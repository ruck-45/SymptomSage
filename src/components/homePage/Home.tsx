// Dependencies
import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense, useState } from "react";

// Local Files
import HomeNavBar from "./subComponents/HomeNavBar";
import HomeLoading from "../../globalSubComponents/HomeLoading";
import HomeBreadCrumb from "./subComponents/HomeBreadCrumb";

const About = lazy(() => import("../aboutPage/About"));
const Services = lazy(() => import("../servicesPage/Services"));
const SymptomScan = lazy(() => import("../symptomScan/SymptomScan"));
const FitnessPal = lazy(() => import("../fitnessPal/FitnessPal"));
const MedMatch360 = lazy(() => import("../medMatch360/MedMatch360"));
const FindMyCare = lazy(() => import("../findMyCare/FindMyCare"));

const Home = () => {
  const [directories, setDirectories] = useState();

  return (
    <div>
      <HomeNavBar />
      <HomeBreadCrumb directories={directories} />
      <Routes>
        <Route path="/" element={<Navigate to="./SymptomScan" />} />
        <Route
          path="/SymptomScan/*"
          element={
            <Suspense fallback={<HomeLoading />}>
              <SymptomScan setDirectories={setDirectories} />
            </Suspense>
          }
        />
        <Route
          path="/FitnessPal"
          element={
            <Suspense fallback={<HomeLoading />}>
              <FitnessPal setDirectories={setDirectories} />
            </Suspense>
          }
        />
        <Route
          path="/MedMatch360"
          element={
            <Suspense fallback={<HomeLoading />}>
              <MedMatch360 setDirectories={setDirectories} />
            </Suspense>
          }
        />
        <Route
          path="/FindMyCare"
          element={
            <Suspense fallback={<HomeLoading />}>
              <FindMyCare setDirectories={setDirectories} />
            </Suspense>
          }
        />
        <Route
          path="/Services"
          element={
            <Suspense fallback={<HomeLoading />}>
              <Services setDirectories={setDirectories} />
            </Suspense>
          }
        />
        <Route
          path="/About"
          element={
            <Suspense fallback={<HomeLoading />}>
              <About setDirectories={setDirectories} />
            </Suspense>
          }
        />
        <Route path="/*" element={<Navigate to="./SymptomScan" />} />
      </Routes>
    </div>
  );
};

export default Home;
