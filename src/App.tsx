import { useState, useEffect } from "react";
import AreaChartGraph from "./AreaChartGraph";
import Header from "./Header"; // Import Header component
import InfoSection from "./InfoSection"; // Import InfoSection component

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

  // Title and explanation for the AreaChartGraph
  const title = "Fuel Price Trends";
  const explanation = "This graph displays the trends of RON95, RON97, and Diesel fuel prices over time.";

  return (
    <div className="App bg-gray-200 min-h-screen flex flex-col items-center justify-center p-4">
      <div className="container mx-auto">
        <Header /> {/* Called Header component */}
        <InfoSection /> {/* Called InfoSection component */}
        <div className="data-container bg-white p-6 rounded-lg shadow-lg">
          {loading ? <p className="text-center text-xl text-gray-700">Loading...</p> : <AreaChartGraph filteredData={filteredData} title={title} explanation={explanation} />}
        </div>
      </div>
    </div>
  );
}

export default App;
