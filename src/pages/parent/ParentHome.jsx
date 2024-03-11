import React from "react";
import Nav from "../components/Nav";
import { BiPlusMedical } from "react-icons/bi";
import { GiMedicines } from "react-icons/gi";
import { BiSolidInjection } from "react-icons/bi";
import { FiMessageSquare } from "react-icons/fi";
import HorizontalCard from "../components/HorizontalCard";
import DrCard from "../components/DrCard";

const ParentHome = () => {
  return (
    <>
      <Nav />
      <div className="wrapper max-w-[685px] mx-auto">
        <h1 className="app_heading text-center sm:text-6xl font-heading my-10 font-bold">
          Welcome <span className="user_title_name text-[#91E3AA]">Jane</span>
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
        <h3 className="text-[40px] font-body">Medical Team</h3>

        <div className="dr_card_container bg-gray-100 p-3 my-5 grid grid-cols-4 gap-5">
          <DrCard
            profile="https://images.unsplash.com/photo-1618498082410-b4aa22193b38?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="An image of a surgeon"
            name="Dr Jon Doe"
            role="Surgeon"
          />
          <DrCard
            profile="https://images.unsplash.com/photo-1618498082410-b4aa22193b38?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="An image of a surgeon"
            name="Dr Jon Doe"
            role="Surgeon"
          />
          <DrCard
            profile="https://images.unsplash.com/photo-1618498082410-b4aa22193b38?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="An image of a surgeon"
            name="Dr Jon Doe"
            role="Surgeon"
          />
          <DrCard
            profile="https://images.unsplash.com/photo-1618498082410-b4aa22193b38?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="An image of a surgeon"
            name="Dr Jon Doe"
            role="Surgeon"
          />
          <DrCard
            profile="https://images.unsplash.com/photo-1618498082410-b4aa22193b38?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="An image of a surgeon"
            name="Dr Jon Doe"
            role="Surgeon"
          />
          <DrCard
            profile="https://images.unsplash.com/photo-1618498082410-b4aa22193b38?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="An image of a surgeon"
            name="Dr Jon Doe"
            role="Surgeon"
          />
          <DrCard
            profile="https://images.unsplash.com/photo-1618498082410-b4aa22193b38?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="An image of a surgeon"
            name="Dr Jon Doe"
            role="Surgeon"
          />
          <DrCard
            profile="https://images.unsplash.com/photo-1618498082410-b4aa22193b38?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="An image of a surgeon"
            name="Dr Jon Doe"
            role="Surgeon"
          />
        </div>
      </div>
    </>
  );
};

export default ParentHome;
