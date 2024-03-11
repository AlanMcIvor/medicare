import React from "react";
import { GiMedicines } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
import { CiClock1 } from "react-icons/ci";

const HistoryCard = ({ icon, type, time, date }) => {
  return (
    <>
      <div className="history_card flex items-center bg-white rounded-lg gap-3 max-w-[250px] p-1 shadow-lg">
        <div className="history_icon px-1">{icon}</div>
        <div>
          <h3 className="history_title text-[23px] text-center">{type}</h3>
          <div className="flex gap-3 text-[10px] text-center justify-center text-[#95B89F]">
            <p className="history_date flex gap-1 items-center">
              <SlCalender />
              {time}
            </p>
            <p className="history_time flex items-center gap-1">
              <CiClock1 />
              {date}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryCard;
