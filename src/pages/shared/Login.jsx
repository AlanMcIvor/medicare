import React from "react";
import Button from "../components/Button.jsx";

const Login = () => {
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
      <form
        action=""
        className="text-center text-[26px] flex flex-col gap-5 items-center justify-center"
      >
        <input
          className="border rounded-lg shadow-md min-w-[500px] p-2 text-left"
          type="text"
          id="username"
          placeholder="Email/Patient Number"
        />
        <input
          className="border rounded-lg shadow-md min-w-[500px] p-2 text-left"
          type="password"
          id="username"
          placeholder="Password"
        />
        <Button page="Login" />
      </form>
    </>
  );
};

export default Login;
