// Dependencies
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Local Files
import "./App.css";
import Landing from "./components/landingPage/Landing";
import UserAuth from "./components/loginPage/UserAuth";

function App() {
  const [loginStatus, loginStatusChanger] = useState("false");

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/AuthenticationPage" element={<UserAuth />} />
    </Routes>
  );
}

export default App;
