import React from "react";
import Statistics from "./Statistics";
import TrendingProducts from "./TrendingProducts";
import Advertisement from "./Advertisement";
import Events from "./Events";
import "../../../css/home.css";


export default function HomePage() {
  return (
    <div className={"homepage"}>
      <Events />
      <TrendingProducts />
      <Advertisement />
      <Statistics />
    </div>
  );
}
