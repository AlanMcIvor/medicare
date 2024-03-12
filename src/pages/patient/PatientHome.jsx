import React from "react";
import Nav from "../components/Nav";
import Title from "../components/Title";

const PatientHome = () => {
  return (
    <>
      <Nav />
      <div className="wrapper max-w-[685px] mx-auto">
        <div className="patient_title_name">
          <Title
            name="Jane"
            appointment="You have an appointment with Dr Bloggs in Radiology on"
            date=" 12 Feb 2024"
          />
        </div>

        <h4 className="text-center mt-10 text-[30px] font-body">
          What to expect at your appointment
        </h4>

        <div className="animation_container">
          <div className="min-h-[250px] aspect-square">
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientHome;