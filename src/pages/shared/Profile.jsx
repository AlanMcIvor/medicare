import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";

const Profile = () => {
  // Function to get the next seven days
  const getNextSevenDays = () => {
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const days = [];
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + i);
      const dayName = dayNames[currentDate.getDay()];
      const day = currentDate.getDate();
      const suffix =
        day === 1 ? "st" : day === 2 ? "nd" : day === 3 ? "rd" : "th";
      days.push({ date: `${dayName}, ${day}${suffix}`, isToday: i === 0 });
    }
    return days;
  };

  // State to hold the next seven days
  const [nextSevenDays, setNextSevenDays] = useState(getNextSevenDays());

  const [currentMonthYear, setCurrentMonthYear] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const month = currentDate.toLocaleString("default", { month: "long" });
      const year = currentDate.getFullYear();
      setCurrentMonthYear(`${month} ${year}`);
    }, 1000); // Update date every second

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Nav />
      <div className="wrapper mx-5 sm:mx-auto sm:container mt-5 font-heading text-center">
        <h2 className="text-[40px] font-heading">{currentMonthYear}</h2>

        <div className="bg-gray-100 p-2 rounded-lg mb-5 max-w-[650px] mx-auto text-[26px] font-body flex items-center justify-center gap-7 mt-5 shadow-md">
          {nextSevenDays.map((day, index) => (
            <div key={index}>
              <p
                className={
                  day.isToday
                    ? "bg-[#91E3AA] rounded-full shadow-lg font-bold"
                    : ""
                }
              >
                {day.date}
              </p>
            </div>
          ))}
        </div>
        <h3 className="text-[26px] my-10 font-body">
          You have an appointment with Dr Jon Doe in radiology on Mon the 8th at
          12:45pm{" "}
        </h3>

        <div className="profile_container">
          <h5 className="text-[40px] font-heading">Your Details</h5>
          <form className="text" action="">
            <div className="form_group">
              <label className="block" htmlFor="email">
                Email
              </label>
              <input
                className="border-2 border-black rounded-sm shadow-sm"
                type="email"
                id="email"
                name="email"
              />
              <label className="block" htmlFor="email">
                Email
              </label>
              <input
                className="border-2 border-black rounded-sm shadow-sm"
                type="email"
                id="email"
                name="email"
              />
              <label className="block" htmlFor="email">
                Email
              </label>
              <input
                className="border-2 border-black rounded-sm shadow-sm"
                type="email"
                id="email"
                name="email"
              />
              <label className="block" htmlFor="email">
                Email
              </label>
              <input
                className="border-2 border-black rounded-sm shadow-sm"
                type="email"
                id="email"
                name="email"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
