import "./App.css";
import React, { useState } from "react";
import Welcome from "./pages/shared/Welcome";
import Login from "./pages/shared/Login";

function App() {
  const [showLoginPage, setShowLoginPage] = useState(false);

  const handleGetStartedClick = () => {
    console.log("clicked");
    setShowLoginPage(true);
  };

  return (
    <div className="App">
      {!showLoginPage ? (
        <Welcome handleGetStartedClick={handleGetStartedClick} />
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
