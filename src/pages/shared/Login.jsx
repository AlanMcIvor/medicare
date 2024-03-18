import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(email, password);
  };

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
          type="email"
          id="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          className="border rounded-lg shadow-md min-w-[500px] p-2 text-left"
          type="password"
          id="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </form>
      <div className="btn_container mt-10 text-center">
        <input
          onClick={handleSubmit}
          type="submit"
          className="text-2xl bg-[#1C3925] text-white min-w-[250px] px-2 py-3 rounded-full shadow-lg font-body cursor-pointer hover:translate-y-2 transition-transform"
        />
        <div className="forgot_password mt-2 text-blue-700 cursor-pointer">
          Forgot Password?
        </div>
      </div>
    </>
  );
};

export default Login;
