import "./App.css";
import React, { useState } from "react";
import Welcome from "./pages/shared/Welcome";
import Login from "./pages/shared/Login";
import ParentHome from "./pages/parent/ParentHome";

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
    </div>
  );
}

export default App;
