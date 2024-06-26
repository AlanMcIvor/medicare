import React from "react";
import Nav from "../components/Nav";
import Title from "../components/Title";
import Animation from "../components/Animation";
import Dropdown from "../components/Dropdown";
import { FaXRay } from "react-icons/fa6";
import { MdPermScanWifi } from "react-icons/md";
import UserInfo from "../components/UserInfo";

const PatientHome = () => {
  const user = UserInfo();
  console.log(user);

  if (!user) {
    return <div className="text-center text-[60px] mx-auto">Loading...</div>;
  }
  return (
    <>
      <Nav />
      <div className="wrapper max-w-[685px] mx-auto">
        <div className="patient_title_name">
          <Title
            name={`${user.forename}`}
            appointment={`${user.department_id.consultant}`}
            date="12 Feb 2024"
            dep={`${user.department_id.department}`}
          />
        </div>

        <h4 className="text-center mt-10 text-[30px] font-body">
          What to expect at your appointment <br />
          <span className="text-[18px]">(hover over the images)</span>
        </h4>

        <div className="animation_container">
          <Animation />
        </div>


        <div>
            {/* if({`${user.department_id.department}`} === "Radiology"){
              
            } */}
            {user.department_id.department == "Radiology" ? (
              <div>
              <Dropdown
                name="A bit about Radiology"
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
                imgPath="./assets/xray.png"
                imgAlt="An illustration of three children with their xrays"
              /></div>
            ) : (
              <div> <Dropdown
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
            /></div>

            )
          }
        </div>

        <h2 className="text-center mt-10 text-[30px] font-body">
          Check out some of our free games
        </h2>

        <div className="games my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <div className="game_card hover:translate-y-1 transition-transform shadow-lg">
            <a href="https://www.bbc.co.uk/cbeebies/games/hey-duggee-the-picnic-badge-game">
              <img src="../assets/game-1.png" target="_blank" alt="" />
            </a>
          </div>

          <div className="game_card hover:translate-y-1 transition-transform shadow-lg">
            <a href="https://www.bbc.co.uk/cbeebies/games/danger-mouse-danger-dash">
              <img src="../assets/game-2.png" target="_blank" alt="" />
            </a>
          </div>
          <div className="game_card hover:translate-y-1 transition-transform shadow-lg">
            <a href="https://www.bbc.co.uk/cbeebies/games/my-world-kitchen-game?collection=free-cbeebies-games-for-kids">
              <img src="../assets/game-3.png" target="_blank" alt="" />
            </a>
          </div>
          <div className="game_card hover:translate-y-1 transition-transform shadow-lg">
            <a href="https://www.bbc.co.uk/cbeebies/games/swashbuckle-my-swashbuckle-adventure?collection=free-cbeebies-games-for-kids">
              <img src="../assets/game-4.png" target="_blank" alt="" />
            </a>
          </div>
          <div className="game_card hover:translate-y-1 transition-transform shadow-lg">
            <a href="https://www.bbc.co.uk/cbeebies/games/waffle-and-friends-game?collection=free-cbeebies-games-for-kids">
              <img src="../assets/game-5.png" target="_blank" alt="" />
            </a>
          </div>
          <div className="game_card hover:translate-y-1 transition-transform shadow-lg">
            <a href="https://www.bbc.co.uk/cbeebies/games/go-jetters-hero-academy?collection=free-cbeebies-games-for-kids">
              <img src="../assets/game-6.png" target="_blank" alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientHome;
