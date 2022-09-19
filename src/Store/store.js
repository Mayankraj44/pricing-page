import { configureStore } from "@reduxjs/toolkit";
import plandataslice from "./Slices/plan_data";

const store = configureStore({
  reducer: {
    plandataslice,
  },
});

export default store;
