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
    <div className="App bg-gray-200 min-h-screen flex flex-col items-center justify-center p-4 ">
      <div className="container mx-auto">
        <header className="text-center my-8">
          <div className="flex items-center justify-center">
            <h1 className="text-4xl font-bold text-gray-800 mr-2 bg-gradient-to-r from-purple-500 to-slate-400 bg-clip-text text-transparent">Welcome</h1> {/* Purple to white gradient effect */}
            <h1 className="text-4xl font-bold text-gray-800 mr-2 bg-gradient-to-r from-purple-500 to-slate-400 bg-clip-text text-transparent">To</h1> {/* Purple to white gradient effect */}
            <h1 className="text-4xl font-bold text-blue-600 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">Fuel Price Dashboard</h1> {/* Blue gradient effect */}
          </div>
          <p className="text-gray-600 mt-3">
            Stay updated with the latest fuel prices in Malaysia
            <br />
            Created by
            <a href="https://github.com/zulhusni2003" className="font-extrabold" target="_blank">
              {" "}
              zulhusni{" "}
            </a>
            &
            <a href="https://github.com/nikzaim" className="font-extrabold" target="_blank">
              {" "}
              zaim{" "}
            </a>
          </p>
        </header>
        <div className="data-container bg-white p-6 rounded-lg shadow-lg">{loading ? <p className="text-center text-xl text-gray-700">Loading...</p> : <AreaChartGraph filteredData={filteredData} />}</div>
      </div>
    </div>
  );
}

export default App;
