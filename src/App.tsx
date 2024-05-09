// useState is used to define two state variables: fuelPriceData and loading
// useEffect is a React hook used for performing side effects in functional components.

// Importing the useState and useEffect hooks from the React library
import { useState, useEffect } from "react";

function App() {
  // Define state variables for fuel price data & loading indicator
  const [fuelPriceData, setFuelPriceData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false); // Start with loading as false

  useEffect(() => {
    // Fetch data when component mounts
    fetchData();
  }, []);

  // Function to fetch data from API
  const fetchData = async () => {
    setLoading(true); // Set loading to true while fetching data
    try {
      // Add a cache-busting parameter to the API URL to ensure fresh data
      const response = await fetch("https://api.data.gov.my/data-catalogue?id=fuelprice&timestamp=" + Date.now());

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      // Parse response to JSON format
      const data = await response.json();
      // Set fetched data to state
      setFuelPriceData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Set loading to false regardless of success or failure
    }
  };

  // Render JSX (JavaScript XML) = write HTML code within JavaScript
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Fuel Price Information</h1>
      {/* Conditional rendering based on loading state */}
      <div className="data-container">
        {/* If loading is true, display loading message */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          // If loading is false and data is available, render fetched data
          fuelPriceData &&
          fuelPriceData.map((item: any, index: number) => (
            <div key={index} style={{ marginBottom: "20px" }}>
              {/* Displaying date */}
              <p>Date: {item.date}</p>
              {/* Displaying RON95 price */}
              <p>RON95 Price: {item.ron95}</p>
              {/* Displaying RON97 price */}
              <p>RON97 Price: {item.ron97}</p>
              {/* Displaying diesel price */}
              <p>Diesel Price: {item.diesel}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
