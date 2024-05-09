// useState is used to define two state variables: fuelPriceData and loading
// useEffect is a React hook used for performing side effects in functional components.

// Importing the useState and useEffect hooks from the React library
import { useState, useEffect } from "react";

function App() {
  // Using state to manage fuel price data and loading state
  const [fuelPriceData, setFuelPriceData] = useState<any>(null); // State for fuel price data
  const [loading, setLoading] = useState<boolean>(true); // State for loading indicator

  // Using useEffect to fetch data when component mounts
  useEffect(() => {
    fetchData(); // Fetch data when component mounts
  }, []);

  // Async function to fetch data from API
  const fetchData = async () => {
    try {
      // Fetching data from API endpoint
      const response = await fetch("https://api.data.gov.my/data-catalogue?id=fuelprice");

      // Check if the response is successful
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      // Parsing response to JSON format
      const data = await response.json();

      // Setting fetched data to state and updating loading state
      setFuelPriceData(data);
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.error("Error fetching data:", error); // Log error if fetching fails
    }
  };

  // Rendering JSX (JavaScript XML) = write HTML code within JavaScript
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Fuel Price Information</h1>

      {/* Conditional rendering based on loading state */}
      <div className="data-container">
        {/* If loading is true, display loading message */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          // If loading is false, render fetched data
          <div>
            {/* Mapping over the fetched data and displaying each item */}
            {fuelPriceData.map((item: any, index: number) => (
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
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
