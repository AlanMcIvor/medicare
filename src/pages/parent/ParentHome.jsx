import React from "react";
import Nav from "../components/Nav";
import { BiPlusMedical } from "react-icons/bi";
import { GiMedicines } from "react-icons/gi";
import { BiSolidInjection } from "react-icons/bi";
import { FiMessageSquare } from "react-icons/fi";
import HorizontalCard from "../components/HorizontalCard";
import DrCard from "../components/DrCard";
import HistoryCard from "../components/HistoryCard";
import Title from "../components/Title";
import UserInfo from "../components/UserInfo";

const ParentHome = () => {
  const user = UserInfo();
  console.log(user);

  if (!user) {
    return <div className="text-center text-[60px] mx-auto">Loading...</div>;
  }

  return (
    <>
      <Nav />
      <div className="wrapper max-w-[685px] mx-auto">
        <Title
          name={`${user.forename}`}
          appointment={`Your child has an appointment with Dr ${user.doctor} on the`}
          date={` ${user.appointmentDate}`}
          dep={`in ${user.department_id.department}`}
        />

        <div className="home_card_container bg-gray-100 p-3 my-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <HorizontalCard
            icon={<BiPlusMedical size={50} color="white" />}
            heading="Departments"
            destination="/Departments"
          />
          <HorizontalCard
            icon={<GiMedicines size={50} color="white" />}
            heading="Conditions"
            destination="/Conditions"
          />
          <HorizontalCard
            icon={<BiSolidInjection size={50} color="white" />}
            heading="Procedures"
            destination="/Procedures"
          />
          <HorizontalCard
            icon={<FiMessageSquare size={50} color="white" />}
            heading="Profile"
            destination="/Profile"
          />
        </div>
        <h3 className="text-[40px] font-body">Medical Team</h3>

        <div className="dr_card_container bg-gray-100 p-3 my-5 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          <DrCard
            profile="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="An image of a doctor"
            name="Dr Emily Chen"
            role="Cardiology"
          />
          <DrCard
            profile="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="An image of a doctor"
            name="Dr Jamal Khan"
            role="Orthopedics"
          />
          <DrCard
            profile="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="An image of a doctor"
            name="Dr Maria Rodriguez"
            role="Pediatrics"
          />
          <DrCard
            profile="https://plus.unsplash.com/premium_photo-1661757221486-183030ef8670?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="An image of a doctor"
            name="Dr Sarah Johnson"
            role="Radiology"
          />
          <DrCard
            profile="https://images.unsplash.com/photo-1622902046580-2b47f47f5471?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="An image of a doctor"
            name="Dr David Lee"
            role="Neurology"
          />
          <DrCard
            profile="https://images.unsplash.com/photo-1579165466949-3180a3d056d5?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="An image of a doctor"
            name="Dr Jessuca Patel"
            role="Dermatology"
          />
          <DrCard
            profile="https://plus.unsplash.com/premium_photo-1661281397737-9b5d75b52beb?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="An image of a doctor"
            name="Dr Robert Nguyen"
            role="Oncology"
          />
          <DrCard
            profile="https://plus.unsplash.com/premium_photo-1661766718556-13c2efac1388?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="An image of a doctor"
            name="Dr Elizabeth Taylor"
            role="Endocrinology"
          />
          <DrCard
            profile="https://images.unsplash.com/photo-1612531386530-97286d97c2d2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="An image of a doctor"
            name="Dr Chris Matinez"
            role="Ophthalmology"
          />
        </div>

        <h3 className="text-[40px] font-body">Your History</h3>

        <div className="history_container bg-gray-100 grid sm:grid-cols-2 md:grid-cols-3 gap-3 p-3 my-5 font-body">
          <HistoryCard
            icon={<GiMedicines size={50} color="#42634C" />}
            type="Medicine"
            time="12:45pm"
            date="24 Nov 2024"
          />
          <HistoryCard
            icon={<GiMedicines size={50} color="#42634C" />}
            type="Medicine"
            time="12:45pm"
            date="24 Nov 2024"
          />
          <HistoryCard
            icon={<GiMedicines size={50} color="#42634C" />}
            type="Medicine"
            time="12:45pm"
            date="24 Nov 2024"
          />
          <HistoryCard
            icon={<GiMedicines size={50} color="#42634C" />}
            type="Medicine"
            time="12:45pm"
            date="24 Nov 2024"
          />
          <HistoryCard
            icon={<GiMedicines size={50} color="#42634C" />}
            type="Medicine"
            time="12:45pm"
            date="24 Nov 2024"
          />
          <HistoryCard
            icon={<GiMedicines size={50} color="#42634C" />}
            type="Medicine"
            time="12:45pm"
            date="24 Nov 2024"
          />
        </div>
      </div>
    </>
  );
};

export default ParentHome;
