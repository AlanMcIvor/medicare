import "./App.css";
import Department from "./pages/parent/Departments";
import Conditions from "./pages/parent/Medication";
// import {
//   BrowserRouter as Router,
//   Route,
//   link,
//   BrowserRouter,
//   Routes,
// } from "react-router-dom";
// import Welcome from "./pages/shared/Welcome";
// import Login from "./pages/shared/Login";
// import ParentHome from "./pages/parent/ParentHome";
// import PatientHome from "./pages/patient/PatientHome";

function App() {
  return (
    <>
      <Conditions />
      {/* <Department /> */}
      {/* <Router>
        <Routes>
          <Route path="/" element={<PatientHome />} />
          <Route path="/ParentHome" element={<ParentHome />} />
          <Route path="/PatientHome" element={<PatientHome />} />
        </Routes>
      </Router> */}
    </>
  );
}

//

export default App;
