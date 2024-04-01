import React from "react";
import Nav from "../components/Nav";
import Dropdown from "../components/Dropdown";
import { FaXRay } from "react-icons/fa6";

const Department = () => {
  return (
    <>
      <Nav />

      <div className="img_container mx-auto  bg-gray-100">
        <h1 className="text-center font-heading text-[60px] font-bold">
          Departments
        </h1>
        <img
          className="mx-auto p-5"
          src="../assets/departments.png"
          alt="An illustration of two doctors with a pill container"
        />
      </div>
      <div className="wrapper mx-5 sm:mx-auto sm:container mt-5 font-body text-[18px]">
        <div className="intro">
          In many cases, early diagnosis can save lives, including those of
          patients diagnosed with cancer. Family doctors and emergency care
          physicians cannot effectively manage patients without diagnostic
          imaging, which is why they rely on radiology to find the right
          diagnosis and course of treatment.
        </div>

        <Dropdown
          name="Radiology"
          icon={<FaXRay size={50} color="white" />}
          intro="Radiology is the branch of medicine specializing in of the use of tests that take pictures or images of parts of the body to help diagnose and treat disease. The Department of Radiology offers a comprehensive range of diagnostic imaging and interventional radiology services for children and young people up to 16 years of age. Our department performs approximately 56,800 imaging procedures every year."
          subtitle="Why is Radiology important?"
          imgPath="./assets/child_xray.png"
          imgAlt="An illustration of three children with their xrays"
          aside="Every sector within health care relies on radiology, including:"
        />
        <Dropdown
          name="MRI"
          icon={<FaXRay size={50} color="white" />}
          intro="MRI stands for Magnetic Resonance Imaging. It's a medical imaging technique that uses powerful magnets, radio waves, and a computer to generate detailed images of the inside of the body. Here's how it works:"
          subtitle="What is an MRI?"
          aside="Every sector within health care relies on radiology, including:"
        />
        <Dropdown
          name="Clinics"
          icon={<FaXRay size={50} color="white" />}
          intro="Radiology is the branch of medicine specializing in of the use of tests that take pictures or images of parts of the body to help diagnose and treat disease. The Department of Radiology offers a comprehensive range of diagnostic imaging and interventional radiology services for children and young people up to 16 years of age. Our department performs approximately 56,800 imaging procedures every year."
          subtitle="Why is Radiology important?"
          aside="Every sector within health care relies on radiology, including:"
        />
        <Dropdown
          name="Wards"
          icon={<FaXRay size={50} color="white" />}
          intro="Radiology is the branch of medicine specializing in of the use of tests that take pictures or images of parts of the body to help diagnose and treat disease. The Department of Radiology offers a comprehensive range of diagnostic imaging and interventional radiology services for children and young people up to 16 years of age. Our department performs approximately 56,800 imaging procedures every year."
          subtitle="Why is Radiology important?"
          aside="Every sector within health care relies on radiology, including:"
        />
        <Dropdown
          name="Play Areas"
          icon={<FaXRay size={50} color="white" />}
          intro="Radiology is the branch of medicine specializing in of the use of tests that take pictures or images of parts of the body to help diagnose and treat disease. The Department of Radiology offers a comprehensive range of diagnostic imaging and interventional radiology services for children and young people up to 16 years of age. Our department performs approximately 56,800 imaging procedures every year."
          subtitle="Why is Radiology important?"
          aside="Every sector within health care relies on radiology, including:"
        />
        <Dropdown
          name="Theaters"
          icon={<FaXRay size={50} color="white" />}
          intro="Radiology is the branch of medicine specializing in of the use of tests that take pictures or images of parts of the body to help diagnose and treat disease. The Department of Radiology offers a comprehensive range of diagnostic imaging and interventional radiology services for children and young people up to 16 years of age. Our department performs approximately 56,800 imaging procedures every year."
          subtitle="Why is Radiology important?"
          aside="Every sector within health care relies on radiology, including:"
        />

        <div className="map">
          <img src="../assets/map.png" alt="A map of the hospital" />
        </div>
      </div>
    </>
  );
};

export default Department;
