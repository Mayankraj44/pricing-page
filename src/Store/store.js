import { configureStore } from "@reduxjs/toolkit";
import plandataslice from "./Slices/plan_data";
import modalslice from "./Slices/modal_slice";
import planslice from "./Slices/plan_slice";

const store = configureStore({
  reducer: {
    plandataslice,
    modalslice,
    planslice,
  },
});

export default store;
