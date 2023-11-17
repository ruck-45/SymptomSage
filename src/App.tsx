// Dependencies
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Local Files
import "./App.css";
import Landing from "./components/landingPage/Landing";
import UserAuth from "./components/loginPage/UserAuth";
import Home from "./components/homePage/Home";

function App() {
  const [loginStatus, loginStatusChanger] = useState("false");

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Home" />} />
      <Route path="/Landing" element={<Landing />} />
      <Route path="/Authentication" element={<UserAuth />} />
      <Route path="/Home/*" element={<Home />} />
      <Route path="*" element={<Landing />} />
    </Routes>
  );
  }

export default App;
