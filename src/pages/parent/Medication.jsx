import React, { useState, useEffect } from "react";

const NHS_API_URL = "https://api.nhs.uk/medicines/";
const SUBSCRIPTION_KEY = "a42f6bb4139c44e39006d6e39fef4700";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [medicationData, setMedicationData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${NHS_API_URL}?search=${searchTerm}`, {
          headers: {
            "subscription-key": SUBSCRIPTION_KEY,
          },
        });
        const data = await response.json();
        setMedicationData(data);
      } catch (error) {
        console.error("Error fetching medication data:", error);
      }
    };

    if (searchTerm.trim() !== "") {
      fetchData();
    } else {
      setMedicationData(null);
    }
  }, [searchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1>Medication Search</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Enter a medication"
      />
      <br />
      {medicationData && medicationData.total > 0 ? (
        <div>
          <h2>{medicationData.results[0].name}</h2>
          <p>{medicationData.results[0].description}</p>
        </div>
      ) : (
        <p>No medication data available.</p>
      )}
    </div>
  );
}

export default App;
