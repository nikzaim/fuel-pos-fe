import React from "react";
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, Legend } from "recharts";

interface Props {
  filteredData: any[]; // Define prop type for filtered data
}

// React: Refers to the namespace provided by the React library.
// FC   : Short for "FunctionComponent," which indicates that this is a functional component.
// Props: Represents the type of props (properties) that the component expects to receive.
const AreaChartGraph: React.FC<Props> = ({ filteredData }) => {
  return (
    <div className="flex justify-center mt-10">
      {/* Area chart component */}
      <AreaChart width={800} height={400} data={filteredData} className="mt-5">
        {/* Define gradients */}
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
        {/* X axis */}
        <XAxis dataKey="date" tickFormatter={(date) => new Date(date).getFullYear().toString()} /> {/* Convert year to string */}
        <YAxis />
        <YAxis domain={[0, "auto"]} /> {/* Auto adjust y-axis domain */}
        {/* Grid */}
        <CartesianGrid strokeDasharray="1 1" />
        {/* Tooltip */}
        <Tooltip />
        {/* Areas */}
        <Area type="monotone" dataKey="ron95" stroke="#FFB74D" fillOpacity={0.8} fill="url(#colorUv)" name="RON95" />
        <Area type="monotone" dataKey="ron97" stroke="#81C784" fillOpacity={0.8} fill="url(#colorPv)" name="RON97" />
        <Area type="monotone" dataKey="diesel" stroke="#333333" fillOpacity={0.8} fill="url(#colorUv)" name="DIESEL" />
        {/* Legend */}
        <Legend />
      </AreaChart>
    </div>
  );
};

export default AreaChartGraph; // Export AreaChartGraph component
