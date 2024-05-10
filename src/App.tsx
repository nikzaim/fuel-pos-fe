// useState: Allows functional components to manage state.
// useEffect: Handles side effects in functional components.
import { useState, useEffect } from "react";
import AreaChartGraph from "./AreaChartGraph";

function App() {
  // State for storing fuel price data and loading state
  const [fuelPriceData, setFuelPriceData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch data when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch fuel price data
  const fetchData = async () => {
    setLoading(true); // Set loading state to true while fetching data
    try {
      const response = await fetch("https://api.data.gov.my/data-catalogue?id=fuelprice&timestamp=" + Date.now());

      if (!response.ok) {
        throw new Error("Failed to fetch data"); // Throw error if fetching data fails
      }

      const data = await response.json(); // Parse response as JSON
      setFuelPriceData(data); // Set fuel price data state
    } catch (error) {
      console.error("Error fetching data:", error); // Log error if fetching data fails
    } finally {
      setLoading(false); // Set loading state to false regardless of success or failure
    }
  };

  // Filtered data based on condition (ron95 > 1 || ron97 > 1 || diesel > 1)
  const filteredData = fuelPriceData?.filter((item: any) => item.ron95 > 1 || item.ron97 > 1 || item.diesel > 1);

  return (
    <div className="App">
      {/* Display loading message while fetching data, otherwise render AreaChartGraph component */}
      <div className="data-container">{loading ? <p>Loading...</p> : <AreaChartGraph filteredData={filteredData} />}</div>
    </div>
  );
}

export default App;
