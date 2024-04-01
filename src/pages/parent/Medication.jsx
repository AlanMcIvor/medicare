import React, { useState, useEffect } from "react";

const NHS_API_URL = "https://api.nhs.uk/conditions/";
const SUBSCRIPTION_KEY = "a42f6bb4139c44e39006d6e39fef4700";

function Conditions() {
  const [searchTerm, setSearchTerm] = useState("");
  const [conditionData, setConditionData] = useState(null);

  useEffect(() => {
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

    if (searchTerm.trim() !== "") {
      fetchData();
    } else {
      setConditionData(null);
    }
  }, [searchTerm, setSearchTerm]); // Added setSearchTerm as a dependency

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1>Condition Search</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Enter a condition"
      />
      <br />
      {conditionData && conditionData.description ? (
        <p>{conditionData.description}</p>
      ) : (
        <p>No condition data available.</p>
      )}
    </div>
  );
}

export default Conditions;
