import React from "react";
import Nav from "../components/Nav";
import ProcedureCard from "../components/ProcedureCard";

const Procedures = () => {
  return (
    <>
      <Nav />

      <div className="img_container mx-auto  bg-gray-100">
        <h1 className="text-center font-heading text-[60px] font-bold">
          Procedures
        </h1>
        <img
          className="mx-auto p-5"
          src="../assets/welcome.png"
          alt="An illustration of two doctors with a heart above their heads and a plant to their left"
        />
      </div>
      <div className="wrapper mx-5 sm:mx-auto sm:container mt-5 font-body text-[18px]">
        <div className="bg-gray-100 p-2 rounded-lg shadow-sm mb-5 max-w-[1250px] mx-auto">
          <p className="text text-[40px] text-center">Common Procedures</p>
          <p className="px-2 my-5 text-[18px]">
            The National Health Service (NHS) in the United Kingdom provides a
            wide range of procedures and treatments to address various medical
            conditions. Some common procedures performed by the NHS include:
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 justify-items-center items-center gap-3 sm:gap-5 px-3 mx-auto my-5">
            <ProcedureCard title="Blood Test" />
            <ProcedureCard title="Blood Pressure" />
            <ProcedureCard title="BMI" />
            <ProcedureCard title="ECG" />
            <ProcedureCard title="Cholesterol" />
            <ProcedureCard title="Blood Sugar" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Procedures;
