import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import { FaSearch } from "react-icons/fa";

const NHS_API_URL = "https://api.nhs.uk/conditions/";
const SUBSCRIPTION_KEY = "a42f6bb4139c44e39006d6e39fef4700";

function Conditions() {
  const [searchTerm, setSearchTerm] = useState("");
  const [conditionData, setConditionData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`${NHS_API_URL}${searchTerm}`, {
        headers: {
          "subscription-key": SUBSCRIPTION_KEY,
        },
      });
      const data = await response.json();
      setConditionData(data);
    } catch (error) {
      console.error("Error fetching condition data:", error);
    }
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      fetchData();
    } else {
      setConditionData(null);
    }
  };

  return (
    <div>
      <Nav />
      <div className="img_container mx-auto bg-gray-100">
        <h1 className="text-center font-heading text-[60px] font-bold">
          Conditions
        </h1>
        <img
          className="mx-auto p-5"
          src="../assets/login.png"
          alt="An illustration of two doctors with a pill container"
        />
      </div>
      <div className="wrapper mx-5 sm:mx-auto sm:container mt-5 font-body text-[18px] flex flex-col items-center">
        <h1 className="font-heading text-[40px] text-center">A to Z</h1>
        <div className="flex items-center">
          <input
            className="border rounded-lg shadow-md px-3 py-1"
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Enter a condition"
          />
          <button
            className="ml-3 bg-[#1C3925] hover:bg-[#95B89F] text-white font-bold py-2 px-4 rounded"
            onClick={handleSearch}
          >
            <FaSearch />
          </button>
        </div>
        <br />
        <div className="resultsContainer border font-body p-2">
          {conditionData ? (
            <>
              <h2>Description:</h2>
              <p>{conditionData.description}</p>
              {conditionData.symptoms && (
                <>
                  <h2>Symptoms:</h2>
                  <ul>
                    {conditionData.symptoms.map((symptom, index) => (
                      <li key={index}>{symptom}</li>
                    ))}
                  </ul>
                </>
              )}
              {conditionData.treatments && (
                <>
                  <h2>Treatment:</h2>
                  <p>
                    {conditionData.treatments.map((treatment, index) => (
                      <span key={index}>
                        {treatment.title}: {treatment.description}
                      </span>
                    ))}
                  </p>
                </>
              )}
              {conditionData.support && (
                <>
                  <h2>Support:</h2>
                  <p>{conditionData.support}</p>
                </>
              )}
            </>
          ) : (
            <p>No condition data available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Conditions;
