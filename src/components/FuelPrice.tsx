import axios from "axios";
import { useEffect, useState } from "react";

type PriceType = {
  date: string;
  ron95: number;
  ron97: number;
  diesel: number;
  series_type: string;
};

export default function FuelPrice() {
  const [date, setDate] = useState("");
  const [ron95, setRon95] = useState(0);
  const [ron97, setRon97] = useState(0);
  const [diesel, setDiesel] = useState(0);

  useEffect(() => {
    axios.get("https://api.data.gov.my/data-catalogue/?id=fuelprice").then((res) => {
      const weeklyPrice = res.data;
      console.log(
        weeklyPrice
          .filter((item: PriceType) => item.series_type === "level")
          .map((item: PriceType) => {
            return {
              date: item.date,
              ron95: item.ron95,
              ron97: item.ron97,
              diesel: item.diesel,
            };
          })
      );
      const filter = weeklyPrice
        .filter((item: PriceType) => item.series_type === "level")
        .map((item: PriceType) => {
          return {
            date: item.date,
            ron95: item.ron95,
            ron97: item.ron97,
            diesel: item.diesel,
          };
        });
      // console.log(filter.pop());
      console.log(filter[filter.length - 1]);
      const latest = filter[filter.length - 1];
      setDate(latest.date);
      setRon95(latest.ron95);
      setRon97(latest.ron97);
      setDiesel(latest.diesel);
    });
  });
  return (
    <div>
      <div className="flex justify-between">
        <div className="bg-white p-4 border border-gray-300 rounded-md w-1/5">
          <h1>DATE</h1>
          <p>{date}</p>
        </div>
        <div className="bg-white p-4 border border-gray-300 rounded-md w-1/5">
          <h1>RON95</h1>
          <p>{ron95}</p>
        </div>
        <div className="bg-white p-4 border border-gray-300 rounded-md w-1/5">
          <h1>RON97</h1>
          <p>{ron97}</p>
        </div>
        <div className="bg-white p-4 border border-gray-300 rounded-md w-1/5">
          <h1>DIESEL</h1>
          <p>{diesel}</p>
        </div>
      </div>
    </div>
  );
}
