import React from "react";
import Nav from "../components/Nav";
import { BiPlusMedical } from "react-icons/bi";
import { GiMedicines } from "react-icons/gi";
import { BiSolidInjection } from "react-icons/bi";
import { FiMessageSquare } from "react-icons/fi";
import HorizontalCard from "../components/HorizontalCard";

const ParentHome = () => {
  return (
    <>
      <Nav />
      <div className="wrapper max-w-[685px] mx-auto">
        <h1 className="app_heading text-center sm:text-6xl font-heading my-10 font-bold">
          Welcome <span classname="user_title_name text-[#91E3AA]">Jane</span>
        </h1>
        <p className="parent_alert text-center text-[34px] font-body">
          Your child has an upcoming appointment with <br />
          Dr Joe Bloggs in Radiology on{" "}
          <span className="text-[#91E3AA]">Wed 2nd April</span>
        </p>

        <div className="home_card_container bg-gray-100 p-3 my-5 grid grid-cols-2 gap-5">
          <HorizontalCard
            icon={<BiPlusMedical size={50} color="white" />}
            heading="Departments"
          />
          <HorizontalCard
            icon={<GiMedicines size={50} color="white" />}
            heading="Medicine"
          />
          <HorizontalCard
            icon={<BiSolidInjection size={50} color="white" />}
            heading="Procedures"
          />
          <HorizontalCard
            icon={<FiMessageSquare size={50} color="white" />}
            heading="Messages"
          />
        </div>
      </div>
    </>
  );
};

export default ParentHome;
