import "./App.css";
import Department from "./pages/parent/Departments";
import Conditions from "./pages/parent/Medication";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./pages/shared/Welcome";
import Login from "./pages/shared/Login";
import ParentHome from "./pages/parent/ParentHome";
import PatientHome from "./pages/patient/PatientHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/ParentHome" element={<ParentHome />} />
        <Route path="/PatientHome" element={<PatientHome />} />
        <Route path="/Departments" element={<Department />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
