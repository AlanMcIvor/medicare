import React from "react";
import Nav from "../components/Nav";
import Title from "../components/Title";
import Animation from "../components/Animation";
import Dropdown from "../components/Dropdown";
import { FaXRay } from "react-icons/fa6";

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
          <Animation />
        </div>

        <Dropdown name="Radiology" icon={<FaXRay size={50} color="white" />} />
      </div>
    </>
  );
};

export default PatientHome;
