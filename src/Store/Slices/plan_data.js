import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  plans: null,
};

const plandataslice = createSlice({
  name: "plandataslice",
  initialState,
  reducers: {
    setPlanDataState: (state, action) => {
      state.plans = action.payload;
    },
  },
});

const { setPlanDataState } = plandataslice.actions;

const setPlanData = () => (dispatch) => {
  axios
    .get("https://run.mocky.io/v3/179f2376-75b5-4a3e-b9d6-3d5ac08db2ba")
    .then((res) => {
      dispatch(setPlanDataState(res.data));
    })
    .catch((err) => console.error(err));
};

const getPlanDataState = (state) => state.plandataslice.plans;

export { setPlanData, getPlanDataState };

export default plandataslice.reducer;
