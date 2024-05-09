import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from "recharts";

function App() {
  const [fuelPriceData, setFuelPriceData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.data.gov.my/data-catalogue?id=fuelprice&timestamp=" + Date.now());

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setFuelPriceData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredData = fuelPriceData?.filter((item: any) => item.ron95 > 0 || item.ron97 > 0 || item.diesel > 0);

  return (
    <div className="App">
      <div className="data-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {/* Render combined bar chart */}
            <BarChart width={800} height={400} data={filteredData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis tickFormatter={(value) => `RM${value}`} />
              <Tooltip />
              <Legend />
              <Bar dataKey="ron95" fill="#FDDA0D" name="RON95" />
              <Bar dataKey="ron97" fill="green" name="RON97" />
              <Bar dataKey="diesel" fill="black" name="DIESEL" />
            </BarChart>

            {/* Render combined line chart */}
            <LineChart width={800} height={400} data={filteredData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis tickFormatter={(value) => `RM${value}`} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="ron95" stroke="#FDDA0D" name="RON95" />
              <Line type="monotone" dataKey="ron97" stroke="green" name="RON97" />
              <Line type="monotone" dataKey="diesel" stroke="black" name="DIESEL" />
            </LineChart>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
