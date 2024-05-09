import FuelPrice from "./components/FuelPrice";
// import axios from "axios";
// import { useEffect, useState } from "react";

// type PriceType = {
//   date: string;
//   ron95: number;
//   ron97: number;
//   diesel: number;
//   series_type: string;
// };

function App() {
  // const [date, setDate] = useState("");
  // const [ron95, setRon95] = useState(0);
  // const [ron97, setRon97] = useState(0);
  // const [diesel, setDiesel] = useState(0);

  // useEffect(() => {
  //   axios.get("https://api.data.gov.my/data-catalogue/?id=fuelprice").then((res) => {
  //     const weeklyPrice = res.data;
  //     console.log(
  //       weeklyPrice
  //         .filter((item: PriceType) => item.series_type === "level")
  //         .map((item: PriceType) => {
  //           return {
  //             date: item.date,
  //             ron95: item.ron95,
  //             ron97: item.ron97,
  //             diesel: item.diesel,
  //           };
  //         })
  //     );
  //     const filter = weeklyPrice
  //       .filter((item: PriceType) => item.series_type === "level")
  //       .map((item: PriceType) => {
  //         return {
  //           date: item.date,
  //           ron95: item.ron95,
  //           ron97: item.ron97,
  //           diesel: item.diesel,
  //         };
  //       });
  //     // console.log(filter.pop());
  //     console.log(filter[filter.length - 1]);
  //     const latest = filter[filter.length - 1];
  //     setDate(latest.date);
  //     setRon95(latest.ron95);
  //     setRon97(latest.ron97);
  //     setDiesel(latest.diesel);
  //   });
  // });

  return (
    <>
      <center>
        <div className="px-20">{/* <FuelPrice></FuelPrice> */}</div>
        <FuelPrice />
      </center>
    </>
  );
}

export default App;
