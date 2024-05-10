import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../lib/types/screen";

const initialState: HomePageState = {
  trendingProducts: [],

};

const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setTrendingProducts: (state, action) => {
      state.trendingProducts = action.payload;
    },
   
  },
});

export const { setTrendingProducts} =
  homePageSlice.actions;

const HomePageReducer = homePageSlice.reducer;
export default HomePageReducer;
