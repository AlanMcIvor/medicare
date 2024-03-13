import "./App.css";
import React, { useState } from "react";
import Welcome from "./pages/shared/Welcome";
import Login from "./pages/shared/Login";
import ParentHome from "./pages/parent/ParentHome";
import PatientHome from "./pages/patient/PatientHome";

function App() {
  const [showLoginPage, setShowLoginPage] = useState(false);

  const handleGetStartedClick = () => {
    setShowLoginPage(true);
  };

  return (
    <div className="App">
      {/* {!showLoginPage ? (
        <Welcome handleGetStartedClick={handleGetStartedClick} />
      ) : (
        <Login />
      )} */}

      <ParentHome />
      {/* 
      <PatientHome /> */}
    </div>
  );
}

export default App;
