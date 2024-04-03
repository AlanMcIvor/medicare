import React from "react";
import { Link } from "react-router-dom";

const HorizontalCard = ({ icon, heading, destination }) => {
  return (
    <>
      <Link to={destination}>
        <div className="home_card_body flex gap-3 items-center bg-white min-w-[250px]  sm:max-w-[350px] rounded-lg shadow-lg text-[26px] cursor-pointer hover:translate-y-1 transition-transform">
          <div className="icon_container bg-[#1C3925] p-2">
            <p className="icon">{icon}</p>
          </div>
          <div className="text_container">{heading}</div>
        </div>
      </Link>
    </>
  );
};

export default HorizontalCard;
