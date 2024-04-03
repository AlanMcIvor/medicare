import React from "react";
import Nav from "../components/Nav";
import Dropdown from "../components/Dropdown";
import { FaXRay } from "react-icons/fa6";
import { MdPermScanWifi } from "react-icons/md";
import { FaBriefcaseMedical } from "react-icons/fa6";
;

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
          imgPath="./assets/xray.png"
          imgAlt="An illustration of three children with their xrays"
          aside="Every sector within health care relies on radiology, including:"
          listItems={[
            "Surgery",
            "Peadeatrics",
            "Obsterics",
            "Oncology",
            "Trauma-response",
            "Emergency Medicine",
            "Infectious Diseases",
          ]}
        />
        <Dropdown
          name="MRI"
          icon={<MdPermScanWifi size={50} color="white" />}
          intro="MRI stands for Magnetic Resonance Imaging. It's a medical imaging technique that uses powerful magnets, radio waves, and a computer to generate detailed images of the inside of the body. Here's how it works:"
          subtitle="What is an MRI?"
          imgPath="./assets/mri.jpg"
          imgAlt="An image of a person getting an MRI scan"
          aside="MRI works by using the following techologies: "
          listItems={[
            "Strong Magnetic field",
            "Alignment of Hydrogen Nuclei",
            "Radio Frequency Pulse",
            "Absorption and Emission of Energy",
            "Signal Detection",
            "Image Reconstruction",
            "Image Visulization",
          ]}
        />
        <Dropdown
          name="Clinics"
          icon={<FaBriefcaseMedical size={50} color="white" />}
          intro="A hospital clinic is a specialized facility within a hospital that provides medical services focused on a particular area of healthcare. These clinics are typically staffed by medical professionals such as doctors, nurses, and specialists who are experts in their respective fields.
          The purpose of a hospital clinic is to offer comprehensive care, diagnosis, treatment, and management of specific medical conditions or ailments."
          subtitle="A bit about our clinics"
          imgPath="./assets/clinic.jpg"
          imgAlt="An image of a person getting an MRI scan"
          aside="Here is what you might find:"
          listItems={[
            "Reception Area",
            "Consultaion Rooms",
            "Diagnostic Facilities",
            "Treatment Rooms",
            "Specialized Equipment",
            "Patient Education Resources",
            "Follow-Up Care",
          ]}
        />
        <Dropdown
          name="Wards"
          icon={<FaXRay size={50} color="white" />}
          intro="Radiology is the branch of medicine specializing in of the use of tests that take pictures or images of parts of the body to help diagnose and treat disease. The Department of Radiology offers a comprehensive range of diagnostic imaging and interventional radiology services for children and young people up to 16 years of age. Our department performs approximately 56,800 imaging procedures every year."
          subtitle="Why is Radiology important?"
          aside="Every sector within health care relies on radiology, including:"
          listItems={[
            "Surgery",
            "Peadeatrics",
            "Obsterics",
            "Oncology",
            "Trauma-response",
            "Emergency Medicine",
            "Infectious Diseases",
          ]}
        />
        <Dropdown
          name="Play Areas"
          icon={<FaXRay size={50} color="white" />}
          intro="Radiology is the branch of medicine specializing in of the use of tests that take pictures or images of parts of the body to help diagnose and treat disease. The Department of Radiology offers a comprehensive range of diagnostic imaging and interventional radiology services for children and young people up to 16 years of age. Our department performs approximately 56,800 imaging procedures every year."
          subtitle="Why is Radiology important?"
          aside="Every sector within health care relies on radiology, including:"
          listItems={[
            "Surgery",
            "Peadeatrics",
            "Obsterics",
            "Oncology",
            "Trauma-response",
            "Emergency Medicine",
            "Infectious Diseases",
          ]}
        />
        <Dropdown
          name="Theaters"
          icon={<FaXRay size={50} color="white" />}
          intro="Radiology is the branch of medicine specializing in of the use of tests that take pictures or images of parts of the body to help diagnose and treat disease. The Department of Radiology offers a comprehensive range of diagnostic imaging and interventional radiology services for children and young people up to 16 years of age. Our department performs approximately 56,800 imaging procedures every year."
          subtitle="Why is Radiology important?"
          aside="Every sector within health care relies on radiology, including:"
          listItems={[
            "Surgery",
            "Peadeatrics",
            "Obsterics",
            "Oncology",
            "Trauma-response",
            "Emergency Medicine",
            "Infectious Diseases",
          ]}
        />

        <div className="map">
          <img src="../assets/map.png" alt="A map of the hospital" />
        </div>
      </div>
    </>
  );
};

export default Department;
