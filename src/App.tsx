// Dependencies
import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

// Local Files

const Landing = lazy(() => import("./components/landingPage/Landing"));
const UserAuth = lazy(() => import("./components/loginPage/UserAuth"));
const Home = lazy(() => import("./components/homePage/Home"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Landing" />} />
      <Route
        path="/Landing"
        element={
          <Suspense fallback={<h1>Loading....</h1>}>
            <Landing />
          </Suspense>
        }
      />
      <Route
        path="/Authentication"
        element={
          <Suspense fallback={<h1>Loading....</h1>}>
            <UserAuth />
          </Suspense>
        }
      />
      <Route
        path="/Home/*"
        element={
          <Suspense fallback={<h1>Loading....</h1>}>
            <Home />
          </Suspense>
        }
      />
      <Route path="*" element={<Navigate to="/Landing" />} />
    </Routes>
  );
}

export default App;
