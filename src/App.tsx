// Dependencies
import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense, useState } from "react";

// Local Files
import Loading from "./globalSubComponents/Loading";
import serverSideAuth from "./globalUtils/serverSideAuth";

const Landing = lazy(() => import("./components/landingPage/Landing"));
const UserAuth = lazy(() => import("./components/loginPage/UserAuth"));
const Home = lazy(() => import("./components/homePage/Home"));

// utils
const rememberUser = () => {
  const userData: { [key: string]: string | null } = {
    email: localStorage.getItem("email"),
    password: localStorage.getItem("password"),
  };

  return serverSideAuth(userData);
};

function App() {
  const [memeory, setmemory] = useState(rememberUser());
  
  return (
    <Routes>
      <Route path="/" element={memeory ? <Navigate to="/Home" /> : <Navigate to="/Landing" />} />
      <Route
        path="/Landing"
        element={
          <Suspense fallback={<Loading />}>
            <Landing />
          </Suspense>
        }
      />
      <Route
        path="/Authentication"
        element={
          <Suspense fallback={<Loading />}>
            <UserAuth setmemory={setmemory} />
          </Suspense>
        }
      />
      <Route
        path="/Home/*"
        element={
          memeory ? (
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          ) : (
            <Navigate to="/Landing" />
          )
        }
      />
      <Route path="*" element={<Navigate to="/Landing" />} />
    </Routes>
  );
}

export default App;
