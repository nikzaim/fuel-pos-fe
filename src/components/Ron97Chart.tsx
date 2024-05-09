import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";
import axios from "axios";

type Ron97Type = {
  date: string;
  ron97: number;
  series_type: string;
};

export default function Ron97Chart() {
  const [date, setDate] = useState([]);
  const [price, setPrice] = useState([]);
  useEffect(() => {
    axios.get("https://api.data.gov.my/data-catalogue/?id=fuelprice").then((res) => {
      const data = res.data;
      const ron97 = data
        .filter((item: Ron97Type) => item.series_type === "level" && item.ron97)
        .map((item: Ron97Type) => {
          return {
            date: item.date,
            price: item.ron97,
          };
        });
      console.log(ron97);
      const price12w: string[] = [];
      const date12w: number[] = [];
      for (let i = 0; i < 10; i++) {
        price12w.push(ron97[i].price);
        date12w.push(ron97[i].date);
      }
      setPrice(price12w);
      setDate(date12w);
    });
  });

  // Chart Setup
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Last 12 week Ron95 price",
      },
    },
  };

  const labels = date;

  const data = {
    labels,
    datasets: [
      {
        label: "My First Dataset",
        data: price,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return <Line options={options} data={data} />;
}
