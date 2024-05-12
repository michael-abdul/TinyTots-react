import React, { useEffect } from "react";
import Statistics from "./Statistics";
import TrendingProducts from "./TrendingProducts";
import Advertisement from "./Advertisement";
import Events from "./Events";
import { useDispatch } from "react-redux";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import "../../../css/home.css";
import { Dispatch } from "@reduxjs/toolkit";
import { Product } from "../../../lib/types/product";
import { setTrendingProducts } from "./slice";
/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setTrendingProducts: (data: Product[]) => dispatch(setTrendingProducts(data)),
});

export default function HomePage() {
  const { setTrendingProducts } = actionDispatch(useDispatch());
  useEffect(() => {
    const product = new ProductService();
    product
      .getProducts({
        page: 1,
        limit: 4,
        order: "createdAt",
      })
      .then((data) => {
        console.log("data passed here", data);
        setTrendingProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={"homepage"}>
      <Events />
      <TrendingProducts />
      <Advertisement />
      <Statistics />
    </div>
  );
}
