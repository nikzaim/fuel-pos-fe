import { useState, useEffect } from "react";
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area } from "recharts";

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

  const AreaChartGraph = () => {
    return (
      <AreaChart width={800} height={400} data={filteredData}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#FFB74D" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#FFB74D" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#81C784" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#81C784" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="date" />
        <YAxis domain={[0, "auto"]} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="ron95" stroke="#FFB74D" fillOpacity={0.8} fill="url(#colorUv)" name="RON95" />
        <Area type="monotone" dataKey="ron97" stroke="#81C784" fillOpacity={0.8} fill="url(#colorPv)" name="RON97" />
        <Area type="monotone" dataKey="diesel" stroke="#333333" fillOpacity={0.8} fill="url(#colorUv)" name="DIESEL" />
        <Legend />
      </AreaChart>
    );
  };

  const filteredData = fuelPriceData?.filter((item: any) => item.ron95 > 1 || item.ron97 > 1 || item.diesel > 1);

  return (
    <div className="App">
      <div className="data-container">{loading ? <p>Loading...</p> : <>{AreaChartGraph()}</>}</div>
    </div>
  );
}

export default App;
