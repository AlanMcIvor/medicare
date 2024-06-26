import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [patientNumber, setPatientNumber] = useState("");
  const [password, setPassword] = useState("");
  const [parent, setParent] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Making login request with:", { patientNumber, password });
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        patientNumber,
        password,
      });
      // Handle successful login
      const { token } = response.data;
      localStorage.setItem("Token", token);

      if (parent) {
        navigate("/ParentHome");
      } else {
        navigate("/PatientHome");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error("Login failed: Invalid credentials");
        alert("Login failed: Invalid credentials");
        // Handle unauthorized access
      } else {
        console.error("Login failed:", error.message);
        alert("Login failed:", error.message);
        // Handle other errors
      }
    }
  };

  useEffect(() => {
    const storedParent = localStorage.getItem("parent");
    if (storedParent) {
      const parsedParent = JSON.parse(storedParent);
      setParent(parsedParent);
    }
  }, []);

  return (
    <>
      <div className="img_container mx-auto  bg-gray-100">
        <img
          className="mx-auto p-5"
          src="../assets/login.png"
          alt="An illustration of two doctors with a pill container"
        />
      </div>

      <div className="login_container text-4xl sm:text-6xl font-bold flex gap-5 justify-center items-center mt-20 mb-10">
        <h1>
          Medi<span className="text-[#758E7D]">Care</span>
        </h1>
        <h1>Connect</h1>
      </div>
      <form className="text-center text-[26px] flex flex-col gap-5 items-center justify-center">
        <input
          className="border rounded-lg shadow-md min-w-[500px] p-2 text-left"
          type="string"
          id="patientNumber"
          placeholder="Patient Number"
          onChange={(e) => setPatientNumber(e.target.value)}
          value={patientNumber}
        />
        <input
          className="border rounded-lg shadow-md min-w-[500px] p-2 text-left"
          type="password"
          id="string"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <label htmlFor="parentStatus" className="flex items-center gap-2">
          Parent/Guardian?
          <input
            type="checkbox"
            id="parentStatus"
            name="parentStatus"
            onChange={(e) => setParent(e.target.checked)}
            value={parent}
          />
        </label>
      </form>
      <div className="btn_container mt-10 text-center">
        <input
          onClick={handleLogin}
          type="submit"
          className="text-2xl bg-[#1C3925] text-white min-w-[250px] px-2 py-3 rounded-full shadow-lg font-body cursor-pointer hover:translate-y-2 transition-transform"
        />
        <div className="forgot_password my-2 text-blue-700 cursor-pointer">
          Forgot Password?
        </div>
      </div>
    </>
  );
};

export default Login;
