// import { useState } from "react";
import axios from "axios";

type PriceType = {
  date: string;
  ron95: number;
  ron97: number;
  series_type: string;
};

function getPrice() {
  axios.get("https://api.data.gov.my/data-catalogue/?id=fuelprice").then((res) => {
    const weeklyPrice = res.data;
    console.log(weeklyPrice.filter((item: PriceType) => item.series_type === "level"));
    weeklyPrice
      .filter((item: PriceType) => item.series_type === "level")
      .map((item: PriceType) => {
        return {
          date: item.date,
          ron95: item.ron95,
          ron97: item.ron97,
        };
      });
  });
}

export default function FuelPrice() {
  // const [ron95] = useState(100);
  getPrice;
  return (
    <div>
      <h1>Test</h1>
    </div>
  );
}
