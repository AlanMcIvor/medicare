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
        <h2 className="text-[30px] font-heading">{currentMonthYear}</h2>

        <div className="bg-gray-100 p-2 rounded-lg mb-5 max-w-[650px] mx-auto text-[26px] font-body flex items-center justify-center gap-7 mt-5 shadow-md">
          {nextSevenDays.map((day, index) => (
            <div key={index}>
              <p
                className={
                  day.isToday
                    ? "bg-[#91E3AA] rounded-full shadow-lg font-bold text-black"
                    : "text-black"
                }
              >
                {day.date}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-clip-border shadow-3xl shadow-shadow-500 dark:text-white p-3 bg-gray-200">
            <div className="mt-2 mb-8 w-full">
              <h4 className="px-2 text-xl font-bold text-black">
                Your information
              </h4>
            </div>
            <div className="grid grid-cols-2 gap-4 px-2 w-full">
              <div className="flex flex-col items-start rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                <p className="text-sm text-gray-600">Email</p>
                <p className="text-base font-medium text-black">
                  janedoe@email.com
                </p>
              </div>

              <div className="flex flex-col items-start rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                <p className="text-sm text-gray-600">Gender</p>
                <p className="text-base font-medium text-black">Female</p>
              </div>

              <div className="flex flex-col items-start  rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                <p className="text-sm text-gray-600">Full Name</p>
                <p className="text-base font-medium text-black">Jane Doe</p>
              </div>

              <div className="flex flex-col items-start  rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                <p className="text-sm text-gray-600">Date of Birth</p>
                <p className="text-base font-medium text-black ">01/02/1988</p>
              </div>

              <div className="flex flex-col items-start  rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                <p className="text-sm text-gray-600">Phone Number</p>
                <p className="text-base font-medium text-black">
                  12345678910114
                </p>
              </div>

              <div className="flex flex-col items-start  rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                <p className="text-sm text-gray-600">Allergies</p>
                <p className="text-base font-medium text-black ">None</p>
              </div>

              <div className="flex flex-col items-start  rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                <p className="text-sm text-gray-600">Address</p>
                <p className="text-base font-medium text-black text-left ">
                  123 Street <br />
                  City <br />
                  postcode
                </p>
              </div>

              <div className="flex flex-col items-start rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                <p className="text-sm text-gray-600">Profile Image</p>
                <p className="text-base font-medium text-black ">
                  <img
                    className="max-h-[100px]"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </p>
              </div>
              <div className="flex flex-col items-start  rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                <p className="text-sm text-gray-600">Next of Kin Name</p>
                <p className="text-base font-medium text-black ">Robert Doe</p>
              </div>
              <div className="flex flex-col items-start  rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                <p className="text-sm text-gray-600">Relationship</p>
                <p className="text-base font-medium text-black ">Father</p>
              </div>
              <div className="flex flex-col items-start  rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                <p className="text-sm text-gray-600">Phone Number</p>
                <p className="text-base font-medium text-black ">123456741546</p>
              </div>
              <div className="flex flex-col items-start  rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                <p className="text-sm text-gray-600">Address</p>
                <p className="text-base font-medium text-black ">Same as patient</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
